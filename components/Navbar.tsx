'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

function MarkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className="h-4 w-4 text-current"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 4h10l3 3v10l-3 3H7l-3-3V7z" />
      <path d="M9.4 12.2l2.8-2.8h2.4" />
      <path d="M14.6 11.8l-2.8 2.8H9.4" />
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateIn(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/our-story', label: 'Our Story' },
    { href: '/about-us', label: 'About Us' },
    { href: '/#contact', label: 'Contact Us' },
  ];

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-3">
      <div className="mx-auto max-w-[980px]">
        <div
          className="hidden items-center justify-between rounded-[30px] border border-white/60 bg-white/35 px-5 py-3 shadow-[0_18px_45px_rgba(15,23,42,0.16)] backdrop-blur-xl md:flex"
          style={{
            opacity: animateIn ? 1 : 0,
            transform: animateIn ? 'translateX(0)' : 'translateX(-180px)',
            transition: 'transform 1500ms cubic-bezier(0.22, 1, 0.36, 1), opacity 1200ms ease-out',
            willChange: 'transform, opacity',
          }}
        >
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold tracking-tight text-slate-900">
            <MarkIcon />
            <span>CCIN</span>
          </Link>

          <nav className="flex items-center gap-6 text-sm font-medium text-slate-700">
            {links.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-slate-900"
                style={{
                  opacity: animateIn ? 1 : 0,
                  transform: animateIn ? 'translateX(0)' : 'translateX(-22px)',
                  transition: `transform 700ms ease-out ${380 + index * 140}ms, opacity 700ms ease-out ${380 + index * 140}ms`,
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="rounded-2xl border border-white/60 bg-white/40 px-4 py-3 shadow-[0_12px_32px_rgba(15,23,42,0.14)] backdrop-blur-xl md:hidden">
          <div className="flex items-center justify-between gap-3">
            <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <MarkIcon />
              CCIN
            </Link>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((v) => !v)}
              className="rounded-md border border-slate-300/60 bg-white/50 px-3 py-1.5 text-xs font-medium text-slate-700"
            >
              {isOpen ? 'Close' : 'Menu'}
            </button>
          </div>

          {isOpen ? (
            <nav className="mt-3 grid gap-1.5 border-t border-slate-300/40 pt-3 text-xs text-slate-700">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-md px-2 py-2 transition-colors hover:bg-white/60"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  );
}
