/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ExternalLink, 
  RotateCw, 
  ShieldCheck, 
  FileSpreadsheet, 
  HelpCircle, 
  CheckCircle2, 
  Clock, 
  Lock,
  Sparkles
} from 'lucide-react';
import { GOOGLE_FORM_URL, FORM_QUESTIONS_INFO, BRAND } from '../config/constants';

interface FranchiseInquirySectionProps {
  onOpenOwnerGuide: () => void;
}

export const FranchiseInquirySection: React.FC<FranchiseInquirySectionProps> = ({
  onOpenOwnerGuide,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);

  const handleRefresh = () => {
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  return (
    <section id="inquiry" className="py-20 bg-slate-900 text-white relative">
      {/* Background ambient gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(37,99,235,0.18),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950/80 border border-blue-800/80 px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            Official Application Desk
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white text-balance">
            Apply for Your AITM Centre Franchise
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Fill in the 4 quick questions below to submit your confidential application directly to the AITM franchise evaluation committee.
          </p>
        </div>

        {/* 2-Column Grid: Form Preview & Guidelines + Embedded Iframe */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form Info & Guidance */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* Essential Candidate Checklist */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 shadow-md">
              <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-400" />
                Before You Submit
              </h3>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-900/60 text-blue-300 font-bold flex items-center justify-center shrink-0 text-[11px]">
                    1
                  </span>
                  <span>
                    Minimum starting capital is <strong className="text-white">₹10 Lakhs</strong> + recommended initial operating buffer.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-900/60 text-blue-300 font-bold flex items-center justify-center shrink-0 text-[11px]">
                    2
                  </span>
                  <span>
                    A commercial office of <strong className="text-white">~300 sq. ft.</strong> is needed (or ability to lease within 30 days).
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-900/60 text-blue-300 font-bold flex items-center justify-center shrink-0 text-[11px]">
                    3
                  </span>
                  <span>
                    Submissions are timestamped and logged directly in our secure central database.
                  </span>
                </li>
              </ul>
            </div>

            {/* Questions Summary Overview */}
            <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Inquiry Form Questions
                </span>
                <span className="text-[11px] font-mono text-blue-400 bg-blue-950 px-2 py-0.5 rounded border border-blue-900">
                  4 Questions
                </span>
              </div>

              <div className="space-y-4">
                {FORM_QUESTIONS_INFO.map((q) => (
                  <div key={q.number} className="border-b border-slate-700/60 pb-3 last:border-b-0 last:pb-0">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span className="font-mono text-blue-400 font-bold">Q{q.number}</span>
                      <span className="text-[10px] text-slate-400">{q.badge}</span>
                    </div>
                    <div className="text-sm font-semibold text-slate-200">
                      {q.question}
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 italic">
                      {q.helper}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Storage Assurance & Owner Guide Trigger */}
            <div className="p-5 rounded-2xl bg-blue-950/40 border border-blue-800/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <FileSpreadsheet className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white">
                    Google Sheets & Excel Response Sync
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    All form answers are instantly captured in linked Google Sheets with exact timestamps and full data exportability.
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={onOpenOwnerGuide}
                className="shrink-0 px-3 py-1.5 bg-blue-700 hover:bg-blue-600 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer self-start sm:self-auto"
              >
                Owner Guide
              </button>
            </div>

            {/* Direct Fallback Contact */}
            <div className="text-xs text-slate-400 flex items-center justify-between pt-2">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                Response within 24 business hours
              </span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-slate-500" />
                100% Confidential
              </span>
            </div>
          </div>

          {/* Right Column: Google Form Iframe Container */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 text-slate-900 flex flex-col">
              {/* Iframe Top Bar / Control Toolbar */}
              <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span>AITM Official Franchise Form</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleRefresh}
                    title="Reload Form"
                    className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 rounded-md transition-colors cursor-pointer flex items-center gap-1 text-xs"
                  >
                    <RotateCw className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Refresh</span>
                  </button>

                  <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors cursor-pointer border border-blue-200"
                    title="Open form in dedicated new window"
                  >
                    <span>Open in New Tab</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Embedded Iframe Container with Loading Indicator */}
              <div className="relative w-full min-h-[640px] sm:min-h-[720px] bg-slate-50">
                {isLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 z-10 text-slate-600">
                    <div className="w-10 h-10 border-3 border-blue-600 border-t-transparent rounded-full animate-spin mb-3" />
                    <p className="text-xs font-bold text-slate-700">Loading Official Franchise Form...</p>
                    <p className="text-[11px] text-slate-500 mt-1">Connecting to Google Forms engine</p>
                  </div>
                )}

                <iframe
                  key={iframeKey}
                  src={GOOGLE_FORM_URL}
                  title="AITM Franchise Official Application Form"
                  className="w-full h-[640px] sm:h-[720px] lg:h-[780px] border-0"
                  onLoad={() => setIsLoading(false)}
                >
                  <p className="p-6 text-center text-sm text-slate-600">
                    Your browser does not support iframes.{' '}
                    <a
                      href={GOOGLE_FORM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-bold underline"
                    >
                      Click here to complete the AITM Franchise Application Form
                    </a>
                  </p>
                </iframe>
              </div>

              {/* Iframe Footer Info */}
              <div className="bg-slate-100/90 border-t border-slate-200 px-4 py-3 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Secure SSL transmission · Responses saved directly into Google Sheets</span>
                </div>
                <div>
                  Technical assistance:{' '}
                  <a href={`mailto:${BRAND.email}`} className="text-blue-700 font-medium hover:underline">
                    {BRAND.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
