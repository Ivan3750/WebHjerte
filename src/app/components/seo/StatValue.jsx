"use client";

import CountUp from "../home/fx/CountUp";

/** Tæller op, når værdien er et enkelt tal (fx "48 timer", "0 kr", "10 år"); ellers vises teksten uændret. */
export default function StatValue({ value }) {
  const m = /^([^\d]*)(\d+)([^\d–-]*)$/.exec(String(value).trim());
  if (!m) return <>{value}</>;
  return <CountUp to={Number(m[2])} prefix={m[1]} suffix={m[3]} />;
}
