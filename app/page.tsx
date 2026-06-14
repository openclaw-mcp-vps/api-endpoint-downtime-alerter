export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-24">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6">
          API Monitoring for Indie Devs
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Get instant alerts when your APIs fail
        </h1>
        <p className="text-lg text-[#8b949e] mb-10 max-w-xl mx-auto">
          Monitors your API endpoints every minute, stores results, and fires email or webhook notifications the moment something breaks.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start monitoring — $9/mo
        </a>
        <div className="mt-10 grid grid-cols-3 gap-6 text-center">
          {[
            ['1 min', 'Check interval'],
            ['Email + Webhook', 'Alert channels'],
            ['Instant', 'Notification speed'],
          ].map(([val, label]) => (
            <div key={label} className="bg-[#161b22] rounded-lg p-4 border border-[#30363d]">
              <div className="text-[#58a6ff] font-bold text-lg">{val}</div>
              <div className="text-[#8b949e] text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border border-[#58a6ff]/40 rounded-xl p-8">
          <div className="text-[#58a6ff] font-semibold text-sm mb-2">Pro</div>
          <div className="text-4xl font-bold text-white mb-1">$9<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to keep your APIs healthy.</p>
          <ul className="space-y-3 mb-8">
            {[
              'Unlimited endpoints',
              '1-minute check intervals',
              'Email & webhook alerts',
              'Status history & uptime stats',
              'Dashboard for endpoint management',
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            [
              'How does the monitoring work?',
              'We ping your API endpoints every minute from our servers. If an endpoint returns an error status code or times out, we immediately send you an alert via email or webhook.',
            ],
            [
              'What alert channels are supported?',
              'Email and webhooks are supported out of the box. Webhooks let you integrate with Slack, Discord, PagerDuty, or any custom system.',
            ],
            [
              'Can I cancel anytime?',
              'Yes. Cancel anytime from your billing portal with no questions asked. Your monitoring stays active until the end of the billing period.',
            ],
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} API Endpoint Downtime Alerter. All rights reserved.
      </footer>
    </main>
  )
}
