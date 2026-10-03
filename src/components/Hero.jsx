import React from 'react';
import { ArrowRight, Globe, Shield, ChevronRight, Award } from 'lucide-react';

export default function Hero({ onOpenRegister }) {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-12 py-10 sm:py-16 lg:py-24 relative overflow-hidden bg-[#F4EFE6] border-b-2 border-[#121316]">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-10 relative">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <div className="border-2 border-[#FF4D4D] text-[#FF4D4D] px-3 py-1 font-mono text-[11px] sm:text-xs font-bold uppercase bg-white shadow-sm flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 shrink-0" />
              <span>★ 7TH EDITION // NOV 14–15, 2026</span>
            </div>
            <div className="bg-[#1B2A4A] text-[#F4EFE6] px-3 py-1 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider">
              NMIMS MPTP CAMPUS, SHIRPUR
            </div>
          </div>
        </div>

        {/* Main Headline (Responsive font clamp & word break) */}
        <div className="relative flex flex-col gap-2 sm:gap-3 py-1 sm:py-2">
          <div className="inline-block">
            <span className="bg-[#FF4D4D] text-[#F4EFE6] font-heading font-extrabold text-[11px] sm:text-xs md:text-sm uppercase px-2.5 sm:px-3 py-1 tracking-tight inline-block mb-2 border-2 border-[#121316]">
              NMIMS SHIRPUR MODEL UNITED NATIONS
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase text-[#1B2A4A] tracking-tight leading-[0.95] text-riso-offset font-extrabold break-words">
            NMUN 2026 <br />
            <span className="text-[#FF4D4D]">— SHIRPUR</span>
          </h1>
        </div>

        {/* Theme & Tagline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Left Main Content */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="p-5 sm:p-6 md:p-8 bg-white border-3 border-[#121316] relative shadow-[3px_3px_0px_#1B2A4A] sm:shadow-riso-indigo">
              <div className="flex items-center gap-2 border-b-2 border-[#121316] pb-2.5 mb-3.5">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF4D4D] shrink-0" />
                <span className="font-mono text-[11px] sm:text-xs font-bold text-[#1B2A4A] uppercase">
                  CONFERENCE THEME
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-xl sm:text-2xl md:text-3xl text-[#121316] uppercase leading-tight mb-3">
                "Rethinking Global Sovereignty: Technology, Equity, and Asymmetric Power"
              </h2>

              {/* Punchy 2-Line Tagline */}
              <p className="font-sans text-sm sm:text-base md:text-lg text-gray-800 font-semibold leading-relaxed">
                Step beyond textbook protocols. Debate where global strategy meets engineering foresight.
              </p>
            </div>

            {/* CTAs Stacked Full-Width on Mobile */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <button
                onClick={onOpenRegister}
                className="group w-full sm:w-auto px-6 py-3.5 sm:py-4 bg-[#FF4D4D] text-[#F4EFE6] font-heading font-extrabold text-base sm:text-lg uppercase tracking-wide border-3 border-[#121316] shadow-[3px_3px_0px_#1B2A4A] sm:shadow-riso-indigo hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-0 active:translate-y-0 transition-all flex items-center justify-center gap-2.5 touch-target"
              >
                <Shield className="w-5 h-5 text-[#F6E05E] shrink-0" />
                <span>CLAIM YOUR PLACARD</span>
                <ChevronRight className="w-5 h-5 text-[#F6E05E] group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#matrix"
                className="w-full sm:w-auto px-5 py-3.5 sm:py-4 bg-white border-2 border-[#121316] text-[#1B2A4A] font-mono font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[3px_3px_0px_#FF4D4D] sm:shadow-riso-coral hover:bg-[#F6E05E] transition-all flex items-center justify-center gap-2 touch-target"
              >
                <span>EXPLORE MATRICES</span>
                <ArrowRight className="w-4 h-4 text-[#FF4D4D] shrink-0" />
              </a>
            </div>
          </div>

          {/* Right Metrics Box */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="bg-[#FAF6F0] border-3 border-[#121316] p-5 sm:p-6 shadow-[3px_3px_0px_#FF4D4D] sm:shadow-riso-coral">
              <div className="flex items-center justify-between border-b-2 border-[#121316] pb-2.5 mb-3.5">
                <span className="font-mono text-xs uppercase font-bold text-[#1B2A4A]">
                  KEY METRICS
                </span>
                <span className="w-2.5 h-2.5 bg-[#FF4D4D] rounded-full"></span>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2.5 font-mono text-xs">
                <div className="flex flex-col lg:flex-row justify-between lg:items-center p-2.5 sm:p-3 bg-white border border-[#121316]">
                  <span className="text-gray-600 font-bold">DELEGATES</span>
                  <span className="font-bold text-[#FF4D4D] font-heading text-base sm:text-lg">450+</span>
                </div>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center p-2.5 sm:p-3 bg-white border border-[#121316]">
                  <span className="text-gray-600 font-bold">COUNCILS</span>
                  <span className="font-bold text-[#1B2A4A] font-heading text-base sm:text-lg">6 COUNCILS</span>
                </div>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center p-2.5 sm:p-3 bg-[#F6E05E] border border-[#121316] col-span-2 lg:col-span-1">
                  <span className="font-bold">PRIZE POOL</span>
                  <span className="font-bold text-[#FF4D4D] font-heading text-base sm:text-lg">₹1,50,000+</span>
                </div>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center p-2.5 sm:p-3 bg-white border border-[#121316] col-span-2 lg:col-span-1">
                  <span className="text-gray-600 font-bold">DURATION</span>
                  <span className="font-bold text-[#121316]">2 DAYS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
