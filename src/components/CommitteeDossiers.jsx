import React, { useState } from 'react';
import { Lock, Unlock, Users, ChevronDown, ChevronUp } from 'lucide-react';

const COMMITTEES = [
  {
    id: 'UNSC',
    code: 'DOSSIER // UNSC-2026',
    name: 'United Nations Security Council',
    agenda: 'Regulating Autonomous Weapon Systems (LAWS) and AI in Modern Asymmetric Warfare',
    format: 'Double Delegation',
    status: 'HIGH COMMAND',
    clauseTitle: 'CLAUSE 14-B: SWARM AUTONOMY LIMITS',
    clauseContent: 'Mandatory kill-switch protocols and human-in-the-loop verification required for kinetic aerial autonomous platforms in non-combatant sectors.',
  },
  {
    id: 'UNHRC',
    code: 'DOSSIER // UNHRC-2026',
    name: 'United Nations Human Rights Council',
    agenda: 'Data Colonization, Digital Privacy, and State Surveillance in Developing Economies',
    format: 'Single Delegation',
    status: 'HEARINGS LIVE',
    clauseTitle: 'CLAUSE 08-A: BIOMETRIC DATA EMBARGO',
    clauseContent: 'Prohibiting corporate extraction of citizen biometric metadata without explicit bilateral civilian parliament authorization.',
  },
  {
    id: 'AIPPM',
    code: 'DOSSIER // AIPPM-2026',
    name: 'All India Political Parties Meet',
    agenda: 'Deliberation on Agricultural Tech-Infrastructure, Digital Land Records, and Rural Economic Autonomy',
    format: 'Single Delegation (Bilingual)',
    status: 'PARLIAMENTARY',
    clauseTitle: 'CLAUSE 03-C: DIGITAL LAND TITLING BILL',
    clauseContent: 'Establishing village panchayat digital title verification nodes to prevent land record tampering and ensure credit access.',
  },
  {
    id: 'JCC',
    code: 'DOSSIER // JCC-1999',
    name: 'Joint Crisis Committee: 1999 Kargil Backchannel',
    agenda: 'Declassified High-Command Intelligence and Continuous Crisis Updates',
    format: 'Fast-Paced Single Delegation',
    status: 'CRISIS DIRECTIVE',
    clauseTitle: 'INTEL BRIEF 01: HIGH-ALTITUDE LOGISTICS',
    clauseContent: 'High-altitude communications interrupted along Sector 4. Crisis cabinet must coordinate rapid backchannel response within 20 minutes.',
  }
];

export default function CommitteeDossiers({ onSelectCommittee }) {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleExpand = (id) => {
    if (expandedCard === id) {
      setExpandedCard(null);
    } else {
      setExpandedCard(id);
    }
  };

  return (
    <section id="committees" className="w-full px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20 bg-[#FAF6F0] border-b-2 border-[#121316]">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-12">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-3 border-b-2 border-[#121316] pb-3.5">
          <div>
            <span className="font-mono text-[11px] sm:text-xs text-[#FF4D4D] uppercase font-bold tracking-widest block mb-1">
              [02] AGENDAS & COUNCILS // CLASSIFIED DECK
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl uppercase text-[#1B2A4A] tracking-tight font-extrabold">
              COMMITTEE DOSSIERS
            </h2>
          </div>
          <div className="font-mono text-[11px] sm:text-xs text-gray-700 bg-white border border-[#121316] px-3 py-1 font-bold">
            INSPECT CLASSIFIED INTEL
          </div>
        </div>

        {/* 4 Committee Cards Grid (Responsive Single Column Stack on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {COMMITTEES.map((item) => {
            const isExpanded = expandedCard === item.id;
            return (
              <div
                key={item.id}
                className="bg-white border-3 border-[#121316] flex flex-col justify-between p-5 sm:p-6 lg:p-8 shadow-[3px_3px_0px_#1B2A4A] sm:shadow-riso-indigo relative hover:shadow-riso-indigo-lg transition-all"
              >
                <div className="flex flex-col gap-3.5 sm:gap-4">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between border-b-2 border-[#121316] pb-2 font-mono text-[11px] sm:text-xs">
                    <span className="text-[#FF4D4D] font-bold">{item.code}</span>
                    <span className="border border-dashed border-[#1B2A4A] text-[#1B2A4A] px-1.5 sm:px-2 py-0.5 font-bold text-[10px] uppercase">
                      {item.status}
                    </span>
                  </div>

                  {/* Title & Format */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-heading font-extrabold text-xl sm:text-2xl uppercase text-[#1B2A4A] leading-tight">
                        {item.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1.5">
                        <span className="bg-[#1B2A4A] text-[#F4EFE6] px-2 py-0.5 font-mono text-[10px] sm:text-[11px] font-bold uppercase">
                          {item.id}
                        </span>
                        <span className="font-mono text-xs text-gray-700 font-semibold flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-[#FF4D4D] shrink-0" />
                          <span>{item.format}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Agenda Title */}
                  <div className="p-3.5 sm:p-4 bg-[#F4EFE6] border-2 border-[#121316]">
                    <span className="font-mono text-[10px] text-[#FF4D4D] font-bold uppercase block mb-1">
                      AGENDA ITEM:
                    </span>
                    <p className="font-sans text-xs sm:text-sm md:text-base font-bold text-[#121316] leading-snug">
                      "{item.agenda}"
                    </p>
                  </div>

                  {/* Toggleable Document Clause */}
                  <div
                    onClick={() => toggleExpand(item.id)}
                    className="bg-white border-2 border-[#121316] p-3 cursor-pointer hover:bg-[#F6E05E]/30 transition-colors touch-target flex flex-col justify-center"
                  >
                    <div className="flex items-center justify-between font-mono text-xs font-bold text-[#1B2A4A]">
                      <span className="flex items-center gap-1.5">
                        {isExpanded ? <Unlock className="w-4 h-4 text-[#FF4D4D] shrink-0" /> : <Lock className="w-4 h-4 text-[#1B2A4A] shrink-0" />}
                        <span>[{item.clauseTitle}]</span>
                      </span>
                      <span className="text-[#FF4D4D]">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </span>
                    </div>

                    {isExpanded && (
                      <div className="mt-3 pt-2.5 border-t border-[#121316] font-mono text-xs text-gray-800 space-y-2">
                        <p className="leading-relaxed bg-[#F4EFE6] p-2.5 border border-gray-300">
                          <span className="font-bold text-[#FF4D4D]">INTEL: </span>
                          {item.clauseContent}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t-2 border-[#121316] flex items-center justify-between font-mono text-xs">
                  <span className="text-gray-600 font-bold hidden sm:inline">PORTFOLIOS:</span>
                  <button
                    onClick={() => onSelectCommittee(item.id)}
                    className="w-full sm:w-auto bg-[#FF4D4D] text-[#F4EFE6] px-3.5 py-2 font-bold uppercase border border-[#121316] shadow-sm hover:bg-[#1B2A4A] transition-colors flex items-center justify-center gap-1 touch-target"
                  >
                    <span>SELECT {item.id} PORTFOLIO</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
