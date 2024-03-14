"use client";

import { useState, useEffect, useContext } from "react";

import LanguageContext from "@/shared/state/LanguageContext";

import {
  LanguageIcon,
  StartIcon,
  AboutMeIcon,
  ProjectsIcon,
  ExperienceIcon,
  ContactIcon,
  BlogIcon,
  SearchIcon,
  ClearIcon,
} from "..";
import Link from "next/link";

import styles from "./styles.module.css";

function setBorderOnSearch() {
  document.querySelector("." + styles.search)?.classList.toggle(styles["search--focused"]);
}

function handleLanguageSelector(ev: React.MouseEvent<HTMLElement> | MouseEvent) {
  ev.stopPropagation();

  const languageSelector = document.querySelector("." + styles.language_list);

  if (languageSelector) {
    const className = styles["language_list--opened"];

    languageSelector.classList.toggle(className);

    if (languageSelector.classList.contains(className)) {
      window.addEventListener("click", handleWindowClickToRemoveLanguageSelectorFocus);
    } else {
      window.removeEventListener("click", handleWindowClickToRemoveLanguageSelectorFocus);
    }
  }
}

function handleWindowClickToRemoveLanguageSelectorFocus(ev: MouseEvent) {
  handleLanguageSelector(ev);
}

function renderIcon(index: number) {
  switch (index) {
    case 0:
      return <StartIcon width={19} />;
    case 1:
      return <AboutMeIcon width={16} />;
    case 2:
      return <ProjectsIcon width={18} />;
    case 3:
      return <ExperienceIcon width={18} />;
    case 4:
      return <ContactIcon width={18} />;
    case 5:
      return <BlogIcon width={18} />;
  }
}

export default function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const { nav, search, langSwitch } = useContext(LanguageContext).language!.components.header;

  function handleMenuOpened() {
    document.querySelector("body")?.classList.toggle("body--noOverflow");

    setIsMenuOpened(!isMenuOpened);
  }

  function onSearchSubmit(event: React.FormEvent) {
    event.preventDefault();

    console.log("searchada");
  }

  useEffect(() => {
    window.addEventListener("resize", (event: WindowEventMap["resize"]) => {
      if (window.innerWidth > 769) {
        if (document.querySelector("." + styles["navigation--visible"])) {
          document.querySelector("." + styles["navigation--visible"])!.classList.remove(styles["navigation--visible"]);
        }

        if (document.querySelector(".body--noOverflow")) {
          document.querySelector("body")!.classList.remove("body--noOverflow");
        }

        if (document.querySelector("." + styles["menu--opened"])) {
          document.querySelector("." + styles["menu--opened"])!.classList.remove(styles["menu--opened"]);
        }

        if (isMenuOpened) {
          setIsMenuOpened(false);
        }
      }
    });
  });

  return (
    <header className={styles.header}>
      <button className={`${styles.menu} ${isMenuOpened && styles["menu--opened"]}`} onClick={handleMenuOpened}>
        <div className={styles.bar_one}></div>
        <div className={styles.bar_two}></div>
        <div className={styles.bar_three}></div>
      </button>
      <div className={styles.language_switcher}>
        <button type="button" onClick={handleLanguageSelector}>
          <LanguageIcon height={25} />
        </button>
        <ul className={styles.language_list}>
          {langSwitch.map((item) => (
            <li key={item.name}>
              <Link href={"/" + item.attr} onClick={handleLanguageSelector}>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <form className={styles.search} autoComplete="off" onSubmit={onSearchSubmit}>
        <input name="search" placeholder={search.placeholder} onFocus={setBorderOnSearch} onBlur={setBorderOnSearch} />
        <div>
          <button className={styles.search_clear}>
            <ClearIcon />
          </button>
          <button className={styles.search_enter} type="submit">
            <SearchIcon />
          </button>
        </div>
      </form>
      <nav className={`${styles.navigation} ${isMenuOpened && styles["navigation--visible"]}`}>
        <ul>
          {nav.map((item, index) => (
            <li key={item} className={styles.navigation_item}>
              <Link href="">
                <span>{item}</span>
                {renderIcon(index)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
