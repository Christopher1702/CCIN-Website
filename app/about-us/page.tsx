'use client';

import React from 'react';
import Navbar from '../../components/Navbar';

const leadershipMembers = [
  {
    id: 'team-member-1',
    name: 'Full Name',
    role: 'Role / Title',
    bio: 'Add a short professional bio here to describe this team member, their background, and their area of focus.',
  },
  {
    id: 'team-member-2',
    name: 'Full Name',
    role: 'Role / Title',
    bio: 'Add a short professional bio here to describe this team member, their background, and their area of focus.',
  },
  {
    id: 'team-member-3',
    name: 'Full Name',
    role: 'Role / Title',
    bio: 'Add a short professional bio here to describe this team member, their background, and their area of focus.',
  },
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="mx-auto min-h-screen max-w-[1280px] px-3 pb-20 pt-28 md:pt-32">
        <section className="mt-8 px-1 pb-12 md:mt-12 md:pb-16">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600">/OUR TEAM</p>
            <h1 className="mt-2 text-4xl font-light leading-tight text-slate-900 md:text-5xl">
              Meet the Team
            </h1>
          </div>

          <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-3">
            {leadershipMembers.map((member) => (
              <article
                key={member.id}
                className="relative isolate overflow-hidden rounded-[28px] border border-white/45 bg-white/25 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.14),inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-xl transition-all duration-500 ease-out before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_18%_10%,rgba(255,255,255,0.5),transparent_45%),radial-gradient(circle_at_84%_92%,rgba(148,163,184,0.18),transparent_42%)] before:opacity-95 after:absolute after:inset-[1px] after:-z-10 after:rounded-[26px] after:border after:border-white/25 after:content-[''] hover:-translate-y-2 hover:shadow-[0_32px_60px_rgba(15,23,42,0.18)] md:p-5"
              >
                <div className="h-[260px] w-full rounded-[22px] border border-dashed border-slate-300/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.7),rgba(241,245,249,0.9))]" />
                <div className="mt-4">
                  <h2 className="text-2xl font-medium leading-tight text-slate-900">{member.name}</h2>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.08em] text-slate-500">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {member.bio}
                  </p>
                  <div className="mt-4 flex items-center gap-3 text-slate-500">
                    <a
                      href="#"
                      aria-label={`${member.name} LinkedIn`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/80 transition-colors hover:border-slate-300 hover:text-slate-900"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="currentColor">
                        <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3a1.97 1.97 0 1 0 0 3.94 1.97 1.97 0 0 0 0-3.94ZM20 12.8c0-3.16-1.69-4.63-3.95-4.63-1.82 0-2.64 1-3.1 1.7V8.5H9.57c.04.91 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.13-.92.27-.68.88-1.38 1.9-1.38 1.34 0 1.87 1.03 1.87 2.54V20H20v-7.2Z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      aria-label={`${member.name} profile`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/80 transition-colors hover:border-slate-300 hover:text-slate-900"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                        <path d="M6 6l12 12" />
                        <path d="M18 6L6 18" />
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
