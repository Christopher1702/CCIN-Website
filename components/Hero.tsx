import React from 'react';

export default function Hero({ lastUpdated }: { lastUpdated: string }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <div className="space-y-6">
        <h1 className="text-4xl font-semibold">CleanBC Intelligence Network</h1>
        <p className="text-slate-700 text-lg">Transparent Tracking. Evidence-Based Progress. Public Accountability.</p>

        <p className="text-slate-800 max-w-prose">This portal provides public-facing access to sector performance indicators, methodological documentation, and versioned change logs to promote auditability and accountability for climate progress across British Columbia.</p>

        <div className="flex flex-wrap gap-3 mt-2">
          <span className="chip">Last Updated: {lastUpdated}</span>
          <span className="chip">Data Status: Latest emissions inventory is lagged; leading indicators updated more frequently</span>
        </div>

        <div className="flex gap-3 mt-4">
          <a href="#sectors" className="inline-flex items-center gap-2 rounded-full bg-sky-700 px-4 py-2 text-white text-sm">View Sector Progress</a>
          <a href="#methodology" className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700">Explore Methodology</a>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="glass-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-slate-700">Dashboard Snapshot</h3>
              <p className="text-xs text-slate-500">Key KPIs — static mockup</p>
            </div>
            <div className="text-xs text-slate-400">Public</div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              { label: 'Emissions', value: '23.4 Mt', color: 'text-rose-600' },
              { label: 'Trend', value: '-3%', color: 'text-emerald-600' },
              { label: 'Target', value: 'On track', color: 'text-sky-600' },
            ].map((k) => (
              <div key={k.label} className="p-3 bg-white/50 rounded-xl border border-slate-100">
                <div className={`text-sm ${k.color} font-semibold`}>{k.value}</div>
                <div className="text-[11px] text-slate-500">{k.label}</div>
                <div className="mt-2">
                  <svg width="100%" height="28" viewBox="0 0 100 28" preserveAspectRatio="none" aria-hidden>
                    <polyline points="0,20 20,12 40,16 60,10 80,12 100,6" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
