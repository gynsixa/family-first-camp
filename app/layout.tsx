import type { Metadata } from "next";
import { Cormorant_Garamond, Cormorant_Infant, Forum, Marck_Script, Caveat } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Миша и Настя. 24 июля",
  description: "Wedding invitation",
};

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const cormorantInfant = Cormorant_Infant({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-names",
});

const forum = Forum({
  subsets: ["cyrillic", "latin"],
  weight: "400",
  variable: "--font-heading",
});

const marckScript = Marck_Script({
  subsets: ["cyrillic", "latin"],
  weight: "400",
  variable: "--font-script",
});

const caveat = Caveat({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hand",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${cormorantGaramond.variable} ${cormorantInfant.variable} ${forum.variable} ${marckScript.variable} ${caveat.variable}`}>
        {children}
      </body>
    </html>
  );
}