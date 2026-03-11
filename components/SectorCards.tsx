import React from 'react';

const sectors = [
  {
    title: 'Clean Buildings',
    desc: 'Heating and energy performance indicators.',
  },
  {
    title: 'Clean Transportation',
    desc: 'EV adoption, fuels, and mobility indicators.',
  },
  {
    title: 'New Economic Investments',
    desc: 'Capital, jobs, and training capacity indicators.',
  },
];

export default function SectorCards() {
  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {sectors.map((s) => (
        <div key={s.title} className="glass-card p-4">
          <h3 className="text-lg font-medium">{s.title}</h3>
          <p className="text-sm text-slate-600 mt-2">{s.desc}</p>
          <div className="mt-4">
            <a href="#" className="text-sm font-medium text-sky-700">Open sector →</a>
          </div>
        </div>
      ))}
    </div>
  );
}
