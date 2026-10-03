import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#1B2A4A] text-[#F4EFE6] py-8 sm:py-12 border-t-4 border-[#121316] font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6 sm:gap-8">
        {/* Top Palette Swatch Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-600 pb-4">
          <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs">
            <span className="font-bold text-[#F6E05E]">RISOGRAPH SPEC:</span>
            <span>⊕ CORAL (#FF4D4D)</span>
            <span>⊕ INDIGO (#1B2A4A)</span>
            <span className="hidden sm:inline">⊕ WASHI (#F6E05E)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#FF4D4D] border border-white" title="Riso Coral"></div>
            <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#1B2A4A] border border-white" title="Riso Indigo"></div>
            <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#F6E05E] border border-white" title="Washi Yellow"></div>
            <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#F4EFE6] border border-white" title="Newsprint Base"></div>
          </div>
        </div>

        {/* 3 Columns Details */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          <div className="md:col-span-5 flex flex-col gap-2">
            <span className="font-heading font-extrabold text-base sm:text-lg text-white uppercase">
              NMUN 2026 // NMIMS SHIRPUR
            </span>
            <p className="text-gray-300 text-xs leading-relaxed font-sans">
              7th Annual Model United Nations hosted at SVKM’s NMIMS Mukesh Patel Technology Park, Shirpur Campus. 
              Bridging engineering foresight, technological ethics, and international law.
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col gap-1.5 text-gray-300">
            <span className="font-bold text-[#F6E05E] uppercase">CONFERENCE VENUE</span>
            <span>SVKM’s NMIMS Mukesh Patel Technology Park</span>
            <span>Babulde, Bank of Tapi River, Mumbai-Agra National Highway</span>
            <span>Shirpur, Dhule District, Maharashtra — 425405</span>
          </div>

          <div className="md:col-span-3 flex flex-col gap-1.5 text-gray-300">
            <span className="font-bold text-[#F6E05E] uppercase">SECRETARIAT HOTLINE</span>
            <span>DATE: NOVEMBER 14–15, 2026</span>
            <span>DISPATCH: 142.825 MHz</span>
            <span>EMAIL: secretariat.nmun@nmims.edu</span>
          </div>
        </div>

        {/* Bottom Copyleft Bar */}
        <div className="pt-4 border-t border-gray-700 flex flex-wrap items-center justify-between text-[10px] sm:text-[11px] text-gray-400 gap-2">
          <span>COPYLEFT 2026 // SVKM'S NMIMS SHIRPUR MODEL UNITED NATIONS</span>
          <span className="bg-[#121316] text-[#FF4D4D] px-2 py-0.5 font-bold border border-gray-700">
            TWO-PASS RISOGRAPH PRINT
          </span>
        </div>
      </div>
    </footer>
  );
}
