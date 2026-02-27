"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, Lang, en } from "./translations";

// On utilise la structure anglaise comme référence de type
// (c'est la façon la plus propre et qui garde l'autocomplétion)
export type Translations = typeof en;

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;           // ← type fixe = structure anglaise
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Valeur par défaut (pour éviter l'undefined dans certains cas théoriques)
const defaultValue: LanguageContextType = {
  lang: "en",
  setLang: () => {},
  t: translations["en"],
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved && (saved === "en" || saved === "fr")) {
      setLangState(saved);
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  // On passe toujours un objet qui respecte Translations
  const value: LanguageContextType = {
    lang,
    setLang,
    t: translations[lang],     // TS sait que c'est compatible grâce à : Translations sur fr
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLang must be used inside LanguageProvider");
  }
  return context;
}ovider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);g, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
