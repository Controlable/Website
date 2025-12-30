const features = [
  {
    title: '📊 Real-time Monitoring',
    desc: 'Always know the status of your machines. Get instant visibility into device health, performance metrics, and operational status across your entire fleet.'
  },
  {
    title: '🤖 Edge AI Predictions',
    desc: 'Make predictions about maintenance before it breaks. Our AI models analyze patterns and detect anomalies to prevent costly downtime and unplanned failures.'
  },
  {
    title: '⚡ Power Monitoring',
    desc: 'Know the power your machines use and lower net congestion. Optimize energy consumption, reduce costs, and improve sustainability across your operations.'
  },
  {
    title: '👥 Managed Sensor Team',
    desc: 'A team that maintains your sensor system. We handle installation, maintenance, and support so you can focus on your core business.'
  },
  {
    title: '💰 Low Starting Cost',
    desc: 'Start small, expand as you need. Flexible pricing that scales with your business without breaking the bank.'
  },
  {
    title: '🎯 Custom Usecases',
    desc: 'Custom solutions for your problems. We work with you to tailor Controlable to your specific industry and operational needs.'
  }
]

function Features() {
  return (
    <section id="features" className="section-border py-12">
      <div className="px-8">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-slate-900">
          Six powerful capabilities
        </h2>
        <div className="space-y-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group cursor-pointer rounded-lg border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-emerald-300 hover:shadow-md"
            >
              <h3 className="mb-1.5 text-sm font-semibold text-emerald-700 transition group-hover:text-emerald-800">
                {f.title}
              </h3>
              <p className="text-xs leading-relaxed text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
