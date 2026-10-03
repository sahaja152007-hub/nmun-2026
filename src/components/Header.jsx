import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, AlertCircle, FileText, CheckCircle2 } from 'lucide-react';
import { playTactileClick, getSoundEnabled, setSoundEnabled } from '../utils/audio';

export default function Header({ onOpenRegister }) {
  const [scrolled, setScrolled] = useState(false);
  const [audioActive, setAudioActive] = useState(true);

  // Target Date: November 14, 2026 09:00:00 IST
  const targetDate = new Date('2026-11-14T09:00:00+05:30').getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    const handleScroll = () => {
      if (window.scrollY > 180) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleAudio = () => {
    const newState = !audioActive;
    setAudioActive(newState);
    setSoundEnabled(newState);
    if (newState) playTactileClick();
  };

  return (
    <header className="w-full z-40 sticky top-0 bg-[#F4EFE6]">
      {/* Top Telemetry Dispatch Ticker */}
      <div className="w-full bg-[#1B2A4A] text-[#F4EFE6] px-4 py-1.5 flex flex-wrap items-center justify-between text-xs border-b-2 border-[#121316] gap-2">
        <div className="flex items-center gap-3 overflow-hidden whitespace-nowrap font-mono">
          <span className="bg-[#FF4D4D] text-[#121316] px-1.5 py-0.5 font-bold uppercase tracking-wider animate-pulse flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> OFFICIAL DISPATCH
          </span>
          <span className="text-[#F6E05E] font-bold">
            SVKM’S NMIMS SHIRPUR // 7TH ANNUAL CONFERENCE
          </span>
          <span className="text-[#FF4D4D]">●</span>
          <span>NOV 14–15, 2026</span>
          <span className="text-[#FF4D4D]">●</span>
          <span className="hidden sm:inline text-gray-300">
            DELEGATION ACCREDITATION NOW OPEN
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0 font-mono text-[11px]">
          {/* Live Countdown Timer */}
          <div className="flex items-center gap-1 bg-[#121316] text-[#F6E05E] px-2 py-0.5 border border-[#F6E05E]">
            <span className="text-gray-400">T-MINUS:</span>
            <span className="font-bold">
              {String(timeLeft.days).padStart(2, '0')}D : {String(timeLeft.hours).padStart(2, '0')}H : {String(timeLeft.minutes).padStart(2, '0')}M : {String(timeLeft.seconds).padStart(2, '0')}S
            </span>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={toggleAudio}
            className="flex items-center gap-1 bg-[#F6E05E] text-[#121316] px-2 py-0.5 font-bold hover:bg-[#FF4D4D] hover:text-[#F4EFE6] transition-colors"
            title="Toggle Web Audio tactile sound"
          >
            {audioActive ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span>AUDIO: [{audioActive ? 'ON' : 'MUTED'}]</span>
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`w-full px-4 lg:px-8 py-3 flex items-center justify-between border-b-2 border-[#121316] bg-[#F4EFE6]/95 backdrop-blur-sm transition-all ${scrolled ? 'shadow-riso-indigo' : ''}`}>
        {/* Campus & Conference Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#FF4D4D] border-2 border-[#121316] shadow-riso-indigo flex items-center justify-center font-heading font-extrabold text-[#121316] text-lg rotate-[-2deg]">
            N7
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-base md:text-lg uppercase tracking-tight text-[#1B2A4A] leading-none">
              NMUN 2026 — SHIRPUR
            </span>
            <span className="font-mono text-[10px] text-[#FF4D4D] tracking-widest uppercase font-bold">
              SVKM'S NMIMS MPTP CAMPUS
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 font-mono text-xs font-bold uppercase">
          <a
            href="#about"
            onClick={() => playTactileClick()}
            className="hover:bg-[#F6E05E] px-2 py-1 border border-transparent hover:border-[#121316] transition-all"
          >
            [01. SECRETARIAT]
          </a>
          <a
            href="#committees"
            onClick={() => playTactileClick()}
            className="hover:bg-[#F6E05E] px-2 py-1 border border-transparent hover:border-[#121316] transition-all"
          >
            [02. DOSSIERS]
          </a>
          <a
            href="#matrix"
            onClick={() => playTactileClick()}
            className="hover:bg-[#F6E05E] px-2 py-1 border border-transparent hover:border-[#121316] transition-all"
          >
            [03. MATRIX & CRISIS]
          </a>
          <a
            href="#register"
            onClick={() => playTactileClick()}
            className="hover:bg-[#F6E05E] px-2 py-1 border border-transparent hover:border-[#121316] transition-all"
          >
            [04. ACCREDITATION]
          </a>
        </nav>

        {/* Sticky Call to Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              playTactileClick();
              onOpenRegister();
            }}
            className={`font-mono text-xs font-bold uppercase px-3 py-1.5 border-2 border-[#121316] transition-all flex items-center gap-1.5 ${
              scrolled
                ? 'bg-[#FF4D4D] text-[#F4EFE6] shadow-riso-indigo hover:translate-x-[-1px] hover:translate-y-[-1px]'
                : 'bg-[#F6E05E] text-[#121316] shadow-riso-indigo'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CLAIM YOUR PLACARD</span>
          </button>
        </div>
      </div>
    </header>
  );
}
