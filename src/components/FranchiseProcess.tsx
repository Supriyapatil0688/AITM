/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  ClipboardCheck, 
  PhoneCall, 
  FileText, 
  Wrench, 
  Rocket, 
  Quote, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import partnerPhoto from '../assets/images/franchise_partner_success_1793272980705.jpg';

export const FranchiseProcess: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Submit Franchise Inquiry',
      desc: 'Fill out the 4-point official inquiry form below detailing your investment budget (₹10L+) and space readiness.',
      time: 'Day 1',
      icon: ClipboardCheck,
    },
    {
      step: '02',
      title: 'Discovery Call & Territory Check',
      desc: 'Our franchise expansion head connects with you to evaluate available pin codes and walk you through unit economics.',
      time: 'Day 2',
      icon: PhoneCall,
    },
    {
      step: '03',
      title: 'Site Approval & Agreement',
      desc: 'Joint review of your proposed 300 sq. ft. commercial space, followed by legal agreement execution and territory lock.',
      time: 'Day 5–7',
      icon: FileText,
    },
    {
      step: '04',
      title: 'Fit-Out & Faculty Training',
      desc: 'We dispatch interior layout specs, install the LMS portal, and conduct Train-The-Trainer certification for your faculty.',
      time: 'Day 8–24',
      icon: Wrench,
    },
    {
      step: '05',
      title: 'Grand Launch & First Batch',
      desc: 'Launch localized digital and offline marketing campaigns, inaugurate your center, and commence the first student batches.',
      time: 'Day 30',
      icon: Rocket,
    },
  ];

  const scrollToInquiry = () => {
    const el = document.getElementById('inquiry');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="process" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
            Seamless Onboarding Roadmap
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            From Application to Grand Opening in 30 Days
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Our step-by-step onboarding blueprint ensures minimal downtime. We guide you through site selection, IT setup, teacher certifications, and grand launch marketing.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative mb-20">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between hover:border-blue-400 hover:bg-white hover:shadow-md transition-all text-left relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/50">
                      Step {item.step}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">
                      {item.time}
                    </span>
                  </div>

                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-blue-600 group-hover:text-white transition-colors mb-3">
                    <Icon className="w-4 h-4" />
                  </div>

                  <h3 className="font-bold text-slate-900 text-sm mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Partner Spotlight / Testimonial Box */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-800 border border-slate-700">
                <img
                  src={partnerPhoto}
                  alt="AITM Franchise Partner in their operational modern center"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <div className="text-sm font-bold text-white">Rajeshwar K. & Team</div>
                  <div className="text-xs text-blue-300">AITM Center Director · Operational Since 2024</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="w-10 h-10 rounded-xl bg-blue-600/30 text-blue-400 flex items-center justify-center">
                <Quote className="w-5 h-5" />
              </div>

              <blockquote className="text-base sm:text-lg text-slate-200 italic leading-relaxed">
                &ldquo;Starting an educational center from scratch seemed daunting until we met the AITM leadership. They provided turnkey lab blueprints, certified our instructors within two weeks, and our very first batch of AI & Full Stack students had 28 enrollments. We achieved operational break-even by month 5.&rdquo;
              </blockquote>

              <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-400 border-t border-slate-800">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>350 Sq. Ft. Commercial Lab</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>140+ Students Placed Locally</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% On-Time Central Support</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={scrollToInquiry}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-sm"
                >
                  <span>Start Your Center Journey</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
