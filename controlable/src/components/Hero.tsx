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
            Controlable
          </h1>
          <p className="text-lg font-medium text-emerald-700">
            Intelligent machine monitoring & power management
          </p>
        </div>
        <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-slate-600">
          Monitor your machines in real-time, predict maintenance before
          failures occur, and optimize power consumption. Complete visibility
          and control.
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
        <p className="text-xs text-slate-500">
          Currently in beta. Early access available.
        </p>
      </div>
    </section>
  )
}

export default Hero
