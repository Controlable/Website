import logo from 'assets/logo.png'

function Hero() {
  return (
    <section className="py-12">
      <div className="px-8 text-center">
        <div className="mb-8">
          <img
            src={logo}
            alt="Controlable"
            className="float subtle-glow mx-auto mb-6 size-24"
          />
          <h1 className="mb-2 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Industrial Edge Intelligence
          </h1>
          <p className="text-lg font-medium text-emerald-700">
            Realtime machine insight, without complexity or lock-in
          </p>
        </div>
        <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-slate-600">
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
        <div className="mb-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="#cta"
            className="fancy-button rounded-lg bg-emerald-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 hover:shadow-lg"
          >
            Get started
          </a>
          <a
            href="#features"
            className="fancy-button rounded-lg border-2 border-emerald-600 px-6 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
          >
            Learn more →
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
