import React from 'react';
import { ArrowRight, Globe, Shield, ChevronRight, Award } from 'lucide-react';

export default function Hero({ onOpenRegister }) {
  return (
    <section className="w-full px-6 lg:px-12 py-16 lg:py-24 relative overflow-hidden bg-[#F4EFE6] border-b-2 border-[#121316]">
      {/* Decorative Alignment Marks */}
      <div className="absolute top-6 left-6 pointer-events-none opacity-30 hidden md:block font-mono text-[10px] text-[#1B2A4A]">
        <div className="w-5 h-5 border border-[#FF4D4D] relative flex items-center justify-center">
          <div className="w-full h-[1px] bg-[#1B2A4A] absolute"></div>
          <div className="h-full w-[1px] bg-[#1B2A4A] absolute"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-10 relative">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="border-2 border-[#FF4D4D] text-[#FF4D4D] px-3.5 py-1 font-mono text-xs font-bold uppercase rotate-[-1deg] bg-white shadow-sm flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              ★ 7TH ANNUAL CONFERENCE // NOV 14–15, 2026
            </div>
            <div className="bg-[#1B2A4A] text-[#F4EFE6] px-3.5 py-1 font-mono text-xs font-bold uppercase tracking-wider">
              SVKM'S NMIMS MPTP CAMPUS, SHIRPUR
            </div>
          </div>
        </div>

        {/* Main Headline */}
        <div className="relative flex flex-col gap-3 py-2">
          <div className="inline-block">
            <span className="bg-[#FF4D4D] text-[#F4EFE6] font-heading font-extrabold text-xs md:text-sm uppercase px-3 py-1 tracking-tight rotate-[-1deg] inline-block mb-3 border-2 border-[#121316]">
              NMIMS SHIRPUR MODEL UNITED NATIONS
            </span>
          </div>

          <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl uppercase text-[#1B2A4A] tracking-tighter leading-none text-riso-offset font-extrabold">
            NMUN 2026 <br className="hidden sm:inline" />
            <span className="text-[#FF4D4D]">— SHIRPUR</span>
          </h1>
        </div>

        {/* Theme & Tagline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Main Content */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="p-6 md:p-8 bg-white border-3 border-[#121316] relative shadow-riso-indigo">
              <div className="flex items-center gap-2 border-b-2 border-[#121316] pb-3 mb-4">
                <Globe className="w-5 h-5 text-[#FF4D4D]" />
                <span className="font-mono text-xs font-bold text-[#1B2A4A] uppercase">
                  CONFERENCE THEME
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-[#121316] uppercase leading-tight mb-4">
                "Rethinking Global Sovereignty: Technology, Equity, and Asymmetric Power"
              </h2>

              {/* Punchy 2-Line Tagline */}
              <p className="font-sans text-base md:text-lg text-gray-800 font-semibold leading-relaxed">
                Step beyond textbook protocols. Debate where global strategy meets engineering foresight.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-5 pt-2">
              <button
                onClick={onOpenRegister}
                className="group px-7 py-4 bg-[#FF4D4D] text-[#F4EFE6] font-heading font-extrabold text-lg uppercase tracking-wide border-3 border-[#121316] shadow-riso-indigo hover:shadow-riso-indigo-lg hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-0 active:translate-y-0 transition-all flex items-center gap-3"
              >
                <Shield className="w-5 h-5 text-[#F6E05E]" />
                <span>CLAIM YOUR PLACARD</span>
                <ChevronRight className="w-5 h-5 text-[#F6E05E] group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#matrix"
                className="px-6 py-4 bg-white border-2 border-[#121316] text-[#1B2A4A] font-mono font-bold text-xs md:text-sm uppercase tracking-wider shadow-riso-coral hover:bg-[#F6E05E] transition-all flex items-center gap-2"
              >
                <span>EXPLORE MATRICES & COMMITTEES</span>
                <ArrowRight className="w-4 h-4 text-[#FF4D4D]" />
              </a>
            </div>
          </div>

          {/* Right Metrics Box */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="bg-[#FAF6F0] border-3 border-[#121316] p-6 shadow-riso-coral">
              <div className="flex items-center justify-between border-b-2 border-[#121316] pb-3 mb-4">
                <span className="font-mono text-xs uppercase font-bold text-[#1B2A4A]">
                  KEY METRICS
                </span>
                <span className="w-2.5 h-2.5 bg-[#FF4D4D] rounded-full"></span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center p-3 bg-white border border-[#121316]">
                  <span>DELEGATES</span>
                  <span className="font-bold text-[#FF4D4D] font-heading text-lg">450+</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white border border-[#121316]">
                  <span>COUNCILS</span>
                  <span className="font-bold text-[#1B2A4A] font-heading text-lg">6 COUNCILS</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-[#F6E05E] border border-[#121316]">
                  <span className="font-bold">PRIZE POOL</span>
                  <span className="font-bold text-[#FF4D4D] font-heading text-lg">₹1,50,000+</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white border border-[#121316]">
                  <span>DURATION</span>
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
