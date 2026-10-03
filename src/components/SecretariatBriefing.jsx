import React, { useState, useEffect, useRef } from 'react';
import { Landmark, Gavel, Sparkles, CheckSquare } from 'lucide-react';

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
    const duration = 1500;
    const steps = 50;
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
    <section id="about" ref={sectionRef} className="w-full px-6 lg:px-12 py-20 bg-[#FAF6F0] border-b-2 border-[#121316]">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-[#121316] pb-4">
          <div>
            <span className="font-mono text-xs text-[#FF4D4D] uppercase font-bold tracking-widest block mb-1">
              [01] OVERVIEW // SECRETARIAT BRIEFING
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl uppercase text-[#1B2A4A] tracking-tight font-extrabold">
              THE SHIRPUR DIPLOMATIC BRIEFING
            </h2>
          </div>
          <div className="bg-[#F6E05E] text-[#121316] px-3.5 py-1 font-mono text-xs font-bold uppercase border border-[#121316]">
            ★ 7TH EDITION // MPTP CAMPUS
          </div>
        </div>

        {/* 3-Column Folded Zine Paste-Up Layout (Concise 2-line blurbs) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {/* Pillar 1: The Shirpur Legacy */}
          <div className="bg-white border-3 border-[#121316] p-6 shadow-riso-indigo flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-[#121316] pb-3 mb-4">
                <span className="font-heading font-extrabold text-2xl text-[#FF4D4D]">01.</span>
                <span className="font-mono text-xs uppercase bg-[#1B2A4A] text-white px-2 py-0.5 font-bold">
                  HERITAGE
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-xl uppercase text-[#1B2A4A] mb-3 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-[#FF4D4D]" />
                MPTP CAMPUS LEGACY
              </h3>

              <p className="font-sans text-sm text-gray-700 leading-snug mb-4">
                Hosted at SVKM’s NMIMS Shirpur campus, bridging engineering foresight and international law across India.
              </p>
            </div>

            <div className="p-3 bg-[#F4EFE6] border border-[#121316] font-mono text-xs flex justify-between">
              <span className="text-gray-600">LOCATION:</span>
              <span className="font-bold text-[#1B2A4A]">Central Auditorium</span>
            </div>
          </div>

          {/* Pillar 2: Procedural Rigor */}
          <div className="bg-white border-3 border-[#121316] p-6 shadow-riso-coral flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-[#121316] pb-3 mb-4">
                <span className="font-heading font-extrabold text-2xl text-[#FF4D4D]">02.</span>
                <span className="font-mono text-xs uppercase bg-[#FF4D4D] text-white px-2 py-0.5 font-bold">
                  RIGOR
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-xl uppercase text-[#1B2A4A] mb-3 flex items-center gap-2">
                <Gavel className="w-5 h-5 text-[#FF4D4D]" />
                PROCEDURAL RIGOR
              </h3>

              <p className="font-sans text-sm text-gray-700 leading-snug mb-4">
                Classic UNA-USA parliamentary rules paired with rapid Joint Crisis Cabinets for sharp strategic debate.
              </p>
            </div>

            <div className="p-3 bg-[#F4EFE6] border border-[#121316] font-mono text-xs flex justify-between">
              <span className="text-gray-600">RULESET:</span>
              <span className="font-bold text-[#FF4D4D]">UNA-USA + JCC</span>
            </div>
          </div>

          {/* Pillar 3: Beyond the Dais */}
          <div className="bg-white border-3 border-[#121316] p-6 shadow-riso-indigo flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-[#121316] pb-3 mb-4">
                <span className="font-heading font-extrabold text-2xl text-[#FF4D4D]">03.</span>
                <span className="font-mono text-xs uppercase bg-[#F6E05E] text-[#121316] px-2 py-0.5 font-bold border border-[#121316]">
                  COMMUNITY
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-xl uppercase text-[#1B2A4A] mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#FF4D4D]" />
                BEYOND THE DAIS
              </h3>

              <p className="font-sans text-sm text-gray-700 leading-snug mb-4">
                High-stakes caucuses, delegate social gala night, and comprehensive training workshops for all delegates.
              </p>
            </div>

            <div className="p-3 bg-[#F4EFE6] border border-[#121316] font-mono text-xs flex justify-between">
              <span className="text-gray-600">HIGHLIGHTS:</span>
              <span className="font-bold text-[#121316]">Gala & Workshops</span>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="p-6 bg-[#1B2A4A] border-3 border-[#121316] text-[#F4EFE6] shadow-riso-coral">
          <div className="flex items-center justify-between border-b border-gray-600 pb-3 mb-6">
            <span className="font-mono text-xs text-[#F6E05E] uppercase font-bold tracking-widest flex items-center gap-2">
              <CheckSquare className="w-4 h-4 text-[#FF4D4D]" />
              CONFERENCE TELEMETRY
            </span>
            <span className="font-mono text-[10px] bg-[#FF4D4D] text-[#F4EFE6] px-2 py-0.5 font-bold">
              VERIFIED 2026
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center font-mono">
            <div className="flex flex-col items-center justify-center p-4 bg-[#121316] border border-gray-700">
              <span className="font-heading font-extrabold text-3xl sm:text-4xl text-[#FF4D4D]">
                {counts.delegates}+
              </span>
              <span className="text-xs text-gray-300 font-bold uppercase mt-1">DELEGATES</span>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-[#121316] border border-gray-700">
              <span className="font-heading font-extrabold text-3xl sm:text-4xl text-[#F6E05E]">
                {counts.councils}
              </span>
              <span className="text-xs text-gray-300 font-bold uppercase mt-1">COUNCILS</span>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-[#121316] border border-gray-700">
              <span className="font-heading font-extrabold text-3xl sm:text-4xl text-[#FF4D4D]">
                ₹{counts.prize.toLocaleString()}+
              </span>
              <span className="text-xs text-gray-300 font-bold uppercase mt-1">PRIZE POOL</span>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-[#121316] border border-gray-700">
              <span className="font-heading font-extrabold text-3xl sm:text-4xl text-[#F6E05E]">
                {counts.days}
              </span>
              <span className="text-xs text-gray-300 font-bold uppercase mt-1">DAYS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
