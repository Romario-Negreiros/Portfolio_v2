"use client";

import SearchIcon from "@/components/svg/SearchIcon";
import ClearIcon from "@/components/svg/ClearIcon";

import styles from "../Header/styles.module.css";

function setBorderOnSearch() {
  document.querySelector("." + styles.search)?.classList.toggle(styles["search--focused"]);
}

export default function AppSearch() {
  function onSearchSubmit(event: React.FormEvent) {
    event.preventDefault();

    console.log("searchada");
  }

  return (
    <form className={styles.search} autoComplete="off" onSubmit={onSearchSubmit}>
      <input
        name="search"
        placeholder="Agilize..."
        onFocus={setBorderOnSearch}
        onBlur={setBorderOnSearch}
      />
      <div>
        <button className={styles.search_clear}>
          <ClearIcon color="#c0c0c0" />
        </button>
        <button className={styles.search_enter} type="submit">
          <SearchIcon color="#c0c0c0" />
        </button>
      </div>
    </form>
  );
}
