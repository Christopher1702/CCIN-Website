import React from 'react';

export default function TrustBar() {
  const chips = [
    'Source-linked indicators',
    'Versioned methodologies',
    'Audit-friendly change logs',
    'Role-based access (internal)'
  ];

  return (
    <div className="glass-card p-4 flex flex-wrap gap-3 items-center">
      {chips.map((c) => (
        <div key={c} className="chip" role="note">{c}</div>
      ))}
    </div>
  );
}
