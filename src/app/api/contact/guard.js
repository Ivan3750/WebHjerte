import { createHmac, timingSafeEqual } from "node:crypto";

// Usynlige anti-bot-tjek til kontaktformularerne. Ingen CAPTCHA, så rigtige brugere mærker intet.

const MIN_FILL_MS = 2000; // hurtigere end det er det ikke et menneske (autofill + klik tager > 2 s)
const MAX_AGE_MS = 2 * 60 * 60 * 1000; // token udløber efter 2 timer

const secret = () =>
  process.env.FORM_SECRET || process.env.TELEGRAM_BOT_TOKEN || "webhjerte-dev-secret";

const sign = (t) => createHmac("sha256", secret()).update(String(t)).digest("hex");

// Udsteder et signeret tidsstempel. Hentes af klienten, når formularen bruges første gang.
export function issueToken() {
  const t = Date.now();
  return `${t}.${sign(t)}`;
}

// Returnerer null hvis OK, ellers en kort årsag.
export function checkToken(token) {
  if (typeof token !== "string") return "token_missing";
  const [t, sig] = token.split(".");
  if (!t || !sig || !/^\d+$/.test(t)) return "token_malformed";

  const expected = Buffer.from(sign(t));
  const given = Buffer.from(sig);
  if (expected.length !== given.length || !timingSafeEqual(expected, given)) return "token_bad_signature";

  const age = Date.now() - Number(t);
  if (age < MIN_FILL_MS) return "too_fast";
  if (age > MAX_AGE_MS) return "token_expired";
  return null;
}

const OWN_HOSTS = new Set(["webhjerte.dk", "www.webhjerte.dk", "localhost", "127.0.0.1"]);

// Kun kald fra vores eget site. Browsere sender altid Origin (eller Referer) på same-origin POST.
export function checkOrigin(req) {
  const raw = req.headers.get("origin") || req.headers.get("referer");
  if (!raw) return "origin_missing";
  let host;
  try {
    host = new URL(raw).hostname;
  } catch {
    return "origin_malformed";
  }
  const own = (req.headers.get("x-forwarded-host") || req.headers.get("host") || "")
    .split(":")[0]
    .toLowerCase();
  if (OWN_HOSTS.has(host) || host === own || host.endsWith(".vercel.app")) return null;
  return "origin_foreign";
}

// Engangsadresser og tekniske afsender-adresser (Mailgun m.fl.) bruges af scripts, ikke af kunder.
const DISPOSABLE = new Set([
  "mailinator.com", "guerrillamail.com", "guerrillamail.net", "sharklasers.com", "10minutemail.com",
  "tempmail.com", "temp-mail.org", "yopmail.com", "trashmail.com", "getnada.com", "throwawaymail.com",
  "maildrop.cc", "dispostable.com", "fakeinbox.com", "mailnesia.com", "mintemail.com", "mohmal.com",
]);
const MAILER_LABELS = new Set([
  "mg", "mailgun", "bounce", "bounces", "smtp", "em", "send", "sendgrid", "mta", "mailer", "mailers",
  "e", "email", "emails", "notify", "notifications", "noreply", "no-reply",
]);

export function checkEmail(email) {
  if (!email) return null;
  const [local, domain = ""] = email.toLowerCase().split("@");
  const labels = domain.split(".");
  if (DISPOSABLE.has(domain)) return "disposable_email";
  if (labels.length >= 3 && MAILER_LABELS.has(labels[0])) return "mailer_subdomain";
  if (/^(no-?reply|donotreply|do-not-reply|mailer-daemon|postmaster)$/.test(local)) return "system_address";
  return null;
}

const URL_RE = /(https?:\/\/|www\.)\S+/gi;

// Indholdstjek: links i navn, for mange links i beskeden, rene gentagelser.
export function checkContent({ name, message }) {
  if (name && (/https?:|www\.|@/i.test(name) || /\d{5,}/.test(name))) return "suspicious_name";
  if (message) {
    if ((message.match(URL_RE) || []).length > 2) return "too_many_links";
    if (/(.)\1{14,}/.test(message)) return "repeated_chars";
  }
  return null;
}

// Samme afsender + samme tekst inden for 10 min. regnes som dobbelt-indsendelse.
const seen = new Map();
const DUP_WINDOW_MS = 10 * 60 * 1000;

export function isDuplicate(email, message) {
  const key = `${(email || "").toLowerCase()}|${message}`;
  const now = Date.now();
  const last = seen.get(key);
  seen.set(key, now);
  if (seen.size > 2000) {
    for (const [k, t] of seen) if (now - t > DUP_WINDOW_MS) seen.delete(k);
  }
  return Boolean(last && now - last < DUP_WINDOW_MS);
}
