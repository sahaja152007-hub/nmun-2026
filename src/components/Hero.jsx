import React from 'react';
import { ArrowRight, Globe, Shield, Radio, ChevronRight, Award } from 'lucide-react';
import { playTactileClick } from '../utils/audio';

export default function Hero({ onOpenRegister }) {
  return (
    <section className="w-full px-4 lg:px-8 py-10 lg:py-16 relative overflow-hidden bg-[#F4EFE6] border-b-2 border-[#121316]">
      {/* Decorative Risograph Registration Alignment Marks */}
      <div className="absolute top-4 left-4 pointer-events-none opacity-40 hidden md:block font-mono text-[10px] text-[#1B2A4A]">
        <div className="w-6 h-6 border border-[#FF4D4D] relative flex items-center justify-center">
          <div className="w-full h-[1px] bg-[#1B2A4A] absolute"></div>
          <div className="h-full w-[1px] bg-[#1B2A4A] absolute"></div>
        </div>
        <span>REG_SPEC: 01-CORAL</span>
      </div>

      <div className="absolute top-4 right-4 pointer-events-none opacity-40 hidden md:block font-mono text-[10px] text-[#FF4D4D] text-right">
        <div className="w-6 h-6 border border-[#1B2A4A] relative flex items-center justify-center ml-auto">
          <div className="w-full h-[1px] bg-[#FF4D4D] absolute"></div>
          <div className="h-full w-[1px] bg-[#FF4D4D] absolute"></div>
        </div>
        <span>TRIM_PASS: 02-INDIGO</span>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-6 relative">
        {/* Top Badges / Broadsheet Masthead Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-2">
          <div className="flex flex-wrap items-center gap-2">
            {/* Rubber Stamp Badge */}
            <div className="border-2 border-dashed border-[#FF4D4D] text-[#FF4D4D] px-3 py-1 font-mono text-xs font-bold uppercase rotate-[-2deg] bg-white shadow-sm flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              ★ 7TH ANNUAL EDITION // OFFICIAL DISPATCH
            </div>
            <div className="bg-[#1B2A4A] text-[#F4EFE6] px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider">
              SVKM'S NMIMS MPTP CAMPUS, SHIRPUR
            </div>
          </div>

          <div className="font-mono text-xs text-[#1B2A4A] flex items-center gap-1.5 bg-[#F6E05E] px-3 py-1 font-bold border border-[#121316] rotate-[1deg]">
            <Radio className="w-3.5 h-3.5 text-[#FF4D4D] animate-pulse" />
            <span>ACCREDITATION OPEN // NOV 14–15, 2026</span>
          </div>
        </div>

        {/* Main Headline with Risograph Dual-Plate Offset Shadow */}
        <div className="relative flex flex-col gap-2 py-2">
          {/* Faux Washi Tape Graphic pinning headline */}
          <div className="absolute -top-4 left-10 w-36 h-6 bg-[#F6E05E]/90 rotate-[-3deg] z-10 pointer-events-none shadow-sm flex items-center justify-center border-t border-b border-black/10">
            <span className="font-mono text-[9px] text-[#121316] tracking-widest uppercase font-bold">
              ADHESIVE ARCHIVE #2026
            </span>
          </div>

          <div className="inline-block">
            <span className="bg-[#FF4D4D] text-[#F4EFE6] font-heading font-extrabold text-sm md:text-base uppercase px-3 py-1 tracking-tight rotate-[-1deg] inline-block mb-3 border-2 border-[#121316]">
              NMIMS SHIRPUR MODEL UNITED NATIONS
            </span>
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase text-[#1B2A4A] tracking-tighter leading-none text-riso-offset font-extrabold">
            NMUN 2026 <br className="hidden sm:inline" />
            <span className="text-[#FF4D4D]">— SHIRPUR</span>
          </h1>

          <div className="font-mono text-sm md:text-xl text-[#1B2A4A] uppercase tracking-tight font-extrabold mt-2 flex flex-wrap items-center gap-2">
            <span className="bg-[#F6E05E] px-2 py-0.5 border border-[#121316]">
              VENUE: CENTRAL AUDITORIUM & SEMINAR HALLS
            </span>
            <span className="text-[#FF4D4D]">//</span>
            <span>DHULE, MAHARASHTRA</span>
          </div>
        </div>

        {/* Theme & Tagline Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-2">
          {/* Left Statement: Bold activist typography */}
          <div className="lg:col-span-8 flex flex-col gap-5">
            <div className="p-5 md:p-6 bg-white border-3 border-[#121316] relative shadow-riso-indigo rotate-[-0.5deg]">
              <div className="flex items-center gap-2 border-b-2 border-[#121316] pb-2 mb-3">
                <Globe className="w-5 h-5 text-[#FF4D4D]" />
                <span className="font-mono text-xs font-bold text-[#1B2A4A] uppercase">
                  CONFERENCE THEME BRIEFING
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-xl md:text-2xl text-[#121316] uppercase leading-tight mb-3">
                "Rethinking Global Sovereignty: Technology, Equity, and Asymmetric Power"
              </h2>
              <p className="font-sans text-base text-[#121316] font-medium leading-relaxed">
                Step beyond textbook protocols. Debate where global strategy meets engineering foresight. 
                Hosting delegates from across India at the premier Mukesh Patel Technology Park, bridging cutting-edge technology insights with international law.
              </p>

              <div className="mt-4 pt-3 border-t-2 border-dashed border-gray-300 flex flex-wrap items-center justify-between font-mono text-xs text-[#1B2A4A]">
                <span className="font-bold text-[#FF4D4D]">7TH ANNUAL EDITION</span>
                <span>DELEGATIONS: SINGLE & DOUBLE</span>
                <span className="bg-[#F6E05E] px-1 font-bold">UNA-USA + JCC RULES</span>
              </div>
            </div>

            {/* CTAs Hub */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => {
                  playTactileClick();
                  onOpenRegister();
                }}
                className="group relative px-6 py-4 bg-[#FF4D4D] text-[#F4EFE6] font-heading font-extrabold text-lg md:text-xl uppercase tracking-wide border-3 border-[#121316] shadow-riso-indigo hover:shadow-riso-indigo-lg active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center gap-3 rotate-[-1deg]"
              >
                <Shield className="w-5 h-5" />
                <span>CLAIM YOUR PLACARD</span>
                <ChevronRight className="w-5 h-5 text-[#F6E05E] group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#matrix"
                onClick={() => playTactileClick()}
                className="px-5 py-4 bg-white border-2 border-[#121316] text-[#1B2A4A] font-mono font-bold text-xs md:text-sm uppercase tracking-wider shadow-riso-coral hover:bg-[#F6E05E] transition-all flex items-center gap-2"
              >
                <span>EXPLORE MATRICES & COMMITTEES</span>
                <ArrowRight className="w-4 h-4 text-[#FF4D4D]" />
              </a>
            </div>
          </div>

          {/* Right Side: Quick Stats & Dossier Badge */}
          <div className="lg:col-span-4 flex flex-col gap-4 relative">
            <div className="absolute -top-3 right-6 w-28 h-5 bg-[#F6E05E]/90 rotate-2 z-10 pointer-events-none"></div>

            <div className="bg-[#F4EFE6] border-3 border-[#121316] p-5 rotate-[1deg] shadow-riso-coral">
              <div className="flex items-center justify-between border-b-2 border-[#121316] pb-2 mb-3">
                <span className="font-mono text-xs uppercase font-bold text-[#1B2A4A]">
                  KEY METRICS // NMUN 2026
                </span>
                <span className="w-2.5 h-2.5 bg-[#FF4D4D] animate-ping rounded-full"></span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center p-2 bg-white border border-[#121316]">
                  <span>DELEGATES EXPECTED</span>
                  <span className="font-bold text-[#FF4D4D] font-heading text-base">450+</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white border border-[#121316]">
                  <span>DYNAMIC COUNCILS</span>
                  <span className="font-bold text-[#1B2A4A] font-heading text-base">6 COUNCILS</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-[#F6E05E] border border-[#121316]">
                  <span className="font-bold">TOTAL PRIZE POOL</span>
                  <span className="font-bold text-[#FF4D4D] font-heading text-base">₹1,50,000+</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white border border-[#121316]">
                  <span>CONFERENCE DURATION</span>
                  <span className="font-bold text-[#121316]">2 HIGH-TEMPO DAYS</span>
                </div>
              </div>

              <div className="mt-4 p-2.5 bg-white border border-dashed border-[#FF4D4D] text-center">
                <span className="font-mono text-[11px] uppercase text-[#FF4D4D] font-bold block">
                  ★ CASH PRIZES + BEST DELEGATE AWARDS ★
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
