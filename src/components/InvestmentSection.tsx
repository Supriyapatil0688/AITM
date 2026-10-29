/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Check, Info, Calculator, ArrowRight, ShieldCheck, IndianRupee } from 'lucide-react';
import { INVESTMENT_TIERS } from '../config/constants';

export const InvestmentSection: React.FC = () => {
  // Interactive ROI Calculator states
  const [cityTier, setCityTier] = useState<'tier1' | 'tier2' | 'tier3'>('tier2');
  const [studentsPerQuarter, setStudentsPerQuarter] = useState<number>(35);
  const [averageCourseFee, setAverageCourseFee] = useState<number>(25000);

  // Calculations
  const quarterlyRevenue = studentsPerQuarter * averageCourseFee;
  const monthlyRevenue = Math.round(quarterlyRevenue / 3);
  
  // Estimated monthly operating expenses based on 300 sq. ft. model
  const estimatedRent = cityTier === 'tier1' ? 35000 : cityTier === 'tier2' ? 22000 : 15000;
  const facultyStaff = cityTier === 'tier1' ? 55000 : cityTier === 'tier2' ? 42000 : 30000;
  const utilitiesAdminMarketing = cityTier === 'tier1' ? 25000 : cityTier === 'tier2' ? 18000 : 12000;
  const totalMonthlyOpex = estimatedRent + facultyStaff + utilitiesAdminMarketing;
  
  const estimatedMonthlyGrossProfit = Math.max(0, monthlyRevenue - totalMonthlyOpex);
  const estimatedAnnualNet = estimatedMonthlyGrossProfit * 12;

  const scrollToInquiry = () => {
    const el = document.getElementById('inquiry');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="investment" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
            Transparent Financial Structure
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Investment Tiers & Expected Returns
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            The AITM franchise model starts at <strong className="text-slate-900">₹10 Lakhs</strong> for a complete 300 sq. ft. operational center. Additional working capital buffer is budgeted for early months to cover rent, utilities, and staff until batch cycles mature.
          </p>
        </div>

        {/* Investment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
          {INVESTMENT_TIERS.map((tier) => (
            <div
              key={tier.tier}
              className={`rounded-2xl flex flex-col justify-between transition-all relative ${
                tier.highlight
                  ? 'bg-white border-2 border-blue-600 shadow-xl shadow-blue-500/10'
                  : 'bg-white border border-slate-200/90 shadow-sm hover:shadow-md'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  Most Popular Model
                </div>
              )}

              <div className="p-7 sm:p-8">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                  {tier.recommendedFor}
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  {tier.tier}
                </h3>

                <div className="mt-4 mb-6 pb-6 border-b border-slate-100">
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                    {tier.range}
                  </div>
                  <div className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    <Info className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Includes setup + working capital allocation</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2.5 text-xs text-slate-600">
                    <strong className="text-slate-800 shrink-0">Space Required:</strong>
                    <span>{tier.spaceNeeded}</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-600">
                    <strong className="text-slate-800 shrink-0">Batch Capacity:</strong>
                    <span>{tier.capacity}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                    What&apos;s Included:
                  </div>
                  <ul className="space-y-2.5">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 leading-normal">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-7 sm:p-8 pt-0">
                <button
                  onClick={scrollToInquiry}
                  className={`w-full py-3 px-4 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    tier.highlight
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  <span>Select {tier.range}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Investment Allocation Breakdown Table */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 mb-16 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Standard ₹10–12 Lakh Initial Fund Utilization
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Representative capital budget for a 300 sq. ft. standard technical center
              </p>
            </div>
            <div className="text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200/60 self-start sm:self-auto">
              Turnkey Setup Ready in 30 Days
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">AITM Franchise Fee</div>
              <div className="text-lg font-bold text-slate-900 mt-1">₹3,00,000 – ₹3,50,000</div>
              <p className="text-[11px] text-slate-500 mt-1">
                3-year brand license, LMS access, accreditation certificates, and syllabus repository.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Lab Hardware & LAN</div>
              <div className="text-lg font-bold text-slate-900 mt-1">₹3,50,000 – ₹4,20,000</div>
              <p className="text-[11px] text-slate-500 mt-1">
                12–15 desktop/laptop units, gigabit networking, UPS power backup, and projector screen.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">300 Sq.Ft Interior & Signage</div>
              <div className="text-lg font-bold text-slate-900 mt-1">₹1,80,000 – ₹2,40,000</div>
              <p className="text-[11px] text-slate-500 mt-1">
                Modular computer tables, ergonomic chairs, reception desk, LED glow signboard, and brand posters.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Marketing & Working Buffer</div>
              <div className="text-lg font-bold text-slate-900 mt-1">₹1,70,000 – ₹2,50,000</div>
              <p className="text-[11px] text-slate-500 mt-1">
                Grand launch marketing, digital ads, print brochures, and reserve fund for initial operational months.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive ROI & Revenue Calculator */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="max-w-2xl mb-8">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
              <Calculator className="w-4 h-4" />
              Interactive Financial Simulation
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Estimate Your Center’s Revenue & Profitability
            </h3>
            <p className="text-sm text-slate-300 mt-2">
              Adjust student enrollment numbers and city tier to see realistic monthly projections based on proven AITM center metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* City Tier Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Target City Location
                </label>
                <div className="grid grid-cols-3 gap-2 p-1 bg-slate-800 rounded-xl border border-slate-700">
                  <button
                    type="button"
                    onClick={() => setCityTier('tier1')}
                    className={`py-2 px-3 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      cityTier === 'tier1'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Tier 1 / Metro
                  </button>
                  <button
                    type="button"
                    onClick={() => setCityTier('tier2')}
                    className={`py-2 px-3 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      cityTier === 'tier2'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Tier 2 City
                  </button>
                  <button
                    type="button"
                    onClick={() => setCityTier('tier3')}
                    className={`py-2 px-3 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      cityTier === 'tier3'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Tier 3 / District
                  </button>
                </div>
              </div>

              {/* Slider 1: Students per Quarter */}
              <div>
                <div className="flex justify-between items-center text-sm font-semibold mb-2">
                  <span className="text-slate-300">Quarterly Student Enrollments:</span>
                  <span className="text-blue-400 font-mono text-base font-bold">{studentsPerQuarter} Students</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="100"
                  step="5"
                  value={studentsPerQuarter}
                  onChange={(e) => setStudentsPerQuarter(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>15 (Part-time single lab)</span>
                  <span>50 (Moderate batches)</span>
                  <span>100 (Full-capacity multiple shifts)</span>
                </div>
              </div>

              {/* Slider 2: Average Course Fee */}
              <div>
                <div className="flex justify-between items-center text-sm font-semibold mb-2">
                  <span className="text-slate-300">Average Course Fee / Student:</span>
                  <span className="text-blue-400 font-mono text-base font-bold">₹{averageCourseFee.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="15000"
                  max="50000"
                  step="2500"
                  value={averageCourseFee}
                  onChange={(e) => setAverageCourseFee(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>₹15,000 (Short Cert)</span>
                  <span>₹25,000 (3-Month Tech Diploma)</span>
                  <span>₹50,000 (AI & Full Stack Master)</span>
                </div>
              </div>
            </div>

            {/* Projection Card */}
            <div className="lg:col-span-5 bg-slate-800/90 border border-slate-700 rounded-2xl p-6 sm:p-7 text-left space-y-4">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Financial Summary Estimate
              </div>

              <div className="pb-4 border-b border-slate-700/80">
                <div className="text-xs text-slate-400">Estimated Monthly Revenue</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono mt-0.5">
                  ₹{monthlyRevenue.toLocaleString('en-IN')}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  Based on ₹{(quarterlyRevenue).toLocaleString('en-IN')} quarterly admissions
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Estimated Monthly OPEX:</span>
                  <span className="font-mono text-slate-400">₹{totalMonthlyOpex.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Estimated Operating Margin:</span>
                  <span className="font-mono text-emerald-400 font-bold">
                    {monthlyRevenue > 0 ? Math.round((estimatedMonthlyGrossProfit / monthlyRevenue) * 100) : 0}%
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-700">
                <div className="text-xs text-slate-400">Estimated Monthly Net Profit</div>
                <div className="text-2xl font-extrabold text-emerald-400 font-mono mt-0.5">
                  ₹{estimatedMonthlyGrossProfit.toLocaleString('en-IN')} <span className="text-xs font-normal text-slate-400">/ month</span>
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Approx. <strong className="text-white">₹{(estimatedAnnualNet / 100000).toFixed(1)} Lakhs / year</strong> net earnings
                </div>
              </div>

              <button
                onClick={scrollToInquiry}
                className="w-full mt-2 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Apply with this Profile</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
