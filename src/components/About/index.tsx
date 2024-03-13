import { LinkButton } from "..";

import type { ILanguage } from "@/shared/state/LanguageContext";

import styles from "./styles.module.css";

interface Props {
  language: ILanguage
}

export default function About({ language }: Props) {
  return (
    <section id="about" className={styles.about}>
        <article>
          <h2>{language.pages.home.about.title}</h2>
          <div>
            {language.pages.home.about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <LinkButton text={language.pages.home.about.link.txt} href={language.pages.home.about.link.href} />
        </article>
    </section>
  )
}
