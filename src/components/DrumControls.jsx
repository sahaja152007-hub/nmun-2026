import React, { useState } from 'react';
import { Printer, Eye, EyeOff, Sliders } from 'lucide-react';
import { playTactileClick } from '../utils/audio';

export default function DrumControls() {
  const [coralActive, setCoralActive] = useState(true);
  const [indigoActive, setIndigoActive] = useState(true);

  const toggleCoral = () => {
    playTactileClick();
    const next = !coralActive;
    setCoralActive(next);
    if (!next) {
      document.documentElement.classList.add('mute-coral');
    } else {
      document.documentElement.classList.remove('mute-coral');
    }
  };

  const toggleIndigo = () => {
    playTactileClick();
    const next = !indigoActive;
    setIndigoActive(next);
    if (!next) {
      document.documentElement.classList.add('mute-indigo');
    } else {
      document.documentElement.classList.remove('mute-indigo');
    }
  };

  return (
    <aside className="fixed bottom-4 right-4 z-40 bg-[#F4EFE6] border-3 border-[#121316] p-3 shadow-riso-indigo rotate-[-1deg] max-w-[260px] font-mono text-xs">
      {/* Mini Header */}
      <div className="flex items-center justify-between border-b-2 border-[#121316] pb-1.5 mb-2 font-bold text-[#1B2A4A] uppercase">
        <span className="flex items-center gap-1.5">
          <Printer className="w-4 h-4 text-[#FF4D4D]" />
          PRINT DRUM CONTROLS
        </span>
        <span className="w-2 h-2 rounded-full bg-[#FF4D4D] animate-ping"></span>
      </div>

      {/* Drum Layer Toggles */}
      <div className="flex flex-col gap-1.5">
        <button
          onClick={toggleCoral}
          className={`flex items-center justify-between px-2.5 py-1.5 font-bold transition-all text-left border border-[#121316] ${
            coralActive
              ? 'bg-[#FF4D4D] text-[#F4EFE6]'
              : 'bg-gray-200 text-gray-500 line-through'
          }`}
        >
          <span>[01] CORAL (#FF4D4D)</span>
          {coralActive ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
        </button>

        <button
          onClick={toggleIndigo}
          className={`flex items-center justify-between px-2.5 py-1.5 font-bold transition-all text-left border border-[#121316] ${
            indigoActive
              ? 'bg-[#1B2A4A] text-[#F4EFE6]'
              : 'bg-gray-200 text-gray-500 line-through'
          }`}
        >
          <span>[02] INDIGO (#1B2A4A)</span>
          {indigoActive ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
        </button>
      </div>

      <div className="mt-2 pt-1.5 border-t border-gray-400 flex items-center justify-between text-[10px] text-gray-600">
        <span>SOY-INK PASS: 500 DPI</span>
        <span className="font-bold text-[#FF4D4D]">LIVE ISOLATION</span>
      </div>
    </aside>
  );
}
