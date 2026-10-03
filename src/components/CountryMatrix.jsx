import React, { useState } from 'react';
import { Search, Terminal, ArrowUpRight, Clock, Radio } from 'lucide-react';

const MATRIX_DATA = [
  // UNSC
  { id: 1, committee: 'UNSC', country: 'United States of America', bloc: 'NATO', status: 'RESERVED' },
  { id: 2, committee: 'UNSC', country: 'United Kingdom', bloc: 'NATO', status: 'OPEN' },
  { id: 3, committee: 'UNSC', country: 'France', bloc: 'NATO', status: 'VACANT' },
  { id: 4, committee: 'UNSC', country: 'Russian Federation', bloc: 'Non-Aligned', status: 'RESERVED' },
  { id: 5, committee: 'UNSC', country: 'People\'s Republic of China', bloc: 'Asia-Pacific', status: 'OPEN' },
  { id: 6, committee: 'UNSC', country: 'India', bloc: 'Asia-Pacific', status: 'OPEN' },
  { id: 7, committee: 'UNSC', country: 'Japan', bloc: 'Asia-Pacific', status: 'VACANT' },
  { id: 8, committee: 'UNSC', country: 'Brazil', bloc: 'Latin America', status: 'OPEN' },
  
  // UNHRC
  { id: 9, committee: 'UNHRC', country: 'Germany', bloc: 'Europe', status: 'OPEN' },
  { id: 10, committee: 'UNHRC', country: 'India', bloc: 'Asia-Pacific', status: 'RESERVED' },
  { id: 11, committee: 'UNHRC', country: 'South Africa', bloc: 'Non-Aligned', status: 'OPEN' },
  { id: 12, committee: 'UNHRC', country: 'Egypt', bloc: 'MENA', status: 'VACANT' },
  { id: 13, committee: 'UNHRC', country: 'Mexico', bloc: 'Latin America', status: 'OPEN' },
  { id: 14, committee: 'UNHRC', country: 'Republic of Korea', bloc: 'Asia-Pacific', status: 'OPEN' },

  // AIPPM
  { id: 15, committee: 'AIPPM', country: 'Narendra Modi (BJP)', bloc: 'South Asia', status: 'RESERVED' },
  { id: 16, committee: 'AIPPM', country: 'Rahul Gandhi (INC)', bloc: 'South Asia', status: 'OPEN' },
  { id: 17, committee: 'AIPPM', country: 'Amit Shah (BJP)', bloc: 'South Asia', status: 'OPEN' },
  { id: 18, committee: 'AIPPM', country: 'Mallikarjun Kharge (INC)', bloc: 'South Asia', status: 'VACANT' },
  { id: 19, committee: 'AIPPM', country: 'Mamata Banerjee (TMC)', bloc: 'South Asia', status: 'OPEN' },
  { id: 20, committee: 'AIPPM', country: 'Arvind Kejriwal (AAP)', bloc: 'South Asia', status: 'OPEN' },

  // JCC
  { id: 21, committee: 'JCC', country: 'Chief of Army Staff (India)', bloc: 'South Asia', status: 'RESERVED' },
  { id: 22, committee: 'JCC', country: 'DG Military Operations (India)', bloc: 'South Asia', status: 'OPEN' },
  { id: 23, committee: 'JCC', country: 'PMO Advisor (India)', bloc: 'South Asia', status: 'VACANT' },
  { id: 24, committee: 'JCC', country: 'Chief of General Staff (Pakistan)', bloc: 'South Asia', status: 'OPEN' },
  { id: 25, committee: 'JCC', country: 'DG ISI (Pakistan)', bloc: 'South Asia', status: 'VACANT' },
];

const CRISIS_LOGS = {
  UNSC: [
    { time: '10:42 IST', text: 'FLASH INTEL: Autonomous swarm drones detected over contested maritime corridor.' },
    { time: '11:15 IST', text: 'VETO ALERT: Resolution on LAWS kill-switch protocol faces potential stalemate.' },
    { time: '12:04 IST', text: 'UPDATE: Joint cybersecurity coalition submits draft amendment 4.1.' },
  ],
  UNHRC: [
    { time: '09:30 IST', text: 'REPORT: Critical biometric database leak exposes 14 million citizens.' },
    { time: '10:55 IST', text: 'SUBMISSION: Coalition tables working paper on data localization rights.' },
    { time: '11:40 IST', text: 'CAUCUS: Delegate of Germany calls unmoderated caucus on software embargo.' },
  ],
  AIPPM: [
    { time: '10:00 IST', text: 'PRESS RELEASE: Opposition delegates challenge digital agricultural registry bill.' },
    { time: '11:20 IST', text: 'BREAKING: Farmer union representatives submit joint memorandum.' },
    { time: '12:10 IST', text: 'COMMUNIQUE: Cross-party working group formed to draft economic autonomy.' },
  ],
  JCC: [
    { time: '02:14 IST', text: 'CLASSIFIED // KARGIL BACKCHANNEL: Communications interrupted along Sector 4.' },
    { time: '03:45 IST', text: 'INTEL FEED: Emergency directive issued by Cabinet Committee on Security.' },
    { time: '04:30 IST', text: 'FLASH DIRECTIVE: Intelligence report uncovers escalation. Response required within 15 minutes.' },
  ]
};

export default function CountryMatrix({ onSelectPortfolio }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCommittee, setSelectedCommittee] = useState('ALL');
  const [selectedBloc, setSelectedBloc] = useState('ALL');
  const [activeChannel, setActiveChannel] = useState('UNSC');

  const filteredMatrix = MATRIX_DATA.filter((item) => {
    const matchesSearch =
      item.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.committee.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCommittee = selectedCommittee === 'ALL' || item.committee === selectedCommittee;
    const matchesBloc = selectedBloc === 'ALL' || item.bloc === selectedBloc;
    return matchesSearch && matchesCommittee && matchesBloc;
  });

  return (
    <section id="matrix" className="w-full px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20 bg-[#F4EFE6] border-b-2 border-[#121316]">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-12">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-3 border-b-2 border-[#121316] pb-3.5">
          <div>
            <span className="font-mono text-[11px] sm:text-xs text-[#FF4D4D] uppercase font-bold tracking-widest block mb-1">
              [03] ALLOCATION & TELETYPE // LIVE MATRIX
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl uppercase text-[#1B2A4A] tracking-tight font-extrabold leading-tight">
              COUNTRY MATRIX & CRISIS ROOM
            </h2>
          </div>
          <div className="font-mono text-[11px] sm:text-xs text-gray-700 bg-white border border-[#121316] px-3 py-1 font-bold">
            SEARCH & SELECT PORTFOLIO
          </div>
        </div>

        {/* Feature A & Feature B Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10">
          {/* Feature A: Live Searchable Country Matrix */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="bg-white border-3 border-[#121316] p-4 sm:p-6 shadow-[3px_3px_0px_#1B2A4A] sm:shadow-riso-indigo">
              <div className="flex items-center justify-between border-b-2 border-[#121316] pb-3 mb-4">
                <span className="font-heading font-extrabold text-base sm:text-lg text-[#1B2A4A] uppercase flex items-center gap-2">
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF4D4D] shrink-0" />
                  <span>PORTFOLIO MATRIX GRID</span>
                </span>
                <span className="font-mono text-[10px] sm:text-xs font-bold bg-[#F6E05E] px-2 py-0.5 border border-[#121316]">
                  {filteredMatrix.length} PORTFOLIOS
                </span>
              </div>

              {/* Filters & Search Controls (Responsive wrap) */}
              <div className="flex flex-col sm:flex-row gap-2.5 mb-4 font-mono text-xs">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search country or delegate..."
                    className="w-full bg-[#F4EFE6] border-2 border-[#121316] p-2 pl-8 font-mono text-xs text-[#121316] focus:outline-none focus:border-[#FF4D4D] touch-target"
                  />
                  <Search className="w-4 h-4 text-gray-500 absolute left-2.5 top-3" />
                </div>

                <div className="grid grid-cols-2 sm:flex gap-2">
                  <select
                    value={selectedCommittee}
                    onChange={(e) => setSelectedCommittee(e.target.value)}
                    className="bg-[#F4EFE6] border-2 border-[#121316] p-2 font-mono text-[11px] sm:text-xs font-bold text-[#1B2A4A] focus:outline-none focus:border-[#FF4D4D] touch-target"
                  >
                    <option value="ALL">COMMITTEES</option>
                    <option value="UNSC">UNSC</option>
                    <option value="UNHRC">UNHRC</option>
                    <option value="AIPPM">AIPPM</option>
                    <option value="JCC">JCC</option>
                  </select>

                  <select
                    value={selectedBloc}
                    onChange={(e) => setSelectedBloc(e.target.value)}
                    className="bg-[#F4EFE6] border-2 border-[#121316] p-2 font-mono text-[11px] sm:text-xs font-bold text-[#1B2A4A] focus:outline-none focus:border-[#FF4D4D] touch-target"
                  >
                    <option value="ALL">ALL BLOCS</option>
                    <option value="NATO">NATO</option>
                    <option value="Asia-Pacific">ASIA-PACIFIC</option>
                    <option value="Europe">EUROPE</option>
                    <option value="Latin America">LATIN AMERICA</option>
                    <option value="MENA">MENA</option>
                    <option value="Non-Aligned">NON-ALIGNED</option>
                    <option value="South Asia">SOUTH ASIA</option>
                  </select>
                </div>
              </div>

              {/* Matrix Table with Smooth Touch Inertia Scroll */}
              <div className="max-h-[360px] overflow-x-auto touch-scroll border-2 border-[#121316]">
                <table className="w-full min-w-[500px] text-left border-collapse font-mono text-xs">
                  <thead className="bg-[#1B2A4A] text-[#F4EFE6] sticky top-0 font-bold border-b-2 border-[#121316]">
                    <tr>
                      <th className="p-2 sm:p-2.5 border-r border-gray-600">COUNCIL</th>
                      <th className="p-2 sm:p-2.5 border-r border-gray-600">PORTFOLIO / COUNTRY</th>
                      <th className="p-2 sm:p-2.5 border-r border-gray-600">BLOC</th>
                      <th className="p-2 sm:p-2.5 text-center">STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredMatrix.length > 0 ? (
                      filteredMatrix.map((row, idx) => (
                        <tr
                          key={row.id}
                          onClick={() => {
                            if (row.status !== 'RESERVED') {
                              onSelectPortfolio(row.committee, row.country);
                            }
                          }}
                          className={`border-b border-[#121316] ${
                            row.status === 'RESERVED'
                              ? 'bg-gray-100 opacity-60 cursor-not-allowed'
                              : 'hover:bg-[#F6E05E]/40 cursor-pointer transition-colors'
                          } ${idx % 2 === 0 ? 'bg-white' : 'bg-[#F4EFE6]'}`}
                        >
                          <td className="p-2 sm:p-2.5 font-bold text-[#1B2A4A] border-r border-gray-300">
                            {row.committee}
                          </td>
                          <td className="p-2 sm:p-2.5 font-semibold text-[#121316] border-r border-gray-300">
                            <div className="flex items-center justify-between">
                              <span>{row.country}</span>
                              {row.status !== 'RESERVED' && (
                                <ArrowUpRight className="w-3.5 h-3.5 text-[#FF4D4D] inline-block ml-1 shrink-0" />
                              )}
                            </div>
                          </td>
                          <td className="p-2 sm:p-2.5 text-gray-600 border-r border-gray-300">
                            {row.bloc}
                          </td>
                          <td className="p-2 sm:p-2.5 text-center">
                            {row.status === 'OPEN' && (
                              <span className="bg-[#FF4D4D] text-[#F4EFE6] px-1.5 py-0.5 font-bold text-[10px] inline-block">
                                OPEN
                              </span>
                            )}
                            {row.status === 'VACANT' && (
                              <span className="bg-[#F6E05E] text-[#121316] px-1.5 py-0.5 font-bold text-[10px] border border-[#121316] inline-block">
                                VACANT
                              </span>
                            )}
                            {row.status === 'RESERVED' && (
                              <span className="bg-gray-300 text-gray-700 px-1.5 py-0.5 font-bold text-[10px] inline-block">
                                RESERVED
                              </span>
                            )}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4" className="p-4 text-center text-gray-500 font-mono">
                          No matching portfolios found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              <div className="mt-3 text-[10px] sm:text-[11px] font-mono text-gray-600 flex items-center justify-between">
                <span>💡 Tap any OPEN/VACANT portfolio to apply!</span>
                <span className="font-bold text-[#FF4D4D]">LIVE GRID</span>
              </div>
            </div>
          </div>

          {/* Feature B: Crisis Wire Teletype Simulator */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-[#121316] text-[#F4EFE6] border-3 border-[#121316] p-4 sm:p-6 shadow-[3px_3px_0px_#FF4D4D] sm:shadow-riso-coral flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-gray-700 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-[#F6E05E] shrink-0" />
                    <span className="font-heading font-extrabold text-sm sm:text-base text-[#F4EFE6] uppercase">
                      CRISIS WIRE TELETYPE
                    </span>
                  </div>
                  <span className="w-2.5 h-2.5 bg-[#FF4D4D] rounded-full animate-ping"></span>
                </div>

                {/* Channel Select Tabs (Touch friendly wrap) */}
                <div className="flex flex-wrap gap-1.5 mb-4 font-mono text-xs">
                  {Object.keys(CRISIS_LOGS).map((channel) => (
                    <button
                      key={channel}
                      onClick={() => setActiveChannel(channel)}
                      className={`px-2.5 py-1.5 font-bold uppercase transition-all touch-target flex items-center justify-center ${
                        activeChannel === channel
                          ? 'bg-[#FF4D4D] text-[#F4EFE6] border border-[#FF4D4D]'
                          : 'bg-[#1B2A4A] text-gray-300 hover:bg-gray-700 border border-gray-700'
                      }`}
                    >
                      {channel}
                    </button>
                  ))}
                </div>

                {/* Teletype Log Screen */}
                <div className="bg-black/80 border border-gray-700 p-3.5 sm:p-4 font-mono text-xs text-[#F6E05E] min-h-[200px] space-y-3">
                  <div className="text-gray-500 border-b border-gray-800 pb-1 flex justify-between text-[11px]">
                    <span>FEED: {activeChannel} CHANNEL</span>
                    <span className="text-[#FF4D4D]">LIVE</span>
                  </div>

                  {CRISIS_LOGS[activeChannel].map((log, i) => (
                    <div key={i} className="space-y-1">
                      <div className="text-gray-400 font-bold flex items-center gap-1.5 text-[11px]">
                        <Clock className="w-3 h-3 text-[#FF4D4D] shrink-0" />
                        <span>[{log.time}]</span>
                      </div>
                      <p className="text-[#F4EFE6] pl-2.5 border-l-2 border-[#FF4D4D] leading-relaxed text-[11px] sm:text-xs">
                        {log.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Wire Status */}
              <div className="mt-4 pt-3 border-t border-gray-800 flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-gray-400">
                <span className="flex items-center gap-1">
                  <Radio className="w-3 h-3 text-[#FF4D4D] shrink-0" /> FREQ: 142.825 MHz
                </span>
                <span className="bg-[#1B2A4A] text-[#F6E05E] px-2 py-0.5 font-bold">
                  UNMODERATED
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
