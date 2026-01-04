
function CTASection() {
  return (
    <section id="cta" className="section-border py-12">
      <div className="px-8 text-center max-w-2xl mx-auto">
        <h2 className="mb-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Get Involved
        </h2>
        <h3 className="mb-4 text-xl font-semibold text-emerald-700 dark:text-emerald-400">
          Explore pilots, partnerships and early access
        </h3>
        <div className="mx-auto mb-8 max-w-2xl text-base text-slate-600 dark:text-slate-400">
          <p className="mb-4">
            We are currently working with launching customers and industrial
            partners.
          </p>
          <p className="mb-4">
            Organisations interested in early pilots, strategic collaboration or
            platform integration are invited to get in touch.
          </p>
          <p className="mb-4">
            The core platform — hardware, edge intelligence and software — is
            operational and undergoing real-world validation with industrial use
            cases.
          </p>
          <p className="mb-4 font-medium">Our focus is now on:</p>
          <ul className="list-inside list-disc space-y-1 text-left sm:text-center">
            <li>Field validation in production environments</li>
            <li>Refinement based on operational data</li>
            <li>Scaling towards broader industrial deployment</li>
          </ul>
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
