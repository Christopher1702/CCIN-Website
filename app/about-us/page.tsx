'use client';

import React from 'react';
import Navbar from '../../components/Navbar';

const leadershipMembers = [
  {
    id: 'team-member-1',
    name: 'Udhayan Dherman (Christopher)',
    role: 'Founder & Chief Executive Officer',
    image: '/Udhayan.png',
  },
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="mx-auto min-h-screen max-w-[1280px] px-3 pb-20 pt-28 md:pt-32">
        <section className="mt-10 px-1 pb-12 md:mt-16 md:pb-16">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600">/OUR TEAM</p>
            <h1 className="mt-2 text-4xl font-light leading-tight text-slate-900 md:text-5xl">
              Meet the Team
            </h1>
          </div>

          <div className="mx-auto mt-14 max-w-[1120px] md:mt-20">
            {leadershipMembers.map((member) => (
              <article
                key={member.id}
                className="grid items-start gap-8 md:grid-cols-[280px_minmax(0,1fr)] md:gap-16"
              >
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-auto w-full max-w-[280px] rounded-[28px] object-cover object-center shadow-[0_18px_34px_rgba(15,23,42,0.2),0_38px_70px_rgba(15,23,42,0.14)] ring-1 ring-slate-200/70"
                  />
                ) : null}
                <div className="max-w-[720px] pt-2 md:pt-4">
                  <h2 className="whitespace-nowrap text-[1.35rem] font-semibold uppercase leading-none tracking-[0.12em] text-slate-800 md:text-[1.8rem]">
                    {member.name}
                  </h2>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
                    {member.role}
                  </p>
                  <div className="mt-6 flex items-center gap-3 text-slate-500">
                    <a
                      href="https://www.linkedin.com/in/udhayan-dherman-christopher-687113201"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${member.name} LinkedIn`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/80 transition-colors hover:border-slate-300 hover:text-slate-900"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="currentColor">
                        <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3a1.97 1.97 0 1 0 0 3.94 1.97 1.97 0 0 0 0-3.94ZM20 12.8c0-3.16-1.69-4.63-3.95-4.63-1.82 0-2.64 1-3.1 1.7V8.5H9.57c.04.91 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.13-.92.27-.68.88-1.38 1.9-1.38 1.34 0 1.87 1.03 1.87 2.54V20H20v-7.2Z" />
                      </svg>
                    </a>
                    <a
                      href="https://christopherdherman6.wixsite.com/udhayan-christopher"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${member.name} profile`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/80 transition-colors hover:border-slate-300 hover:text-slate-900"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="8" />
                        <path d="M4 12h16" />
                        <path d="M12 4a12 12 0 0 1 0 16" />
                        <path d="M12 4a12 12 0 0 0 0 16" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
