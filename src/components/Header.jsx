import React, { useState, useEffect } from 'react';
import { FileText } from 'lucide-react';

export default function Header({ onOpenRegister }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full z-40 sticky top-0 bg-[#F4EFE6] border-b-2 border-[#121316]">
      {/* Clean Main Navbar */}
      <div className={`w-full px-6 lg:px-12 py-4 flex items-center justify-between bg-[#F4EFE6]/95 backdrop-blur-sm transition-all ${scrolled ? 'shadow-riso-indigo' : ''}`}>
        {/* Campus & Conference Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#FF4D4D] border-2 border-[#121316] shadow-riso-indigo flex items-center justify-center font-heading font-extrabold text-[#121316] text-xl rotate-[-2deg]">
            N7
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-lg md:text-xl uppercase tracking-tight text-[#1B2A4A] leading-none">
              NMUN 2026 — SHIRPUR
            </span>
            <span className="font-mono text-[11px] text-[#FF4D4D] tracking-widest uppercase font-bold mt-0.5">
              SVKM'S NMIMS MPTP CAMPUS
            </span>
          </div>
        </div>

        {/* Navigation Links (Decluttered) */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs font-bold uppercase tracking-wider">
          <a
            href="#about"
            className="hover:bg-[#F6E05E] px-2.5 py-1 border border-transparent hover:border-[#121316] transition-all text-[#1B2A4A]"
          >
            [01. OVERVIEW]
          </a>
          <a
            href="#committees"
            className="hover:bg-[#F6E05E] px-2.5 py-1 border border-transparent hover:border-[#121316] transition-all text-[#1B2A4A]"
          >
            [02. COMMITTEES]
          </a>
          <a
            href="#matrix"
            className="hover:bg-[#F6E05E] px-2.5 py-1 border border-transparent hover:border-[#121316] transition-all text-[#1B2A4A]"
          >
            [03. MATRIX & CRISIS]
          </a>
        </nav>

        {/* Call to Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenRegister}
            className="font-mono text-xs font-bold uppercase px-4 py-2 bg-[#FF4D4D] text-[#F4EFE6] border-2 border-[#121316] shadow-riso-indigo hover:shadow-riso-indigo-lg hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-0 active:translate-y-0 transition-all flex items-center gap-2"
          >
            <FileText className="w-4 h-4 text-[#F6E05E]" />
            <span>CLAIM YOUR PLACARD</span>
          </button>
        </div>
      </div>
    </header>
  );
}
