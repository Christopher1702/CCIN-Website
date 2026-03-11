import React from 'react';

export default function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 py-8 md:scroll-mt-32">
      <div className="grid items-start gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold">{title}</h2>
        </div>
        <div className="prose text-slate-800">{children}</div>
      </div>
    </section>
  );
}