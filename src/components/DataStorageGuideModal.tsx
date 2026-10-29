/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  X, 
  FileSpreadsheet, 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  Bell, 
  ExternalLink,
  ShieldAlert,
  Info
} from 'lucide-react';
import { GOOGLE_FORM_URL } from '../config/constants';

interface DataStorageGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DataStorageGuideModal: React.FC<DataStorageGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/75 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Header */}
        <div className="px-6 py-5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/30 text-blue-400 flex items-center justify-center">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <h2 id="modal-title" className="text-lg font-bold text-white tracking-tight">
                Owner Guide: Response Storage in Google Sheets & Excel
              </h2>
              <p className="text-xs text-slate-400">
                Setup guide for tracking, automating, and exporting AITM Franchise inquiries
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto text-left text-slate-800">
          {/* Transparency Callout */}
          <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 flex items-start gap-3 text-xs text-blue-900">
            <Info className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold">Automated Data Pipeline:</strong> All inquiries submitted through the embedded form on this website are captured immediately by Google’s secure servers and written to your linked Google Sheet. You can export or download this live sheet to Microsoft Excel (.xlsx) at any time with a single click.
            </div>
          </div>

          {/* 4-Step Instructions */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
              How to Link Your Google Form to Google Sheets
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded">
                    Step 1
                  </span>
                  <span className="text-[11px] text-slate-400">Google Drive / Forms</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900">Open Form in Edit Mode</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Go to <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-semibold underline inline-flex items-center gap-0.5">Google Forms <ExternalLink className="w-3 h-3" /></a> with the Google account that owns the franchise form.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded">
                    Step 2
                  </span>
                  <span className="text-[11px] text-slate-400">Responses Tab</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900">Click &ldquo;Link to Sheets&rdquo;</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Select the <strong>&ldquo;Responses&rdquo;</strong> tab at the top of the form, then click the green <strong>Sheets icon</strong> (or &ldquo;Link to Sheets&rdquo;).
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded">
                    Step 3
                  </span>
                  <span className="text-[11px] text-slate-400">Automatic Creation</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900">Create New Spreadsheet</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Choose <strong>&ldquo;Create a new spreadsheet&rdquo;</strong> (e.g., <em>AITM Franchise Inquiries 2026</em>) and click <strong>Create</strong>. Every new website applicant will immediately create a new row.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded">
                    Step 4
                  </span>
                  <span className="text-[11px] text-slate-400">Instant Email Alert</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900">Set Email Alerts on Submission</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  In Google Forms, click the 3 dots <strong>⋮</strong> on the Responses tab and check <strong>&ldquo;Get email notifications for new responses&rdquo;</strong> to be notified instantly on mobile.
                </p>
              </div>
            </div>
          </div>

          {/* How to Download as Excel (.xlsx) */}
          <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
              <Download className="w-4 h-4" />
              How to Export & Download to Microsoft Excel (.xlsx)
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              When you want to review offline, share with partners, or import into your CRM:
            </p>
            <ol className="list-decimal list-inside text-xs text-slate-700 space-y-1.5 font-medium pl-1">
              <li>Open your linked Google Spreadsheet from Google Drive or directly from the Form.</li>
              <li>Click on the top menu bar: <strong className="text-slate-900">File</strong> &rarr; <strong className="text-slate-900">Download</strong> &rarr; <strong className="text-emerald-900">Microsoft Excel (.xlsx)</strong>.</li>
              <li>Your browser will download the complete spreadsheet with all timestamped entries into your Downloads folder.</li>
              <li>Alternatively, download as CSV via <strong className="text-slate-900">Comma Separated Values (.csv)</strong> for instant CRM upload.</li>
            </ol>
          </div>

          {/* What the linked Google Sheet looks like */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Preview of Columns Created in Google Sheets:
            </div>
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3 whitespace-nowrap">Timestamp</th>
                    <th className="p-3 whitespace-nowrap">Investment Range</th>
                    <th className="p-3 whitespace-nowrap">Commercial Space Ready</th>
                    <th className="p-3 whitespace-nowrap">Ready to Start</th>
                    <th className="p-3 whitespace-nowrap">Professional Background</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono text-[11px]">
                  <tr className="bg-white">
                    <td className="p-3 whitespace-nowrap text-slate-500">29/10/2026 11:24:05</td>
                    <td className="p-3 whitespace-nowrap text-blue-700 font-bold">₹12–₹15 lakhs</td>
                    <td className="p-3 whitespace-nowrap text-emerald-700">Yes, I have a space ready</td>
                    <td className="p-3 whitespace-nowrap">Immediately (within 30 days)</td>
                    <td className="p-3 whitespace-nowrap font-sans">Software Architect & IT Consultant</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="p-3 whitespace-nowrap text-slate-500">29/10/2026 14:02:18</td>
                    <td className="p-3 whitespace-nowrap text-blue-700 font-bold">₹10–₹12 lakhs</td>
                    <td className="p-3 whitespace-nowrap text-amber-700">No, but I can arrange one</td>
                    <td className="p-3 whitespace-nowrap">Within 1–3 months</td>
                    <td className="p-3 whitespace-nowrap font-sans">Coaching Center Owner, 6 yrs exp</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            Need custom Google Apps Script webhook integration? Contact your AITM tech support.
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
