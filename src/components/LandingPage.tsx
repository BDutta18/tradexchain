import React, { useState } from 'react';
import {
  Shield,
  Lock,
  Cpu,
  Zap,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Activity,
  Layers,
  Sparkles,
  CheckCircle2,
  Clock,
  Menu,
  X,
  Play,
  Terminal,
  BarChart2,
  FileText,
  Database,
  Globe,
  Share2,
  ChevronDown
} from 'lucide-react';

interface LandingPageProps {
  onConnectWallet: () => void;
  onEnterDashboard: (tab?: string) => void;
  walletConnected: boolean;
  walletAddress: string | null;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onConnectWallet,
  onEnterDashboard,
  walletConnected,
  walletAddress,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [socialMenuOpen, setSocialMenuOpen] = useState<boolean>(false);

  const displayAddr = walletAddress
    ? `${walletAddress.substring(0, 8)}...${walletAddress.substring(walletAddress.length - 6)}`
    : null;

  return (
    <div className="min-h-screen bg-[#020611] text-white font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      {/* ── Keyframe Animations & Component Styles ─────────────────────────── */}
      <style>{`
        @keyframes topbarFloat {
          0%, 100% { transform: translateY(0) rotateX(0deg); }
          50% { transform: translateY(-2px) rotateX(2deg); }
        }
        @keyframes topbarGlow {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.85; }
        }
        @keyframes topbarEdge {
          0%, 100% { opacity: 0.18; transform: translateX(-12%); }
          50% { opacity: 0.55; transform: translateX(12%); }
        }
        .topbar-shell {
          transform-style: preserve-3d;
          perspective: 1000px;
        }
        .topbar-shell::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          pointer-events: none;
          background: radial-gradient(circle at 15% 50%, rgba(59, 130, 246, 0.15), transparent 28%),
                      radial-gradient(circle at 85% 50%, rgba(14, 165, 233, 0.1), transparent 26%);
          animation: topbarGlow 4s ease-in-out infinite;
        }
        .topbar-shell::after {
          content: "";
          position: absolute;
          left: 8%;
          right: 8%;
          bottom: -1px;
          height: 1px;
          pointer-events: none;
          background: linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.5), transparent);
          animation: topbarEdge 5s ease-in-out infinite;
        }
        @keyframes homeLogoMotion {
          0% { transform: rotateY(0deg) rotateX(0deg) translateY(0) scale(1); }
          25% { transform: rotateY(90deg) rotateX(4deg) translateY(-5px) scale(1.025); }
          50% { transform: rotateY(180deg) rotateX(7deg) translateY(-9px) scale(1.045); }
          75% { transform: rotateY(270deg) rotateX(4deg) translateY(-5px) scale(1.025); }
          100% { transform: rotateY(360deg) rotateX(0deg) translateY(0) scale(1); }
        }
        @keyframes homeWordmarkMotion {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.9; }
          50% { transform: translateY(-5px) scale(1.025); opacity: 1; }
        }
        @keyframes homeCoreGlow {
          0%, 100% { opacity: 0.38; transform: translate(-50%, -50%) scale(0.95); }
          50% { opacity: 0.92; transform: translate(-50%, -50%) scale(1.12); }
        }
        @keyframes homeOrbit {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes homeOrbitReverse {
          from { transform: translate(-50%, -50%) rotate(360deg); }
          to { transform: translate(-50%, -50%) rotate(0deg); }
        }
        @keyframes homeTokenOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes homeTokenOrbitReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes homeScan {
          0% { transform: translateX(-135%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateX(135%); opacity: 0; }
        }
        @keyframes homeShimmer {
          0% { transform: translateX(-140%); opacity: 0; }
          30% { opacity: 1; }
          70% { opacity: 1; }
          100% { transform: translateX(140%); opacity: 0; }
        }
        @keyframes homeMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes homeGridShift {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(-17px, -17px, 0); }
        }
        @keyframes homeDataChip {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }
        @keyframes homePulseDot {
          0%, 100% { opacity: 0.45; transform: scale(0.85); }
          50% { opacity: 1; transform: scale(1.15); }
        }
        .home-hero-shell {
          transform-style: preserve-3d;
          perspective: 1400px;
        }
        .home-card {
          position: relative;
          overflow: hidden;
          transform-style: preserve-3d;
          transition: transform 250ms ease, border-color 250ms ease, background 250ms ease, box-shadow 250ms ease;
        }
        .home-card::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          border-radius: inherit;
          background: linear-gradient(125deg, transparent 10%, rgba(96, 165, 250, 0.08), transparent 58%);
          opacity: 0;
          transition: opacity 250ms ease;
        }
        .home-card:hover {
          transform: translateY(-7px);
          border-color: rgba(96, 165, 250, 0.38);
          background-color: rgba(37, 99, 235, 0.065);
          box-shadow: 0 32px 90px rgba(37, 99, 235, 0.14);
        }
        .home-card:hover::before {
          opacity: 1;
        }
        .home-logo-motion {
          transform-style: preserve-3d;
          animation: homeLogoMotion 9s linear infinite;
          will-change: transform;
          backface-visibility: visible;
        }
        .home-wordmark-motion {
          animation: homeWordmarkMotion 4.6s ease-in-out infinite;
          will-change: transform;
        }
        .home-core-glow {
          animation: homeCoreGlow 3.8s ease-in-out infinite;
        }
        .home-core-orbit-one {
          animation: homeOrbit 20s linear infinite;
        }
        .home-core-orbit-two {
          animation: homeOrbitReverse 16s linear infinite;
        }
        .home-core-orbit-three {
          animation: homeOrbit 12s linear infinite;
        }
        .home-core-orbit::before,
        .home-core-orbit::after {
          content: "";
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #60a5fa;
          box-shadow: 0 0 14px rgba(96, 165, 250, 0.9), 0 0 30px rgba(34, 211, 238, 0.45);
        }
        .home-core-orbit::before {
          left: 50%;
          top: -4px;
          transform: translateX(-50%);
        }
        .home-core-orbit::after {
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
        }
        .home-data-chip {
          animation: homeDataChip 5s ease-in-out infinite;
        }
        .home-data-chip-delay {
          animation-delay: 0.8s;
        }
        .home-data-chip-two {
          animation-delay: 1.4s;
        }
        .home-data-chip-three {
          animation-delay: 2s;
        }
        .home-grid {
          animation: homeGridShift 10s ease-in-out infinite;
        }
        .home-hero-scan {
          animation: homeScan 4.6s ease-in-out infinite;
        }
        .home-hero-shimmer {
          animation: homeShimmer 5.8s ease-in-out infinite;
        }
        .home-panel-scan {
          animation: homeScan 4.8s ease-in-out infinite;
        }
        .home-token-orbit {
          animation: homeTokenOrbit 18s linear infinite;
        }
        .home-token-orbit-reverse {
          animation: homeTokenOrbitReverse 14s linear infinite;
        }
        .home-live-dot {
          animation: homePulseDot 1.8s ease-in-out infinite;
        }
        .home-marquee {
          overflow: hidden;
        }
        .home-marquee-track {
          display: flex;
          width: max-content;
          animation: homeMarquee 38s linear infinite;
        }
        .home-marquee:hover .home-marquee-track {
          animation-play-state: paused;
        }
        .home-partner-item {
          display: flex;
          min-width: max-content;
          align-items: center;
          gap: 12px;
          border-right: 1px solid rgba(255, 255, 255, 0.08);
          padding: 16px 24px;
        }
        .home-stage-line {
          position: absolute;
          left: 22px;
          right: 22px;
          top: 25px;
          height: 1px;
          background: linear-gradient(90deg, rgba(59, 130, 246, 0.8), rgba(59, 130, 246, 0.18), rgba(255, 255, 255, 0.08));
        }
        details.home-faq[open] {
          border-color: rgba(96, 165, 250, 0.32);
          background: rgba(37, 99, 235, 0.07);
        }
        details.home-faq summary::-webkit-details-marker {
          display: none;
        }
        @media (max-width: 640px) {
          .home-command-core {
            min-height: 440px;
          }
          .home-core-orbit-one { width: 280px; height: 280px; }
          .home-core-orbit-two { width: 220px; height: 220px; }
          .home-core-orbit-three { width: 168px; height: 168px; }
          .home-stage-line { display: none; }
        }
        @media (hover: none) {
          .home-card:hover { transform: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .home-logo-motion,
          .home-wordmark-motion,
          .home-core-glow,
          .home-core-orbit-one,
          .home-core-orbit-two,
          .home-core-orbit-three,
          .home-data-chip,
          .home-grid,
          .home-hero-scan,
          .home-hero-shimmer,
          .home-panel-scan,
          .home-token-orbit,
          .home-token-orbit-reverse,
          .home-live-dot,
          .home-marquee-track {
            animation: none !important;
          }
          .home-card:hover { transform: none; }
        }
      `}</style>

      {/* ── Fixed Floating Glass Navigation Topbar ─────────────────────────── */}
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto w-full max-w-[1500px] px-3 pt-3 sm:px-4 sm:pt-4">
          <div className="topbar-shell relative flex min-h-[64px] items-center gap-2 rounded-2xl border border-white/10 bg-black/60 px-3 py-2.5 shadow-[0_18px_70px_rgba(0,0,0,0.65)] backdrop-blur-xl">
            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative z-20 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/90 transition hover:border-blue-400/25 hover:bg-blue-500/10 hover:text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400/40 lg:hidden"
              aria-label="Open navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            {/* Brand Logo & Wordmark */}
            <a
              href="#hero"
              className="flex min-w-0 shrink-0 items-center gap-2.5 bg-transparent pl-1"
              aria-label="Xenox Trade Home"
            >
              <img
                src="/xenox-horizontal-logo.png"
                alt="Xenox Trade"
                className="h-8 sm:h-9 w-auto object-contain filter drop-shadow-[0_0_14px_rgba(59,130,246,0.72)]"
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="relative z-10 hidden flex-1 items-center justify-center gap-1 xl:gap-1.5 lg:flex">
              <a
                href="#hero"
                className="rounded-xl px-3 py-1.5 text-xs font-bold transition duration-200 border border-blue-400/20 bg-blue-500/10 text-blue-100 shadow-[0_0_22px_rgba(59,130,246,0.12)]"
              >
                Home
              </a>
              <button
                onClick={() => onEnterDashboard('overview')}
                className="rounded-xl px-3 py-1.5 text-xs font-bold transition duration-200 border border-transparent text-white/70 hover:border-white/10 hover:bg-white/5 hover:text-white"
              >
                Trading Terminal
              </button>
              <button
                onClick={() => onEnterDashboard('strategies')}
                className="rounded-xl px-3 py-1.5 text-xs font-bold transition duration-200 border border-transparent text-white/70 hover:border-white/10 hover:bg-white/5 hover:text-white flex items-center gap-1.5"
              >
                Strategy AI
                <span className="rounded-full border border-blue-400/25 bg-blue-500/15 px-1.5 py-0.2 text-[9px] text-blue-200">
                  Live
                </span>
              </button>
              <button
                onClick={() => onEnterDashboard('bot')}
                className="rounded-xl px-3 py-1.5 text-xs font-bold transition duration-200 border border-transparent text-white/70 hover:border-white/10 hover:bg-white/5 hover:text-white flex items-center gap-1.5"
              >
                ZK Bot
                <span className="rounded-full border border-cyan-300/25 bg-cyan-400/10 px-1.5 py-0.2 text-[9px] text-cyan-200">
                  v1.3
                </span>
              </button>
              <button
                onClick={() => onEnterDashboard('vault')}
                className="rounded-xl px-3 py-1.5 text-xs font-bold transition duration-200 border border-transparent text-white/70 hover:border-white/10 hover:bg-white/5 hover:text-white"
              >
                Shielded Vault
              </button>
              <a
                href="#circuits"
                className="rounded-xl px-3 py-1.5 text-xs font-bold transition duration-200 border border-transparent text-white/70 hover:border-white/10 hover:bg-white/5 hover:text-white"
              >
                Compact Circuits
              </a>
              <button
                onClick={() => onEnterDashboard('users')}
                className="rounded-xl px-3 py-1.5 text-xs font-bold transition duration-200 border border-transparent text-white/70 hover:border-white/10 hover:bg-white/5 hover:text-white flex items-center gap-1.5"
              >
                Launch Cohort
                <span className="rounded-full border border-purple-400/25 bg-purple-500/15 px-1.5 py-0.2 text-[9px] text-purple-200">
                  77
                </span>
              </button>
              <a
                href="#faq"
                className="rounded-xl px-3 py-1.5 text-xs font-bold transition duration-200 border border-transparent text-white/70 hover:border-white/10 hover:bg-white/5 hover:text-white"
              >
                FAQ
              </a>
            </nav>

            {/* Right Action Buttons */}
            <div className="relative z-20 ml-auto flex shrink-0 items-center gap-2">
              {/* Socials / External Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setSocialMenuOpen(!socialMenuOpen)}
                  className="inline-flex h-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xs font-black text-white/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-200 hover:border-blue-400/35 hover:bg-blue-500/10 hover:text-blue-100 px-3"
                  aria-label="Find official links"
                >
                  <Share2 className="w-3.5 h-3.5 mr-1 text-blue-300" />
                  <span>Links</span>
                  <ChevronDown className={`ml-1 w-3 h-3 text-white/45 transition-transform duration-200 ${socialMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {socialMenuOpen && (
                  <div className="absolute right-0 top-11 z-50 w-52 rounded-2xl border border-white/10 bg-[#060c1d]/95 p-2 shadow-2xl backdrop-blur-xl">
                    <a
                      href="https://explorer.1am.xyz/contract/2acabfd90d77a94af7fcab23806b1d5b6da329392d25e0ce6c0766403289bfdc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold text-white/80 transition hover:bg-blue-500/15 hover:text-blue-100"
                    >
                      <Globe className="w-3.5 h-3.5 text-blue-400" />
                      1AM Preprod Explorer ↗
                    </a>
                    <a
                      href="https://github.com/BDutta18/tradexchain"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold text-white/80 transition hover:bg-blue-500/15 hover:text-blue-100"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                      GitHub Repository ↗
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1Ub70Yu4LhBrQ6Coc3Y4vKjs4lSZNEptv/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold text-white/80 transition hover:bg-blue-500/15 hover:text-blue-100"
                    >
                      <Play className="w-3.5 h-3.5 text-blue-400" />
                      Walkthrough Video ↗
                    </a>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSd49Nh4u3E2aRTkvyFOwtEFJ16D7d6QRRa_5E3Dp35Jbc6FzA/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold text-white/80 transition hover:bg-blue-500/15 hover:text-blue-100"
                    >
                      <FileText className="w-3.5 h-3.5 text-blue-400" />
                      Feedback Form ↗
                    </a>
                    <a
                      href="https://x.com/axiom_night"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold text-white/80 transition hover:bg-blue-500/15 hover:text-blue-100"
                    >
                      <span className="font-bold text-blue-400">𝕏</span>
                      Official Twitter/X ↗
                    </a>
                  </div>
                )}
              </div>

              {/* Wallet Connection / Terminal Button */}
              {walletConnected ? (
                <button
                  type="button"
                  onClick={() => onEnterDashboard('overview')}
                  className="h-9 shrink-0 whitespace-nowrap rounded-xl bg-blue-600 px-3.5 text-xs font-black text-white shadow-[0_0_25px_rgba(59,130,246,0.35)] transition duration-200 hover:bg-blue-500 flex items-center gap-1.5"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                  <span>{displayAddr || 'Enter Terminal'}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={onConnectWallet}
                  className="h-9 shrink-0 whitespace-nowrap rounded-xl bg-blue-600 px-4 text-xs font-black text-white shadow-[0_0_25px_rgba(59,130,246,0.35)] transition duration-200 hover:bg-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.5)]"
                >
                  Connect 1AM Wallet
                </button>
              )}
            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          {mobileMenuOpen && (
            <div className="mt-2 rounded-2xl border border-white/10 bg-[#030712]/95 p-4 shadow-2xl backdrop-blur-2xl lg:hidden">
              <nav className="flex flex-col gap-2">
                <button
                  onClick={() => { setMobileMenuOpen(false); onEnterDashboard('overview'); }}
                  className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold text-white/90 hover:bg-blue-500/15"
                >
                  <span>Trading Terminal</span>
                  <ArrowRight className="w-4 h-4 text-blue-400" />
                </button>
                <button
                  onClick={() => { setMobileMenuOpen(false); onEnterDashboard('strategies'); }}
                  className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold text-white/90 hover:bg-blue-500/15"
                >
                  <span>Strategy AI Compiler</span>
                  <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-xs text-blue-200">Live</span>
                </button>
                <button
                  onClick={() => { setMobileMenuOpen(false); onEnterDashboard('bot'); }}
                  className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold text-white/90 hover:bg-blue-500/15"
                >
                  <span>ZK Execution Bot</span>
                  <span className="rounded-full bg-cyan-400/20 px-2 py-0.5 text-xs text-cyan-200">v1.3</span>
                </button>
                <button
                  onClick={() => { setMobileMenuOpen(false); onEnterDashboard('vault'); }}
                  className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold text-white/90 hover:bg-blue-500/15"
                >
                  <span>Shielded Vault</span>
                  <ArrowRight className="w-4 h-4 text-blue-400" />
                </button>
                <button
                  onClick={() => { setMobileMenuOpen(false); onEnterDashboard('users'); }}
                  className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold text-white/90 hover:bg-blue-500/15"
                >
                  <span>Launch Cohort (77 Users)</span>
                  <ArrowRight className="w-4 h-4 text-blue-400" />
                </button>
                <a
                  href="#faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold text-white/90 hover:bg-blue-500/15"
                >
                  <span>FAQ & Security</span>
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* ── Main Hero Content ──────────────────────────────────────────────── */}
      <main className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 pb-12 pt-24 sm:pt-28">
        <div className="space-y-8 overflow-hidden">
          {/* ================================================================= */}
          {/* HERO SECTION — Holographic Command Core & 3D Interactive Console */}
          {/* ================================================================= */}
          <section
            id="hero"
            className="home-hero-shell relative overflow-hidden rounded-[36px] sm:rounded-[44px] border border-white/10 bg-[#030711]/90 p-5 sm:p-8 lg:p-10 shadow-[0_40px_150px_rgba(0,0,0,0.7)] backdrop-blur-2xl"
          >
            {/* Ambient Lighting Gradients */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.28),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.14),transparent_36%)]" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:52px_52px]" />
            <div className="home-hero-scan pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent" />
            <div className="home-hero-shimmer pointer-events-none absolute left-0 top-0 h-full w-1/4 bg-gradient-to-r from-transparent via-white/[0.045] to-transparent" />

            <div className="relative grid gap-10 xl:grid-cols-[1.04fr_.96fr] xl:items-center">
              {/* Left Column: Value Proposition & CTAs */}
              <div className="max-w-4xl">
                {/* Live Online Badge */}
                <div className="inline-flex items-center gap-3 rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.24em] text-blue-100 shadow-[0_0_30px_rgba(59,130,246,0.18)]">
                  <span className="home-live-dot h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_14px_rgba(147,197,253,0.95)]" />
                  Xenox Protocol Online • Midnight Preprod
                </div>

                {/* Massive Hero Heading */}
                <h1 className="mt-6 max-w-4xl text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.02] tracking-[-0.035em] text-white">
                  Your path to confidential execution{' '}
                  <span className="block mt-2 bg-gradient-to-r from-blue-100 via-white to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(59,130,246,0.48)]">
                    begins with Xenox Trade.
                  </span>
                </h1>

                {/* Description Paragraph */}
                <p className="mt-5 max-w-2xl text-sm sm:text-base leading-7 text-white/65">
                  Xenox connects confidential zero-knowledge execution, natural language AI strategy synthesis, shielded trading vaults, and real-time on-chain risk proofs inside one unified Midnight Network trading protocol.
                </p>

                {/* 4 Feature Chips (2x2 Grid) */}
                <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-white/75">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-500/10 text-xs text-blue-100">
                      ✦
                    </span>
                    Zero-Knowledge Strategy Commitment
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-white/75">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-500/10 text-xs text-blue-100">
                      ✦
                    </span>
                    AI-Powered Intent Compilation
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-white/75">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-500/10 text-xs text-blue-100">
                      ✦
                    </span>
                    Shielded Vault & MEV Immunity
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-white/75">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-500/10 text-xs text-blue-100">
                      ✦
                    </span>
                    Verifiable 1AM Preprod Contract
                  </div>
                </div>

                {/* Action CTA Buttons */}
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <button
                    onClick={() => onEnterDashboard('overview')}
                    className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-sm font-black text-white shadow-[0_0_40px_rgba(59,130,246,0.38)] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-[0_0_55px_rgba(59,130,246,0.55)] cursor-pointer"
                  >
                    Enter Trading Terminal
                    <ArrowUpRight className="ml-2 w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onEnterDashboard('strategies')}
                    className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-blue-400/25 bg-blue-500/10 px-6 py-3 text-sm font-black text-blue-100 transition duration-300 hover:-translate-y-0.5 hover:border-blue-300/40 hover:bg-blue-500/20 hover:text-white cursor-pointer"
                  >
                    Open AI Strategy Engine
                    <span className="ml-2 text-xs rounded bg-blue-500/30 px-1.5 py-0.5 text-blue-200">AI</span>
                  </button>
                  <a
                    href="https://explorer.1am.xyz/contract/2acabfd90d77a94af7fcab23806b1d5b6da329392d25e0ce6c0766403289bfdc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/10 bg-black/40 px-5 py-3 text-xs sm:text-sm font-bold text-white/80 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                  >
                    View Preprod Contract ↗
                  </a>
                </div>

                {/* Network & Proof Badges */}
                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-white/45">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                    Midnight Preprod Testnet
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    Compact v1.3.0 ZKIR
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                    1AM ProofStation Zero-DUST
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    EZKL Halo2 Verifiable
                  </span>
                </div>
              </div>

              {/* Right Column: Holographic Command Core (Orbiting Console) */}
              <div className="home-command-core relative min-h-[480px] sm:min-h-[520px] overflow-hidden rounded-[32px] sm:rounded-[36px] border border-white/10 bg-[#020611]/85 shadow-[0_35px_120px_rgba(0,0,0,0.6)]">
                {/* Internal Gradients & Shift Grid */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.3),transparent_34%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.15),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_35%)]" />
                <div className="home-grid pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:34px_34px]" />

                {/* 3 Concentric Orbit Rings with Satellite Lights */}
                <div className="home-core-orbit home-core-orbit-one pointer-events-none absolute left-1/2 top-[44%] h-[320px] w-[320px] sm:h-[350px] sm:w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/20" />
                <div className="home-core-orbit home-core-orbit-two pointer-events-none absolute left-1/2 top-[44%] h-[250px] w-[250px] sm:h-[275px] sm:w-[275px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/15" />
                <div className="home-core-orbit home-core-orbit-three pointer-events-none absolute left-1/2 top-[44%] h-[190px] w-[190px] sm:h-[210px] sm:w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

                {/* Ambient Core Radial Halo */}
                <div className="home-core-glow pointer-events-none absolute left-1/2 top-[44%] h-44 w-44 sm:h-52 sm:w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/25 blur-3xl" />

                {/* Central 3D Floating Xenox Emblem & Wordmark */}
                <div className="absolute left-1/2 top-[44%] z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                  <img
                    src="/xenox-icon-mark.png"
                    alt="Xenox Shield Emblem"
                    className="home-logo-motion h-32 w-32 sm:h-40 sm:w-40 bg-transparent object-contain drop-shadow-[0_0_42px_rgba(59,130,246,0.95)]"
                  />
                  <img
                    src="/xenox-horizontal-logo.png"
                    alt="Xenox Trade Wordmark"
                    className="home-wordmark-motion mt-2 h-7 sm:h-8 w-auto max-w-[190px] sm:max-w-[230px] bg-transparent object-contain drop-shadow-[0_0_24px_rgba(59,130,246,0.8)]"
                  />
                </div>

                {/* 4 Corner Holographic Data Chips */}
                <div className="home-data-chip absolute left-4 top-4 hidden min-w-[135px] rounded-2xl border border-white/10 bg-black/60 p-3 backdrop-blur-xl sm:block">
                  <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40">Network</div>
                  <div className="mt-1 font-black text-xs text-white">Midnight Preprod</div>
                  <div className="mt-0.5 text-[10px] text-blue-200/70">ZK Testnet Active</div>
                </div>

                <div className="home-data-chip home-data-chip-delay absolute right-4 top-4 hidden min-w-[135px] rounded-2xl border border-white/10 bg-black/60 p-3 text-right backdrop-blur-xl sm:block">
                  <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40">Compact Contract</div>
                  <div className="mt-1 font-black text-xs text-blue-100">v1.3.0 Supermoon</div>
                  <div className="mt-0.5 text-[10px] text-white/45">0x2acabfd...</div>
                </div>

                <div className="home-data-chip home-data-chip-two absolute bottom-24 left-4 hidden min-w-[135px] rounded-2xl border border-white/10 bg-black/60 p-3 backdrop-blur-xl sm:block">
                  <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40">Shielded Vault</div>
                  <div className="mt-1 font-black text-xs text-white">vUSD Collateral</div>
                  <div className="mt-0.5 text-[10px] text-white/45">Zero Mempool Leak</div>
                </div>

                <div className="home-data-chip home-data-chip-three absolute bottom-24 right-4 hidden min-w-[135px] rounded-2xl border border-white/10 bg-black/60 p-3 text-right backdrop-blur-xl sm:block">
                  <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40">Risk Engine</div>
                  <div className="mt-1 font-black text-xs text-cyan-200">EZKL + Halo2</div>
                  <div className="mt-0.5 text-[10px] text-white/45">Verifiable ZK-ML</div>
                </div>

                {/* Bottom Scanning Action Strip */}
                <div className="absolute bottom-4 left-4 right-4 z-20 overflow-hidden rounded-[22px] border border-blue-400/25 bg-blue-500/15 p-3.5 shadow-[0_0_38px_rgba(59,130,246,0.18)] backdrop-blur-xl">
                  <div className="home-panel-scan pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-blue-300/15 to-transparent" />
                  <div className="relative flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="text-[9px] font-black uppercase tracking-[0.24em] text-blue-200/60">Active Deployment</div>
                      <div className="text-sm font-black text-white flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Preprod Supermoon MVP • Live On-Chain
                      </div>
                    </div>
                    <button
                      onClick={() => onEnterDashboard('overview')}
                      className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-xs font-black text-white transition hover:bg-blue-500 cursor-pointer shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                    >
                      Enter Terminal
                      <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ================================================================= */}
          {/* SECTION 2: LIVE METRIC HIGHLIGHT STRIP                            */}
          {/* ================================================================= */}
          <section className="relative overflow-hidden rounded-[26px] border border-blue-400/20 bg-blue-500/[0.07] px-5 py-4 shadow-[0_20px_70px_rgba(0,0,0,0.34)] backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(59,130,246,0.08),transparent,rgba(34,211,238,0.07))]" />
            <div className="relative grid gap-3 text-center sm:grid-cols-2 lg:grid-cols-4">
              <div className="px-4 py-1.5">
                <div className="text-[10px] font-black uppercase tracking-[0.22em] text-white/40">Status</div>
                <div className="mt-1 text-sm sm:text-base font-black text-emerald-400 flex items-center justify-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
                  LIVE PREPROD MVP
                </div>
              </div>
              <div className="px-4 py-1.5 lg:border-l lg:border-white/10">
                <div className="text-[10px] font-black uppercase tracking-[0.22em] text-white/40">Compact Contract</div>
                <div className="mt-1 text-sm sm:text-base font-black text-blue-100">v1.3.0 SUPERMOON</div>
              </div>
              <div className="px-4 py-1.5 lg:border-l lg:border-white/10">
                <div className="text-[10px] font-black uppercase tracking-[0.22em] text-white/40">Active Circuits</div>
                <div className="mt-1 text-sm sm:text-base font-black text-blue-100">9 CIRCUITS READY</div>
              </div>
              <div className="px-4 py-1.5 lg:border-l lg:border-white/10">
                <div className="text-[10px] font-black uppercase tracking-[0.22em] text-white/40">Automated Tests</div>
                <div className="mt-1 text-sm sm:text-base font-black text-cyan-200">42 / 42 PASSING (100%)</div>
              </div>
            </div>
          </section>

          {/* ================================================================= */}
          {/* SECTION 3: SYSTEM ARCHITECTURE & PROTOCOL MODULES                */}
          {/* ================================================================= */}
          <section id="circuits" className="rounded-[36px] sm:rounded-[42px] border border-white/10 bg-black/25 p-5 sm:p-8 lg:p-10 shadow-[0_28px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-blue-100">
                  <span className="h-px w-8 bg-blue-400/70" />
                  Xenox Infrastructure
                </div>
                <h2 className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-black leading-tight text-white">
                  One connected ecosystem. Multiple trading systems.
                </h2>
                <p className="mt-3 max-w-2xl text-xs sm:text-sm leading-6 sm:leading-7 text-white/60">
                  Xenox is structured as a synchronized pipeline rather than isolated tools. Move seamlessly from natural language strategy input to zero-knowledge on-chain verification and autonomous MEV-shielded execution.
                </p>
              </div>
              <button
                onClick={() => onEnterDashboard('overview')}
                className="inline-flex w-fit items-center justify-center rounded-2xl border border-blue-400/25 bg-blue-500/10 px-5 py-3 text-xs sm:text-sm font-black text-blue-100 transition duration-300 hover:-translate-y-0.5 hover:border-blue-300/40 hover:bg-blue-500/20 hover:text-white cursor-pointer"
              >
                Launch Protocol Overview
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>

            {/* 6 Modular Architecture Cards */}
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {/* Card 01: ZK Strategy Commitment */}
              <article className="home-card group flex min-h-[300px] flex-col rounded-[28px] border border-white/10 bg-[#050914]/75 p-6 shadow-[0_20px_65px_rgba(0,0,0,0.3)]">
                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-sm font-black text-blue-100 shadow-[0_0_26px_rgba(59,130,246,0.15)]">
                      ◈
                    </div>
                    <span className="text-xs font-black tracking-[0.2em] text-white/25">01</span>
                  </div>
                  <span className="inline-flex rounded-full border border-blue-400/25 bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.16em] text-blue-100 shadow-[0_0_22px_rgba(59,130,246,0.15)]">
                    Live
                  </span>
                </div>
                <h3 className="relative mt-6 text-lg sm:text-xl font-black text-white">ZK Strategy Commitment</h3>
                <p className="relative mt-2.5 flex-1 text-xs sm:text-sm leading-6 text-white/55">
                  Converts trader limits into a 32-byte cryptographic hash commitment. The strategy rules, thresholds, and alpha remain hidden in client memory.
                </p>
                <button
                  onClick={() => onEnterDashboard('strategies')}
                  className="relative mt-6 inline-flex w-fit items-center text-xs sm:text-sm font-black text-blue-200 transition group-hover:text-white cursor-pointer"
                >
                  Create Strategy
                  <ArrowRight className="ml-1.5 w-4 h-4 transition group-hover:translate-x-1" />
                </button>
              </article>

              {/* Card 02: Shielded Trading Vault */}
              <article className="home-card group flex min-h-[300px] flex-col rounded-[28px] border border-white/10 bg-[#050914]/75 p-6 shadow-[0_20px_65px_rgba(0,0,0,0.3)]">
                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-sm font-black text-blue-100 shadow-[0_0_26px_rgba(59,130,246,0.15)]">
                      ◇
                    </div>
                    <span className="text-xs font-black tracking-[0.2em] text-white/25">02</span>
                  </div>
                  <span className="inline-flex rounded-full border border-blue-400/25 bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.16em] text-blue-100">
                    Active
                  </span>
                </div>
                <h3 className="relative mt-6 text-lg sm:text-xl font-black text-white">Shielded Vault (vUSD)</h3>
                <p className="relative mt-2.5 flex-1 text-xs sm:text-sm leading-6 text-white/55">
                  Mint and burn confidential synthetic collateral. Balances and order volumes are sheltered from mempool front-runners, toxic MEV, and copy-trading bots.
                </p>
                <button
                  onClick={() => onEnterDashboard('vault')}
                  className="relative mt-6 inline-flex w-fit items-center text-xs sm:text-sm font-black text-blue-200 transition group-hover:text-white cursor-pointer"
                >
                  Manage Vault
                  <ArrowRight className="ml-1.5 w-4 h-4 transition group-hover:translate-x-1" />
                </button>
              </article>

              {/* Card 03: AI NLP Strategy Synthesis */}
              <article className="home-card group flex min-h-[300px] flex-col rounded-[28px] border border-white/10 bg-[#050914]/75 p-6 shadow-[0_20px_65px_rgba(0,0,0,0.3)]">
                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-sm font-black text-blue-100 shadow-[0_0_26px_rgba(59,130,246,0.15)]">
                      AI
                    </div>
                    <span className="text-xs font-black tracking-[0.2em] text-white/25">03</span>
                  </div>
                  <span className="inline-flex rounded-full border border-blue-400/25 bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.16em] text-blue-100">
                    Live
                  </span>
                </div>
                <h3 className="relative mt-6 text-lg sm:text-xl font-black text-white">AI Strategy Synthesis</h3>
                <p className="relative mt-2.5 flex-1 text-xs sm:text-sm leading-6 text-white/55">
                  Powered by Gemini 2.5 Flash. State risk boundaries in plain English; the AI extracts stop-loss, position limits, and expiry dates into deterministic parameters.
                </p>
                <button
                  onClick={() => onEnterDashboard('strategies')}
                  className="relative mt-6 inline-flex w-fit items-center text-xs sm:text-sm font-black text-blue-200 transition group-hover:text-white cursor-pointer"
                >
                  Synthesize Intent
                  <ArrowRight className="ml-1.5 w-4 h-4 transition group-hover:translate-x-1" />
                </button>
              </article>

              {/* Card 04: ZK Execution Bot */}
              <article className="home-card group flex min-h-[300px] flex-col rounded-[28px] border border-white/10 bg-[#050914]/75 p-6 shadow-[0_20px_65px_rgba(0,0,0,0.3)]">
                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-sm font-black text-blue-100 shadow-[0_0_26px_rgba(59,130,246,0.15)]">
                      ⬡
                    </div>
                    <span className="text-xs font-black tracking-[0.2em] text-white/25">04</span>
                  </div>
                  <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-400/10 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.16em] text-cyan-100">
                    Live
                  </span>
                </div>
                <h3 className="relative mt-6 text-lg sm:text-xl font-black text-white">ZK Execution Bot</h3>
                <p className="relative mt-2.5 flex-1 text-xs sm:text-sm leading-6 text-white/55">
                  Autonomous backtested engine testing strategies against historical regimes and live feeds. Validates circuit breaker thresholds and auto-trips on anomalies.
                </p>
                <button
                  onClick={() => onEnterDashboard('bot')}
                  className="relative mt-6 inline-flex w-fit items-center text-xs sm:text-sm font-black text-blue-200 transition group-hover:text-white cursor-pointer"
                >
                  Run Bot Simulator
                  <ArrowRight className="ml-1.5 w-4 h-4 transition group-hover:translate-x-1" />
                </button>
              </article>

              {/* Card 05: Verifiable Risk Boundary (EZKL) */}
              <article className="home-card group flex min-h-[300px] flex-col rounded-[28px] border border-white/10 bg-[#050914]/75 p-6 shadow-[0_20px_65px_rgba(0,0,0,0.3)]">
                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-sm font-black text-blue-100 shadow-[0_0_26px_rgba(59,130,246,0.15)]">
                      ZK
                    </div>
                    <span className="text-xs font-black tracking-[0.2em] text-white/25">05</span>
                  </div>
                  <span className="inline-flex rounded-full border border-purple-400/25 bg-purple-500/10 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.16em] text-purple-200">
                    Verified
                  </span>
                </div>
                <h3 className="relative mt-6 text-lg sm:text-xl font-black text-white">Halo2 ZK-ML Risk Proofs</h3>
                <p className="relative mt-2.5 flex-1 text-xs sm:text-sm leading-6 text-white/55">
                  EZKL-based Halo2 SNARK circuits verify that trade execution parameters satisfy pre-agreed risk profiles before a transaction is ever signed on Midnight.
                </p>
                <button
                  onClick={() => onEnterDashboard('insights')}
                  className="relative mt-6 inline-flex w-fit items-center text-xs sm:text-sm font-black text-blue-200 transition group-hover:text-white cursor-pointer"
                >
                  View Risk Metrics
                  <ArrowRight className="ml-1.5 w-4 h-4 transition group-hover:translate-x-1" />
                </button>
              </article>

              {/* Card 06: Preprod Explorer & Launch Users */}
              <article className="home-card group flex min-h-[300px] flex-col rounded-[28px] border border-white/10 bg-[#050914]/75 p-6 shadow-[0_20px_65px_rgba(0,0,0,0.3)]">
                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-sm font-black text-blue-100 shadow-[0_0_26px_rgba(59,130,246,0.15)]">
                      ↗
                    </div>
                    <span className="text-xs font-black tracking-[0.2em] text-white/25">06</span>
                  </div>
                  <span className="inline-flex rounded-full border border-blue-400/25 bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.16em] text-blue-100">
                    Live
                  </span>
                </div>
                <h3 className="relative mt-6 text-lg sm:text-xl font-black text-white">Preprod Launch Cohort</h3>
                <p className="relative mt-2.5 flex-1 text-xs sm:text-sm leading-6 text-white/55">
                  77 active Midnight Preprod wallet addresses participating in live strategy testing, with verifiable transaction hashes indexable on the 1AM Explorer.
                </p>
                <button
                  onClick={() => onEnterDashboard('users')}
                  className="relative mt-6 inline-flex w-fit items-center text-xs sm:text-sm font-black text-blue-200 transition group-hover:text-white cursor-pointer"
                >
                  Explore 77 Cohort Wallets
                  <ArrowRight className="ml-1.5 w-4 h-4 transition group-hover:translate-x-1" />
                </button>
              </article>
            </div>
          </section>

          {/* ================================================================= */}
          {/* SECTION 4: WHY XENOX TRADE — THE COMMAND LAYER                   */}
          {/* ================================================================= */}
          <section className="relative overflow-hidden rounded-[36px] sm:rounded-[42px] border border-white/10 bg-[#030712]/80 p-5 sm:p-8 lg:p-10 shadow-[0_30px_110px_rgba(0,0,0,0.5)] backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(37,99,235,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.1),transparent_34%)]" />
            <div className="relative grid gap-8 xl:grid-cols-[.9fr_1.1fr] xl:items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-blue-100">
                  <span className="h-px w-8 bg-blue-400/70" />
                  Why Xenox Trade
                </div>
                <h2 className="mt-4 text-2xl sm:text-4xl lg:text-5xl font-black leading-tight text-white">
                  The command layer for the next generation of institutional privacy.
                </h2>
                <p className="mt-4 max-w-xl text-xs sm:text-sm leading-7 text-white/60">
                  Traditional DeFi bots broadcast plain-text trades to public mempools, bleeding alpha to MEV sandwichers, copy traders, and liquidators. Xenox Trade solves this at the protocol level with Midnight's zero-knowledge Compact circuits.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <button
                    onClick={() => onEnterDashboard('overview')}
                    className="rounded-2xl bg-blue-600 px-5 py-3 text-xs sm:text-sm font-black text-white transition hover:bg-blue-500 cursor-pointer shadow-[0_0_25px_rgba(59,130,246,0.3)]"
                  >
                    Launch Terminal ↗
                  </button>
                  <a
                    href="https://explorer.1am.xyz/contract/2acabfd90d77a94af7fcab23806b1d5b6da329392d25e0ce6c0766403289bfdc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-3 text-xs sm:text-sm font-bold text-white transition hover:border-blue-400/25 hover:bg-blue-500/10"
                  >
                    View Preprod Contract
                  </a>
                </div>
              </div>

              {/* 4 Feature Value Pillars */}
              <div className="grid gap-3.5 sm:grid-cols-2">
                <article className="home-card rounded-[24px] border border-white/10 bg-black/35 p-5">
                  <div className="text-xs font-black tracking-[0.24em] text-blue-200/60">01</div>
                  <h3 className="mt-3 text-base sm:text-lg font-black text-white">From Idea to Circuit</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-6 text-white/55">
                    Traders express requirements in natural language; Gemini AI deterministically generates Compact ZK constraints.
                  </p>
                </article>

                <article className="home-card rounded-[24px] border border-white/10 bg-black/35 p-5">
                  <div className="text-xs font-black tracking-[0.24em] text-blue-200/60">02</div>
                  <h3 className="mt-3 text-base sm:text-lg font-black text-white">Total MEV Shield</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-6 text-white/55">
                    Trading positions and parameters stay confidential in client memory. No sandwich attacks or front-running possible.
                  </p>
                </article>

                <article className="home-card rounded-[24px] border border-white/10 bg-black/35 p-5">
                  <div className="text-xs font-black tracking-[0.24em] text-blue-200/60">03</div>
                  <h3 className="mt-3 text-base sm:text-lg font-black text-white">Verifiable On-Chain State</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-6 text-white/55">
                    Circuit state transitions are cryptographically validated by Midnight nodes without revealing confidential inputs.
                  </p>
                </article>

                <article className="home-card rounded-[24px] border border-white/10 bg-black/35 p-5">
                  <div className="text-xs font-black tracking-[0.24em] text-blue-200/60">04</div>
                  <h3 className="mt-3 text-base sm:text-lg font-black text-white">Built for Institutions</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-6 text-white/55">
                    Automated circuit breakers, zero-DUST sponsored proofs, and comprehensive Vitest audit matrices ensure production stability.
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* ================================================================= */}
          {/* SECTION 5: ON-CHAIN STATE MACHINE & TOKENOMICS                    */}
          {/* ================================================================= */}
          <section className="rounded-[36px] sm:rounded-[42px] border border-white/10 bg-black/25 p-5 sm:p-8 lg:p-10 shadow-[0_30px_110px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-blue-100">
                  <span className="h-px w-8 bg-blue-400/70" />
                  State Machine & Privacy Ledger
                </div>
                <h2 className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-black leading-tight text-white">
                  Zero strategy leakage. Multi-regime execution.
                </h2>
                <p className="mt-3 max-w-2xl text-xs sm:text-sm leading-6 sm:leading-7 text-white/60">
                  Every trade execution updates the public ledger status with zero order sizes, limit prices, or balance identities revealed.
                </p>
              </div>
              <button
                onClick={() => onEnterDashboard('vault')}
                className="inline-flex w-fit items-center justify-center rounded-2xl border border-blue-400/25 bg-blue-500/10 px-5 py-3 text-xs sm:text-sm font-black text-blue-100 transition duration-300 hover:-translate-y-0.5 hover:border-blue-300/40 hover:bg-blue-500/20 hover:text-white cursor-pointer"
              >
                Access Shielded Vault
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>

            <div className="mt-9 grid gap-10 xl:grid-cols-[400px_1fr] xl:items-center">
              {/* Rotating Donut Orbit Graphic */}
              <div className="relative mx-auto flex h-[290px] w-[290px] sm:h-[350px] sm:w-[350px] items-center justify-center">
                <div className="home-token-orbit absolute inset-0 rounded-full border border-blue-400/20" />
                <div className="home-token-orbit-reverse absolute inset-[24px] rounded-full border border-cyan-300/15" />
                <div
                  className="absolute inset-[44px] rounded-full p-[2px] shadow-[0_0_80px_rgba(59,130,246,0.3)]"
                  style={{ background: 'conic-gradient(#3b82f6 0deg 180deg, #22d3ee 180deg 360deg)' }}
                >
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-[#030815]">
                    <div className="text-center p-3">
                      <div className="text-[10px] font-black uppercase tracking-[0.25em] text-white/40">ZK Privacy</div>
                      <div className="mt-2 text-3xl sm:text-4xl font-black text-white">100%</div>
                      <div className="mt-1 text-xs font-semibold text-blue-200">Zero Alpha Leak</div>
                    </div>
                  </div>
                </div>

                <div className="absolute left-0 top-1/2 -translate-y-1/2 rounded-2xl border border-blue-400/20 bg-[#050b18]/90 px-3.5 py-2.5 shadow-[0_18px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl">
                  <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40">Private State</div>
                  <div className="mt-0.5 font-black text-xs text-blue-100">Witnesses</div>
                </div>

                <div className="absolute right-0 top-1/2 -translate-y-1/2 rounded-2xl border border-cyan-300/20 bg-[#050b18]/90 px-3.5 py-2.5 text-right shadow-[0_18px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl">
                  <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40">Public State</div>
                  <div className="mt-0.5 font-black text-xs text-cyan-200">Commitment</div>
                </div>
              </div>

              {/* 4 Metric Badges + 5 Linear Stages */}
              <div>
                <div className="grid gap-3.5 sm:grid-cols-2">
                  <article className="home-card rounded-[22px] border border-white/10 bg-[#050914]/75 p-4 sm:p-5">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Network Verifiability</div>
                    <div className="mt-2 text-lg sm:text-xl font-black text-white">Midnight Preprod</div>
                    <p className="mt-1 text-xs text-white/50">1AM DApp Connector v4.x</p>
                  </article>
                  <article className="home-card rounded-[22px] border border-white/10 bg-[#050914]/75 p-4 sm:p-5">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Circuit Matrix</div>
                    <div className="mt-2 text-lg sm:text-xl font-black text-white">9 Active Circuits</div>
                    <p className="mt-1 text-xs text-white/50">commit, trade, rebalance, vault</p>
                  </article>
                  <article className="home-card rounded-[22px] border border-white/10 bg-[#050914]/75 p-4 sm:p-5">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Shielded Vault Capacity</div>
                    <div className="mt-2 text-lg sm:text-xl font-black text-white">100M vUSD Cap</div>
                    <p className="mt-1 text-xs text-white/50">Confidential mint & burn</p>
                  </article>
                  <article className="home-card rounded-[22px] border border-white/10 bg-[#050914]/75 p-4 sm:p-5">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Mempool Strategy Leak</div>
                    <div className="mt-2 text-lg sm:text-xl font-black text-emerald-400">0.00% Leakage</div>
                    <p className="mt-1 text-xs text-white/50">Protected against toxic MEV</p>
                  </article>
                </div>

                {/* 5 Progression Stages */}
                <div className="relative mt-6 grid gap-2.5 sm:grid-cols-5">
                  <div className="home-stage-line" />
                  <article className="home-card relative rounded-[20px] border border-blue-400/30 bg-blue-500/10 p-3.5 shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                    <div className="relative z-10 flex h-4 w-4 items-center justify-center rounded-full border border-blue-300 bg-blue-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    </div>
                    <div className="mt-3 text-[10px] font-black uppercase tracking-[0.16em] text-white/40">Stage 1</div>
                    <div className="mt-1 text-sm font-black text-blue-100">Intent</div>
                    <div className="mt-0.5 text-[10px] text-white/45">NLP Parser</div>
                  </article>

                  <article className="home-card relative rounded-[20px] border border-white/10 bg-black/40 p-3.5">
                    <div className="relative z-10 flex h-4 w-4 items-center justify-center rounded-full border border-white/20 bg-[#07101f]" />
                    <div className="mt-3 text-[10px] font-black uppercase tracking-[0.16em] text-white/40">Stage 2</div>
                    <div className="mt-1 text-sm font-black text-white">Commit</div>
                    <div className="mt-0.5 text-[10px] text-white/45">1AM Popup</div>
                  </article>

                  <article className="home-card relative rounded-[20px] border border-white/10 bg-black/40 p-3.5">
                    <div className="relative z-10 flex h-4 w-4 items-center justify-center rounded-full border border-white/20 bg-[#07101f]" />
                    <div className="mt-3 text-[10px] font-black uppercase tracking-[0.16em] text-white/40">Stage 3</div>
                    <div className="mt-1 text-sm font-black text-white">ZK Proof</div>
                    <div className="mt-0.5 text-[10px] text-white/45">Halo2 EZKL</div>
                  </article>

                  <article className="home-card relative rounded-[20px] border border-white/10 bg-black/40 p-3.5">
                    <div className="relative z-10 flex h-4 w-4 items-center justify-center rounded-full border border-white/20 bg-[#07101f]" />
                    <div className="mt-3 text-[10px] font-black uppercase tracking-[0.16em] text-white/40">Stage 4</div>
                    <div className="mt-1 text-sm font-black text-white">Midnight</div>
                    <div className="mt-0.5 text-[10px] text-white/45">Preprod Node</div>
                  </article>

                  <article className="home-card relative rounded-[20px] border border-white/10 bg-black/40 p-3.5">
                    <div className="relative z-10 flex h-4 w-4 items-center justify-center rounded-full border border-white/20 bg-[#07101f]" />
                    <div className="mt-3 text-[10px] font-black uppercase tracking-[0.16em] text-white/40">Stage 5</div>
                    <div className="mt-1 text-sm font-black text-white">Settle</div>
                    <div className="mt-0.5 text-[10px] text-white/45">Private Ledger</div>
                  </article>
                </div>
              </div>
            </div>
          </section>

          {/* ================================================================= */}
          {/* SECTION 6: DEVELOPMENT ROADMAP                                    */}
          {/* ================================================================= */}
          <section className="rounded-[36px] sm:rounded-[42px] border border-white/10 bg-[#030712]/75 p-5 sm:p-8 lg:p-10 shadow-[0_30px_110px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-blue-100">
                  <span className="h-px w-8 bg-blue-400/70" />
                  Development Roadmap
                </div>
                <h2 className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-black leading-tight text-white">
                  From testnet foundation to institutional privacy.
                </h2>
                <p className="mt-3 max-w-2xl text-xs sm:text-sm leading-6 sm:leading-7 text-white/60">
                  Our roadmap is structured around verifiable milestone deliverables, expanding Compact ZK circuits, and community feedback integration.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
              {/* Phase 01 */}
              <article className="home-card flex flex-col rounded-[26px] border border-white/10 bg-black/35 p-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-xs font-black uppercase tracking-[0.2em] text-blue-200">Phase 01</div>
                  <span className="inline-flex rounded-full border border-blue-400/25 bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.16em] text-blue-100 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                    Active
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-black text-white">Compact v1.3.0 Contract</h3>
                <p className="mt-2 text-xs leading-6 text-white/55">
                  Full Compact smart contract deployed on Midnight Preprod with circuit breakers, MEV shields, and 9 circuits.
                </p>
                <div className="mt-5 space-y-2 border-t border-white/10 pt-4">
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
                    Compact ZKIR verification
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
                    1AM Preprod deployment
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
                    Explorer verification
                  </div>
                </div>
              </article>

              {/* Phase 02 */}
              <article className="home-card flex flex-col rounded-[26px] border border-white/10 bg-black/35 p-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-xs font-black uppercase tracking-[0.2em] text-blue-200">Phase 02</div>
                  <span className="inline-flex rounded-full border border-blue-400/25 bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.16em] text-blue-100">
                    Active
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-black text-white">1AM DApp Connector</h3>
                <p className="mt-2 text-xs leading-6 text-white/55">
                  v4.x wallet extension connection, network switching, and real-time shielded balance synchronization.
                </p>
                <div className="mt-5 space-y-2 border-t border-white/10 pt-4">
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
                    1AM Extension popup auth
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
                    Zero-DUST fee sponsoring
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
                    Supabase ledger telemetry
                  </div>
                </div>
              </article>

              {/* Phase 03 */}
              <article className="home-card flex flex-col rounded-[26px] border border-white/10 bg-black/35 p-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-xs font-black uppercase tracking-[0.2em] text-blue-200">Phase 03</div>
                  <span className="inline-flex rounded-full border border-blue-400/25 bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.16em] text-blue-100">
                    Active
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-black text-white">AI Strategy & Bot</h3>
                <p className="mt-2 text-xs leading-6 text-white/55">
                  Gemini 2.5 Flash NLP strategy parser, EZKL Halo2 risk model, and 77-user preprod launch cohort.
                </p>
                <div className="mt-5 space-y-2 border-t border-white/10 pt-4">
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
                    Natural language parser
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
                    Autonomous execution bot
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
                    Supermoon L6 milestone
                  </div>
                </div>
              </article>

              {/* Phase 04 */}
              <article className="home-card flex flex-col rounded-[26px] border border-white/10 bg-black/35 p-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-xs font-black uppercase tracking-[0.2em] text-white/40">Phase 04</div>
                  <span className="inline-flex rounded-full border border-white/10 bg-white/[0.045] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.16em] text-white/50">
                    Upcoming
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-black text-white">Mainnet & Cross-Chain</h3>
                <p className="mt-2 text-xs leading-6 text-white/55">
                  Midnight mainnet deployment, cross-chain shielded settlement with Cardano, and decentralized relayer network.
                </p>
                <div className="mt-5 space-y-2 border-t border-white/10 pt-4">
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                    Midnight Mainnet audit
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                    Cardano cross-chain bridge
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                    Decentralized prover mesh
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* ================================================================= */}
          {/* SECTION 7: PROTOCOL WORKFLOW (Commit. Prove. Execute.)            */}
          {/* ================================================================= */}
          <section className="rounded-[36px] sm:rounded-[42px] border border-white/10 bg-black/25 p-5 sm:p-8 lg:p-10 backdrop-blur-xl">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-blue-100">
                <span className="h-px w-8 bg-blue-400/70" />
                Xenox Workflow
              </div>
              <h2 className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-black leading-tight text-white">
                Commit. Prove. Execute.
              </h2>
              <p className="mt-3 max-w-2xl text-xs sm:text-sm leading-6 sm:leading-7 text-white/60">
                The protocol is structured as a progressive trader journey from natural language intent to zero-knowledge verification.
              </p>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              <article className="home-card group rounded-[28px] border border-white/10 bg-[#050914]/75 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-sm font-black text-blue-100">
                  01
                </div>
                <h3 className="mt-6 text-xl font-black text-white">State Risk Boundary</h3>
                <p className="mt-3 text-xs sm:text-sm leading-6 text-white/55 min-h-[72px]">
                  State trading goals in plain text. Gemini AI synthesizes maximum drawdown, position caps, and timeline expiry into verifiable constraints.
                </p>
                <button
                  onClick={() => onEnterDashboard('strategies')}
                  className="mt-6 inline-flex items-center text-xs sm:text-sm font-black text-blue-200 transition group-hover:text-white cursor-pointer"
                >
                  Configure Strategy
                  <ArrowRight className="ml-2 w-4 h-4 transition group-hover:translate-x-1" />
                </button>
              </article>

              <article className="home-card group rounded-[28px] border border-white/10 bg-[#050914]/75 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-sm font-black text-blue-100">
                  02
                </div>
                <h3 className="mt-6 text-xl font-black text-white">Generate ZK Proof</h3>
                <p className="mt-3 text-xs sm:text-sm leading-6 text-white/55 min-h-[72px]">
                  Sign the strategy commitment hash in 1AM Wallet. Compact circuits enforce limits on-chain without revealing underlying parameters.
                </p>
                <button
                  onClick={() => onEnterDashboard('overview')}
                  className="mt-6 inline-flex items-center text-xs sm:text-sm font-black text-blue-200 transition group-hover:text-white cursor-pointer"
                >
                  View Commitments
                  <ArrowRight className="ml-2 w-4 h-4 transition group-hover:translate-x-1" />
                </button>
              </article>

              <article className="home-card group rounded-[28px] border border-white/10 bg-[#050914]/75 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-sm font-black text-blue-100">
                  03
                </div>
                <h3 className="mt-6 text-xl font-black text-white">Autonomous Execution</h3>
                <p className="mt-3 text-xs sm:text-sm leading-6 text-white/55 min-h-[72px]">
                  ZK Execution Bot orchestrates trades against shielded liquidity. Circuit breaker auto-trips if volatility breaches parameters.
                </p>
                <button
                  onClick={() => onEnterDashboard('bot')}
                  className="mt-6 inline-flex items-center text-xs sm:text-sm font-black text-blue-200 transition group-hover:text-white cursor-pointer"
                >
                  Start Execution Bot
                  <ArrowRight className="ml-2 w-4 h-4 transition group-hover:translate-x-1" />
                </button>
              </article>
            </div>
          </section>

          {/* ================================================================= */}
          {/* SECTION 8: ECOSYSTEM & WALLET CONNECTIVITY MARQUEE                */}
          {/* ================================================================= */}
          <section className="relative overflow-hidden rounded-[36px] sm:rounded-[42px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(0,0,0,0.35))] p-5 sm:p-8 shadow-[0_28px_100px_rgba(0,0,0,0.42)] backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_bottom,rgba(34,211,238,0.06),transparent_30%)]" />
            <div className="relative">
              <div className="mx-auto max-w-3xl text-center">
                <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-blue-100">
                  Ecosystem Connectivity
                </div>
                <h2 className="mt-3 text-2xl sm:text-4xl font-black text-white">
                  Built for Midnight Network and Web3 ZK Wallets.
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-xs sm:text-sm leading-6 text-white/55">
                  Native integration with 1AM Wallet DApp Connector v4, Lace Midnight, ProofStation Zero-DUST sponsoring, and Gemini AI.
                </p>
              </div>

              {/* Continuous Infinite Horizontal Scrolling Marquee */}
              <div className="home-marquee mt-8 rounded-[24px] border border-white/10 bg-black/30">
                <div className="home-marquee-track">
                  <div className="home-partner-item">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500/15 text-blue-200 font-bold text-xs">1AM</span>
                    <span className="whitespace-nowrap text-xs sm:text-sm font-semibold text-white/80">1AM Midnight Wallet</span>
                  </div>
                  <div className="home-partner-item">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-500/15 text-purple-200 font-bold text-xs">MN</span>
                    <span className="whitespace-nowrap text-xs sm:text-sm font-semibold text-white/80">Midnight Network Preprod</span>
                  </div>
                  <div className="home-partner-item">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-200 font-bold text-xs">LC</span>
                    <span className="whitespace-nowrap text-xs sm:text-sm font-semibold text-white/80">Lace Midnight Wallet</span>
                  </div>
                  <div className="home-partner-item">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500/15 text-blue-200 font-bold text-xs">CP</span>
                    <span className="whitespace-nowrap text-xs sm:text-sm font-semibold text-white/80">Compact v0.24 ZKIR</span>
                  </div>
                  <div className="home-partner-item">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-200 font-bold text-xs">AI</span>
                    <span className="whitespace-nowrap text-xs sm:text-sm font-semibold text-white/80">Google Gemini 2.5 Flash</span>
                  </div>
                  <div className="home-partner-item">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-500/15 text-purple-200 font-bold text-xs">ZK</span>
                    <span className="whitespace-nowrap text-xs sm:text-sm font-semibold text-white/80">EZKL Halo2 Risk Engine</span>
                  </div>
                  <div className="home-partner-item">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-200 font-bold text-xs">SB</span>
                    <span className="whitespace-nowrap text-xs sm:text-sm font-semibold text-white/80">Supabase Telemetry Sync</span>
                  </div>
                  <div className="home-partner-item">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-500/15 text-amber-200 font-bold text-xs">VT</span>
                    <span className="whitespace-nowrap text-xs sm:text-sm font-semibold text-white/80">Vitest 42-Test Suite</span>
                  </div>
                  {/* Duplicated for seamless continuous loop */}
                  <div className="home-partner-item">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500/15 text-blue-200 font-bold text-xs">1AM</span>
                    <span className="whitespace-nowrap text-xs sm:text-sm font-semibold text-white/80">1AM Midnight Wallet</span>
                  </div>
                  <div className="home-partner-item">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-500/15 text-purple-200 font-bold text-xs">MN</span>
                    <span className="whitespace-nowrap text-xs sm:text-sm font-semibold text-white/80">Midnight Network Preprod</span>
                  </div>
                  <div className="home-partner-item">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-200 font-bold text-xs">LC</span>
                    <span className="whitespace-nowrap text-xs sm:text-sm font-semibold text-white/80">Lace Midnight Wallet</span>
                  </div>
                  <div className="home-partner-item">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500/15 text-blue-200 font-bold text-xs">CP</span>
                    <span className="whitespace-nowrap text-xs sm:text-sm font-semibold text-white/80">Compact v0.24 ZKIR</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ================================================================= */}
          {/* SECTION 9: TRUST & FAQ ACCORDIONS                                */}
          {/* ================================================================= */}
          <section id="faq" className="rounded-[36px] sm:rounded-[42px] border border-white/10 bg-black/25 p-5 sm:p-8 lg:p-10 backdrop-blur-xl">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-blue-100">
                  <span className="h-px w-8 bg-blue-400/70" />
                  Frequently Asked Questions
                </div>
                <h2 className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-black leading-tight text-white">
                  Essential Xenox Trade Information.
                </h2>
                <p className="mt-3 max-w-2xl text-xs sm:text-sm leading-6 sm:leading-7 text-white/60">
                  Everything you need to know about zero-knowledge execution, 1AM wallet connections, and Midnight Network verification.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-3 lg:grid-cols-2">
              <details className="home-faq group rounded-[22px] border border-white/10 bg-[#050914]/75 p-5 transition duration-300">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-black text-white text-sm sm:text-base">
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-black text-blue-200/60">01</span>
                    What is Xenox Trade?
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.045] text-blue-200 transition duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 border-t border-white/10 pt-4 text-xs sm:text-sm leading-6 sm:leading-7 text-white/60">
                  Xenox Trade is an institutional-grade, privacy-preserving automated trading protocol on the Midnight blockchain. It allows traders to state strategy rules in natural language, compile them into Zero-Knowledge commitments via Gemini AI, and execute trades without exposing parameters to public mempools.
                </p>
              </details>

              <details className="home-faq group rounded-[22px] border border-white/10 bg-[#050914]/75 p-5 transition duration-300">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-black text-white text-sm sm:text-base">
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-black text-blue-200/60">02</span>
                    How does Zero-Knowledge protect trading strategies?
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.045] text-blue-200 transition duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 border-t border-white/10 pt-4 text-xs sm:text-sm leading-6 sm:leading-7 text-white/60">
                  Using Midnight's Compact language, the protocol only records a 32-byte cryptographic hash of your strategy parameters. Trade execution circuits generate Zero-Knowledge proofs that your order conforms to your private limits without revealing stop-losses or position sizes.
                </p>
              </details>

              <details className="home-faq group rounded-[22px] border border-white/10 bg-[#050914]/75 p-5 transition duration-300">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-black text-white text-sm sm:text-base">
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-black text-blue-200/60">03</span>
                    Which wallets are supported on Midnight Preprod?
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.045] text-blue-200 transition duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 border-t border-white/10 pt-4 text-xs sm:text-sm leading-6 sm:leading-7 text-white/60">
                  Xenox integrates with the 1AM Midnight Wallet Extension (DApp Connector API v4.x) and Lace Midnight. Traders can select the Midnight Preprod testnet directly within the wallet popup.
                </p>
              </details>

              <details className="home-faq group rounded-[22px] border border-white/10 bg-[#050914]/75 p-5 transition duration-300">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-black text-white text-sm sm:text-base">
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-black text-blue-200/60">04</span>
                    Where is the deployed contract verified?
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.045] text-blue-200 transition duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 border-t border-white/10 pt-4 text-xs sm:text-sm leading-6 sm:leading-7 text-white/60">
                  The active contract is deployed at address <code className="text-blue-300 bg-blue-900/30 px-1 py-0.5 rounded">0x2acabfd90d77a94af7fcab23806b1d5b6da329392d25e0ce6c0766403289bfdc</code> on the Midnight Preprod Testnet and can be inspected live on the 1AM Explorer.
                </p>
              </details>

              <details className="home-faq group rounded-[22px] border border-white/10 bg-[#050914]/75 p-5 transition duration-300">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-black text-white text-sm sm:text-base">
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-black text-blue-200/60">05</span>
                    Who pays gas and ZK proving fees?
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.045] text-blue-200 transition duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 border-t border-white/10 pt-4 text-xs sm:text-sm leading-6 sm:leading-7 text-white/60">
                  Transactions are fee-sponsored via the 1AM ProofStation Zero-DUST protocol service, allowing friction-free testing on Midnight Preprod without needing to acquire tDUST beforehand.
                </p>
              </details>

              <details className="home-faq group rounded-[22px] border border-white/10 bg-[#050914]/75 p-5 transition duration-300">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-black text-white text-sm sm:text-base">
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-black text-blue-200/60">06</span>
                    What is the Supermoon Level 6 submission?
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.045] text-blue-200 transition duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 border-t border-white/10 pt-4 text-xs sm:text-sm leading-6 sm:leading-7 text-white/60">
                  Level 6 represents the live, production-grade Preprod MVP with 77 verifiable testnet users, interactive walkthrough video, community feedback form, and complete 42-test automated verification suite.
                </p>
              </details>
            </div>
          </section>

          {/* ================================================================= */}
          {/* SECTION 10: HIGH-IMPACT FINAL CTA BANNER                          */}
          {/* ================================================================= */}
          <section className="relative overflow-hidden rounded-[36px] sm:rounded-[44px] border border-blue-400/25 bg-[#050a18] p-6 sm:p-10 lg:p-12 shadow-[0_35px_130px_rgba(0,0,0,0.6)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(37,99,235,0.25),transparent_40%),radial-gradient(circle_at_right,rgba(34,211,238,0.12),transparent_35%)]" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:46px_46px]" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-3xl">
                <div className="text-xs font-black uppercase tracking-[0.3em] text-blue-200">
                  The Xenox Ecosystem
                </div>
                <h2 className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-black leading-tight text-white">
                  Your path to confidential execution begins with Xenox Trade.
                </h2>
                <p className="mt-4 text-xs sm:text-sm leading-7 text-white/65">
                  Launch the terminal, connect your 1AM wallet, and experience institutional-grade zero-knowledge automated trading today.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <button
                  onClick={() => onEnterDashboard('overview')}
                  className="inline-flex min-w-[200px] items-center justify-center rounded-2xl bg-blue-600 px-6 py-3.5 text-xs sm:text-sm font-black text-white shadow-[0_0_40px_rgba(59,130,246,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 cursor-pointer"
                >
                  Enter Trading Terminal
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                <a
                  href="https://github.com/BDutta18/tradexchain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-w-[200px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.045] px-6 py-3.5 text-xs sm:text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:border-blue-400/25 hover:bg-blue-500/10"
                >
                  Read Repository Docs
                </a>
              </div>
            </div>
          </section>

          {/* ================================================================= */}
          {/* SECTION 11: RISK NOTICE BANNER                                    */}
          {/* ================================================================= */}
          <section className="rounded-[22px] border border-amber-300/15 bg-amber-300/[0.045] px-5 py-3.5 text-xs leading-6 text-white/50">
            <span className="font-black text-amber-200/80">Protocol Notice:</span> Xenox Trade is deployed on the Midnight Preprod Testnet for testing and verification purposes. Smart contracts on testnets interact with test tokens (tNIGHT / tDUST / vUSD) and do not represent real-money financial liability. Always exercise caution and verify contract hashes before connecting wallets.
          </section>
        </div>
      </main>

      {/* ── Social Channels Bar ────────────────────────────────────────────── */}
      <div className="mx-auto flex w-full max-w-[1500px] justify-center px-6 pb-8 pt-4">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:bodhisatwadutta025@gmail.com"
            title="Email Lead Developer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:bg-blue-500/10 hover:text-white"
          >
            <span className="text-xs font-bold">@</span>
          </a>
          <a
            href="https://x.com/axiom_night"
            target="_blank"
            rel="noopener noreferrer"
            title="X / Twitter @axiom_night"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:bg-blue-500/10 hover:text-white"
          >
            <span className="text-xs font-bold">𝕏</span>
          </a>
          <a
            href="https://github.com/BDutta18/tradexchain"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Repository"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:bg-blue-500/10 hover:text-white"
          >
            <ExternalLink className="w-4 h-4 text-blue-300" />
          </a>
          <a
            href="https://explorer.1am.xyz/contract/2acabfd90d77a94af7fcab23806b1d5b6da329392d25e0ce6c0766403289bfdc"
            target="_blank"
            rel="noopener noreferrer"
            title="1AM Preprod Contract Explorer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:bg-blue-500/10 hover:text-white"
          >
            <Globe className="w-4 h-4 text-blue-300" />
          </a>
          <a
            href="https://drive.google.com/file/d/1Ub70Yu4LhBrQ6Coc3Y4vKjs4lSZNEptv/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            title="Watch Walkthrough Video"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:bg-blue-500/10 hover:text-white"
          >
            <Play className="w-4 h-4 text-blue-300" />
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd49Nh4u3E2aRTkvyFOwtEFJ16D7d6QRRa_5E3Dp35Jbc6FzA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            title="Submit Feedback Form"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:bg-blue-500/10 hover:text-white"
          >
            <FileText className="w-4 h-4 text-blue-300" />
          </a>
        </div>
      </div>

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <footer className="mx-auto w-full max-w-6xl px-6 pb-12 pt-4 text-xs text-white/45">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-white/10 pt-6">
          <div>© 2026 Xenox Trade • Midnight Preprod Supermoon MVP • All rights reserved</div>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => onEnterDashboard('overview')} className="transition hover:text-white cursor-pointer">
              Terminal
            </button>
            <button onClick={() => onEnterDashboard('strategies')} className="transition hover:text-white cursor-pointer">
              AI Strategies
            </button>
            <button onClick={() => onEnterDashboard('bot')} className="transition hover:text-white cursor-pointer">
              ZK Bot
            </button>
            <button onClick={() => onEnterDashboard('users')} className="transition hover:text-white cursor-pointer">
              Launch Users (77)
            </button>
            <a
              href="https://github.com/BDutta18/tradexchain"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              Docs
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
