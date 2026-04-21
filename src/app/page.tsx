"use client";

import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import WhyMe from "../components/WhyMe";
import Footer from "../components/Footer";

export default function Home() {
  const [language, setLanguage] = useState("en");

  return (
    <>
      <Navbar
        language={language}
        setLanguage={setLanguage}
      />

      <Hero />
      <About language={language} />
      <Skills />
      <Projects />
      <Experience />
      <WhyMe />
      <Contact />
      <Footer />
    </>
  );
}