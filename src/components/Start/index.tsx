import Link from "next/link";

import type { ILanguage } from "@/shared/state/LanguageContext";

import styles from "./styles.module.css";

interface Props {
  language: ILanguage;
}

export default function Start({ language }: Props) {
  return (
    <section id="start" className={styles.start}>
        <div>
          <h1>Romario Negreiros</h1>
          <h2>{language.pages.home.start.title}</h2>
        </div>
        <Link download href={language.pages.home.start.link.href}>
          {language.pages.home.start.link.txt}
        </Link>
      </section>
  );
}
