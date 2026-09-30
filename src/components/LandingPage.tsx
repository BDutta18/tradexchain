import React from "react";
import { Navigation } from "./landing/Navigation";
import { HeroSection } from "./landing/HeroSection";
import { DeployedContractSection } from "./landing/DeployedContractSection";
import { WhatItDoesSection } from "./landing/WhatItDoesSection";
import { PrivacyModelSection } from "./landing/PrivacyModelSection";
import { PrivacyClaimSection } from "./landing/PrivacyClaimSection";
import { ArchitectureSection } from "./landing/ArchitectureSection";
import { TechStackSection } from "./landing/TechStackSection";
import { WalletSetupSection } from "./landing/WalletSetupSection";
import { TestCoverageSection } from "./landing/TestCoverageSection";
import { CiCdSection } from "./landing/CiCdSection";
import { Level6ChecklistSection } from "./landing/Level6ChecklistSection";
import { UserValidationSection } from "./landing/UserValidationSection";
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
    <div className="relative min-h-screen overflow-x-hidden bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* Floating Glass Pill Navigation */}
      <Navigation
        walletConnected={walletConnected}
        walletAddress={walletAddress}
        onConnectWallet={onConnectWallet}
        onEnterDashboard={onEnterDashboard}
      />

      {/* Hero Section with Interactive Terminal & ASCII Sphere */}
      <HeroSection onEnterDashboard={onEnterDashboard} />

      {/* Preprod Contract Status Board */}
      <DeployedContractSection />

      {/* 5-Stage Zero-Knowledge Execution Flow */}
      <WhatItDoesSection />

      {/* Privacy Model Bento Grid */}
      <PrivacyModelSection />

      {/* Cryptographic Privacy Assurance Quote */}
      <PrivacyClaimSection />

      {/* 3-Stage System Architecture & Protocol Health Board */}
      <ArchitectureSection />

      {/* Production Tech Stack Marquee */}
      <TechStackSection />

      {/* Developer & Wallet Setup Steps with Terminal */}
      <WalletSetupSection />

      {/* 42/42 Vitest Test Verification Matrix */}
      <TestCoverageSection />

      {/* Automated 5-Job CI/CD Matrix */}
      <CiCdSection />

      {/* Supermoon Level 6 Bounty Submission Checklist */}
      <Level6ChecklistSection />

      {/* 77 Real Preprod Addresses Testnet Validation */}
      <UserValidationSection />

      {/* Public Artifacts, Feedback & Community Links */}
      <CommunityLinksSection />

      {/* Call to Action with 3D Wireframe ASCII Tetrahedron */}
      <CtaSection onEnterDashboard={onEnterDashboard} />

      {/* Footer with Animated Wave Canvas */}
      <FooterSection />
    </div>
  );
};

export default LandingPage;
