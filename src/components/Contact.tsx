import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <Reveal delay={0.3}>
      <div className="soft-card rounded-[2rem] p-10 md:p-14 text-center">

        <p className="uppercase text-sm tracking-[0.3em] accent mb-4">
          Contact
        </p>

        <h2 className="text-5xl mb-6">
          Let’s Build Something Great
        </h2>

        <p className="max-w-2xl mx-auto text-neutral-600 dark:text-neutral-300 leading-8 mb-10">
          I’m open to opportunities in Web Development,
          Backend Development, IT Support, and other
          technology roles.
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <a
            href="mailto:alvinfandi43@gmail.com"
            className="px-7 py-3 rounded-full btn-main"
          >
            Email Me
          </a>

          <a
            href="https://github.com/AlvinFandiSyahrizal"
            target="_blank"
            className="px-7 py-3 rounded-full border"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/alvin-fandi-syahrizal-017a1b211/"
            target="_blank"
            className="px-7 py-3 rounded-full border"
          >
            LinkedIn
          </a>

        </div>

      </div>
      </Reveal>
    </section>
  );
}