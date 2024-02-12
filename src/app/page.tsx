"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Redirect() {
  const { push } = useRouter();

  useEffect(() => {
    const lang = navigator.language.substring(0, 2);

    push("/" + lang);
  }, [push]);

  return (
    <main className="page-container page-center">
      <div className="spinner"></div>
    </main>
  );
}
