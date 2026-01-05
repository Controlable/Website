/* eslint-disable prettier/prettier */
import advantagesImage from '../assets/frontpage/lightMode/Advantages image 00bd224b-b7e7-4cce-a94c-df53d44aad1c-md.png'
import howItWorksImage from '../assets/frontpage/lightMode/How it works image 134fe013-b353-4e50-8500-d9f2b8fade0d.png'
import platformImage from '../assets/frontpage/lightMode/Platform image ad265e89-5e72-457c-9936-dd096113a773-md.jpeg'
import plugAndPlayImage from '../assets/frontpage/lightMode/Plug and Play SaaS image 5790b67b-5b8e-4167-8059-1f16805b789f.png'
import whyDifferentImage from '../assets/frontpage/lightMode/Whi this is different image 930d2a28-7ef6-4864-ae1b-8913cb855537.png'
import whyItMattersImage from '../assets/frontpage/lightMode/Why it matters image 94f360c8-1099-496d-8cd5-fe93a5f8b433-md.png'
import teamImage from '../assets/frontpage/lightMode/Team and credability image same style 140840dd-3164-40eb-b01a-8793808b2ecf.png'
import content from '../data/content.json'

export function ValueDelivered() {
  const { valueDelivered } = content
  return (
    <section id="value-delivered" className="section-border py-16 lg:py-24">
      <div className="reveal mx-auto max-w-7xl px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-xl font-bold tracking-tight text-accent md:text-2xl">
            {valueDelivered.title}
          </h2>
          <h3 className="text-2xl font-semibold text-slate-900 md:text-3xl dark:text-white">
            {valueDelivered.subtitle}
          </h3>
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-6 text-lg text-slate-700 dark:text-slate-300">
              {valueDelivered.description}
            </p>
            <ul className="space-y-4 text-lg text-slate-700 dark:text-slate-300">
              {valueDelivered.list.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-3 mt-1.5 size-2 rounded-full bg-accent-border-dark"></span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-2">
              {valueDelivered.highlights.map((highlight, index) => (
                <p key={index} className="text-lg font-medium text-slate-900 dark:text-slate-100">
                  {highlight}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-2xl bg-white/50 p-4 text-center shadow-sm backdrop-blur-sm dark:bg-slate-800/50">
            <img
              src={advantagesImage}
              alt="Advantages"
              className="rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export function Mission() {
  const { mission } = content
  return (
    <section id="mission" className="section-border py-16 lg:py-24">
      <div className="reveal mx-auto max-w-4xl px-8 text-center">
        <h2 className="mb-6 text-xl font-bold tracking-tight text-accent md:text-2xl">
          {mission.title}
        </h2>
        <h3 className="mb-10 text-2xl font-semibold text-slate-900 md:text-3xl dark:text-white">
          {mission.subtitle}
        </h3>
        <div className="space-y-8 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          {mission.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PlatformBuilding() {
  const { platform } = content
  return (
    <section id="platform" className="section-border py-16 lg:py-24">
      <div className="reveal mx-auto max-w-7xl px-8">
        <div className="mb-24">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-xl font-bold tracking-tight text-accent md:text-2xl">
              {platform.building.title}
            </h2>
            <h3 className="text-2xl font-semibold text-slate-900 md:text-3xl dark:text-white">
              {platform.building.subtitle}
            </h3>
          </div>
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              <p className="mb-6">
                {platform.building.description}
              </p>
              <p className="mb-6 font-medium">
                {platform.building.listTitle}
              </p>
              <ul className="space-y-4 text-lg text-slate-700 dark:text-slate-300">
                {platform.building.list.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 mt-1.5 size-2 rounded-full bg-accent-border-dark"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl bg-slate-50 p-4 shadow-sm dark:bg-slate-800/50">
              <img
                src={platformImage}
                alt="Platform"
                className="rounded-xl shadow-md"
              />
            </div>
          </div>
          <div className="mt-10 text-center text-lg font-medium text-slate-600 dark:text-slate-400">
            {platform.building.footer}
          </div>
        </div>

        <div>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-xl font-bold tracking-tight text-accent md:text-2xl">
              {platform.delivery.title}
            </h2>
            <h3 className="text-2xl font-semibold text-slate-900 md:text-3xl dark:text-white">
              {platform.delivery.subtitle}
            </h3>
          </div>
          <div className="mx-auto max-w-4xl space-y-6 text-center text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            {platform.delivery.paragraphs.slice(0, 3).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <p className="font-medium text-accent-text dark:text-accent-text-dark">
              {platform.delivery.paragraphs[3]}
            </p>
            <div className="mt-8 flex justify-center">
              <img
                src={plugAndPlayImage}
                alt="Plug and Play SaaS"
                className="rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function HowItWorks() {
  const { howItWorks } = content
  return (
    <section id="how-it-works" className="section-border py-16 lg:py-24">
      <div className="reveal mx-auto max-w-4xl px-8 text-center">
        <h2 className="mb-6 text-xl font-bold tracking-tight text-accent md:text-2xl">
          {howItWorks.title}
        </h2>
        <h3 className="mb-10 text-2xl font-semibold text-slate-900 md:text-3xl dark:text-white">
          {howItWorks.subtitle}
        </h3>
        <div className="space-y-8 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          {howItWorks.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <div className="mt-8 flex justify-center">
            <img
              src={howItWorksImage}
              alt="How It Works"
              className="rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export function Differentiation() {
  const { differentiation, whyItMatters } = content
  return (
    <section id="differentiation" className="section-border py-16 lg:py-24">
      <div className="reveal mx-auto max-w-7xl px-8">
        <div className="mb-24">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-xl font-bold tracking-tight text-accent md:text-2xl">
              {differentiation.title}
            </h2>
            <h3 className="text-2xl font-semibold text-slate-900 md:text-3xl dark:text-white">
              {differentiation.subtitle}
            </h3>
          </div>
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              <p className="mb-6">
                {differentiation.description}
              </p>
              <p className="mb-6 font-medium">
                {differentiation.listTitle}
              </p>
              <ul className="mt-6 space-y-4 text-lg text-slate-700 dark:text-slate-300">
                {differentiation.list.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 mt-1.5 size-2 rounded-full bg-accent-border-dark"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl bg-slate-50 p-4 shadow-sm dark:bg-slate-800/50">
              <img
                src={whyDifferentImage}
                alt="Why This Is Different"
                className="rounded-xl shadow-md"
              />
            </div>
          </div>
          <div className="mt-10 text-center text-lg font-medium text-slate-600 dark:text-slate-400">
            {differentiation.footer}
          </div>
        </div>

        <div>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-xl font-bold tracking-tight text-accent md:text-2xl">
              {whyItMatters.title}
            </h2>
            <h3 className="text-2xl font-semibold text-slate-900 md:text-3xl dark:text-white">
              {whyItMatters.subtitle}
            </h3>
          </div>
          

          <div className="mx-auto mb-12 max-w-4xl text-center text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            <div className="mt-8 flex justify-center mb-8">
              <img
                src={whyItMattersImage}
                alt="Why It Matters"
                className="rounded-xl shadow-md"
              />
            </div>            
            {whyItMatters.paragraphs.map((paragraph, index) => (
              <p key={index} className="mb-4 last:mb-0">{paragraph}</p>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800/50">
              <h4 className="mb-6 text-xl font-bold text-slate-900 dark:text-slate-100">
                {whyItMatters.financial.title}
              </h4>
              <ul className="space-y-3 text-lg text-slate-700 dark:text-slate-300">
                {whyItMatters.financial.list.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 mt-1.5 size-2 rounded-full bg-accent-border-dark"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800/50">
              <h4 className="mb-6 text-xl font-bold text-slate-900 dark:text-slate-100">
                {whyItMatters.sustainability.title}
              </h4>
              <ul className="space-y-3 text-lg text-slate-700 dark:text-slate-300">
                {whyItMatters.sustainability.list.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 mt-1.5 size-2 rounded-full bg-accent-border-dark"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function WhoFor() {
  const { whoFor } = content
  return (
    <section id="who-for" className="section-border py-16 lg:py-24">
      <div className="reveal mx-auto max-w-7xl px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-xl font-bold tracking-tight text-accent md:text-2xl">
            {whoFor.title}
          </h2>
          <h3 className="text-2xl font-semibold text-slate-900 md:text-3xl dark:text-white">
            {whoFor.subtitle}
          </h3>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {whoFor.cards.map((card, index) => (
            <div key={index} className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">
              <h4 className="mb-4 text-xl font-bold text-slate-900 dark:text-slate-100">
                {card.title}
              </h4>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                {card.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center text-lg text-slate-600 dark:text-slate-400">
          {whoFor.footer}
        </div>
      </div>
    </section>
  )
}

export function Team() {
  const { team } = content
  return (
    <section id="team" className="section-border py-16 lg:py-24">
      <div className="reveal mx-auto max-w-4xl px-8 text-center">
        <h2 className="mb-6 text-xl font-bold tracking-tight text-accent md:text-2xl">
          {team.title}
        </h2>
        <h3 className="mb-10 text-2xl font-semibold text-slate-900 md:text-3xl dark:text-white">
          {team.subtitle}
        </h3>

        
        <div className="space-y-8 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          <p>
            {team.paragraphs[0]}
          </p>
          <div className="mt-8 flex justify-center">
            <img
              src={teamImage}
              alt="Team and Credibility"
              className="rounded-xl shadow-md"
            />
          </div>
          {team.paragraphs.slice(1).map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
