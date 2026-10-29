/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Building, 
  Monitor, 
  Wifi, 
  Zap, 
  MapPin, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import facilityImage from '../assets/images/facility_office_space_1793272981253.jpg';
import { SPACE_BREAKDOWN } from '../config/constants';

export const SpaceRequirement: React.FC = () => {
  const scrollToInquiry = () => {
    const el = document.getElementById('inquiry');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="space" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image & Blueprint visual */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl aspect-[4/3] bg-slate-100">
              <img
                src={facilityImage}
                alt="AITM Commercial Training Center Reception & Counseling"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 border border-slate-200 shadow-md">
                <div className="flex items-center justify-between text-xs font-bold text-slate-900 mb-1">
                  <span className="flex items-center gap-1.5 text-blue-700">
                    <Building className="w-4 h-4" />
                    Standard 300 Sq. Ft. Blueprint
                  </span>
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-mono">
                    High Student Flow
                  </span>
                </div>
                <p className="text-xs text-slate-600">
                  Designed for maximum space efficiency with dedicated counseling counter, computer lab zone, and faculty station.
                </p>
              </div>
            </div>

            {/* Quick Location Suitability checklist */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 text-left">
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-blue-700" />
                Ideal Commercial Locations
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Near colleges or coaching hubs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Main road visibility or commercial complex</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>1st or 2nd floor with good footfall</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dedicated parking / metro access</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Space Requirements & Specifications */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
                Facility & Infrastructure
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
                Compact ~300 Sq. Ft. Commercial Space Required
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                You don’t need an expensive commercial floor. AITM centers are optimized for smart ~300 sq. ft. spaces that minimize monthly rental liabilities while maximizing student seating capacity and brand prestige.
              </p>
            </div>

            {/* Breakdown cards */}
            <div className="space-y-3">
              {SPACE_BREAKDOWN.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-200 hover:border-blue-400 bg-white transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-xs"
                >
                  <div>
                    <div className="font-bold text-slate-900 text-sm">
                      {item.zone}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {item.detail}
                    </div>
                  </div>
                  <div className="shrink-0 bg-blue-50 text-blue-700 font-bold font-mono text-xs px-3 py-1.5 rounded-lg border border-blue-200/50 self-start sm:self-auto">
                    {item.area}
                  </div>
                </div>
              ))}
            </div>

            {/* Essential Utilities Matrix */}
            <div className="pt-2">
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                Mandatory Center Utilities
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
                  <Monitor className="w-5 h-5 text-blue-700 mx-auto mb-1" />
                  <div className="text-xs font-bold text-slate-900">12–15 PCs</div>
                  <div className="text-[10px] text-slate-500">i5/i7 or Apple M-series</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
                  <Wifi className="w-5 h-5 text-blue-700 mx-auto mb-1" />
                  <div className="text-xs font-bold text-slate-900">100+ Mbps</div>
                  <div className="text-[10px] text-slate-500">High-speed dual broadband</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
                  <Zap className="w-5 h-5 text-blue-700 mx-auto mb-1" />
                  <div className="text-xs font-bold text-slate-900">Power Backup</div>
                  <div className="text-[10px] text-slate-500">Online UPS / Inverter</div>
                </div>
              </div>
            </div>

            {/* Callout button */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={scrollToInquiry}
                className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Have a 300 Sq.Ft Space? Apply Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-xs text-slate-500 sm:text-left text-center">
                Don’t have a space yet? We assist with site selection.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
