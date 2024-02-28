"use client";

import { useEffect, useContext } from "react";
import { useParams } from "next/navigation";

import LanguageContext from "@/shared/state/LanguageContext";

import defaultLanguage from "@public/languages/pt-BR.json";

import Link from "next/link";
import { Animation } from "@/components";

import FloatingLaptop from "@public/animations/floating-laptop.json";

import type { ILanguage } from "@/shared/state/LanguageContext";
import type { Params } from "next/dist/shared/lib/router/utils/route-matcher";

import styles from "./styles.module.css";

interface IParams extends Params {
  lang: string;
}

export default function Home() {
  const { language, setLanguage } = useContext(LanguageContext);
  const params = useParams<IParams>();

  useEffect(() => {
    const lang = params.lang;

    if (lang === "pt-BR") {
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
      <section id="start" className={styles.start}>
        <div>
          <h1>Romario Negreiros</h1>
          <h2>{language.pages.home.start.title}</h2>
        </div>
        <Link download href={language.pages.home.start.link.href}>
          {language.pages.home.start.link.txt}
        </Link>
      </section>
      <section id="about" className={styles.about}>
        <article>
          <h2>{language.pages.home.about.title}</h2>
          <div>
            {language.pages.home.about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <Link download href={language.pages.home.about.link.href}>
            {language.pages.home.about.link.txt}
          </Link>
        </article>
        <div>
          <Animation animationData={FloatingLaptop} width={400} height={400} />
        </div>
      </section>
    </main>
  );
}
