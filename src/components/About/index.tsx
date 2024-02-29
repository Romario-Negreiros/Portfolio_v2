import { Animation } from "..";
import Link from "next/link";

import FloatingLaptop from "@public/animations/floating-laptop.json";

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
          <Link download href={language.pages.home.about.link.href}>
            {language.pages.home.about.link.txt}
          </Link>
        </article>
        <div>
          <Animation animationData={FloatingLaptop} width={400} height={400} />
        </div>
      </section>
  )
}
