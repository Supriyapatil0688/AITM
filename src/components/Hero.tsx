/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Building2, TrendingUp, Sparkles } from 'lucide-react';
import heroImage from '../assets/images/hero_aitm_center_1793272980213.jpg';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-slate-900 text-white pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(29,78,216,0.25),rgba(255,255,255,0))] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Clean unboxed editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400">
              <span className="flex items-center gap-1.5 bg-blue-950/80 border border-blue-800/80 px-3 py-1 rounded-full text-blue-300">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                Authorized Franchise Opportunity 2026–2027
              </span>
              <span className="text-slate-400 hidden sm:inline">·</span>
              <span className="text-slate-300 hidden sm:inline">Limited Territories Available</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
              Launch a High-ROI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">AITM Tech & Management</span> Franchise in Your City
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Partner with one of India’s most trusted education brands. Deliver high-demand training in Artificial Intelligence, Software Engineering, Data Science, and Business Management with full curriculum, LMS, trainer onboarding, and placement backup.
            </p>

            {/* Quick trust metrics row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-3.5">
                <div className="text-xs text-slate-400 font-medium">Investment Starts</div>
                <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">₹10 Lakhs</div>
                <div className="text-[11px] text-slate-400">+ Working Capital</div>
              </div>
              <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-3.5">
                <div className="text-xs text-slate-400 font-medium">Space Requirement</div>
                <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">~300 Sq. Ft.</div>
                <div className="text-[11px] text-slate-400">Compact Commercial</div>
              </div>
              <div className="col-span-2 sm:col-span-1 bg-slate-800/60 border border-slate-700/60 rounded-xl p-3.5">
                <div className="text-xs text-slate-400 font-medium">Launch Timeline</div>
                <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">30 Days</div>
                <div className="text-[11px] text-slate-400">Turnkey Support</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => scrollTo('inquiry')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
              >
                <span>Apply for Franchise</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => scrollTo('investment')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-700 hover:text-white rounded-xl border border-slate-700 transition-all cursor-pointer"
              >
                <span>Explore Investment Tiers</span>
              </button>
            </div>

            {/* Bullet reassurance */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero technical background needed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Centralized Student Admissions LMS</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Territory Exclusivity</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl p-2 bg-gradient-to-b from-blue-500/20 to-slate-800/40 border border-slate-700 shadow-2xl">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] bg-slate-800">
                <img
                  src={heroImage}
                  alt="AITM Franchise Modern Tech Institute Classroom and Lab"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating pill badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 p-3 rounded-xl text-left">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span className="font-semibold text-white flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-blue-400" />
                      Typical 300 Sq. Ft. Lab Layout
                    </span>
                    <span className="text-emerald-400 font-bold text-[11px] flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> High Student Footfall
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Equipped with modern computing stations, interactive mentor desks, and digital learning displays.
                  </p>
                </div>
              </div>

              {/* Verified Franchise Badge */}
              <div className="absolute -top-3 -right-3 bg-blue-600 text-white px-3.5 py-1.5 rounded-lg text-xs font-bold shadow-md flex items-center gap-1.5 border border-blue-400">
                <ShieldCheck className="w-4 h-4" />
                <span>ISO 9001:2015 Standards</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
