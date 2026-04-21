import Reveal from "./Reveal";

export default function WhyMe() {
  const items = [
    "Real project experience in industrial environment",
    "Strong problem-solving and practical mindset",
    "Fast learner with adaptability to new tools",
    "Able to work independently and in teams",
    "Focused on clean, useful, and scalable solutions",
    "Strong motivation to grow professionally",
  ];

  return (
    <section id="whyme" className="max-w-6xl mx-auto px-6 py-24">
<Reveal delay={0.25}>
      <p className="uppercase text-sm tracking-[0.3em] accent mb-4">
        Strengths
      </p>

      <h2 className="text-5xl mb-12">
        Why Work With Me
      </h2>

      <div className="grid md:grid-cols-2 gap-5">
        {items.map((item) => (
          <div
            key={item}
            className="soft-card rounded-2xl p-6"
          >
            {item}
          </div>
        ))}
      </div>
        </Reveal>
    </section>
  );
}