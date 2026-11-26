"use client";

import { useRef, useCallback } from "react";

// Henter et signeret tidsstempel fra serveren første gang formularen bruges (fokus).
// Serveren afviser indsendelser uden gyldigt token eller sendt for hurtigt.
export default function useFormToken() {
  const promise = useRef(null);

  return useCallback(() => {
    if (!promise.current) {
      promise.current = fetch("/api/contact", { cache: "no-store" })
        .then((r) => (r.ok ? r.json() : null))
        .then((d) => {
          if (!d?.token) promise.current = null;
          return d?.token || "";
        })
        .catch(() => {
          promise.current = null;
          return "";
        });
    }
    return promise.current;
  }, []);
}
