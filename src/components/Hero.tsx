export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-28 pb-20">
      <div className="grid md:grid-cols-2 gap-16 items-center">

        <div>

          <p className="uppercase tracking-[0.25em] text-sm accent mb-6">
            Web Developer • IT Support
          </p>

          <h1 className="text-6xl md:text-7xl leading-none mb-6">
            Alvin Fandi
            <span className="block accent">
              Syahrizal
            </span>
          </h1>

          <p className="text-lg leading-8 max-w-xl text-neutral-600 dark:text-neutral-300 mb-10">
            Building digital products with precision,
            practicality, and modern craftsmanship.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-7 py-3 rounded-full btn-main"
            >
              View Work
            </a>

            <a
              href="/Alvin Fandi Syahrizal_CV.pdf"
              download
              className="px-7 py-3 rounded-full border"
            >
              Download CV
            </a>
          </div>

        </div>

        <div className="flex justify-center">

          <div className="soft-card p-3 rounded-[2rem] w-[340px] h-[430px]">

            <img
              src="/profile.jpg"
              className="w-full h-full object-cover rounded-[1.5rem]"
            />

          </div>

        </div>

      </div>
    </section>
  );
}