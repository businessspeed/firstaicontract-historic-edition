"use client";

import { createContext, useState } from "react";

export const LangContext = createContext({
  lang: "en",
  setLang: (l: string) => {}
});

export default function LanguageProvider({ children }: any) {
  const [lang, setLang] = useState("en");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}
