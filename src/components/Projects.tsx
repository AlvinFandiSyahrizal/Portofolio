"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  title: string;
  desc: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
  showGithub: boolean;
  showDemo: boolean;
  features: string[];
};

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelected(null);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKey);
    };
  }, [selected]);

  const items: Project[] = [
    {
      title: "TAKU E-Commerce",
      desc: "Modern e-commerce platform with auth, cart, checkout and admin panel.",
      image: "/projects/taku.png",
      tech: ["Laravel", "MySQL", "Bootstrap"],
      github: "https://github.com/AlvinFandiSyahrizal/Taku",
      demo: "",
      showGithub: true,
      showDemo: false,
      features: [
        "Authentication system",
        "Shopping cart",
        "Admin dashboard",
        "Responsive UI",
      ],
    },
    {
      title: "WinWin Mobile App",
      desc: "Android-based skill sharing platform.",
      image: "/projects/winwin.jpg",
      tech: ["Flutter", "Firebase"],
      github: "https://github.com/chronicle03/winwin_frontend",
      demo: "http://bit.ly/3SS9yxT",
      showGithub: true,
      showDemo: true,
      features: [
        "Login & Register",
        "Skill matching",
        "Realtime database",
      ],
    },
    {
      title: "Production Dashboard",
      desc: "Real-time monitoring system for industrial production line.",
      image: "",
      tech: ["Laravel", "SQL Server"],
      github: "",
      demo: "",
      showGithub: false,
      showDemo: false,
      features: [
        "Realtime monitoring",
        "Production schedule",
        "Machine integration",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <Reveal>
        <p className="uppercase text-sm tracking-[0.3em] accent mb-4">
          Portfolio
        </p>

        <h2 className="text-5xl mb-14">
          Selected Work
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              onClick={() => setSelected(item)}
              className="soft-card rounded-3xl overflow-hidden group cursor-pointer transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-56 w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4 leading-7">
                  {item.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4"
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-[#161616] max-w-2xl w-full rounded-3xl overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 40, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setSelected(null)}
                  className="w-10 h-10 rounded-full border hover:rotate-90 transition"
                >
                  ✕
                </button>
              </div>

              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-72 object-cover"
              />

              <div className="p-8">
                <h3 className="text-3xl mb-4">
                  {selected.title}
                </h3>

                <p className="mb-5 text-neutral-600 dark:text-neutral-300 leading-7">
                  {selected.desc}
                </p>

                <div className="mb-5">
                  <p className="mb-2 font-medium">
                    Features
                  </p>

                  <ul className="space-y-2 text-sm">
                    {selected.features.map((f) => (
                      <li key={f}>• {f}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selected.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {selected.showDemo && (
                    <a
                      href={selected.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-full btn-main"
                    >
                      Live Demo
                    </a>
                  )}

                  {selected.showGithub && (
                    <a
                      href={selected.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-full border"
                    >
                      GitHub
                    </a>
                  )}

                  <button
                    onClick={() => setSelected(null)}
                    className="px-5 py-3 rounded-full border"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}