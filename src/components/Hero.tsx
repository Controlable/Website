import logo from 'assets/logo.png'
import realTimeInsightsImage from '../assets/frontpage/lightMode/Real time Insigts image 5246c0ab-4652-4dd8-9861-57777369eed1.png'
import content from '../data/content.json'

function Hero() {
  const { hero } = content
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-8 text-center">
        <div className="mb-10">
          <img
            src={logo}
            alt="Controlable"
            className="animate-float animate-subtle-glow mx-auto mb-8 size-24 lg:size-32"
          />
          <h1 className="animate-fade-in-up mb-4 text-3xl font-bold tracking-tight text-accent md:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="animate-fade-in-up-delay-1 text-2xl font-medium text-slate-900 md:text-3xl dark:text-white">
            {hero.subtitle}
          </p>
        </div>
        <div className="animate-fade-in-up-delay-1 mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl dark:text-slate-300">
          {hero.description.map((paragraph, index) => (
            <p key={index} className="mb-4 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="animate-fade-in-up-delay-2 mb-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#cta"
            className="fancy-button rounded-lg bg-accent px-8 py-3 text-base font-semibold text-white transition hover:bg-accent-hover hover:shadow-lg"
          >
            {hero.buttons.primary}
          </a>
          <a
            href="#value-delivered"
            className="fancy-button rounded-lg border-2 border-accent px-8 py-3 text-base font-semibold text-accent-text transition hover:bg-accent-light dark:border-accent-border-dark dark:text-accent-text-dark dark:hover:bg-accent-highlight/30"
          >
            {hero.buttons.secondary}
          </a>
        </div>
        <div className="animate-fade-in-up-delay-2 mt-12 flex justify-center">
          <img
            src={realTimeInsightsImage}
            alt="Real Time Insights"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
