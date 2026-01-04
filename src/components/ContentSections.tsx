/* eslint-disable prettier/prettier */
export function ValueDelivered() {
  return (
    <section id="value-delivered" className="section-border py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-slate-100">
            What This Delivers
          </h2>
          <h3 className="text-xl font-semibold text-emerald-700 md:text-2xl dark:text-emerald-400">
            Operational insight that translates directly into value
          </h3>
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-6 text-lg text-slate-700 dark:text-slate-300">
              Our platform delivers direct operational value:
            </p>
            <ul className="space-y-4 text-lg text-slate-700 dark:text-slate-300">
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 size-2 rounded-full bg-emerald-500"></span>
                Earlier detection of machine anomalies and degradation
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 size-2 rounded-full bg-emerald-500"></span>
                Fewer unplanned stops and emergency interventions
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 size-2 rounded-full bg-emerald-500"></span>
                Lower energy consumption through continuous insight
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 size-2 rounded-full bg-emerald-500"></span>
                Extended asset lifetime without large reinvestments
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 size-2 rounded-full bg-emerald-500"></span>
                Predictable costs and fast time-to-value
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center rounded-2xl bg-white/50 p-10 text-center shadow-sm backdrop-blur-sm dark:bg-slate-800/50">
            <div className="space-y-6 text-lg font-medium text-slate-600 dark:text-slate-300">
              <p>No data science team required.</p>
              <div className="mx-auto h-px w-12 bg-slate-200 dark:bg-slate-700"></div>
              <p>No complex IT integration.</p>
              <div className="mx-auto h-px w-12 bg-slate-200 dark:bg-slate-700"></div>
              <p>No long-term platform lock-in.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Mission() {
  return (
    <section id="mission" className="section-border py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-8 text-center">
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-slate-100">
          Our Mission
        </h2>
        <h3 className="mb-10 text-xl font-semibold text-emerald-700 md:text-2xl dark:text-emerald-400">
          Making advanced industrial AI accessible — without cloud dependency
        </h3>
        <div className="space-y-8 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          <p>
            Our mission is to make advanced AI and machine learning accessible
            to every production company.
          </p>
          <p>
            Too often, industrial intelligence is tied to expensive hardware,
            heavy cloud infrastructures and external platforms that create
            long-term dependency and limit control. We believe industrial
            organisations should retain ownership of their data, their models
            and their operational decisions.
          </p>
          <p>
            By using affordable edge technology and on-device intelligence, we
            enable organisations of any scale to improve efficiency, reduce
            energy costs, extend asset lifetime and improve product quality —
            while keeping full control over their data and systems.
          </p>
          <p>
            In doing so, we accelerate both the digitalisation and the
            sustainability of the manufacturing industry.
          </p>
        </div>
      </div>
    </section>
  )
}

export function PlatformBuilding() {
  return (
    <section id="platform" className="section-border py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-24">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-slate-100">
              What We Are Building
            </h2>
            <h3 className="text-xl font-semibold text-emerald-700 md:text-2xl dark:text-emerald-400">
              An integrated edge-native platform for machine health and
              intelligence
            </h3>
          </div>
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              <p className="mb-6">
                We are developing an Industrial Edge Intelligence Platform, a
                fully integrated system, that brings machine monitoring, anomaly
                detection and digital-twin capabilities directly to the
                production floor.
              </p>
              <p>
                The platform combines multi-sensor hardware with advanced
                on-device analytics to provide real-time insights without the
                need for constant cloud connectivity.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800/50">
              <ul className="space-y-4 text-lg text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 size-2 rounded-full bg-emerald-500"></span>
                  Multi-sensor edge hardware (current, vibration, temperature)
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 size-2 rounded-full bg-emerald-500"></span>
                  On-device anomaly detection using TinyML and Edge AI
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 size-2 rounded-full bg-emerald-500"></span>
                  Secure dashboards for machine health and operational insight
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 size-2 rounded-full bg-emerald-500"></span>
                  Rapid deployment in harsh industrial environments
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 size-2 rounded-full bg-emerald-500"></span>
                  A scalable foundation for predictive maintenance
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 text-center text-lg font-medium text-slate-600 dark:text-slate-400">
            The result is a system that grows in intelligence over time —
            without increasing operational complexity.
          </div>
        </div>

        <div>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-slate-100">
              How We Deliver This
            </h2>
            <h3 className="text-xl font-semibold text-emerald-700 md:text-2xl dark:text-emerald-400">
              Plug-and-play SaaS, no upfront investment required
            </h3>
          </div>
          <div className="mx-auto max-w-4xl space-y-6 text-center text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            <p>Our solution is delivered as a plug-and-play SaaS platform.</p>
            <p>
              Edge sensor nodes are installed directly on machines or
              infrastructure. Intelligence runs locally on the device, and only
              relevant insights are transmitted. Dashboards provide immediate
              visibility into machine health and performance.
            </p>
            <p>
              There are no large upfront investments. Customers subscribe to the
              platform and scale usage as value is proven.
            </p>
            <p className="font-medium text-emerald-700 dark:text-emerald-400">
              This makes advanced industrial AI accessible, financially
              predictable and aligned with operational reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-border py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-8 text-center">
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-slate-100">
          How It Works
        </h2>
        <h3 className="mb-10 text-xl font-semibold text-emerald-700 md:text-2xl dark:text-emerald-400">
          From raw signals to actionable insight — at the edge
        </h3>
        <div className="space-y-8 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          <p>
            Edge sensor nodes capture machine behaviour directly at the source.
            TinyML models analyse this data locally and detect deviations and
            anomalies in real time, even in environments with limited
            connectivity.
          </p>
          <p>
            Only relevant insights and health indicators are transmitted,
            keeping bandwidth usage, storage requirements and cloud dependency
            to a minimum. Dashboards provide clear, actionable views for
            operations and maintenance teams.
          </p>
          <p>
            As data accumulates, models mature and enable predictive maintenance
            and digital-twin applications.
          </p>
        </div>
      </div>
    </section>
  )
}

export function Differentiation() {
  return (
    <section id="differentiation" className="section-border py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-24">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-slate-100">
              Why This Is Different
            </h2>
            <h3 className="text-xl font-semibold text-emerald-700 md:text-2xl dark:text-emerald-400">
              Edge-first intelligence, designed for real-world industry
            </h3>
          </div>
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              <p className="mb-6">
                Most industrial AI solutions rely on expensive sensors,
                centralised cloud processing and long integration projects.
              </p>
              <p>
                Our approach is fundamentally different. We prioritize local
                processing, affordability, and ease of use.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800/50">
              <ul className="space-y-4 text-lg text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 size-2 rounded-full bg-emerald-500"></span>
                  Edge-first architecture
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 size-2 rounded-full bg-emerald-500"></span>
                  Affordable, scalable hardware
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 size-2 rounded-full bg-emerald-500"></span>
                  SaaS delivery without lock-in
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 size-2 rounded-full bg-emerald-500"></span>
                  Full data ownership for the customer
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 size-2 rounded-full bg-emerald-500"></span>
                  No specialised AI teams required
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 text-center text-lg font-medium text-slate-600 dark:text-slate-400">
            This allows organisations to start small, validate quickly and scale
            with confidence.
          </div>
        </div>

        <div>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-slate-100">
              Why It Matters
            </h2>
            <h3 className="text-xl font-semibold text-emerald-700 md:text-2xl dark:text-emerald-400">
              Reliability, cost control and sustainability in one system
            </h3>
          </div>

          <div className="mx-auto mb-12 max-w-4xl text-center text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            <p>
              Industrial reliability is not only a technical challenge — it is a
              financial and sustainability challenge. Every unplanned stop,
              wasted kilowatt-hour and prematurely replaced component increases
              costs and environmental impact.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800/50">
              <h4 className="mb-6 text-xl font-bold text-slate-900 dark:text-slate-100">
                Financial impact
              </h4>
              <ul className="space-y-3 text-lg text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 size-2 rounded-full bg-emerald-500"></span>
                  Reduced downtime and maintenance costs
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 size-2 rounded-full bg-emerald-500"></span>
                  Improved asset utilisation
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 size-2 rounded-full bg-emerald-500"></span>
                  Lower IT and data-handling expenses
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800/50">
              <h4 className="mb-6 text-xl font-bold text-slate-900 dark:text-slate-100">
                Sustainability impact
              </h4>
              <ul className="space-y-3 text-lg text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 size-2 rounded-full bg-emerald-500"></span>
                  Reduced energy waste
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 size-2 rounded-full bg-emerald-500"></span>
                  Lower material consumption
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 size-2 rounded-full bg-emerald-500"></span>
                  Fewer emissions through efficiency
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 size-2 rounded-full bg-emerald-500"></span>
                  Support for circular industrial systems
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function WhoFor() {
  return (
    <section id="who-for" className="section-border py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-slate-100">
            Who This Is For
          </h2>
          <h3 className="text-xl font-semibold text-emerald-700 md:text-2xl dark:text-emerald-400">
            Built for organisations responsible for critical assets
          </h3>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <h4 className="mb-4 text-xl font-bold text-slate-900 dark:text-slate-100">
              OEMs
            </h4>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              Enhancing machines with intelligent monitoring and services.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <h4 className="mb-4 text-xl font-bold text-slate-900 dark:text-slate-100">
              Manufacturers
            </h4>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              Improving reliability, efficiency and energy performance.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <h4 className="mb-4 text-xl font-bold text-slate-900 dark:text-slate-100">
              Asset Owners
            </h4>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              Responsible for uptime and long-term value.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center text-lg text-slate-600 dark:text-slate-400">
          The platform scales from a single production line to complex
          industrial sites.
        </div>
      </div>
    </section>
  )
}

export function Team() {
  return (
    <section id="team" className="section-border py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-8 text-center">
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-slate-100">
          Team & Credibility
        </h2>
        <h3 className="mb-10 text-xl font-semibold text-emerald-700 md:text-2xl dark:text-emerald-400">
          Industrial experience combined with deep AI expertise
        </h3>
        <div className="space-y-8 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          <p>
            Controlable is built by a multidisciplinary team combining deep
            industrial experience with advanced AI and embedded systems
            expertise.
          </p>
          <p>
            We bring together senior engineers with decades of experience in
            industrial automation, embedded systems and machine reliability;
            specialists in Edge AI and TinyML building models that operate on
            constrained hardware in real-world conditions; system architects
            experienced in deploying technology in live industrial environments;
            and a new generation of highly skilled engineers and graduates
            trained in modern software, data and AI methodologies.
          </p>
          <p>
            This combination enables us to move fast while maintaining
            industrial-grade robustness.
          </p>
          <p>
            Our advisory board further strengthens this foundation, covering
            manufacturing from large corporate to sme’s, cutting edge digital
            twins, AI and machine learning applied academic research, legal
            structuring and financial strategy.
          </p>
        </div>
      </div>
    </section>
  )
}
