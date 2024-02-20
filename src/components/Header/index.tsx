"use client";

import { useState, useEffect, useContext } from "react";

import LanguageContext from "@/shared/state/LanguageContext";

import {
  StartIcon,
  AboutMeIcon,
  ProjectsIcon,
  BlogIcon,
  ContactIcon,
  LogoIcon,
  SearchIcon,
  ClearIcon,
  LanguageIcon,
} from "..";
import Link from "next/link";

import styles from "./styles.module.css";

function setBorderOnSearch() {
  document.querySelector("." + styles.search)?.classList.toggle(styles["search--focused"]);
}

function openLanguageSelection() {
  document.querySelector("." + styles.language_list)?.classList.toggle(styles["language_list--opened"]);
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
      return <ContactIcon width={18} />;
    case 4:
      return <BlogIcon width={18} />;
  }
}

export default function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const { language } = useContext(LanguageContext);

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
      <div
        className={`${styles.menu} ${isMenuOpened && styles["menu--opened"]}`}
        onClick={handleMenuOpened}
        onKeyDown={(ev) => {
          if (ev.key === "Enter") {
            handleMenuOpened();
          }
        }}
        tabIndex={0}
      >
        <div className={styles.bar_one}></div>
        <div className={styles.bar_two}></div>
        <div className={styles.bar_three}></div>
      </div>
      <div
        className={styles.language_switcher}
        onKeyDown={(ev) => {
          if (ev.key === "Enter") {
            openLanguageSelection();
          }
        }}
        tabIndex={0}
      >
        <button type="button" onClick={openLanguageSelection}>
          <LanguageIcon height={25} />
        </button>
        <ul className={styles.language_list}>
          {language?.components.header.langSwitch.map((item) => (
            <li key={item.name}>
              <Link href={"/" + item.attr} onClick={openLanguageSelection}>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.logo}>
        <LogoIcon width={20} />
      </div>
      <form className={styles.search} autoComplete="off" onSubmit={onSearchSubmit}>
        <input name="search" onFocus={setBorderOnSearch} onBlur={setBorderOnSearch} />
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
          {language?.components.header.nav.map((item, index) => (
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
