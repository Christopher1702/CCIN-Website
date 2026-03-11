import React from 'react';

export default function Footer() {
  const links = ['Legislative references', 'Data governance', 'Privacy & security', 'Accessibility', 'Contact', 'Download data'];
  return (
    <footer className="border-t border-slate-100 mt-12 bg-transparent">
      <div className="container-wide py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-600">© {new Date().getFullYear()} CleanBC Intelligence Network</div>
        <div className="flex flex-wrap gap-4 text-sm">
          {links.map((l) => (
            <a key={l} href="#" className="text-slate-600 hover:underline">{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
