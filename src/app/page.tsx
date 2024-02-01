"use client";

import Link from "next/link";

import { useState } from "react";

import styles from "./page.module.css";
import StartIcon from "@/components/svg/StartIcon";
import AboutMeIcon from "@/components/svg/AboutMeIcon";
import ProjectsIcon from "@/components/svg/ProjectsIcon";
import BlogIcon from "@/components/svg/BlogIcon";
import ContactIcon from "@/components/svg/ContactIcon";
import LogoIcon from "@/components/svg/LogoIcon";
import SearchIcon from "@/components/svg/SearchIcon";
import ClearIcon from "@/components/svg/ClearIcon";

function setPurpleBorder() {
  document.querySelector("." + styles.search)?.classList.toggle(styles["search--focused"]);
}

export default function Home() {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  function handleMenuOpened() {
    document.querySelector("body")?.classList.toggle("body--noOverflow");

    setIsMenuOpened(!isMenuOpened);
  }

  function onSearchSubmit(event: React.FormEvent) {
    event.preventDefault();

    console.log("searchada");
  }

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={`${styles.menu} ${isMenuOpened && styles["menu--opened"]}`} onClick={handleMenuOpened}>
          <div className={styles.barOne}></div>
          <div className={styles.barTwo}></div>
          <div className={styles.barThree}></div>
        </div>
        <div className={styles.logo}>
          <LogoIcon color="#c0c0c0" width={20} />
        </div>
        <form className={styles.search} onSubmit={onSearchSubmit}>
          <input name="search" placeholder="Agilize..." onFocus={setPurpleBorder} onBlur={setPurpleBorder} />
          <div>
            <button className={styles.search_clear}>
              <ClearIcon color="#c0c0c0" />
            </button>
            <button className={styles.search_enter} type="submit">
              <SearchIcon color="#c0c0c0" />
            </button>
          </div>
        </form>
        <nav className={`${styles.navigation} ${isMenuOpened && styles["navigation--visible"]}`}>
          <ul>
            <li className={styles.navigation_item}>
              <Link href="">
                <span>Início</span>
                <StartIcon color="#c0c0c0" width={19} />
              </Link>
            </li>
            <li className={styles.navigation_item}>
              <Link href="">
                <span>Sobre mim</span>
                <AboutMeIcon color="#c0c0c0" width={16} />
              </Link>
            </li>
            <li className={styles.navigation_item}>
              <Link href="">
                <span>Projetos</span>
                <ProjectsIcon color="#c0c0c0" width={18} />
              </Link>
            </li>
            <li className={styles.navigation_item}>
              <Link href="">
                <span>Blog</span>
                <BlogIcon color="#c0c0c0" width={18} />
              </Link>
            </li>
            <li className={styles.navigation_item}>
              <Link href="">
                <span>Contato</span>
                <ContactIcon color="#c0c0c0" width={18} />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </main>
  );
}
