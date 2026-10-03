import React, { useState } from 'react';
import { Search, Filter, Radio, CheckCircle, Clock, AlertTriangle, ArrowUpRight, Terminal } from 'lucide-react';
import { playTactileClick, playTeletypeBeep } from '../utils/audio';

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
  { id: 21, committee: 'JCC', country: 'Chief of Army Staff (India Command)', bloc: 'South Asia', status: 'RESERVED' },
  { id: 22, committee: 'JCC', country: 'Director General Military Operations (India)', bloc: 'South Asia', status: 'OPEN' },
  { id: 23, committee: 'JCC', country: 'Prime Minister Office Advisor (India)', bloc: 'South Asia', status: 'VACANT' },
  { id: 24, committee: 'JCC', country: 'Chief of General Staff (Pakistan Command)', bloc: 'South Asia', status: 'OPEN' },
  { id: 25, committee: 'JCC', country: 'Director General ISI (Pakistan)', bloc: 'South Asia', status: 'VACANT' },
];

const CRISIS_LOGS = {
  UNSC: [
    { time: '10:42 IST', text: 'FLASH INTEL: Unidentified autonomous swarm drones detected over contested maritime corridor. Motion for emergency directive table.' },
    { time: '11:15 IST', text: 'VETO ALERT: Resolution on LAWS mandatory kill-switch protocol faces potential permanent member stalemate.' },
    { time: '12:04 IST', text: 'UPDATE: Joint cybersecurity coalition submits draft amendment 4.1 on satellite tracking transparency.' },
  ],
  UNHRC: [
    { time: '09:30 IST', text: 'REPORT: Critical biometric database leak exposes 14 million citizens in East Africa. Special Rapporteur demands inquiry.' },
    { time: '10:55 IST', text: 'SUBMISSION: Non-Governmental Coalition tables working paper on sovereign data localization rights.' },
    { time: '11:40 IST', text: 'CAUCUS: Delegate of Germany calls unmoderated caucus on state-sponsored surveillance software embargo.' },
  ],
  AIPPM: [
    { time: '10:00 IST', text: 'PRESS RELEASE: Opposition delegates challenge digital agricultural registry bill in heated moderated caucus.' },
    { time: '11:20 IST', text: 'BREAKING: Farmer union representatives submit joint memorandum regarding satellite crop yield auditing.' },
    { time: '12:10 IST', text: 'COMMUNIQUE: Cross-party working group formed to draft rural economic autonomy framework.' },
  ],
  JCC: [
    { time: '02:14 IST', text: 'CLASSIFIED // KARGIL BACKCHANNEL: High-altitude outpost communications interrupted along Sector 4.' },
    { time: '03:45 IST', text: 'INTEL FEED: Emergency directive issued by Cabinet Committee on Security. Diplomatic channel established in Islamabad.' },
    { time: '04:30 IST', text: 'FLASH DIRECTIVE: Intelligence report uncovers secondary escalation line. Cabinet must respond within 15 minutes.' },
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

  const handleChannelSwitch = (channel) => {
    playTeletypeBeep();
    setActiveChannel(channel);
  };

  return (
    <section id="matrix" className="w-full px-4 lg:px-8 py-16 bg-[#F4EFE6] border-b-2 border-[#121316] relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-[#121316] pb-4">
          <div>
            <span className="font-mono text-xs text-[#FF4D4D] uppercase font-bold tracking-widest block">
              [03] ALLOCATION & TELETYPE // LIVE MATRIX
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl uppercase text-[#1B2A4A] tracking-tight font-extrabold">
              COUNTRY MATRIX & CRISIS ROOM TRACKER
            </h2>
          </div>
          <div className="font-mono text-xs text-gray-700 bg-white border border-[#121316] px-3 py-1 font-bold">
            SEARCH & SELECT PORTFOLIO TO APPLY
          </div>
        </div>

        {/* Feature A & Feature B Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Feature A: Live Searchable Country Matrix */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="bg-white border-3 border-[#121316] p-5 shadow-riso-indigo">
              <div className="flex items-center justify-between border-b-2 border-[#121316] pb-3 mb-4">
                <span className="font-heading font-extrabold text-lg text-[#1B2A4A] uppercase flex items-center gap-2">
                  <Search className="w-5 h-5 text-[#FF4D4D]" />
                  PORTFOLIO MATRIX ALLOCATION GRID
                </span>
                <span className="font-mono text-xs font-bold bg-[#F6E05E] px-2 py-0.5 border border-[#121316]">
                  {filteredMatrix.length} PORTFOLIOS
                </span>
              </div>

              {/* Filters & Search Controls */}
              <div className="flex flex-col sm:flex-row gap-3 mb-4 font-mono text-xs">
                {/* Search Bar */}
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search country or delegate name..."
                    className="w-full bg-[#F4EFE6] border-2 border-[#121316] p-2 pl-8 font-mono text-xs text-[#121316] focus:outline-none focus:border-[#FF4D4D]"
                  />
                  <Search className="w-4 h-4 text-gray-500 absolute left-2.5 top-2.5" />
                </div>

                {/* Committee Select */}
                <select
                  value={selectedCommittee}
                  onChange={(e) => {
                    playTactileClick();
                    setSelectedCommittee(e.target.value);
                  }}
                  className="bg-[#F4EFE6] border-2 border-[#121316] p-2 font-mono text-xs font-bold text-[#1B2A4A] focus:outline-none focus:border-[#FF4D4D]"
                >
                  <option value="ALL">ALL COMMITTEES</option>
                  <option value="UNSC">UNSC</option>
                  <option value="UNHRC">UNHRC</option>
                  <option value="AIPPM">AIPPM</option>
                  <option value="JCC">JCC</option>
                </select>

                {/* Bloc Select */}
                <select
                  value={selectedBloc}
                  onChange={(e) => {
                    playTactileClick();
                    setSelectedBloc(e.target.value);
                  }}
                  className="bg-[#F4EFE6] border-2 border-[#121316] p-2 font-mono text-xs font-bold text-[#1B2A4A] focus:outline-none focus:border-[#FF4D4D]"
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

              {/* Matrix Table */}
              <div className="max-h-[360px] overflow-y-auto border-2 border-[#121316]">
                <table className="w-full text-left border-collapse font-mono text-xs">
                  <thead className="bg-[#1B2A4A] text-[#F4EFE6] sticky top-0 font-bold border-b-2 border-[#121316]">
                    <tr>
                      <th className="p-2.5 border-r border-gray-600">COUNCIL</th>
                      <th className="p-2.5 border-r border-gray-600">PORTFOLIO / COUNTRY</th>
                      <th className="p-2.5 border-r border-gray-600">BLOC</th>
                      <th className="p-2.5 text-center">STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredMatrix.length > 0 ? (
                      filteredMatrix.map((row, idx) => (
                        <tr
                          key={row.id}
                          onClick={() => {
                            if (row.status !== 'RESERVED') {
                              playTactileClick();
                              onSelectPortfolio(row.committee, row.country);
                            }
                          }}
                          className={`border-b border-[#121316] ${
                            row.status === 'RESERVED'
                              ? 'bg-gray-100 opacity-60 cursor-not-allowed'
                              : 'hover:bg-[#F6E05E]/40 cursor-pointer transition-colors'
                          } ${idx % 2 === 0 ? 'bg-white' : 'bg-[#F4EFE6]'}`}
                        >
                          <td className="p-2.5 font-bold text-[#1B2A4A] border-r border-gray-300">
                            {row.committee}
                          </td>
                          <td className="p-2.5 font-semibold text-[#121316] border-r border-gray-300 flex items-center justify-between">
                            <span>{row.country}</span>
                            {row.status !== 'RESERVED' && (
                              <ArrowUpRight className="w-3.5 h-3.5 text-[#FF4D4D] inline-block ml-1" />
                            )}
                          </td>
                          <td className="p-2.5 text-gray-600 border-r border-gray-300">
                            {row.bloc}
                          </td>
                          <td className="p-2.5 text-center">
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
                          No matching portfolios found. Try adjusting search filters.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              <div className="mt-3 text-[11px] font-mono text-gray-600 flex items-center justify-between">
                <span>💡 TIP: Click any OPEN/VACANT portfolio to auto-populate registration!</span>
                <span className="font-bold text-[#FF4D4D]">LIVE UPDATED</span>
              </div>
            </div>
          </div>

          {/* Feature B: Crisis Wire Teletype Simulator */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-[#121316] text-[#F4EFE6] border-3 border-[#121316] p-5 shadow-riso-coral flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-gray-700 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-[#F6E05E]" />
                    <span className="font-heading font-extrabold text-base text-[#F4EFE6] uppercase">
                      CRISIS WIRE TELETYPE SIMULATOR
                    </span>
                  </div>
                  <span className="w-2.5 h-2.5 bg-[#FF4D4D] rounded-full animate-ping"></span>
                </div>

                {/* Channel Select Tabs */}
                <div className="flex flex-wrap gap-1.5 mb-4 font-mono text-xs">
                  {Object.keys(CRISIS_LOGS).map((channel) => (
                    <button
                      key={channel}
                      onClick={() => handleChannelSwitch(channel)}
                      className={`px-2.5 py-1 font-bold uppercase transition-all ${
                        activeChannel === channel
                          ? 'bg-[#FF4D4D] text-[#F4EFE6] border border-[#FF4D4D]'
                          : 'bg-[#1B2A4A] text-gray-300 hover:bg-gray-700 border border-gray-700'
                      }`}
                    >
                      {channel} WIRE
                    </button>
                  ))}
                </div>

                {/* Teletype Log Screen */}
                <div className="bg-black/80 border border-gray-700 p-4 font-mono text-xs text-[#F6E05E] min-h-[220px] space-y-3">
                  <div className="text-gray-500 border-b border-gray-800 pb-1 flex justify-between">
                    <span>FEED: {activeChannel} DIRECTIVE CHANNEL</span>
                    <span className="text-[#FF4D4D] animate-pulse">LIVE TRANSMISSION</span>
                  </div>

                  {CRISIS_LOGS[activeChannel].map((log, i) => (
                    <div key={i} className="space-y-1">
                      <div className="text-gray-400 font-bold flex items-center gap-1.5">
                        <Clock className="w-3 h-3 text-[#FF4D4D]" />
                        <span>[{log.time}]</span>
                      </div>
                      <p className="text-[#F4EFE6] pl-4 border-l-2 border-[#FF4D4D] leading-relaxed">
                        {log.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Wire Status */}
              <div className="mt-4 pt-3 border-t border-gray-800 flex items-center justify-between font-mono text-[11px] text-gray-400">
                <span className="flex items-center gap-1">
                  <Radio className="w-3 h-3 text-[#FF4D4D]" /> FREQ: 142.825 MHz
                </span>
                <span className="bg-[#1B2A4A] text-[#F6E05E] px-2 py-0.5 font-bold">
                  UNMODERATED SIMULATOR
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
