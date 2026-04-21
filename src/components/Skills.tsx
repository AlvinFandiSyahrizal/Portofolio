import Reveal from "./Reveal";

const skills = [
  "Laravel",
  "PHP",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "MySQL",
  "SQL Server",
  "Flutter",
  "Git",
  "Power BI",
  "Figma",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-24"
    >
        <Reveal delay={0.1}>
            <p className="uppercase text-sm tracking-[0.3em] accent mb-4">
                Expertise
            </p>

            <h2 className="text-5xl mb-10">
                Skills & Tools
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((item) => (
                <div
                    key={item}
                    className="soft-card rounded-2xl px-5 py-4 text-center hover:-translate-y-1 transition"
                >
                    {item}
                </div>
                ))}
            </div>
        </Reveal>
    </section>
  );
}