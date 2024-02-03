import { Header } from "@/components";
import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Romario Negreiros",
  description: "Portfólio construído para compartilhar meus projetos e minha carreira como desenvolvedor.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
