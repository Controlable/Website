
function CTASection() {
  return (
    <section id="cta" className="section-border py-12">
      <div className="px-8 text-center max-w-2xl mx-auto">
        <h2 className="mb-3 text-3xl font-bold tracking-tight text-slate-900">
          Get Involved
        </h2>
        <p className="mx-auto mb-6 max-w-xl text-base text-slate-600">
          We are currently working with launching customers and industrial partners.<br /><br />
          Organisations interested in early pilots, strategic collaboration or platform integration are invited to get in touch.
        </p>
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
