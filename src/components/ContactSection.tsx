/* eslint-disable prettier/prettier */
import { Mail, Phone } from 'lucide-react'
import content from '../data/content.json'

export default function ContactSection() {
  const { contactPage } = content
  return (
    <section id="contact" className="section-border bg-slate-50 py-16 dark:bg-slate-800/30 lg:py-24">
      <div className="reveal active mx-auto max-w-7xl px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-accent md:text-4xl">
            {contactPage.title}
          </h2>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white md:text-2xl">
            {contactPage.subtitle}
          </h3>
        </div>

        <div className="grid align gap-8 md:grid-cols-2 ">
          <div className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
            <div className="mb-4 rounded-full bg-accent/10 p-4 text-accent">
              <Mail size={32} />
            </div>
            <h4 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">{contactPage.email.title}</h4>
            <a href={`mailto:${contactPage.email.address}`} className="text-slate-600 hover:text-accent dark:text-slate-300 dark:hover:text-accent-text-dark">
              {contactPage.email.address}
            </a>
          </div>

          <div className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
            <div className="mb-4 rounded-full bg-accent/10 p-4 text-accent">
              <Phone size={32} />
            </div>
            <h4 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">{contactPage.phone.title}</h4>
            <a href={`tel:${contactPage.phone.link}`} className="text-slate-600 hover:text-accent dark:text-slate-300 dark:hover:text-accent-text-dark">
              {contactPage.phone.number}
            </a>
          </div>

          {/* <div className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
            <div className="mb-4 rounded-full bg-accent/10 p-4 text-accent">
              <MapPin size={32} />
            </div>
            <h4 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">Location</h4>
            <p className="text-slate-600 dark:text-slate-300">
              Eindhoven, The Netherlands
            </p>
          </div> */}
        </div>
      </div>
    </section>
  )
}
