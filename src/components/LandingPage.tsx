import React from "react";
import { Navigation } from "./landing/Navigation";
import { HeroSection } from "./landing/HeroSection";
import { DeployedContractSection } from "./landing/DeployedContractSection";
import { WhatItDoesSection } from "./landing/WhatItDoesSection";
import { PrivacyModelSection } from "./landing/PrivacyModelSection";
import { ArchitectureSection } from "./landing/ArchitectureSection";
import { TechStackSection } from "./landing/TechStackSection";
import { WalletSetupSection } from "./landing/WalletSetupSection";
import { VerificationSection } from "./landing/VerificationSection";
import { CommunityLinksSection } from "./landing/CommunityLinksSection";
import { CtaSection } from "./landing/CtaSection";
import { FooterSection } from "./landing/FooterSection";

export interface LandingPageProps {
  onConnectWallet: () => void;
  onEnterDashboard: () => void;
  walletConnected: boolean;
  walletAddress: string | null;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onConnectWallet,
  onEnterDashboard,
  walletConnected,
  walletAddress,
}) => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white text-[#0A1329] font-sans selection:bg-[#0A1931] selection:text-white">
      {/* Floating Glass Pill Navigation */}
      <Navigation
        walletConnected={walletConnected}
        walletAddress={walletAddress}
        onConnectWallet={onConnectWallet}
        onEnterDashboard={onEnterDashboard}
      />

      {/* Hero Section with Interactive White & Navy Blue MacBook Terminal */}
      <HeroSection
        walletConnected={walletConnected}
        onConnectWallet={onConnectWallet}
        onEnterDashboard={onEnterDashboard}
      />

      {/* Preprod Contract Status Board in Deep Navy */}
      <DeployedContractSection />

      {/* 5-Stage Zero-Knowledge Execution Flow */}
      <WhatItDoesSection />

      {/* Privacy Model Bento Grid */}
      <PrivacyModelSection />

      {/* System Architecture & Subsystems Board */}
      <ArchitectureSection />

      {/* Production Tech Stack Marquee */}
      <TechStackSection />

      {/* Developer & Wallet Setup with Navy Blue Terminal */}
      <WalletSetupSection />

      {/* Consolidated Verification Matrix (42 Tests, 5 CI Jobs, Checklist, 77 Users) */}
      <VerificationSection />

      {/* Public Artifacts & Community Resources */}
      <CommunityLinksSection />

      {/* Call to Action with 3D Wireframe ASCII Tetrahedron */}
      <CtaSection onEnterDashboard={onEnterDashboard} />

      {/* Footer with Animated Wave Canvas */}
      <FooterSection />
    </div>
  );
};

export default LandingPage;
