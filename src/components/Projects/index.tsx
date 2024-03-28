import { useState, useEffect } from "react";

import { LinkButton } from "..";
import Image from "next/image";

import styles from "./styles.module.css";

import type { ILanguage } from "@/shared/state/LanguageContext";
import type { Dispatch, SetStateAction } from "react";

interface Props {
  language: ILanguage;
}

function moveCarouselForward(setCurrentProject: Dispatch<SetStateAction<number>>, slidesLength: number) {
  const slide = document.querySelector<HTMLElement>("." + styles.slide);

  slide!.style.transition = "all .1s linear";

  setTimeout(function () {
    slide!.style.transform = "translateX(1000px)";
  }, 100);

  setTimeout(function () {
    slide!.style.visibility = "hidden";
    setCurrentProject((c) => {
      if (c === slidesLength) {
        return 0;
      } else {
        return c + 1;
      }
    });
  }, 200);

  setTimeout(function () {
    slide!.style.transform = "translateX(-1000px)";
  }, 300);

  setTimeout(function () {
    slide!.style.visibility = "visible";
  }, 400);

  setTimeout(function () {
    slide!.style.transform = "translateX(0px)";
    slide!.style.left = "initial";
  }, 500);

  setTimeout(function () {
    slide!.style.transition = "unset";
  }, 600);
}

function moveCarouselBackward(setCurrentProject: Dispatch<SetStateAction<number>>, slidesLength: number) {
  const slide = document.querySelector<HTMLElement>("." + styles.slide);

  slide!.style.transition = "all .1s linear";

  setTimeout(function () {
    slide!.style.transform = "translateX(-1000px)";
  }, 100);

  setTimeout(function () {
    slide!.style.visibility = "hidden";
    setCurrentProject((c) => {
      if (c === 0) {
        return slidesLength;
      } else {
        return c - 1;
      }
    });
  }, 200);

  setTimeout(function () {
    slide!.style.transform = "translateX(1000px)";
  }, 300);

  setTimeout(function () {
    slide!.style.visibility = "visible";
  }, 400);

  setTimeout(function () {
    slide!.style.transform = "translateX(0px)";
    slide!.style.left = "initial";
  }, 500);

  setTimeout(function () {
    slide!.style.transition = "unset";
  }, 600);
}

export default function Projects({ language }: Props) {
  const [currentProject, setCurrentProject] = useState(0);
  const { title, projects } = language.pages.home.projects;

  useEffect(() => {
    const slide = document.querySelector<HTMLDivElement>("." + styles.slide)!;

    slide.addEventListener("touchstart", (ev: TouchEvent) => {
      let initialCursorPosX = ev.touches.item(0)!.clientX;

      let newCursorPosX;

      window.document.ontouchend = (ev: TouchEvent) => {
        const slide = document.querySelector<HTMLDivElement>("." + styles.slide)!;

        if (ev.touches.item(0)) {
          newCursorPosX = initialCursorPosX - ev.touches.item(0)!.clientX;

          const slideOffset = slide.offsetLeft - newCursorPosX;

          if (Math.abs(slideOffset) <= slide.clientWidth / 2) {
            slide.style.left = "initial";
          }
        } else {
          slide.style.left = "initial";
        }

        window.document.ontouchend = null;

        window.document.ontouchmove = null;
      };

      window.document.ontouchmove = (ev: TouchEvent) => {
        const slide = document.querySelector<HTMLDivElement>("." + styles.slide)!;

        newCursorPosX = initialCursorPosX - ev.touches.item(0)!.clientX;

        const slideOffset = slide.offsetLeft - newCursorPosX;

        if (Math.abs(slideOffset) > slide.clientWidth / 2) {
          if (slideOffset > 0) {
            moveCarouselForward(setCurrentProject, projects.length - 1);

            window.document.ontouchend = null;

            window.document.ontouchmove = null;
          } else {
            moveCarouselBackward(setCurrentProject, projects.length - 1);

            window.document.ontouchend = null;

            window.document.ontouchmove = null;
          }
        }

        slide.style.left = `${slide.offsetLeft - newCursorPosX}px`;

        initialCursorPosX = ev.touches.item(0)!.clientX;
      };
    });
  });

  return (
    <section id="projects" className={styles.projects}>
      <h2>{title}</h2>
      <div className={styles.carousel}>
        <div className={styles.slide}>
          <figure>
            <div>
              <Image src={projects[currentProject].img} alt={projects[currentProject].title} fill/>
            </div>
            <figcaption>{projects[currentProject].title}</figcaption>
          </figure>
          <article>
            <p>{projects[currentProject].description}</p>
          </article>
          <ul>
            {projects[currentProject].stack.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
          <LinkButton href={projects[currentProject].visit.href} text={projects[currentProject].visit.text} />
        </div>
      </div>
      <ul className={styles.card_list}>
        {projects.map((project, index) => (
          <li key={project.title} className={styles.card}>
            <figure>
              <div>
                <Image src={projects[index].img} alt={projects[index].title} fill />
              </div>
              <figcaption>{projects[index].title}</figcaption>
            </figure>
            <article>
              <p>{projects[index].description}</p>
              <ul>
                {projects[index].stack.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
              <LinkButton href={projects[index].visit.href} text={projects[index].visit.text} />
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
