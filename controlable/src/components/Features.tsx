function Features() {
  return (
    <section id="features" className="section-border py-12">
      <div className="mx-auto max-w-3xl px-8">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-slate-900">
          What This Delivers
        </h2>
        <h3 className="mb-2 text-center text-xl font-semibold text-emerald-700">
          Operational insight that translates directly into value
        </h3>
        <ul className="mb-8 mt-4 list-inside list-disc space-y-2 text-base text-slate-700">
          <li>Earlier detection of machine anomalies and degradation</li>
          <li>Fewer unplanned stops and emergency interventions</li>
          <li>Lower energy consumption through continuous insight</li>
          <li>Extended asset lifetime without large reinvestments</li>
          <li>Predictable costs and fast time-to-value</li>
        </ul>
        <div className="mb-8 text-center text-sm text-slate-600">
          <p>
            No data science team required.
            <br />
            No complex IT integration.
            <br />
            No long-term platform lock-in.
          </p>
        </div>
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-slate-900">
          What We Are Building
        </h2>
        <h3 className="mb-2 text-center text-xl font-semibold text-emerald-700">
          An edge-native platform for machine health and intelligence
        </h3>
        <p className="mb-4 text-center text-base text-slate-700">
          We are developing an Industrial Edge Intelligence Platform that brings
          machine monitoring, anomaly detection and digital-twin capabilities
          directly to the production floor.
        </p>
        <ul className="mb-8 list-inside list-disc space-y-2 text-base text-slate-700">
          <li>
            Multi-sensor edge hardware (current, vibration, temperature,
            vision-ready)
          </li>
          <li>On-device anomaly detection using TinyML and Edge AI</li>
          <li>Secure dashboards for machine health and operational insight</li>
          <li>Rapid deployment in harsh industrial environments</li>
          <li>
            A scalable foundation for predictive maintenance and digital twins
          </li>
        </ul>
        <div className="text-center text-sm text-slate-600">
          The result is a system that grows in intelligence over time — without
          increasing operational complexity.
        </div>
      </div>
    </section>
  )
}

export default Features
