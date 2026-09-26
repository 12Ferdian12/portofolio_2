function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center pt-28 sm:pt-32 min-h-screen bg-gradient-to-b from-slate-900 to-neutral-950 text-white px-4"
    >
      <div className="max-w-3xl text-center space-y-4">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Crafting Modern Web Experiences
        </h1>
        <p className="text-neutral-400 text-lg sm:text-xl max-w-xl mx-auto">
          Welcome to my portfolio. Explore my featured projects, core skill set,
          and let&apos;s build something great together.
        </p>
      </div>
    </section>
  );
}

export default Hero;
