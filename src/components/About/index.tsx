import { LinkButton } from "..";

import type { ILanguage } from "@/shared/state/LanguageContext";

import styles from "./styles.module.css";

interface Props {
  language: ILanguage
}

export default function About({ language }: Props) {
  const { title, paragraphs, link } = language.pages.home.about;

  return (
    <section id="about" className={styles.about}>
        <article>
          <h2>{title}</h2>
          <div>
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <LinkButton text={link.txt} href={link.href} />
        </article>
    </section>
  )
}
