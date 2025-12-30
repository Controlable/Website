function CTASection() {
  return (
    <section id="cta" className="section-border py-12">
      <div className="px-8 text-center">
        <h2 className="mb-3 text-3xl font-bold tracking-tight text-slate-900">
          Stay in the loop
        </h2>
        <p className="mx-auto mb-6 max-w-xl text-sm text-slate-600">
          Get notified when Controlable launches, plus exclusive updates on intelligent edge monitoring.
        </p>
        <form className="mx-auto mb-3 flex max-w-md flex-col gap-2 sm:flex-row">
          <input
            type="email"
            required
            placeholder="your@company.com"
            className="flex-1 rounded-lg border border-slate-300 bg-slate-50 px-4 py-2 text-sm text-slate-900 transition placeholder:text-slate-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
          <button
            type="submit"
            className="fancy-button whitespace-nowrap rounded-lg bg-emerald-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 hover:shadow-lg"
          >
            Subscribe
          </button>
        </form>
        <p className="text-xs text-slate-500">
          We respect your inbox. Unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}

export default CTASection
