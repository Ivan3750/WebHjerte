/**
 * Fælles pil-ikon i WebHjertes egen stil (tynd streg, afrundede ender) – erstatter tekst-pilen "→",
 * som ser ens ud overalt og virker anonym.
 *
 * <ArrowIcon />                – bare ikonet (arver tekstfarve)
 * <ArrowBadge />               – rund knap med ikon, der fyldes blå ved hover på en forælder med `group`
 */
export function ArrowIcon({ className = "w-4 h-4", direction = "right" }) {
  const rotate = { right: "", up: "-rotate-90", down: "rotate-90", upright: "-rotate-45" }[direction] || "";
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className={`${className} ${rotate}`}>
      <path d="M2.5 8h10.2M8.6 3.9L12.7 8l-4.1 4.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowBadge({ size = "md", tone = "light", className = "" }) {
  const dims = size === "lg" ? "w-12 h-12" : size === "sm" ? "w-8 h-8" : "w-10 h-10";
  const toneCls =
    tone === "dark"
      ? "border-white/15 text-white/70 group-hover:bg-[#00a8e8] group-hover:border-[#00a8e8] group-hover:text-[#10181a]"
      : "border-[#dcdada] text-[#6a6a6a] bg-white group-hover:bg-[#00a8e8] group-hover:border-[#00a8e8] group-hover:text-white";
  return (
    <span
      aria-hidden
      className={`relative inline-flex items-center justify-center shrink-0 rounded-full border overflow-hidden transition-colors duration-300 ${dims} ${toneCls} ${className}`}
    >
      {/* Pilen glider ud og en ny glider ind – samme bevægelse som knapperne på forsiden */}
      <ArrowIcon className="w-[45%] h-[45%] absolute transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[220%]" />
      <ArrowIcon className="w-[45%] h-[45%] absolute -translate-x-[220%] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0" />
    </span>
  );
}

export default ArrowIcon;
