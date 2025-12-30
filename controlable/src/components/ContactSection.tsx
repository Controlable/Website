function ContactSection() {
  return (
    <section id="contact" className="section-border py-12">
      <div className="px-8 text-center">
        <h2 className="mb-2 text-3xl font-bold tracking-tight text-slate-900">
          Questions?
        </h2>
        <p className="mb-8 text-sm text-slate-600">
          We&apos;re building Controlable to solve real problems in edge
          monitoring. Let&apos;s talk.
        </p>
        <div className="mb-10 space-y-4">
          <div>
            <h3 className="mb-1 text-sm font-semibold text-emerald-700">
              Email
            </h3>
            <a
              href="mailto:hello@Controlable.io"
              className="text-xs font-medium text-slate-600 transition hover:text-emerald-700"
            >
              hello@Controlable.io
            </a>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-semibold text-emerald-700">
              Social
            </h3>
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="text-xs font-medium text-slate-600 transition hover:text-emerald-700"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-xs font-medium text-slate-600 transition hover:text-emerald-700"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <form className="mx-auto max-w-md space-y-3">
          <div>
            <input
              type="text"
              required
              placeholder="Full Name"
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2 text-sm text-slate-900 transition placeholder:text-slate-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>
          <div>
            <input
              type="email"
              required
              placeholder="your@company.com"
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2 text-sm text-slate-900 transition placeholder:text-slate-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Company"
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2 text-sm text-slate-900 transition placeholder:text-slate-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>
          <div>
            <textarea
              rows={3}
              placeholder="Tell us about your edge monitoring needs..."
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2 text-sm text-slate-900 transition placeholder:text-slate-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-emerald-600"
            ></textarea>
          </div>
          <button
            type="submit"
            // eslint-disable-next-line tailwindcss/no-custom-classname
            className="fancy-button w-full rounded-lg bg-emerald-600 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 hover:shadow-lg"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
