"use client";

import { useState } from "react";

import LanguageContext from "@/shared/state/LanguageContext";

import { Header } from "@/components";

import "./globals.css";

import type { ILanguage } from "@/shared/state/LanguageContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<ILanguage | null>(null);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <html lang={language?.lang}>
        <head>
          <title>Romario Negreiros</title>
        </head>
        <body>
          <Header />
          {children}
        </body>
      </html>
    </LanguageContext.Provider>
  );
}
