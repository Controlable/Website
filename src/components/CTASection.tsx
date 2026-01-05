/* eslint-disable prettier/prettier */
import { Link } from 'react-router-dom'
import readyToTransformImage from '../assets/frontpage/lightMode/Ready to transform image d06af24a-cb6d-42c2-902b-d44ce5fc1e7e.png'
import content from '../data/content.json'

function CTASection() {
  const { cta } = content
  return (
    <section id="cta" className="section-border py-16 lg:py-24">
      <div className="reveal mx-auto max-w-4xl px-8 text-center">
        <h2 className="mb-4 text-xl font-bold tracking-tight text-accent md:text-2xl">
          {cta.title}
        </h2>
        <h3 className="mb-8 text-2xl font-semibold text-slate-900 md:text-3xl dark:text-white">
          {cta.subtitle}
        </h3>
        <div className="mx-auto mb-10 space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          {cta.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <div className="rounded-xl bg-slate-50 p-8 shadow-sm dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
            <p className="mb-4 font-medium text-slate-900 dark:text-slate-100">
              {cta.focus.title}
            </p>
            <ul className="mx-auto max-w-lg list-inside list-disc space-y-2 text-left sm:text-center">
              {cta.focus.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="mt-8 flex justify-center">
            <img
              src={readyToTransformImage}
              alt="Ready to Transform"
              className="rounded-xl shadow-md"
            />
          </div>
        </div>
        <Link
          to="/contact"
          className="inline-block fancy-button rounded-lg bg-accent px-8 py-3 text-base font-semibold text-white transition hover:bg-accent-hover hover:shadow-lg"
        >
          Contact Us
        </Link>
      </div>
    </section>
  )
}

export default CTASection
