"use client";

import { createContext, useState, useEffect } from "react";

export const LangContext = createContext({
  lang: "en",
  setLang: (l: string) => {}
});

export default function LanguageProvider({ children }: any) {
  const [lang, setLang] = useState("en");

  // Auto-detect language
  useEffect(() => {
    if (typeof window !== "undefined") {
      const browserLang = navigator.language.slice(0, 2);
      if (["en", "hr", "de", "ar"].includes(browserLang)) {
        setLang(browserLang);
      }
    }
  }, []);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}
