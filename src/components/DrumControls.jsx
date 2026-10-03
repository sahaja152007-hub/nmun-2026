import React, { useState } from 'react';
import { Printer, Eye, EyeOff } from 'lucide-react';

export default function DrumControls() {
  const [coralActive, setCoralActive] = useState(true);
  const [indigoActive, setIndigoActive] = useState(true);
  const [collapsed, setCollapsed] = useState(true);

  const toggleCoral = () => {
    const next = !coralActive;
    setCoralActive(next);
    if (!next) {
      document.documentElement.classList.add('mute-coral');
    } else {
      document.documentElement.classList.remove('mute-coral');
    }
  };

  const toggleIndigo = () => {
    const next = !indigoActive;
    setIndigoActive(next);
    if (!next) {
      document.documentElement.classList.add('mute-indigo');
    } else {
      document.documentElement.classList.remove('mute-indigo');
    }
  };

  return (
    <aside className="fixed bottom-3 right-3 z-40 bg-[#F4EFE6] border-2 sm:border-3 border-[#121316] p-2 sm:p-3 shadow-[2px_2px_0px_#1B2A4A] sm:shadow-riso-indigo font-mono text-[10px] sm:text-xs max-w-[190px] sm:max-w-[240px]">
      {/* Mini Header / Collapse Toggle */}
      <div 
        onClick={() => setCollapsed(!collapsed)} 
        className="flex items-center justify-between font-bold text-[#1B2A4A] uppercase cursor-pointer select-none"
      >
        <span className="flex items-center gap-1">
          <Printer className="w-3.5 h-3.5 text-[#FF4D4D] shrink-0" />
          <span className="truncate">RISO DRUMS</span>
        </span>
        <span className="text-[9px] bg-[#121316] text-[#F6E05E] px-1 py-0.2">
          {collapsed ? '+' : '−'}
        </span>
      </div>

      {/* Expanded Controls */}
      {!collapsed && (
        <div className="mt-2 pt-2 border-t border-[#121316] flex flex-col gap-1.5 animate-in fade-in duration-150">
          <button
            onClick={toggleCoral}
            className={`flex items-center justify-between px-2 py-1 font-bold transition-all text-left border border-[#121316] ${
              coralActive
                ? 'bg-[#FF4D4D] text-[#F4EFE6]'
                : 'bg-gray-200 text-gray-500 line-through'
            }`}
          >
            <span>[01] CORAL</span>
            {coralActive ? <Eye className="w-3 h-3 shrink-0" /> : <EyeOff className="w-3 h-3 shrink-0" />}
          </button>

          <button
            onClick={toggleIndigo}
            className={`flex items-center justify-between px-2 py-1 font-bold transition-all text-left border border-[#121316] ${
              indigoActive
                ? 'bg-[#1B2A4A] text-[#F4EFE6]'
                : 'bg-gray-200 text-gray-500 line-through'
            }`}
          >
            <span>[02] INDIGO</span>
            {indigoActive ? <Eye className="w-3 h-3 shrink-0" /> : <EyeOff className="w-3 h-3 shrink-0" />}
          </button>

          <div className="pt-1 text-[9px] text-gray-600 flex justify-between">
            <span>SOY INK PASS</span>
            <span className="font-bold text-[#FF4D4D]">500 DPI</span>
          </div>
        </div>
      )}
    </aside>
  );
}
