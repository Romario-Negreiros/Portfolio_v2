import { LinkButton } from "..";

import type { ILanguage } from "@/shared/state/LanguageContext";

import styles from "./styles.module.css";

interface Props {
  language: ILanguage;
}

export default function Start({ language }: Props) {
  const { title, link } = language.pages.home.start;

  return (
    <section id="start" className={styles.start}>
        <div>
          <h1>Romario Negreiros</h1>
          <h2>{title}</h2>
        </div>
        <LinkButton text={link.txt} href={link.href} isDownload={true} />
      </section>
  );
}
