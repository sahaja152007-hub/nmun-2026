import React, { useState, useEffect } from 'react';
import { FileText, Menu, X } from 'lucide-react';

export default function Header({ onOpenRegister }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full z-40 sticky top-0 bg-[#F4EFE6] border-b-2 border-[#121316]">
      <div className={`w-full px-4 sm:px-6 lg:px-12 py-3 sm:py-4 flex items-center justify-between bg-[#F4EFE6]/95 backdrop-blur-sm transition-all ${scrolled ? 'shadow-riso-indigo' : ''}`}>
        {/* Campus & Conference Brand */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#FF4D4D] border-2 border-[#121316] shadow-[2px_2px_0px_#1B2A4A] sm:shadow-riso-indigo flex items-center justify-center font-heading font-extrabold text-[#121316] text-base sm:text-xl rotate-[-2deg]">
            N7
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-sm sm:text-lg md:text-xl uppercase tracking-tight text-[#1B2A4A] leading-none">
              NMUN 2026
            </span>
            <span className="font-mono text-[9px] sm:text-[11px] text-[#FF4D4D] tracking-wider uppercase font-bold mt-0.5">
              NMIMS SHIRPUR
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-mono text-xs font-bold uppercase tracking-wider">
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

        {/* CTA & Mobile Hamburger Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenRegister}
            className="font-mono text-[11px] sm:text-xs font-bold uppercase px-2.5 sm:px-4 py-2 bg-[#FF4D4D] text-[#F4EFE6] border-2 border-[#121316] shadow-[2px_2px_0px_#1B2A4A] sm:shadow-riso-indigo hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-0 active:translate-y-0 transition-all flex items-center gap-1.5 touch-target"
          >
            <FileText className="w-3.5 h-3.5 text-[#F6E05E]" />
            <span>CLAIM PLACARD</span>
          </button>

          {/* Hamburger Menu Toggle Button for Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 bg-white border-2 border-[#121316] text-[#1B2A4A] shadow-[2px_2px_0px_#1B2A4A] touch-target flex items-center justify-center"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF4D4D]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Full-Screen Slide Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[57px] z-50 bg-[#F4EFE6] border-t-2 border-[#121316] flex flex-col p-6 space-y-6 md:hidden shadow-lg animate-in slide-in-from-top duration-200 overflow-y-auto">
          <div className="font-mono text-xs font-bold text-[#FF4D4D] uppercase tracking-widest border-b-2 border-dashed border-[#121316] pb-2">
            CONFERENCE NAVIGATION // NMUN 2026
          </div>

          <nav className="flex flex-col space-y-4 font-mono text-sm font-bold uppercase">
            <button
              onClick={() => handleNavClick('#about')}
              className="text-left bg-white border-2 border-[#121316] p-4 text-[#1B2A4A] shadow-riso-indigo active:bg-[#F6E05E]"
            >
              [01. OVERVIEW & BRIEFING]
            </button>
            <button
              onClick={() => handleNavClick('#committees')}
              className="text-left bg-white border-2 border-[#121316] p-4 text-[#1B2A4A] shadow-riso-indigo active:bg-[#F6E05E]"
            >
              [02. COMMITTEE DOSSIERS]
            </button>
            <button
              onClick={() => handleNavClick('#matrix')}
              className="text-left bg-white border-2 border-[#121316] p-4 text-[#1B2A4A] shadow-riso-indigo active:bg-[#F6E05E]"
            >
              [03. COUNTRY MATRIX & CRISIS]
            </button>
          </nav>

          <div className="pt-4 border-t-2 border-dashed border-[#121316] flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="w-full py-4 bg-[#FF4D4D] text-[#F4EFE6] font-heading font-extrabold text-base uppercase border-3 border-[#121316] shadow-riso-indigo flex items-center justify-center gap-2"
            >
              <FileText className="w-5 h-5 text-[#F6E05E]" />
              <span>CLAIM YOUR DELEGATE PLACARD</span>
            </button>

            <div className="text-center font-mono text-[11px] text-gray-600 uppercase font-bold pt-2">
              SVKM'S NMIMS SHIRPUR CAMPUS // NOV 14–15, 2026
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
