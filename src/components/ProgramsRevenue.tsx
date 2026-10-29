/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Cpu, 
  Code2, 
  BarChart3, 
  Cloud, 
  GraduationCap, 
  Coins, 
  Sparkles,
  Layers
} from 'lucide-react';

export const ProgramsRevenue: React.FC = () => {
  const programs = [
    {
      title: 'Generative AI & Machine Learning',
      duration: '4–6 Months',
      demand: 'Highest Demand',
      icon: Cpu,
      topics: ['Python for AI', 'LLM Prompt Engineering', 'Neural Networks', 'LangChain & Agentic AI'],
    },
    {
      title: 'Full Stack Web & Software Engineering',
      duration: '3–6 Months',
      demand: 'Core Hiring',
      icon: Code2,
      topics: ['React & Next.js', 'Node.js & Express', 'Databases (SQL & NoSQL)', 'Git & CI/CD'],
    },
    {
      title: 'Data Analytics & Business Intelligence',
      duration: '3 Months',
      demand: 'Rapid Placement',
      icon: BarChart3,
      topics: ['PowerBI & Tableau', 'Advanced Excel', 'SQL for Data Analysis', 'Predictive Modeling'],
    },
    {
      title: 'Cloud Computing & Cyber Defense',
      duration: '3–4 Months',
      demand: 'Enterprise Focus',
      icon: Cloud,
      topics: ['AWS & GCP Foundations', 'Docker Containers', 'Network Security', 'Linux Administration'],
    },
  ];

  const revenueStreams = [
    {
      title: 'Student Retail Batches',
      share: '60% Revenue',
      detail: 'Regular weekday and weekend batches for college students, fresh graduates, and career changers.',
    },
    {
      title: 'Corporate B2B Upskilling',
      share: '20% Revenue',
      detail: 'Upskilling programs for local IT enterprises, MSMEs, banks, and corporate staff in your district.',
    },
    {
      title: 'College MoU & Campus Workshops',
      share: '15% Revenue',
      detail: 'Institutional tie-ups with regional engineering and degree colleges for student summer bootcamps.',
    },
    {
      title: 'Certifications & Exam Fees',
      share: '5% Revenue',
      detail: 'Standardized AITM assessment and credentials testing fees for verified diploma badges.',
    },
  ];

  return (
    <section id="overview" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
            Curriculum & Monetization
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            High-Demand Tech Programs with Multiple Revenue Channels
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Your franchise isn&apos;t reliant on a single course. Deliver an industry-recognized syllabus spanning software, artificial intelligence, and analytics that appeals to students, working professionals, and local businesses alike.
          </p>
        </div>

        {/* 4 Program Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {programs.map((prog, idx) => {
            const Icon = prog.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-400 hover:shadow-md transition-all text-left group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                      {prog.demand}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base mb-1">
                    {prog.title}
                  </h3>
                  <div className="text-xs text-slate-500 mb-4 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
                    <span>Duration: {prog.duration}</span>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Core Modules:
                    </div>
                    <ul className="space-y-1.5">
                      {prog.topics.map((t, i) => (
                        <li key={i} className="text-xs text-slate-600 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 text-xs font-semibold text-blue-700 flex items-center justify-between">
                  <span>LMS & Exams Ready</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* 4 Revenue Streams Grid */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs text-left">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">
            <Coins className="w-4 h-4" />
            Diversified Cash Flow Model
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-6">
            Four Predictable Streams of Income for Your Centre
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {revenueStreams.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-bold text-slate-900">{item.title}</div>
                  <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    {item.share}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
