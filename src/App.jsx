import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SecretariatBriefing from './components/SecretariatBriefing';
import CommitteeDossiers from './components/CommitteeDossiers';
import CountryMatrix from './components/CountryMatrix';
import DrumControls from './components/DrumControls';
import DelegateModal from './components/DelegateModal';
import Footer from './components/Footer';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCommitteePref, setSelectedCommitteePref] = useState('');
  const [selectedCountryPref, setSelectedCountryPref] = useState('');

  const handleOpenRegister = () => {
    setModalOpen(true);
  };

  const handleCloseRegister = () => {
    setModalOpen(false);
  };

  const handleSelectPortfolioFromMatrix = (committee, country) => {
    setSelectedCommitteePref(committee);
    setSelectedCountryPref(country);
    setModalOpen(true);
  };

  const handleSelectCommitteeFromDossier = (committee) => {
    setSelectedCommitteePref(committee);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4EFE6] text-[#121316] relative font-mono">
      {/* Sticky Header with Ticker and Countdown */}
      <Header onOpenRegister={handleOpenRegister} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenRegister={handleOpenRegister} />
        <SecretariatBriefing />
        <CommitteeDossiers onSelectCommittee={handleSelectCommitteeFromDossier} />
        <CountryMatrix onSelectPortfolio={handleSelectPortfolioFromMatrix} />
      </main>

      {/* Floating HUD for Riso Drum Controls */}
      <DrumControls />

      {/* Delegate Credential Pass Application Modal */}
      <DelegateModal
        isOpen={modalOpen}
        onClose={handleCloseRegister}
        defaultCommittee={selectedCommitteePref}
        defaultCountry={selectedCountryPref}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
