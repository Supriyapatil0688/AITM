/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { InvestmentSection } from './components/InvestmentSection';
import { SpaceRequirement } from './components/SpaceRequirement';
import { ProgramsRevenue } from './components/ProgramsRevenue';
import { FranchiseProcess } from './components/FranchiseProcess';
import { FranchiseInquirySection } from './components/FranchiseInquirySection';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { DataStorageGuideModal } from './components/DataStorageGuideModal';

export default function App() {
  const [isOwnerGuideOpen, setIsOwnerGuideOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
      <Navbar onOpenOwnerGuide={() => setIsOwnerGuideOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Programs & Monetization Streams */}
        <ProgramsRevenue />

        {/* 3. Core Benefits & Why AITM */}
        <Benefits />

        {/* 4. Financials, Investment Tiers & Interactive ROI Calculator */}
        <InvestmentSection />

        {/* 5. 300 Sq. Ft. Commercial Space Requirement & Blueprint */}
        <SpaceRequirement />

        {/* 6. 30-Day Onboarding Process & Partner Spotlight */}
        <FranchiseProcess />

        {/* 7. Dedicated Franchise Inquiry Form (Embedded Google Form + Fallbacks) */}
        <FranchiseInquirySection
          onOpenOwnerGuide={() => setIsOwnerGuideOpen(true)}
        />

        {/* 8. Frequently Asked Questions */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer onOpenOwnerGuide={() => setIsOwnerGuideOpen(true)} />

      {/* Response Storage & Excel Workflow Owner Guide Modal */}
      <DataStorageGuideModal
        isOpen={isOwnerGuideOpen}
        onClose={() => setIsOwnerGuideOpen(false)}
      />
    </div>
  );
}
