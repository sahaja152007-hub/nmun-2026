import React, { useState, useEffect, useRef } from 'react';
import { Landmark, Gavel, Users, Trophy, BookOpen, Sparkles, CheckSquare } from 'lucide-react';
import { playTactileClick } from '../utils/audio';

export default function SecretariatBriefing() {
  const [counts, setCounts] = useState({
    delegates: 0,
    councils: 0,
    prize: 0,
    days: 0,
  });

  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 1800; // ms
    const steps = 60;
    const intervalTime = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounts({
        delegates: Math.floor(progress * 450),
        councils: Math.floor(progress * 6),
        prize: Math.floor(progress * 150000),
        days: Math.floor(progress * 2),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts({
          delegates: 450,
          councils: 6,
          prize: 150000,
          days: 2,
        });
      }
    }, intervalTime);
  };

  return (
    <section id="about" ref={sectionRef} className="w-full px-4 lg:px-8 py-16 bg-[#FAF6F0] border-b-2 border-[#121316] relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-[#121316] pb-4">
          <div>
            <span className="font-mono text-xs text-[#FF4D4D] uppercase font-bold tracking-widest block">
              [01] OVERVIEW // SECRETARIAT BRIEFING
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl uppercase text-[#1B2A4A] tracking-tight font-extrabold">
              THE SHIRPUR DIPLOMATIC BRIEFING
            </h2>
          </div>
          <div className="bg-[#F6E05E] text-[#121316] px-3 py-1 font-mono text-xs font-bold uppercase border border-[#121316] rotate-[-1deg]">
            ★ 7TH EDITION // SVKM'S NMIMS MPTP
          </div>
        </div>

        {/* 3-Column Folded Zine Paste-Up Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {/* Pillar 1: The Shirpur Legacy */}
          <div className="relative bg-white border-3 border-[#121316] p-6 shadow-riso-indigo rotate-[-1deg] hover:rotate-0 transition-transform">
            {/* Paper Clip Graphic Simulation */}
            <div className="absolute -top-4 left-6 w-8 h-8 border-2 border-gray-600 rounded-full border-b-transparent pointer-events-none z-10 opacity-70"></div>
            <div className="absolute -top-3 left-8 w-20 h-4 bg-[#F6E05E]/90 rotate-[-2deg]"></div>

            <div className="flex items-center justify-between border-b-2 border-[#121316] pb-2 mb-4">
              <span className="font-heading font-extrabold text-2xl text-[#FF4D4D]">01.</span>
              <span className="font-mono text-xs uppercase bg-[#1B2A4A] text-white px-2 py-0.5 font-bold">
                THE LEGACY
              </span>
            </div>

            <h3 className="font-heading font-extrabold text-xl uppercase text-[#1B2A4A] mb-3 flex items-center gap-2">
              <Landmark className="w-5 h-5 text-[#FF4D4D]" />
              MPTP CAMPUS HERITAGE
            </h3>

            <p className="font-sans text-sm text-gray-800 leading-relaxed mb-4">
              Hosting delegates from premier institutions across India at SVKM’s NMIMS Mukesh Patel Technology Park. We bridge technological insight, engineering foresight, and international diplomacy.
            </p>

            <div className="p-3 bg-[#F4EFE6] border border-[#121316] font-mono text-xs space-y-1">
              <div className="flex justify-between">
                <span className="text-gray-600">VENUE:</span>
                <span className="font-bold text-[#1B2A4A]">Central Auditorium</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">LOCATION:</span>
                <span className="font-bold text-[#121316]">Dhule, Maharashtra</span>
              </div>
            </div>
          </div>

          {/* Pillar 2: Procedural Rigor */}
          <div className="relative bg-white border-3 border-[#121316] p-6 shadow-riso-coral rotate-[1deg] hover:rotate-0 transition-transform">
            <div className="absolute -top-3 right-6 w-24 h-4 bg-[#F6E05E]/90 rotate-[3deg]"></div>

            <div className="flex items-center justify-between border-b-2 border-[#121316] pb-2 mb-4">
              <span className="font-heading font-extrabold text-2xl text-[#FF4D4D]">02.</span>
              <span className="font-mono text-xs uppercase bg-[#FF4D4D] text-white px-2 py-0.5 font-bold">
                PROCEDURE
              </span>
            </div>

            <h3 className="font-heading font-extrabold text-xl uppercase text-[#1B2A4A] mb-3 flex items-center gap-2">
              <Gavel className="w-5 h-5 text-[#FF4D4D]" />
              UNCOMPROMISED RIGOR
            </h3>

            <p className="font-sans text-sm text-gray-800 leading-relaxed mb-4">
              Classic UNA-USA rules of procedure paired with rapid-fire Joint Crisis Cabinets. Designed for intense strategic debate, rapid draft resolutions, and real-time intelligence directives.
            </p>

            <div className="p-3 bg-[#F4EFE6] border border-[#121316] font-mono text-xs space-y-1">
              <div className="flex justify-between">
                <span className="text-gray-600">RULES:</span>
                <span className="font-bold text-[#FF4D4D]">UNA-USA Ruleset</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">CABINETS:</span>
                <span className="font-bold text-[#1B2A4A]">Fast-Paced JCC</span>
              </div>
            </div>
          </div>

          {/* Pillar 3: Beyond the Dais */}
          <div className="relative bg-white border-3 border-[#121316] p-6 shadow-riso-indigo rotate-[-1deg] hover:rotate-0 transition-transform">
            <div className="absolute -top-3 left-10 w-24 h-4 bg-[#F6E05E]/90 rotate-[-1deg]"></div>

            <div className="flex items-center justify-between border-b-2 border-[#121316] pb-2 mb-4">
              <span className="font-heading font-extrabold text-2xl text-[#FF4D4D]">03.</span>
              <span className="font-mono text-xs uppercase bg-[#F6E05E] text-[#121316] px-2 py-0.5 font-bold border border-[#121316]">
                EXPERIENCE
              </span>
            </div>

            <h3 className="font-heading font-extrabold text-xl uppercase text-[#1B2A4A] mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#FF4D4D]" />
              BEYOND THE DAIS
            </h3>

            <p className="font-sans text-sm text-gray-800 leading-relaxed mb-4">
              High-stakes unmoderated caucuses, social delegate gala night, and comprehensive executive training sessions provided for first-time delegates and veteran MUNers alike.
            </p>

            <div className="p-3 bg-[#F4EFE6] border border-[#121316] font-mono text-xs space-y-1">
              <div className="flex justify-between">
                <span className="text-gray-600">TRAINING:</span>
                <span className="font-bold text-[#121316]">Pre-Conf Workshops</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">SOCIALS:</span>
                <span className="font-bold text-[#FF4D4D]">Delegate Gala Night</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Scroll-Animated Stats Counter Bar */}
        <div className="mt-4 p-6 bg-[#1B2A4A] border-3 border-[#121316] text-[#F4EFE6] shadow-riso-coral rotate-[0.5deg]">
          <div className="flex items-center justify-between border-b border-gray-600 pb-3 mb-6">
            <span className="font-mono text-xs text-[#F6E05E] uppercase font-bold tracking-widest flex items-center gap-2">
              <CheckSquare className="w-4 h-4 text-[#FF4D4D]" />
              LIVE CONFERENCE TELEMETRY COUNTERS
            </span>
            <span className="font-mono text-[10px] bg-[#FF4D4D] text-[#F4EFE6] px-2 py-0.5 font-bold">
              VERIFIED 2026 DATA
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center font-mono">
            {/* Stat 1 */}
            <div className="flex flex-col items-center justify-center p-3 bg-[#121316] border border-gray-700">
              <span className="font-heading font-extrabold text-3xl sm:text-4xl text-[#FF4D4D]">
                {counts.delegates}+
              </span>
              <span className="text-xs text-gray-300 font-bold uppercase mt-1">DELEGATES</span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center justify-center p-3 bg-[#121316] border border-gray-700">
              <span className="font-heading font-extrabold text-3xl sm:text-4xl text-[#F6E05E]">
                {counts.councils}
              </span>
              <span className="text-xs text-gray-300 font-bold uppercase mt-1">DYNAMIC COUNCILS</span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center justify-center p-3 bg-[#121316] border border-gray-700">
              <span className="font-heading font-extrabold text-3xl sm:text-4xl text-[#FF4D4D]">
                ₹{counts.prize.toLocaleString()}+
              </span>
              <span className="text-xs text-gray-300 font-bold uppercase mt-1">PRIZE POOL</span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center justify-center p-3 bg-[#121316] border border-gray-700">
              <span className="font-heading font-extrabold text-3xl sm:text-4xl text-[#F6E05E]">
                {counts.days}
              </span>
              <span className="text-xs text-gray-300 font-bold uppercase mt-1">HIGH-TEMPO DAYS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
