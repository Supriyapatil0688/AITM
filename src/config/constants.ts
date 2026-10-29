/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSd0ecpx6TbAQNtABNxV32uhftvtw4LblIDIqLh3wn_T0XhVUA/viewform';

export const BRAND = {
  name: 'AITM Franchise',
  legalName: 'All India Institute of Technology & Management',
  tagline: 'Empowering Education Entrepreneurs Across India',
  phone: '+91 98765 43210',
  phoneFormatted: '+91 98765 43210',
  email: 'franchise@aitm-edu.in',
  officeHours: 'Monday – Saturday: 9:30 AM to 6:30 PM IST',
  headquarters: 'AITM National Centre, Tech District, Bengaluru / Pune, India',
};

export const FORM_QUESTIONS_INFO = [
  {
    number: '01',
    question: 'What is your investment range for this franchise?',
    helper: 'The franchise starts at ₹10 lakh, and extra working capital is needed in the early months.',
    options: ['₹10–₹12 lakhs', '₹12–₹15 lakhs', 'Above ₹15 lakhs'],
    badge: 'Mandatory',
  },
  {
    number: '02',
    question: 'Do you have a commercial space ready to run your AITM centre?',
    helper: 'The AITM centre needs an office of about 300 sq. ft.',
    options: [
      'Yes, I have a space ready',
      'No, but I can arrange one',
      'No, I am not looking at this stage',
    ],
    badge: 'Infrastructure',
  },
  {
    number: '03',
    question: 'How soon are you ready to start?',
    helper: 'Helps our team allocate city territories and onboarding priority.',
    options: [
      'Immediately (within 30 days)',
      'Within 1–3 months',
      'Within 3–6 months',
      'Just exploring',
    ],
    badge: 'Timeline',
  },
  {
    number: '04',
    question: 'What best describes your current professional background?',
    helper: 'E.g., IT Professional, Business Owner, Educator, Corporate Manager, or Investor.',
    type: 'Short-answer text field',
    badge: 'Background',
  },
];

export const INVESTMENT_TIERS = [
  {
    tier: 'Starter Centre',
    range: '₹10–₹12 Lakhs',
    recommendedFor: 'Tier 2 & Tier 3 Cities / Taluka Hubs',
    spaceNeeded: 'Approx. 300 sq. ft.',
    capacity: '12–15 student workstations + counseling desk',
    features: [
      'AITM Brand Trademark & Regional Exclusivity',
      'Turnkey curriculum for 8 high-demand tech courses',
      'Centralized Learning Management System (LMS)',
      'Digital student study portal & certified exams',
      'Initial faculty training & syllabus certification',
      'Marketing starter kit & local social ad creatives',
    ],
    highlight: false,
  },
  {
    tier: 'Growth Hub',
    range: '₹12–₹15 Lakhs',
    recommendedFor: 'Tier 1 Suburbs / Major Education Corridors',
    spaceNeeded: '350–500 sq. ft.',
    capacity: '18–24 student workstations + dedicated seminar room',
    features: [
      'Everything in Starter Centre',
      'AI & Advanced Data Science Specialized Lab setup',
      'Dedicated Center Success Manager (bi-weekly reviews)',
      'Centralized Placement Support & Corporate Campus Drives',
      'Local Lead Generation Assistance & Geo-targeted Ads',
      'National Hackathon & Certification Hosting Rights',
    ],
    highlight: true,
  },
  {
    tier: 'Flagship Regional Centre',
    range: 'Above ₹15 Lakhs',
    recommendedFor: 'Metro Cities & Prime Commercial Tech Parks',
    spaceNeeded: '500+ sq. ft.',
    capacity: '30+ workstations + multi-batch concurrent classes',
    features: [
      'Exclusive Master Franchise rights for nominated pin codes',
      'Direct Corporate B2B training contract delegation',
      'Executive masterclasses with senior industry mentors',
      'Custom co-branded local PR & celebrity guest launches',
      'Priority placement fast-track with top tech recruiters',
      'Full working capital reserve buffer guidance',
    ],
    highlight: false,
  },
];

export const SPACE_BREAKDOWN = [
  {
    zone: 'High-Tech Computer Lab',
    area: '180–200 sq. ft.',
    detail: 'Ergonomic tables, 12–16 desktop/laptop stations, LAN cabling, and projector/smart screen.',
  },
  {
    zone: 'Counseling & Welcome Desk',
    area: '60–70 sq. ft.',
    detail: 'Professional reception, student counseling seating, brochure showcase, and brand wall.',
  },
  {
    zone: 'Faculty & Administrative Station',
    area: '40–50 sq. ft.',
    detail: 'Staff desks, secure document storage, UPS power backup, and high-speed broadband router.',
  },
];
