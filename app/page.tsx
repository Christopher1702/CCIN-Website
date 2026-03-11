'use client';

import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';

const heroImage =
  'https://unsplash.com/photos/ZTbMpMGB_7A/download?force=true&w=2000';
const cleanHousingDashboardImage = '/clean-housing-dashboard.png';
const footerCtaImage =
  'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1800&q=80';

export default function Page() {
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisibleSections([0, 1, 2, 3, 4]);
      return;
    }

    if (typeof window !== 'undefined' && !('IntersectionObserver' in window)) {
      setVisibleSections([0, 1, 2, 3, 4]);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number((entry.target as HTMLElement).dataset.sectionIndex);
          setVisibleSections((prev) => (prev.includes(index) ? prev : [...prev, index]));
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const sectionRevealStyle = (index: number) => ({
    opacity: visibleSections.includes(index) ? 1 : 0,
    transform: visibleSections.includes(index) ? 'translateY(0)' : 'translateY(70px)',
    transition: 'transform 950ms cubic-bezier(0.22, 1, 0.36, 1), opacity 900ms ease-out',
    transitionDelay: `${120 + index * 70}ms`,
    willChange: 'transform, opacity',
  });

  return (
    <div
      className="min-h-screen bg-white"
      id="home"
    >
      <Navbar />

      <main className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 px-3 pb-24 pt-28 md:gap-12 md:pb-28 md:pt-32">
        <section
          ref={(el) => {
            sectionRefs.current[0] = el;
          }}
          data-section-index={0}
          className="relative overflow-hidden rounded-[28px] border border-slate-300/20"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(12,18,20,0.62) 0%, rgba(12,18,20,0.15) 54%, rgba(12,18,20,0.42) 100%), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            ...sectionRevealStyle(0),
          }}
        >
          <div className="px-6 pb-16 pt-12 md:px-12 md:pb-24 md:pt-16">
            <h1 className="mt-4 max-w-[640px] text-4xl font-light leading-[1] text-white md:text-6xl">
              BC&apos;s First
              <br />
              Climate Change
              <br />
              Intelligence Network
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-7 text-sm text-white/95 md:text-base">
              <a href="#contact" className="border-b border-white pb-1 transition-opacity hover:opacity-80">
                Get in touch
              </a>
              <a href="#projects" className="border-b border-white pb-1 transition-opacity hover:opacity-80">
                Our services
              </a>
            </div>
          </div>
        </section>

        <section
          ref={(el) => {
            sectionRefs.current[1] = el;
          }}
          data-section-index={1}
          id="about"
          className="grid gap-6 px-1 py-12 md:grid-cols-2 md:gap-10 md:py-16"
          style={sectionRevealStyle(1)}
        >
          <h2 className="max-w-xl text-3xl font-light leading-tight text-slate-900 md:text-5xl">
            Measure clearly. Evaluate honestly. Improve continuously.
          </h2>
          <p className="max-w-2xl text-base font-light leading-relaxed text-slate-600 md:pt-2 md:text-lg">
            CCIN gives governments, companies, and investors a transparent way to track climate transition momentum
            through leading indicators, helping them spot gaps sooner, support clean sector initiatives, and keep
            government programs aligned with their goals.
          </p>
        </section>

        <section
          ref={(el) => {
            sectionRefs.current[2] = el;
          }}
          data-section-index={2}
          className="mt-6 px-1 py-2 md:mt-10"
          style={sectionRevealStyle(2)}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-800">/Approach</p>
          <h3 className="mt-2 text-3xl font-light leading-tight text-slate-900 md:text-5xl">Our Solution</h3>
          <img
            src={cleanHousingDashboardImage}
            alt="Clean housing dashboard"
            className="mt-6 block h-auto w-full rounded-[22px] object-contain shadow-[0_20px_38px_rgba(15,23,42,0.16),0_8px_18px_rgba(15,23,42,0.1)] transition-all duration-500 ease-out [transform:translateY(0)_scale(1)] hover:[transform:translateY(-12px)_scale(1.025)] hover:shadow-[0_40px_80px_rgba(15,23,42,0.3),0_16px_36px_rgba(15,23,42,0.2)]"
          />
        </section>

        <section
          ref={(el) => {
            sectionRefs.current[3] = el;
          }}
          data-section-index={3}
          className="mt-6 px-1 py-2 md:mt-20"
          style={sectionRevealStyle(3)}
        >
          <div className="grid gap-6 pb-5 md:grid-cols-[1fr_0.9fr] md:items-start">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-800">/Technology</p>
              <h3 className="mt-2 max-w-md text-3xl font-light leading-tight text-slate-900 md:text-5xl">
                CCIN Capabilities
              </h3>
            </div>
          </div>

          <div className="mt-2 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: 'Formal Indicator Framework',
                body: 'Indicators are selected using defined criteria (relevance, measurability, forward impact). Each metric has documented assumptions and definitions.',
                icon: (
                  <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12l2 2 4-4" />
                    <path d="M21 12c0 5-4 9-9 9s-9-4-9-9 4-9 9-9 9 4 9 9z" />
                  </svg>
                ),
              },
              {
                title: 'Data Standardization Pipeline',
                body: 'Raw datasets are cleaned, normalized, and aligned across time horizons to ensure comparability between sectors.',
                icon: (
                  <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 7h18" />
                    <path d="M3 12h18" />
                    <path d="M3 17h18" />
                    <path d="M7 5v14" />
                    <path d="M12 5v14" />
                    <path d="M17 5v14" />
                  </svg>
                ),
              },
              {
                title: 'Target Trajectory Modeling',
                body: 'For each indicator, the system calculates:',
                points: [
                  'Required annual growth rate to hit policy targets',
                  'Actual growth rate',
                  'Deviation from required trajectory',
                ],
                icon: (
                  <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19h16" />
                    <path d="M6 16l4-4 3 2 5-6" />
                    <path d="M18 8h-4" />
                  </svg>
                ),
              },
              {
                title: 'Momentum Scoring Engine',
                body: 'Each sector receives a quantified performance score based on:',
                points: [
                  'Current growth rate',
                  'Acceleration or deceleration trends',
                  'Target alignment',
                  'Statistical confidence',
                ],
                icon: (
                  <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 20h16" />
                    <path d="M7 20v-6" />
                    <path d="M12 20v-10" />
                    <path d="M17 20v-14" />
                  </svg>
                ),
              },
              {
                title: 'Forecasting and Risk Analysis',
                body: 'Time-series modeling projects forward trajectories under current momentum and identifies probability of shortfall.',
                icon: (
                  <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 20h18" />
                    <path d="M6 16l4-4 3 2 5-6" />
                    <path d="M18 8l-1.5-1.5" />
                  </svg>
                ),
              },
              {
                title: 'Transparent Methodology Documentation',
                body: 'All equations, assumptions, and weighting logic are version-controlled and publicly documented. This creates credibility and defensibility.',
                icon: (
                  <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                    <path d="M14 3v6h6" />
                    <path d="M8 13h8" />
                    <path d="M8 17h5" />
                  </svg>
                ),
              },
            ].map((item) => (
              <article
                key={item.title}
                className="relative isolate flex min-h-[260px] flex-col justify-between gap-4 overflow-hidden rounded-2xl border border-white/45 bg-white/20 p-4 shadow-[0_18px_36px_rgba(15,23,42,0.15),inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-xl transition-all duration-500 ease-out before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_18%_8%,rgba(255,255,255,0.55),transparent_48%),radial-gradient(circle_at_86%_94%,rgba(148,163,184,0.22),transparent_46%)] before:opacity-95 after:absolute after:inset-[1px] after:-z-10 after:rounded-[15px] after:border after:border-white/25 after:content-[''] hover:-translate-y-2 hover:scale-[1.01] hover:border-lime-300/85 hover:bg-white/26 hover:shadow-[0_0_0_1px_rgba(190,242,100,0.65),0_0_34px_rgba(163,230,53,0.32),0_30px_60px_rgba(15,23,42,0.2),inset_0_1px_0_rgba(255,255,255,0.7)] md:p-5"
              >
                <div>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/50 bg-white/35 text-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]">
                    {item.icon}
                  </span>
                  <h4 className="mt-3 text-xl font-semibold leading-tight text-slate-900 md:text-2xl">{item.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
                  {item.points ? (
                    <ul className="mt-2 space-y-1 text-sm leading-6 text-slate-600">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-500" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          ref={(el) => {
            sectionRefs.current[4] = el;
          }}
          data-section-index={4}
          id="contact"
          className="mt-10 pb-8 pt-2 md:mt-16 md:pb-12"
          style={sectionRevealStyle(4)}
        >
          <div className="relative isolate overflow-hidden rounded-3xl border border-white/45 bg-white/22 px-6 py-8 shadow-[0_22px_54px_rgba(15,23,42,0.16),inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-xl before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_18%_10%,rgba(255,255,255,0.55),transparent_46%),radial-gradient(circle_at_86%_92%,rgba(148,163,184,0.2),transparent_44%)] before:opacity-95 after:absolute after:inset-[1px] after:-z-10 after:rounded-[23px] after:border after:border-white/25 after:content-[''] md:px-10 md:py-10">
            <div
              className="overflow-hidden rounded-3xl border border-lime-900/20 px-6 py-10 text-center text-white md:px-10"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(8,20,6,0.38) 0%, rgba(8,20,6,0.48) 100%), url(${footerCtaImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <h3 className="text-4xl font-light leading-tight md:text-5xl">Grow with us</h3>
              <p className="mx-auto mt-3 max-w-xl text-sm font-light leading-7 text-white/90 md:text-base">
                Build stronger climate programs with clearer intelligence, sharper measurement, and decision-ready insight.
              </p>
              <form className="mx-auto mt-6 flex w-full max-w-md items-center rounded-full border border-lime-100/50 bg-white/20 p-1 backdrop-blur-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent px-4 text-sm text-white placeholder:text-white/80 outline-none"
                />
                <button
                  type="button"
                  className="rounded-full bg-lime-400 px-6 py-2 text-sm font-semibold text-lime-950 transition-colors hover:bg-lime-300"
                >
                  Submit
                </button>
              </form>
            </div>

            <div className="mt-10 grid gap-10 text-slate-700 md:grid-cols-4">
              <div>
                <p className="inline-flex items-center gap-2 text-xl font-semibold text-slate-900">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-lime-300 text-sm font-bold text-lime-900">/\</span>
                  CCIN
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  CCIN helps organizations navigate climate transition with credible data, transparent methods, and practical insight.
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-900">Quick Links</p>
                <div className="mt-3 grid gap-2 text-sm">
                  {['Home', 'Team', 'Blog', 'About us'].map((item) => (
                    <a key={item} href="#" className="transition-colors hover:text-lime-700">{item}</a>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-900">Services</p>
                <div className="mt-3 grid gap-2 text-sm">
                  {['Climate consulting', 'Sustainable practices', 'Program planning', 'Data infrastructure', 'Training and workshops'].map((item) => (
                    <a key={item} href="#" className="transition-colors hover:text-lime-700">{item}</a>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-900">Social</p>
                <div className="mt-3 grid gap-2 text-sm">
                  {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((item) => (
                    <a key={item} href="#" className="transition-colors hover:text-lime-700">{item}</a>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/35 pt-5 text-xs text-slate-600">
              <p>All rights reserved 2026 | CCIN</p>
              <a href="#" className="transition-colors hover:text-lime-700">Terms &amp; conditions</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
