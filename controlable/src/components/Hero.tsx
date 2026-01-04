import logo from 'assets/logo.png'

function Hero() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-8 text-center">
        <div className="mb-10">
          <img
            src={logo}
            alt="Controlable"
            className="float subtle-glow mx-auto mb-8 size-24 lg:size-32"
          />
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl lg:text-7xl dark:text-slate-100">
            Industrial Edge Intelligence
          </h1>
          <p className="text-xl font-medium text-emerald-700 md:text-2xl dark:text-emerald-400">
            Realtime machine insight, without complexity or lock-in
          </p>
        </div>
        <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl dark:text-slate-300">
          We are building a new generation of industrial intelligence: scalable,
          affordable and designed to run directly at the edge — close to
          machines, processes and operations.
          <br />
          <br />
          Our platform enables OEMs, manufacturers and asset owners to gain
          real-time insight into machine health, energy behaviour and
          operational performance — without complex IT projects or dependency on
          large cloud platforms.
        </p>
        <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#cta"
            className="fancy-button rounded-lg bg-emerald-600 px-8 py-3 text-base font-semibold text-white transition hover:bg-emerald-700 hover:shadow-lg"
          >
            Get started
          </a>
          <a
            href="#features"
            className="fancy-button rounded-lg border-2 border-emerald-600 px-8 py-3 text-base font-semibold text-emerald-700 transition hover:bg-emerald-50 dark:border-emerald-500 dark:text-emerald-400 dark:hover:bg-emerald-900/30"
          >
            Learn more →
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
