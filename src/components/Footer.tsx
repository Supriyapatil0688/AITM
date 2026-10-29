/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { BRAND, GOOGLE_FORM_URL } from '../config/constants';

interface FooterProps {
  onOpenOwnerGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOwnerGuide }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <div className="flex items-center gap-2.5 text-white font-bold text-lg">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-extrabold text-sm">
                A
              </div>
              <span>{BRAND.name}</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Empowering visionary entrepreneurs to launch high-caliber tech, AI, and business management training centers with guaranteed curriculum, LMS, and student placement assistance.
            </p>
            <div className="pt-2 text-[11px] text-slate-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-500 shrink-0" />
              <span>Registered Trademark · ISO 9001:2015 Standards</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 text-left">
            <div className="text-white font-bold uppercase tracking-wider text-xs">
              Franchise Model
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollTo('overview')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Tech Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('investment')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Investment Tiers (₹10L–15L+)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('space')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  300 Sq. Ft. Specifications
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('benefits')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Placement & LMS Support
                </button>
              </li>
            </ul>
          </div>

          {/* Operations & System */}
          <div className="space-y-3 text-left">
            <div className="text-white font-bold uppercase tracking-wider text-xs">
              Response System
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={onOpenOwnerGuide}
                  className="hover:text-blue-400 transition-colors cursor-pointer font-medium text-slate-300"
                >
                  Google Sheets & Excel Guide
                </button>
              </li>
              <li>
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Direct Google Form</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('process')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  30-Day Launch Roadmap
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Franchise FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3 text-left">
            <div className="text-white font-bold uppercase tracking-wider text-xs">
              Franchise Expansion Desk
            </div>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-slate-400 text-xs">{BRAND.headquarters}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-slate-300 font-mono text-xs">{BRAND.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${BRAND.email}`} className="text-slate-300 hover:text-white text-xs">
                  {BRAND.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} {BRAND.legalName}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Confidential Franchise Information Memorandum</span>
            <button
              onClick={() => scrollTo('inquiry')}
              className="text-blue-400 hover:underline cursor-pointer"
            >
              Apply Online
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
