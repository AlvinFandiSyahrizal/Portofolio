"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

type Props = {
  language: string;
};

export default function About({ language }: Props) {
  return (
    <motion.section
      id="about"
      className="max-w-6xl mx-auto px-6 py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
        <Reveal>
          <p className="uppercase text-sm tracking-[0.3em] accent mb-4">
            Profile
          </p>

          <h2 className="text-5xl mb-8">
            {language === "en"
              ? "About Me"
              : "Tentang Saya"}
          </h2>

          <p className="text-lg leading-9 max-w-3xl text-neutral-700 dark:text-neutral-300">
            {language === "en"
              ? "I am an Informatics graduate with experience in web development, backend systems, IT support, and industrial digitalization. I enjoy building useful products, solving real problems, and continuously improving through technology."
              : "Saya lulusan Informatika dengan pengalaman di web development, backend system, IT support, dan digitalisasi industri. Saya senang membangun produk yang bermanfaat, menyelesaikan masalah nyata, dan terus berkembang melalui teknologi."}
          </p>
        </Reveal>
    </motion.section>
  );
}