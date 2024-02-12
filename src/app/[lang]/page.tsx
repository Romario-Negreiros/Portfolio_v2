"use client";

import { useEffect, useContext } from "react";
import { useParams } from "next/navigation";

import LanguageContext from "@/shared/state/LanguageContext";

import defaultLanguage from "@public/languages/pt.json";

import type { ILanguage } from "@/shared/state/LanguageContext";
import type { Params } from "next/dist/shared/lib/router/utils/route-matcher";

interface IParams extends Params {
  lang: string;
}

export default function Home() {
  const { language, setLanguage } = useContext(LanguageContext);
  const params = useParams<IParams>();

  useEffect(() => {
    const lang = params.lang;

    if (lang === "pt") {
      setLanguage(defaultLanguage);
    }

    import(`@public/languages/${lang}.json`)
      .then((langTranslation) => {
        setLanguage(langTranslation as ILanguage);
      })
      .catch(() => {
        setLanguage(defaultLanguage);
        // Create audit mechanism to errors
      });
  }, [params.lang, setLanguage]);

  if (language == null) {
    return (
      <main className="page-container page-center">
        <div className="spinner"></div>
      </main>
    );
  }
  return (
    <main className="page-container">
      {language.pages.home}
      <div className="spinner"></div>
    </main>
  );
}
