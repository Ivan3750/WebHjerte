"use client"
import { useContext, createContext } from "react";
import da from "../../../public/locales/da.json";
import en from "../../../public/locales/en.json";

const TranslateContext = createContext(null);

const translationsMap = {
  da,
  en,
};

export function TranslateProvider({ lang, children }) {
  const translations = translationsMap[lang] || da;
  return (
    <TranslateContext.Provider value={{ translations, lang }}>
      {children}
    </TranslateContext.Provider>
  );
}

export function useTranslate() {
  const context = useContext(TranslateContext);
  if (!context) {
    throw new Error("useTranslate must be used within a TranslateProvider");
  }
  return context;
}
