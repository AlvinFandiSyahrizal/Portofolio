import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import { Inter, Cormorant_Garamond } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata = {
  title: "Alvin Fandi Syahrizal | Web Developer Portfolio",
  description:
    "Portfolio of Alvin Fandi Syahrizal, Web Developer, IT Support, Backend Developer from Indonesia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${cormorant.variable}`}
      >
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

