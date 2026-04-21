"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { Menu, X } from "lucide-react";

type Props = {
  language: string;
  setLanguage: (lang: string) => void;
};

export default function Navbar({
  language,
  setLanguage,
}: Props) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  const links = [
    "about",
    "skills",
    "projects",
    "experience",
    "whyme",
    "contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      let current = "about";

      links.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const top = section.offsetTop - 120;

          if (window.scrollY >= top) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur border-b border-neutral-300/40 dark:border-neutral-700/40 bg-[#f6f2eb]/80 dark:bg-[#111111]/80">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-semibold">
          Alvin.
        </h1>

        <div className="hidden md:flex gap-7 items-center text-sm uppercase tracking-widest">

          {links.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={
                active === item
                  ? "accent"
                  : ""
              }
            >
              {item}
            </a>
          ))}

          <LanguageToggle
            language={language}
            setLanguage={setLanguage}
          />

          <ThemeToggle />
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}