/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenOwnerGuide?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOwnerGuide }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Official AITM Logo and brand text on the left */}
          <a
            href="#"
            className="flex items-center gap-3 text-slate-950 font-bold tracking-tight text-xl whitespace-nowrap shrink-0 group py-1"
          >
            <img
              src="/assets/aistudio/image_e53c2b5b.png"
              alt="AITM - Abhinav Institute of Technology & Management"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain shrink-0 transition-transform duration-200 group-hover:scale-105 drop-shadow-xs"
              referrerPolicy="no-referrer"
            />
            <span className="font-extrabold text-slate-900 tracking-tight text-lg sm:text-xl">
              AITM <span className="text-blue-700">Franchise</span>
            </span>
          </a>

          {/* Zone 2: 4–5 concise single-line nav links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <button
              onClick={() => scrollToSection('overview')}
              className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection('benefits')}
              className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection('investment')}
              className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Investment & Space
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Onboarding
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              FAQ
            </button>
            {onOpenOwnerGuide && (
              <button
                onClick={onOpenOwnerGuide}
                className="text-xs font-medium text-slate-500 hover:text-blue-700 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1 cursor-pointer border border-slate-200 rounded px-2.5 py-1"
                title="Google Sheets & Excel Response Storage System"
              >
                Owner Guide
              </button>
            )}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => scrollToSection('inquiry')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-blue-700 rounded-lg hover:bg-blue-800 active:bg-blue-900 shadow-sm transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Apply for Franchise</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => scrollToSection('inquiry')}
              className="sm:hidden px-3 py-1.5 text-xs font-bold text-white bg-blue-700 rounded-md cursor-pointer"
            >
              Apply
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2 text-base font-semibold text-slate-700">
            <button
              onClick={() => scrollToSection('overview')}
              className="text-left px-3 py-2 rounded-md hover:bg-slate-50 hover:text-blue-700"
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection('benefits')}
              className="text-left px-3 py-2 rounded-md hover:bg-slate-50 hover:text-blue-700"
            >
              Benefits & Growth
            </button>
            <button
              onClick={() => scrollToSection('investment')}
              className="text-left px-3 py-2 rounded-md hover:bg-slate-50 hover:text-blue-700"
            >
              Investment & Space (₹10L–15L+)
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="text-left px-3 py-2 rounded-md hover:bg-slate-50 hover:text-blue-700"
            >
              Step-by-Step Onboarding
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-left px-3 py-2 rounded-md hover:bg-slate-50 hover:text-blue-700"
            >
              Frequently Asked Questions
            </button>
            {onOpenOwnerGuide && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOwnerGuide();
                }}
                className="text-left px-3 py-2 rounded-md bg-blue-50 text-blue-800 text-sm font-medium"
              >
                Owner Guide: Google Sheets & Excel Storage
              </button>
            )}
          </div>
          <div className="pt-2">
            <button
              onClick={() => scrollToSection('inquiry')}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors shadow-sm"
            >
              <span>Apply for Franchise Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
