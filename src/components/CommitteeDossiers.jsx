import React, { useState } from 'react';
import { Shield, FileText, Lock, Unlock, Users, ChevronDown, ChevronUp, AlertOctagon } from 'lucide-react';
import { playTactileClick } from '../utils/audio';

const COMMITTEES = [
  {
    id: 'UNSC',
    code: 'DOSSIER // UNSC-2026',
    name: 'United Nations Security Council',
    agenda: 'Regulating Autonomous Weapon Systems (LAWS) and AI in Modern Asymmetric Warfare',
    format: 'Double Delegation',
    status: 'CLASSIFIED HIGH COMMAND',
    sealText: 'VETO POWERS ACTIVE',
    clauseTitle: 'CLAUSE 14-B: SWARM AUTONOMY LIMITS',
    clauseContent: 'Mandatory fail-safe kill switches and decentralized human-in-the-loop verification required for all kinetic aerial autonomous platforms operating within non-combatant maritime sectors.',
  },
  {
    id: 'UNHRC',
    code: 'DOSSIER // UNHRC-2026',
    name: 'United Nations Human Rights Council',
    agenda: 'Data Colonization, Digital Privacy, and State Surveillance in Developing Economies',
    format: 'Single Delegation',
    status: 'OPEN HEARINGS LIVE',
    sealText: 'PRIVACY MANDATE',
    clauseTitle: 'CLAUSE 08-A: SOVEREIGN BIOMETRIC EMBARGO',
    clauseContent: 'Prohibiting transnational corporate extraction of biometric metadata without explicit bilateral civilian parliament consent and verifiable local data sanctuary hosting.',
  },
  {
    id: 'AIPPM',
    code: 'DOSSIER // AIPPM-2026',
    name: 'All India Political Parties Meet',
    agenda: 'Deliberation on Agricultural Tech-Infrastructure, Digital Land Records, and Rural Economic Autonomy',
    format: 'Single Delegation (Bilingual / Hindi-English)',
    status: 'HIGH-TEMPO DEBATE',
    sealText: 'BILINGUAL COMMITTEE',
    clauseTitle: 'CLAUSE 03-C: DIGITAL LAND TITLING BILL',
    clauseContent: 'Establishing decentralized village panchayat digital title verification nodes to prevent land record tampering and guarantee algorithmic agricultural credit access.',
  },
  {
    id: 'JCC',
    code: 'DOSSIER // JCC-1999',
    name: 'Joint Crisis Committee: 1999 Kargil Backchannel',
    agenda: 'Declassified High-Command Intelligence and Continuous Rapid Crisis Updates',
    format: 'Fast-Paced Single Delegation',
    status: 'SECRETARIAT DIRECTIVE',
    sealText: 'CRISIS CABINET',
    clauseTitle: 'INTEL BRIEF 01: HIGH-ALTITUDE LOGISTICS',
    clauseContent: 'Unconfirmed movement detected along northern mountain passes. Cabinet must coordinate immediate diplomatic backchannel communications with international observers within 20 minutes of crisis directive.',
  }
];

export default function CommitteeDossiers({ onSelectCommittee }) {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleExpand = (id) => {
    playTactileClick();
    if (expandedCard === id) {
      setExpandedCard(null);
    } else {
      setExpandedCard(id);
    }
  };

  return (
    <section id="committees" className="w-full px-4 lg:px-8 py-16 bg-[#FAF6F0] border-b-2 border-[#121316] relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-[#121316] pb-4">
          <div>
            <span className="font-mono text-xs text-[#FF4D4D] uppercase font-bold tracking-widest block">
              [02] AGENDAS & COUNCILS // CLASSIFIED DECK
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl uppercase text-[#1B2A4A] tracking-tight font-extrabold">
              COMMITTEE DOSSIERS & AGENDAS
            </h2>
          </div>
          <div className="font-mono text-xs text-gray-700 bg-white border border-[#121316] px-3 py-1 font-bold">
            CLICK CARD TO TOGGLE REDACTED INTEL
          </div>
        </div>

        {/* 4 Committee Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COMMITTEES.map((item, idx) => {
            const isExpanded = expandedCard === item.id;
            return (
              <div
                key={item.id}
                className={`bg-white border-3 border-[#121316] flex flex-col justify-between p-6 relative transition-all ${
                  idx % 2 === 0 ? 'rotate-[-0.5deg] shadow-riso-indigo' : 'rotate-[0.5deg] shadow-riso-coral'
                } hover:rotate-0`}
              >
                {/* Washi Tape Corner Accent */}
                <div className={`absolute -top-3 ${idx % 2 === 0 ? 'left-6 rotate-[-3deg]' : 'right-6 rotate-[2deg]'} w-28 h-5 bg-[#F6E05E]/90 z-10 pointer-events-none border-t border-b border-black/10`}></div>

                <div className="flex flex-col gap-3">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between border-b-2 border-[#121316] pb-2 font-mono text-xs">
                    <span className="text-[#FF4D4D] font-bold">{item.code}</span>
                    <span className="border border-dashed border-[#1B2A4A] text-[#1B2A4A] px-1.5 py-0.5 font-bold text-[10px] uppercase">
                      {item.status}
                    </span>
                  </div>

                  {/* Council Title & Format */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-heading font-extrabold text-2xl uppercase text-[#1B2A4A]">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="bg-[#1B2A4A] text-[#F4EFE6] px-2 py-0.5 font-mono text-[11px] font-bold uppercase">
                          {item.id}
                        </span>
                        <span className="font-mono text-xs text-gray-700 font-semibold flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-[#FF4D4D]" />
                          {item.format}
                        </span>
                      </div>
                    </div>

                    {/* Stamped Seal */}
                    <div className="stamp-seal text-[10px] px-2 py-0.5 shrink-0 hidden sm:block">
                      {item.sealText}
                    </div>
                  </div>

                  {/* Agenda Title */}
                  <div className="p-3 bg-[#F4EFE6] border-2 border-[#121316] my-1">
                    <span className="font-mono text-[10px] text-[#FF4D4D] font-bold uppercase block mb-1">
                      OFFICIAL AGENDA ITEM:
                    </span>
                    <p className="font-sans text-sm md:text-base font-bold text-[#121316] leading-snug">
                      "{item.agenda}"
                    </p>
                  </div>

                  {/* Toggleable Redacted Document Clause */}
                  <div
                    onClick={() => toggleExpand(item.id)}
                    className="bg-white border-2 border-[#121316] p-3 cursor-pointer hover:bg-[#F6E05E]/30 transition-colors"
                  >
                    <div className="flex items-center justify-between font-mono text-xs font-bold text-[#1B2A4A]">
                      <span className="flex items-center gap-1.5">
                        {isExpanded ? <Unlock className="w-4 h-4 text-[#FF4D4D]" /> : <Lock className="w-4 h-4 text-[#1B2A4A]" />}
                        <span>[{item.clauseTitle}]</span>
                      </span>
                      <span className="text-[#FF4D4D]">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </span>
                    </div>

                    {isExpanded && (
                      <div className="mt-3 pt-2 border-t border-[#121316] font-mono text-xs text-gray-800 space-y-2">
                        <p className="leading-relaxed bg-[#F4EFE6] p-2 border border-gray-300">
                          <span className="font-bold text-[#FF4D4D]">DECLASSIFIED TEXT: </span>
                          {item.clauseContent}
                        </p>
                        <div className="text-[10px] text-gray-600 font-bold uppercase flex justify-between">
                          <span>SECRETARIAT VERIFIED</span>
                          <span className="text-[#FF4D4D]">● 100% AUDITED</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-4 pt-3 border-t-2 border-[#121316] flex items-center justify-between font-mono text-xs">
                  <span className="text-gray-600 font-bold">DELEGATION ALLOCATION:</span>
                  <button
                    onClick={() => onSelectCommittee(item.id)}
                    className="bg-[#FF4D4D] text-[#F4EFE6] px-3 py-1 font-bold uppercase border border-[#121316] shadow-sm hover:bg-[#1B2A4A] transition-colors"
                  >
                    SELECT {item.id} PORTFOLIO →
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
