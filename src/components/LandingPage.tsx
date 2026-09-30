import React from "react";
import { Navigation } from "./landing/Navigation";
import { HeroSection } from "./landing/HeroSection";
import { ArchitectureSection } from "./landing/ArchitectureSection";
import { PrivacyModelSection } from "./landing/PrivacyModelSection";
import { DocsSection } from "./landing/DocsSection";
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
      {/* Floating Glass Pill Navigation with Logo ONLY, Architecture, Privacy Model, Docs, Top-Right GitHub & Launch App */}
      <Navigation
        walletConnected={walletConnected}
        walletAddress={walletAddress}
        onConnectWallet={onConnectWallet}
        onEnterDashboard={onEnterDashboard}
      />

      {/* Hero Section with Clean Typography, Short Floating Text & Interactive White & Navy Blue Terminal */}
      <HeroSection
        walletConnected={walletConnected}
        onConnectWallet={onConnectWallet}
        onEnterDashboard={onEnterDashboard}
      />

      {/* System Architecture & Subsystems Board */}
      <ArchitectureSection />

      {/* Privacy Model Bento Grid: What Stays Private vs What Is Public */}
      <PrivacyModelSection />

      {/* Docs Section: Interactive Protocol Architecture, ZK Circuits & Security Guides */}
      <DocsSection />

      {/* Call to Action with 3D Wireframe ASCII Tetrahedron */}
      <CtaSection onEnterDashboard={onEnterDashboard} />

      {/* Footer with Logo ONLY, Navigation Links & Copyright */}
      <FooterSection />
    </div>
  );
};

export default LandingPage;
