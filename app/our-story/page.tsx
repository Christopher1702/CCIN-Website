'use client';

import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../../components/Navbar';
import Link from 'next/link';

const screenshot2026Image = '/screenshot-2026.png';
const ccarLogoImage = '/CCAR-logo.png';
const bcLogoImage = '/BC-logo.png';
const cleanbcRoadmapThumbnailImage = '/cleanbc-roadmap-2030.png';

const responseThumbnails = [
  {
    image: cleanbcRoadmapThumbnailImage,
    alt: 'CleanBC Roadmap to 2030 document reference',
    caption: 'Source: CleanBC Roadmap to 2030 (PDF)',
    description: 'Official BC roadmap outlining actions and targets through 2030.',
    href: 'https://www2.gov.bc.ca/assets/gov/environment/climate-change/action/cleanbc/cleanbc_roadmap_2030.pdf',
  },
  {
    image: bcLogoImage,
    alt: 'British Columbia logo',
    caption: 'Provincial projections of greenhouse gas emissions',
    description: 'B.C. produces forecasts of future greenhouse gas (GHG) emissions in order to assess progress toward climate goals and the impact of climate policies.',
    href: 'https://www2.gov.bc.ca/gov/content/environment/climate-change/data/provincial-forecast',
  },
  {
    image: ccarLogoImage,
    alt: 'CCAR logo',
    caption: 'Climate Change Accountability Report',
    description: "The report publishes the latest provincial emissions data, details the Province's spending on climate action, and assesses progress towards our emissions reduction targets.",
    href: 'https://www2.gov.bc.ca/assets/gov/environment/climate-change/action/cleanbc/2025_climate_change_accountability_report.pdf',
  },
];

export default function OurStoryPage() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canObserve = 'IntersectionObserver' in window;

    if (reducedMotion || !canObserve) {
      const timer = setTimeout(() => setVisibleItems(Array.from({ length: 17 }, (_, index) => index)), 0);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number((entry.target as HTMLElement).dataset.revealIndex);
          setVisibleItems((prev) => (prev.includes(index) ? prev : [...prev, index]));
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const revealStyle = (index: number) => ({
    opacity: visibleItems.includes(index) ? 1 : 0,
    transform: visibleItems.includes(index) ? 'translateY(0)' : 'translateY(70px)',
    transition: 'transform 950ms cubic-bezier(0.22, 1, 0.36, 1), opacity 900ms ease-out',
    transitionDelay: `${90 + index * 55}ms`,
    willChange: 'transform, opacity',
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 px-3 pb-20 pt-28 font-light text-slate-800 md:pt-32">
        <section className="mt-3 py-2 md:mt-8 md:py-3">
          <div className="mb-10 md:mb-14">
            <div
              ref={(el) => {
                itemRefs.current[0] = el;
              }}
              data-reveal-index={0}
              style={revealStyle(0)}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600">/BACKSTORY</p>
              <h2 className="mt-2 text-xl leading-tight text-slate-900 md:text-3xl">
                Why the need for CCIN?
              </h2>
            </div>
            <h1
              ref={(el) => {
                itemRefs.current[1] = el;
              }}
              data-reveal-index={1}
              style={revealStyle(1)}
              className="font-heathergreen mt-6 max-w-[1120px] text-5xl leading-tight text-slate-900 md:mt-8 md:text-7xl"
            >
              Across Canada and British Columbia,
              <br />
              a consistent headline is emerging...
            </h1>
            <div
              ref={(el) => {
                itemRefs.current[2] = el;
              }}
              data-reveal-index={2}
              style={revealStyle(2)}
              className="news-ticker news-ticker-bleed mt-8 md:mt-10"
            >
              <div className="news-ticker-track">
                <div className="news-ticker-group">
                  <span>Policy momentum weakens</span>
                  <span>2030 targets at risk</span>
                  <span>Emissions reductions remain modest</span>
                  <span>Measurement lag delays action</span>
                </div>
                <div className="news-ticker-group" aria-hidden="true">
                  <span>Policy momentum weakens</span>
                  <span>2030 targets at risk</span>
                  <span>Emissions reductions remain modest</span>
                  <span>Measurement lag delays action</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-10 md:gap-14">
            <div className="self-start space-y-6">
              <div
                ref={(el) => {
                  itemRefs.current[3] = el;
                }}
                data-reveal-index={3}
                style={revealStyle(3)}
                className="relative isolate overflow-hidden rounded-3xl border border-white/45 bg-white/22 shadow-[0_16px_36px_rgba(15,23,42,0.15),inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-xl transition-all duration-500 ease-out before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_18%_8%,rgba(255,255,255,0.5),transparent_48%),radial-gradient(circle_at_88%_95%,rgba(148,163,184,0.2),transparent_44%)] before:opacity-95 after:absolute after:inset-[1px] after:-z-10 after:rounded-[23px] after:border after:border-white/25 after:content-[''] hover:-translate-y-1.5 hover:border-white/70 hover:bg-white/28 hover:shadow-[0_24px_50px_rgba(15,23,42,0.2)]"
              >
                <img
                  src={screenshot2026Image}
                  alt="Screenshot 2026"
                  className="block h-auto w-full object-contain transition-transform duration-700 ease-out hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 px-1 pb-8 md:mt-8 md:pb-12">
          <div
            ref={(el) => {
              itemRefs.current[4] = el;
            }}
            data-reveal-index={4}
            style={revealStyle(4)}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600">/OUR RESPONSE</p>
            <h2 className="mt-2 text-4xl font-light leading-tight text-slate-900 md:text-5xl">
              Our response?
            </h2>
          </div>
          <div className="mt-6 grid items-start gap-8 md:mt-8 md:grid-cols-[minmax(0,1fr)_300px] md:gap-10">
            <div className="max-w-[900px] space-y-6 text-base leading-8 text-slate-800 md:space-y-8 md:text-lg md:leading-9">
              <p
                ref={(el) => {
                  itemRefs.current[5] = el;
                }}
                data-reveal-index={5}
                style={revealStyle(5)}
                className="first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-5xl first-letter:font-semibold first-letter:leading-[0.82] first-letter:text-slate-900 md:first-letter:text-7xl"
              >
                Climate Change Intelligence Network (CCIN) is a quantitative analytics platform designed to measure the
                real-world pace of the clean energy transition. The system aggregates large datasets across multiple
                sectors and transforms them into structured performance metrics that reveal whether markets are actually
                moving fast enough to meet climate and energy transition targets.
              </p>
              <div
                ref={(el) => {
                  itemRefs.current[6] = el;
                }}
                data-reveal-index={6}
                style={revealStyle(6)}
                className="space-y-2"
              >
                <h3 className="text-xl font-medium leading-tight text-slate-900 md:text-2xl">Why this approach</h3>
                <p>
                  Instead of relying on delayed emissions statistics, the platform tracks leading indicators that show
                  transition momentum as it happens. These indicators are standardized, analyzed, and modeled to determine
                  whether real-world growth trends align with long-term transition goals.
                </p>
              </div>
              <div
                ref={(el) => {
                  itemRefs.current[7] = el;
                }}
                data-reveal-index={7}
                style={revealStyle(7)}
                className="space-y-2"
              >
                <h3 className="text-xl font-medium leading-tight text-slate-900 md:text-2xl">How it works</h3>
                <p>
                  At its core, CCIN functions as a performance intelligence engine. It cleans and normalizes raw
                  datasets, compares actual growth rates against required trajectories, and generates forward-looking
                  forecasts. The result is a set of decision-grade insights such as sector performance scores,
                  gap-to-target metrics, and early warning signals when progress is falling behind expectations.
                </p>
              </div>
              <div
                ref={(el) => {
                  itemRefs.current[8] = el;
                }}
                data-reveal-index={8}
                style={revealStyle(8)}
                className="space-y-2"
              >
                <h3 className="text-xl font-medium leading-tight text-slate-900 md:text-2xl">Who it helps</h3>
                <p>
                  For organizations operating in climate technology, this system provides a clear view of where adoption
                  is accelerating, where demand is emerging, and where market opportunities exist. By translating
                  fragmented public data into structured analytics, the platform reduces uncertainty and supports
                  strategic decision-making, capital allocation, and long-term planning.
                </p>
              </div>
              <div
                ref={(el) => {
                  itemRefs.current[9] = el;
                }}
                data-reveal-index={9}
                style={revealStyle(9)}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 md:p-6"
              >
                <p className="text-lg font-medium leading-8 text-slate-900 md:text-xl">
                  A transparent, data-driven system that measures transition momentum and reveals where the next wave of
                  growth is occurring.
                </p>
                <Link
                  href="/#contact"
                  className="mt-4 inline-flex items-center border-b border-slate-900 pb-1 text-sm font-semibold uppercase tracking-[0.08em] text-slate-900 transition-opacity hover:opacity-70"
                >
                  Talk to us
                </Link>
              </div>
            </div>

            <aside className="space-y-4 md:pt-1">
              <div className="flex items-center gap-2">
                <span className="relative inline-flex h-3 w-3" aria-label="Live updates indicator">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                </span>
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-700">
                  Recommended Reads
                </h3>
              </div>
              {responseThumbnails.map((item, idx) => (
                <div
                  key={item.caption}
                  ref={(el) => {
                    itemRefs.current[10 + idx] = el;
                  }}
                  data-reveal-index={10 + idx}
                  style={revealStyle(10 + idx)}
                >
                  <article className="rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_20px_38px_rgba(15,23,42,0.16),0_8px_18px_rgba(15,23,42,0.1)] transition-all duration-500 ease-out [transform:translateY(0)_scale(1)] hover:[transform:translateY(-12px)_scale(1.025)] hover:shadow-[0_40px_80px_rgba(15,23,42,0.3),0_16px_36px_rgba(15,23,42,0.2)]">
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noreferrer" className="block transition-opacity hover:opacity-85">
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="block h-auto w-full rounded-xl object-cover"
                        />
                        <h4 className="mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-slate-600">
                          {item.caption}
                        </h4>
                        <p className="mt-1 text-xs leading-5 text-slate-500">{item.description}</p>
                      </a>
                    ) : (
                      <>
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="block h-auto w-full rounded-xl object-cover"
                        />
                        <h4 className="mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-slate-600">
                          {item.caption}
                        </h4>
                        <p className="mt-1 text-xs leading-5 text-slate-500">{item.description}</p>
                      </>
                    )}
                  </article>
                </div>
              ))}
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}
