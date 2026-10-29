/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  TrendingUp, 
  BookOpen, 
  Briefcase, 
  Megaphone, 
  Laptop, 
  Award,
  Users,
  ShieldCheck
} from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      number: '01',
      title: 'High Profitability & Quick Break-Even',
      icon: TrendingUp,
      description:
        'With low operational overheads, structured course fees, and multi-batch scheduling, partners typically achieve operational break-even within 4 to 6 months of launching.',
      stats: '60%–75% Average Gross Margins',
    },
    {
      number: '02',
      title: 'Industry-Vetted Course Curriculum & LMS',
      icon: BookOpen,
      description:
        'Gain access to pre-structured, ready-to-deliver curriculum across Artificial Intelligence, Full-Stack Development, Data Analytics, Python, and Management modules updated every quarter.',
      stats: 'Quarterly Industry-Aligned Updates',
    },
    {
      number: '03',
      title: 'Centralized Placements & Corporate Drives',
      icon: Briefcase,
      description:
        'Our national corporate tie-ups and placement desk support your students with interview scheduling, resume evaluations, and pooled campus placement drives.',
      stats: '150+ Hiring Partners Across India',
    },
    {
      number: '04',
      title: 'Hyper-Local Digital Marketing & Lead Funnel',
      icon: Megaphone,
      description:
        'We don’t just train—we assist in filling your classrooms. Receive verified ad creatives, social media templates, local SEO blueprints, and targeted student walk-in campaigns.',
      stats: 'Dedicated Lead Support Blueprint',
    },
    {
      number: '05',
      title: 'Turnkey Technology & Student Portal',
      icon: Laptop,
      description:
        'Cloud-based student portal for fee collection, attendance tracking, recorded video lectures, automated quizzes, and authentic verifiable digital completion certificates.',
      stats: 'Automated 24/7 Student Portal',
    },
    {
      number: '06',
      title: 'Trainer Recruitment & Faculty Certification',
      icon: Users,
      description:
        'Finding quality instructors is our joint priority. We interview, test, and certify your teachers through our Train-The-Trainer (TTT) onboarding program before they take classes.',
      stats: '100% Certified Trainer Guarantee',
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
            Why Partner With AITM
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            A Proven Business Blueprint Designed for First-Time and Seasoned Franchisees
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Education is a recession-proof, high-respect industry. AITM eliminates the trial-and-error of building a technical academy by providing end-to-end curriculum, operational playbooks, and student placement assistance.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="bg-slate-50 border border-slate-200/90 rounded-2xl p-7 flex flex-col justify-between hover:border-blue-400 hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-blue-100/80 text-blue-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs">
                  <span className="font-semibold text-blue-800 bg-blue-50/80 px-2.5 py-1 rounded">
                    {item.stats}
                  </span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" /> Fully Supported
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Trust Bar */}
        <div className="mt-12 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">
              <Award className="w-4 h-4" />
              National Franchise Assurance
            </div>
            <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Territory Exclusivity for Your Location
            </h4>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              We maintain strict geographic boundaries to ensure that your center operates without internal competition from other AITM franchisees in your designated area.
            </p>
          </div>
          <a
            href="#inquiry"
            className="shrink-0 px-6 py-3 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white text-sm font-bold rounded-xl transition-all shadow-sm"
          >
            Check Territory Availability
          </a>
        </div>
      </div>
    </section>
  );
};
