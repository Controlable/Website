
function CTASection() {
  return (
    <section id="cta" className="section-border py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-8 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-slate-100">
          Get Involved
        </h2>
        <h3 className="mb-8 text-xl font-semibold text-emerald-700 md:text-2xl dark:text-emerald-400">
          Explore pilots, partnerships and early access
        </h3>
        <div className="mx-auto mb-10 space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          <p>
            We are currently working with launching customers and industrial
            partners.
          </p>
          <p>
            Organisations interested in early pilots, strategic collaboration or
            platform integration are invited to get in touch.
          </p>
          <p>
            The core platform — hardware, edge intelligence and software — is
            operational and undergoing real-world validation with industrial use
            cases.
          </p>
          <div className="rounded-xl bg-slate-50 p-8 shadow-sm dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
            <p className="mb-4 font-medium text-slate-900 dark:text-slate-100">
              Our focus is now on:
            </p>
            <ul className="mx-auto max-w-lg list-inside list-disc space-y-2 text-left sm:text-center">
              <li>Field validation in production environments</li>
              <li>Refinement based on operational data</li>
              <li>Scaling towards broader industrial deployment</li>
            </ul>
          </div>
        </div>
        <a
          href="mailto:info@controlable.ai"
          className="inline-block fancy-button rounded-lg bg-emerald-600 px-8 py-3 text-base font-semibold text-white transition hover:bg-emerald-700 hover:shadow-lg"
        >
          info@controlable.ai
        </a>
      </div>
    </section>
  )
}

export default CTASection
