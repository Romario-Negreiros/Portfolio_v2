"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const supportedLanguages = ["pt-BR", "en"];

export default function Redirect() {
  const { push } = useRouter();

  useEffect(() => {
    const lang = navigator.language;

    if (supportedLanguages.some((supLang) => supLang === lang)) {
      push("/" + lang);
    } else {
      push("/pt-BR");
    }
  }, [push]);

  return (
    <main className="page-container page-center">
      <div className="spinner"></div>
    </main>
  );
}
