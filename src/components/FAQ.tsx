/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do I need a software or technical background to run an AITM Franchise?',
      a: 'No. As a franchise partner, your primary role is center management, local student counseling, community outreach, and team leadership. AITM provides complete course syllabi, student learning portals, and conducts the hiring and certification tests for your technical instructors through our Train-the-Trainer program.',
    },
    {
      q: 'What is the minimum total investment required to launch?',
      a: 'The franchise begins at ₹10 Lakhs (ranging to ₹12–15+ Lakhs depending on your chosen center scale and city tier). This covers the franchise license, computer hardware, LAN networking, 300 sq. ft. interior branding, marketing launch package, and essential initial working capital buffer.',
    },
    {
      q: 'What are the exact space specifications for the 300 sq. ft. center?',
      a: 'A commercial area of approximately 300 sq. ft. is ideal. It should comfortably house 12–15 student workstations, a counseling/reception counter, and a faculty station. It should ideally be located near colleges, coaching hubs, or prime commercial streets with convenient public transit.',
    },
    {
      q: 'How does AITM assist in student placements?',
      a: 'AITM maintains a centralized corporate placement desk with over 150+ technology, fintech, and digital corporate recruiters across India. When your students complete their capstone projects and pass our assessment tests, their profiles are routed directly to national campus interview drives.',
    },
    {
      q: 'How quickly can our center become operational after signing?',
      a: 'Typically within 30 days. We provide comprehensive center fit-out guidelines, ship branding collateral, configure your student LMS accounts, and conduct instructor certification while your interior branding is finalized.',
    },
    {
      q: 'How are candidate inquiries submitted through this website handled?',
      a: 'All inquiries submitted via the embedded Google Form are captured instantly on Google’s secure servers and automatically logged with timestamps in a linked Google Sheets response spreadsheet. The franchise owner can review inquiries in real-time or export them to Microsoft Excel (.xlsx) anytime.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const scrollToInquiry = () => {
    const el = document.getElementById('inquiry');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/50 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Clear Answers
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Everything you need to know about the investment, commercial setup, syllabus, and operational returns of an AITM franchise.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/80 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-slate-100 text-slate-600 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-blue-50 text-blue-700' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA prompt */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="text-left">
            <div className="font-bold text-slate-900 text-sm">Have more questions?</div>
            <div className="text-xs text-slate-500">Our franchise expansion managers are available for a 1-on-1 consultation.</div>
          </div>
          <button
            onClick={scrollToInquiry}
            className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shrink-0 flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            <span>Submit Your Application</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
