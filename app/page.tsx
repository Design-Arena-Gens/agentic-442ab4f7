import { ArrowRight, BarChart3, Cpu, Layers, LineChart, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';

function SectionHeading({ kicker, title, subtitle }: { kicker?: string; title: string; subtitle?: string }) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      {kicker && <div className="text-brand text-sm font-semibold tracking-widest uppercase mb-3">{kicker}</div>}
      <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-4">{title}</h2>
      {subtitle && <p className="text-white/70 text-lg">{subtitle}</p>}
    </div>
  );
}

export default function Page() {
  return (
    <main>
      {/* Hero */}
      <section className="section container-grid">
        <div className="max-w-screen mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-brand font-medium bg-white/5 ring-1 ring-white/10 px-3 py-1 rounded-full mb-5">
                <Cpu className="h-4 w-4" />
                <span>AI for Mining Operations</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
                Optimize yield. Reduce cost. Operate safer.
              </h1>
              <p className="text-white/75 text-lg md:text-xl mb-8">
                AurumAI combines real-time telemetry, historical data, and domain expertise to deliver actionable insights that boost throughput, minimize downtime, and improve safety across your sites.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="#demo" className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-black font-medium px-5 py-3 rounded-md transition">
                  Request a demo <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="#features" className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-medium px-5 py-3 rounded-md transition">
                  Explore features
                </a>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6 text-center">
                {[
                  { label: 'Downtime', value: '?23%' },
                  { label: 'Throughput', value: '+18%' },
                  { label: 'Energy/ton', value: '?12%' },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-white/5 ring-1 ring-white/10 rounded-lg py-4">
                    <div className="text-2xl font-semibold">{value}</div>
                    <div className="text-white/60 text-sm">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 -z-10 bg-brand/10 blur-3xl rounded-full" />
              <div className="bg-white/5 ring-1 ring-white/10 rounded-xl p-4">
                <div className="bg-black/60 rounded-lg p-4">
                  <div className="grid grid-cols-6 gap-2 text-xs text-white/70">
                    {[...Array(36)].map((_, i) => (
                      <div key={i} className="aspect-square rounded-sm bg-gradient-to-br from-brand/20 to-white/10" />
                    ))}
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {[
                    { Icon: LineChart, label: 'Predictive throughput' },
                    { Icon: ShieldCheck, label: 'Risk forecasting' },
                    { Icon: Zap, label: 'Energy optimization' },
                  ].map(({ Icon, label }) => (
                    <div key={label} className="flex items-center gap-2 bg-white/5 ring-1 ring-white/10 rounded-md px-3 py-2">
                      <Icon className="h-4 w-4 text-brand" />
                      <span className="text-sm">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos / Social proof */}
      <section className="py-8">
        <div className="max-w-screen mx-auto px-6 md:px-10">
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-75">
            {['Atlas Minerals', 'DeepCore', 'NorthPeak', 'Vantage Metals', 'TerraWorks'].map((name) => (
              <div key={name} className="text-white/60 text-sm">{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section">
        <div className="max-w-screen mx-auto px-6 md:px-10">
          <SectionHeading
            kicker="Capabilities"
            title="End-to-end intelligence for the mining value chain"
            subtitle="From pit to plant, AurumAI continuously learns your operation and turns data into measurable outcomes."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                Icon: BarChart3,
                title: 'Process optimization',
                desc: 'Adaptive control recommendations to stabilize circuits and maximize throughput.',
              },
              {
                Icon: Layers,
                title: 'Ore characterization',
                desc: 'Blend and routing suggestions based on ore hardness, mineralogy, and variability.',
              },
              {
                Icon: ShieldCheck,
                title: 'Safety insights',
                desc: 'Early warnings for haulage risk, geotech events, and equipment anomalies.',
              },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="bg-white/5 ring-1 ring-white/10 rounded-xl p-6">
                <Icon className="h-6 w-6 text-brand mb-4" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-white/70">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section bg-white/5">
        <div className="max-w-screen mx-auto px-6 md:px-10">
          <SectionHeading
            kicker="How it works"
            title="Connect. Learn. Optimize."
            subtitle="Deploy securely within weeks. Integrate with existing historians, SCADA, fleet systems, and sensors."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Ingest & unify',
                desc: 'Stream equipment telemetry, lab results, and production data into a unified model.',
              },
              {
                step: '02',
                title: 'Model & predict',
                desc: 'Train site-specific models to forecast throughput, recovery, and risk in real time.',
              },
              {
                step: '03',
                title: 'Recommend & act',
                desc: 'Deliver operator-friendly setpoints and alerts via UI, API, or control-layer hooks.',
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="rounded-xl p-6 bg-gradient-to-br from-white/5 to-white/10 ring-1 ring-white/10">
                <div className="text-brand font-semibold">{step}</div>
                <h3 className="text-xl font-semibold mt-2 mb-2">{title}</h3>
                <p className="text-white/70">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="demo" className="section">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-semibold mb-4">See AurumAI on your data</h3>
          <p className="text-white/70 mb-6">Run a two-week pilot to quantify impact on your operation.</p>
          <a
            href="mailto:hello@aurum.ai?subject=AurumAI%20demo%20request"
            className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-black font-medium px-6 py-3 rounded-md transition"
          >
            Request a demo <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/10">
        <div className="max-w-screen mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/60 text-sm">
          <div>? {new Date().getFullYear()} AurumAI</div>
          <div className="flex items-center gap-4">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#demo" className="hover:text-white">Demo</a>
            <a href="mailto:hello@aurum.ai" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
