import React, { useState, useEffect } from 'react';
import { X, User, Building, Landmark, Globe, QrCode } from 'lucide-react';

export default function DelegateModal({ isOpen, onClose, defaultCommittee = '', defaultCountry = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    institution: 'SVKM’s NMIMS Shirpur',
    delegationType: 'Single Delegation',
    committee: defaultCommittee || 'UNSC',
    country: defaultCountry || 'United Kingdom',
    experience: '1-3 MUNs',
    contactEmail: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultCommittee) {
      setFormData((prev) => ({ ...prev, committee: defaultCommittee }));
    }
    if (defaultCountry) {
      setFormData((prev) => ({ ...prev, country: defaultCountry }));
    }
  }, [defaultCommittee, defaultCountry]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div id="register" className="fixed inset-0 z-50 bg-[#1B2A4A]/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#F4EFE6] border-4 border-[#121316] p-6 lg:p-8 shadow-riso-coral rotate-[0.5deg] max-h-[90vh] overflow-y-auto">
        {/* Modal Top Header */}
        <div className="flex justify-between items-center border-b-2 border-dashed border-[#121316] pb-3 mb-6">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#1B2A4A]">
            <span className="w-3 h-3 bg-[#FF4D4D] rounded-full animate-ping"></span>
            <span>DELEGATE ACCREDITATION DOCKET // NMUN 2026 SHIRPUR</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 bg-[#FF4D4D] text-[#F4EFE6] hover:bg-[#1B2A4A] border border-[#121316] font-bold"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!submitted ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Form Fields Column */}
            <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-4 font-mono text-xs">
              <div className="mb-4">
                <h3 className="font-heading font-extrabold text-2xl uppercase text-[#1B2A4A]">
                  CLAIM YOUR OFFICIAL PLACARD
                </h3>
                <p className="font-sans text-xs text-gray-700">
                  Complete accreditation details to reserve your portfolio at SVKM’s NMIMS Shirpur Campus.
                </p>
              </div>

              {/* Full Name */}
              <div className="flex flex-col gap-1">
                <label className="font-bold uppercase text-[#1B2A4A] flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-[#FF4D4D]" /> FULL NAME / DELEGATE COGNOMEN:
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Aarav Sharma"
                  required
                  className="bg-white border-2 border-[#121316] p-2 text-[#121316] focus:outline-none focus:border-[#FF4D4D]"
                />
              </div>

              {/* Institution */}
              <div className="flex flex-col gap-1">
                <label className="font-bold uppercase text-[#1B2A4A] flex items-center gap-1">
                  <Building className="w-3.5 h-3.5 text-[#FF4D4D]" /> INSTITUTION / COLLEGE NAME:
                </label>
                <input
                  type="text"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  placeholder="e.g. SVKM’s NMIMS Shirpur"
                  required
                  className="bg-white border-2 border-[#121316] p-2 text-[#121316] focus:outline-none focus:border-[#FF4D4D]"
                />
              </div>

              {/* Delegation Type & Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="font-bold uppercase text-[#1B2A4A]">DELEGATION TYPE:</label>
                  <select
                    name="delegationType"
                    value={formData.delegationType}
                    onChange={handleChange}
                    className="bg-white border-2 border-[#121316] p-2 text-[#121316] font-bold focus:outline-none focus:border-[#FF4D4D]"
                  >
                    <option value="Single Delegation">Single Delegation</option>
                    <option value="Double Delegation">Double Delegation</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-bold uppercase text-[#1B2A4A]">CONTACT EMAIL:</label>
                  <input
                    type="email"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    placeholder="delegate@nmims.edu"
                    required
                    className="bg-white border-2 border-[#121316] p-2 text-[#121316] focus:outline-none focus:border-[#FF4D4D]"
                  />
                </div>
              </div>

              {/* Committee & Country Preference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="font-bold uppercase text-[#1B2A4A] flex items-center gap-1">
                    <Landmark className="w-3.5 h-3.5 text-[#FF4D4D]" /> COMMITTEE PREFERENCE:
                  </label>
                  <select
                    name="committee"
                    value={formData.committee}
                    onChange={handleChange}
                    className="bg-white border-2 border-[#121316] p-2 text-[#121316] font-bold focus:outline-none focus:border-[#FF4D4D]"
                  >
                    <option value="UNSC">UNSC (Security Council)</option>
                    <option value="UNHRC">UNHRC (Human Rights Council)</option>
                    <option value="AIPPM">AIPPM (Political Parties)</option>
                    <option value="JCC">JCC (1999 Kargil Crisis)</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-bold uppercase text-[#1B2A4A] flex items-center gap-1">
                    <Globe className="w-3.5 h-3.5 text-[#FF4D4D]" /> PORTFOLIO PREFERENCE:
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="e.g. United Kingdom / India"
                    required
                    className="bg-white border-2 border-[#121316] p-2 text-[#121316] focus:outline-none focus:border-[#FF4D4D]"
                  />
                </div>
              </div>

              {/* MUN Experience */}
              <div className="flex flex-col gap-1">
                <label className="font-bold uppercase text-[#1B2A4A]">MUN EXPERIENCE LEVEL:</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="bg-white border-2 border-[#121316] p-2 text-[#121316] font-bold focus:outline-none focus:border-[#FF4D4D]"
                >
                  <option value="First-Timer">First-Time Delegate</option>
                  <option value="1-3 MUNs">1–3 MUN Conferences</option>
                  <option value="4-8 MUNs">4–8 MUN Conferences</option>
                  <option value="Veteran">Experienced MUN Veteran</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#FF4D4D] text-[#F4EFE6] font-heading font-extrabold text-lg uppercase tracking-wide border-3 border-[#121316] shadow-riso-indigo hover:bg-[#1B2A4A] active:translate-x-1 active:translate-y-1 transition-all"
              >
                STAMP & ISSUE ACCREDITATION CREDENTIALS
              </button>
            </form>

            {/* Live Summary Placard Preview Column */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-full bg-white border-3 border-[#121316] p-6 shadow-riso-coral font-mono text-xs">
                {/* Badge Header */}
                <div className="border-b-2 border-[#121316] pb-3 mb-4 text-center">
                  <div className="font-heading font-extrabold text-lg uppercase text-[#1B2A4A]">
                    NMUN 2026 // SHIRPUR
                  </div>
                  <div className="text-[10px] text-[#FF4D4D] font-bold uppercase tracking-widest">
                    OFFICIAL DELEGATE ACCREDITATION PASS
                  </div>
                </div>

                {/* Live Placard Details */}
                <div className="space-y-3">
                  <div className="p-2 bg-[#F4EFE6] border border-[#121316]">
                    <span className="text-[10px] text-gray-500 font-bold block">DELEGATE NAME:</span>
                    <span className="font-heading font-extrabold text-lg text-[#121316] uppercase block">
                      {formData.fullName || 'DELEGATE NAME'}
                    </span>
                  </div>

                  <div className="p-2 bg-[#F4EFE6] border border-[#121316]">
                    <span className="text-[10px] text-gray-500 font-bold block">INSTITUTION:</span>
                    <span className="font-bold text-[#1B2A4A] block">
                      {formData.institution || 'NMIMS Shirpur'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 bg-[#F4EFE6] border border-[#121316]">
                      <span className="text-[10px] text-gray-500 font-bold block">COUNCIL:</span>
                      <span className="font-extrabold text-[#FF4D4D] block">
                        {formData.committee}
                      </span>
                    </div>

                    <div className="p-2 bg-[#F4EFE6] border border-[#121316]">
                      <span className="text-[10px] text-gray-500 font-bold block">TYPE:</span>
                      <span className="font-bold text-[#121316] block text-[11px]">
                        {formData.delegationType}
                      </span>
                    </div>
                  </div>

                  <div className="p-2.5 bg-[#F6E05E] border-2 border-[#121316] text-center">
                    <span className="text-[10px] text-[#121316] font-bold block">ASSIGNED PORTFOLIO:</span>
                    <span className="font-heading font-extrabold text-base text-[#1B2A4A] uppercase block">
                      {formData.country || 'PORTFOLIO PREFERENCE'}
                    </span>
                  </div>
                </div>

                {/* Stamped Seal & Graphic Barcode */}
                <div className="mt-5 pt-3 border-t-2 border-dashed border-[#121316] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-gray-600">
                    <QrCode className="w-8 h-8 text-[#121316]" />
                    <div className="text-[9px] font-mono leading-tight">
                      <span>SER: 2026-N7-9482</span>
                      <br />
                      <span className="text-[#FF4D4D] font-bold">VERIFIED SEAL</span>
                    </div>
                  </div>

                  <div className="stamp-seal text-[9px] px-2 py-0.5">
                    ACCREDITED 2026
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Confirmation State */
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-5 font-mono">
            <div className="stamp-seal text-xl px-6 py-2 rotate-[-4deg] bg-white shadow-riso-indigo">
              ★ ACCREDITATION VERIFIED ★
            </div>

            <h3 className="font-heading font-extrabold text-3xl uppercase text-[#1B2A4A]">
              PLACARD RESERVED FOR {formData.fullName || 'DELEGATE'}
            </h3>

            <p className="font-sans text-sm text-gray-700 max-w-md">
              Your delegate pass for <span className="font-bold text-[#FF4D4D]">{formData.committee} ({formData.country})</span> has been logged into the Secretariat roster for SVKM’s NMIMS Shirpur Campus (Nov 14–15, 2026).
            </p>

            <div className="p-4 bg-white border-2 border-[#121316] text-xs space-y-1">
              <div><span className="font-bold">DELEGATION:</span> {formData.delegationType}</div>
              <div><span className="font-bold">INSTITUTION:</span> {formData.institution}</div>
              <div><span className="font-bold">STATUS:</span> CONFIRMED & STAMPED</div>
            </div>

            <button
              onClick={handleReset}
              className="mt-4 px-6 py-3 bg-[#1B2A4A] text-[#F4EFE6] font-mono text-xs font-bold uppercase tracking-wider border-2 border-[#121316] hover:bg-[#FF4D4D] transition-colors"
            >
              RETURN TO CONFERENCE DISPATCH
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
