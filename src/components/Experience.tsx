"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Experience() {
  const data = [
    {
      year: "2023 - 2024",
      title: "PT. TD Automotive Compressor Indonesia",
      role: "Assembling & Digitalization Intern",
      desc: [
        "Built web-based production visualization dashboard",
        "Developed CRUD modules & schedule systems",
        "Integrated machine data with OPC UA & KepServerEX",
        "Created Power BI dashboards for operations",
      ],
    },
  
  ];

  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <Reveal delay={0.2}>
      <p className="uppercase text-sm tracking-[0.3em] accent mb-4">
        Journey
      </p>

      <h2 className="text-5xl mb-14">
        Experience
      </h2>

      <div className="space-y-8">
        {data.map((item, i) => (
          <motion.div
            key={i}
            className="soft-card rounded-3xl p-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <p className="accent text-sm mb-2">
              {item.year}
            </p>

            <h3 className="text-2xl mb-1">
              {item.title}
            </h3>

            <p className="mb-4 text-neutral-500">
              {item.role}
            </p>

            <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
              {item.desc.map((d) => (
                <li key={d}>• {d}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      </Reveal>
    </section>
  );
}