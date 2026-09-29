import React, { useState } from 'react';
import {
  Zap,
  Network,
  Smartphone,
  ShieldCheck,
  Calendar,
  Share2,
  Bookmark,
  Search,
  Sparkles,
  Check,
  ArrowRight,
  Menu,
  X,
  ExternalLink,
  Bot,
  Lock,
  Layers
} from 'lucide-react';

interface LandingPageProps {
  onConnectWallet: () => void;
  onEnterDashboard: () => void;
  walletConnected: boolean;
  walletAddress: string | null;
}

const NAV_ITEMS = [
  { label: 'Product', href: '#features' },
  { label: 'AI', href: '#ai' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Wall of Love', href: '#love' },
  { label: 'GitHub', href: 'https://github.com/team-reflect/reflect-open', external: true },
];

const FEATURES = [
  {
    icon: Zap,
    title: 'Built for speed',
    description: 'Instantly sync your notes across devices with instant local-first retrieval.',
  },
  {
    icon: Network,
    title: 'Networked notes',
    description: 'Form a graph of ideas with backlinked notes, bidirectional references and wiki links.',
  },
  {
    icon: Smartphone,
    title: 'iOS app',
    description: 'Capture ideas on the go, online or offline, with high performance plain-file sync.',
  },
  {
    icon: ShieldCheck,
    title: 'End-to-end encryption',
    description: 'Only you can access your notes. Cryptographic privacy and local-first data sovereignty.',
  },
  {
    icon: Calendar,
    title: 'Calendar integration',
    description: 'Keep track of meetings, agendas, and automatically associate notes with events.',
  },
  {
    icon: Share2,
    title: 'Publishing',
    description: 'Share anything you write with one click, cleanly rendered to the public web.',
  },
  {
    icon: Bookmark,
    title: 'Instant capture',
    description: 'Save snippets from your browser and Kindle with one keypress or extension tap.',
  },
  {
    icon: Search,
    title: 'Frictionless search',
    description: 'Easily recall and index past notes and ideas with blazing-fast instant vector indexing.',
  },
];

const TESTIMONIALS = [
  {
    name: 'Sean Rose',
    handle: '@seanrose',
    quote: "Really, really liking Reflect so far. It's just the right amount of simple/fast for a personal note taking app.",
  },
  {
    name: 'Ryan Delk',
    handle: '@delk',
    quote: "Don't take it from me: Reflect is magic.",
  },
  {
    name: 'Fabrizio Rinaldi',
    handle: '@linuz90',
    quote: "I'm keeping Reflect open all the time — for journaling and long-form writing. Rare to see one app work so well for both.",
  },
  {
    name: 'Jonathan Simcoe',
    handle: '@jdsimcoe',
    quote: 'The speed, focus, and attention to detail is superb. It has already become a daily driver for me.',
  },
];

const PRICING_INCLUSIONS = [
  'Networked note-taking',
  'Chrome & Safari web clipper',
  'Kindle offline sync',
  'End-to-end encryption',
  'iOS app',
  'Native AI assistant',
];

export const LandingPage: React.FC<LandingPageProps> = ({
  onConnectWallet,
  onEnterDashboard,
  walletConnected,
  walletAddress,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const handlePrimaryAction = () => {
    if (walletConnected) {
      onEnterDashboard();
    } else {
      onEnterDashboard();
    }
  };

  const formattedAddress = walletAddress
    ? `${walletAddress.substring(0, 6)}...${walletAddress.substring(walletAddress.length - 4)}`
    : null;

  return (
    <div className="reflect-space min-h-screen relative overflow-x-hidden selection:bg-[#712fff] selection:text-white">
      {/* Top Deep Space Radial Glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[850px] z-0"
        style={{
          background:
            'radial-gradient(42% 55% at 50% 6%, rgba(148, 101, 255, 0.18) 0%, rgba(3, 0, 20, 0) 75%)',
        }}
      />

      {/* Secondary Ambient Subtle Glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-[1200px] h-[700px] z-0"
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(113, 47, 255, 0.07) 0%, rgba(3, 0, 20, 0) 80%)',
        }}
      />

      {/* ─── STICKY HEADER ─────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[rgba(3,0,20,0.55)] border-b border-[rgba(255,255,255,0.06)]">
        <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between relative">
          {/* Logo & Wordmark */}
          <div
            onClick={onEnterDashboard}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <img
              src="/reflect-app-icon.png"
              width={34}
              height={34}
              alt="Reflect"
              className="rounded-lg transition-transform duration-200 group-hover:scale-105"
            />
            <span className="text-[17px] font-medium tracking-tight text-white">Reflect</span>
          </div>

          {/* Centered Floating Navigation Capsule */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 px-3 py-1.5 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] backdrop-blur-md shadow-sm">
            {NAV_ITEMS.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1 text-[13.5px] text-[rgba(255,255,255,0.8)] hover:text-white transition-colors flex items-center gap-1"
                >
                  {item.label}
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-3.5 py-1 text-[13.5px] text-[rgba(255,255,255,0.8)] hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-5">
            {walletConnected ? (
              <button
                onClick={onEnterDashboard}
                className="text-[13.5px] font-medium text-[rgba(255,255,255,0.85)] hover:text-white transition-colors flex items-center gap-1.5"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {formattedAddress}
              </button>
            ) : (
              <button
                onClick={onConnectWallet}
                className="text-[13.5px] font-medium text-[rgba(255,255,255,0.85)] hover:text-white transition-colors"
              >
                Login
              </button>
            )}

            <button
              onClick={handlePrimaryAction}
              className="btn-space px-4 py-2 text-[13.5px] font-medium inline-flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>{walletConnected ? 'Launch App' : 'Start free trial'}</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-80" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden p-2 text-white/80 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden px-6 py-4 bg-[#030014]/95 border-b border-white/10 space-y-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-white/80 hover:text-white py-1"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onConnectWallet();
                }}
                className="w-full text-left text-sm text-white/90 py-1.5"
              >
                {walletConnected ? `Connected (${formattedAddress})` : 'Login'}
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handlePrimaryAction();
                }}
                className="btn-space w-full py-2.5 text-center text-sm font-medium"
              >
                Start free trial
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ─── HERO SECTION ──────────────────────────────────────────────────── */}
      <section className="relative text-center pt-20 pb-16 px-6 max-w-[1280px] mx-auto z-10">
        {/* Release / Feature Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-8 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.025)] backdrop-blur-md text-[13px] text-[rgba(255,255,255,0.85)] shadow-inner">
          <span className="text-[#9465ff]">✦</span>
          <span>New: Our AI integration just landed</span>
        </div>

        {/* Large Display Heading */}
        <h1 className="max-w-3xl mx-auto text-4xl sm:text-6xl md:text-[72px] font-semibold tracking-[-0.03em] leading-[1.12] text-white">
          Think better with Reflect
        </h1>

        {/* Subtitle */}
        <p className="mt-5 max-w-xl mx-auto text-lg sm:text-xl text-[rgba(255,255,255,0.65)] font-normal tracking-tight">
          Never miss a note, idea or connection.
        </p>

        {/* Hero CTA Button */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={handlePrimaryAction}
            className="btn-space px-6 py-3 text-[15px] font-medium inline-flex items-center gap-2 cursor-pointer shadow-lg"
          >
            <span>Start your 14-day trial</span>
            <ArrowRight className="w-4 h-4 opacity-80" />
          </button>
        </div>

        {/* Hero Graphic: Reflect Graph */}
        <div className="relative mt-14 sm:mt-16 flex justify-center">
          <div className="relative max-w-[820px] w-full group">
            {/* Subtle underglow beneath the image */}
            <div className="absolute inset-0 bg-[#712fff]/15 blur-3xl rounded-3xl transform -translate-y-4 -z-10 opacity-70" />
            <img
              src="/reflect-graph-hero.png"
              alt="A graph of connected notes"
              className="w-full h-auto rounded-xl border border-[rgba(255,255,255,0.08)] shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* ─── 8-UP FEATURE GRID ──────────────────────────────────────────────── */}
      <section id="features" className="max-w-[1120px] mx-auto px-6 py-20 z-10 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="p-5 rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.015)] hover:bg-[rgba(255,255,255,0.03)] hover:border-[rgba(255,255,255,0.12)] transition-all duration-200"
              >
                {/* Gradient Icon Badge */}
                <div
                  className="w-9 h-9 rounded-xl mb-4 flex items-center justify-center border border-[rgba(255,255,255,0.1)]"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(148, 101, 255, 0.4) 0%, rgba(113, 47, 255, 0.15) 100%)',
                  }}
                >
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-[15.5px] font-medium text-white mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-[rgba(255,255,255,0.55)]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── REFLECT AI BANNER ──────────────────────────────────────────────── */}
      <section id="ai" className="text-center py-20 px-6 max-w-[1280px] mx-auto relative z-10">
        <div className="max-w-2xl mx-auto">
          <p className="text-[13px] font-medium tracking-[0.05em] uppercase text-[#9465ff] mb-3">
            Reflect AI
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
            Notes with an AI assistant
          </h2>
          <p className="mt-5 text-[16px] sm:text-[17px] leading-relaxed text-[rgba(255,255,255,0.65)]">
            Reflect uses GPT-4 and Whisper from OpenAI to improve your writing, organize your thoughts,
            and act as your intellectual thought partner.
          </p>
        </div>

        {/* AI Mockup Panel */}
        <div className="mt-12 max-w-2xl mx-auto rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-6 text-left backdrop-blur-md shadow-2xl">
          <div className="flex items-center gap-3 pb-4 border-b border-[rgba(255,255,255,0.06)]">
            <div className="w-7 h-7 rounded-lg bg-[#712fff]/20 border border-[#712fff]/30 flex items-center justify-center text-[#cfb8ff]">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <span className="text-sm font-medium text-white">Ask your notes with ⌘J</span>
          </div>
          <div className="mt-4 space-y-3 text-sm text-[rgba(255,255,255,0.7)] font-mono text-xs sm:text-sm">
            <div className="text-[#9465ff]">&gt; What were my main takeaways from yesterday's product review?</div>
            <div className="text-[rgba(255,255,255,0.85)] pl-4 border-l-2 border-[#712fff]/40">
              Based on your notes from [[2026-09-28 Product Sync]], you prioritized three milestones:
              streamlining instant local capture, finalizing zero-latency backlinks, and shipping the deep space visual refresh.
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRICING ("ONE PLAN, ONE PRICE") ─────────────────────────────────── */}
      <section id="pricing" className="py-20 px-6 text-center max-w-[1280px] mx-auto relative z-10">
        <p className="text-[13px] font-medium tracking-[0.05em] uppercase text-[#9465ff] mb-3">
          Get access
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-10">
          One plan, one price
        </h2>

        {/* Pricing Card */}
        <div
          className="max-w-[400px] mx-auto p-8 rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.025)] text-left backdrop-blur-lg transition-all duration-300 hover:border-[rgba(148,101,255,0.3)]"
          style={{
            boxShadow: 'inset 0 0 40px rgba(148,101,255,0.06), 0 20px 50px rgba(0,0,0,0.4)',
          }}
        >
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-5xl font-semibold tracking-tight text-white">$10</span>
            <span className="text-sm text-[rgba(255,255,255,0.55)]">/month, billed annually</span>
          </div>

          <p className="text-xs text-[rgba(255,255,255,0.45)] mb-6">Full feature access. Cancel anytime.</p>

          <ul className="space-y-3.5 my-6 text-[14px] text-[rgba(255,255,255,0.8)]">
            {PRICING_INCLUSIONS.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="text-[#9465ff] text-base leading-none">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={handlePrimaryAction}
            className="btn-space w-full py-3.5 text-center text-sm font-medium rounded-xl cursor-pointer shadow-md mt-6"
          >
            Start your 14-day trial
          </button>
        </div>
      </section>

      {/* ─── WALL OF LOVE ───────────────────────────────────────────────────── */}
      <section id="love" className="max-w-[1040px] mx-auto px-6 py-20 text-center relative z-10">
        <p className="text-[13px] font-medium tracking-[0.05em] uppercase text-[#9465ff] mb-3">
          Wall of love
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-12">
          Loved by thinkers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.handle}
              className="p-6 rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)] backdrop-blur-md hover:border-[rgba(255,255,255,0.12)] transition-all duration-200"
            >
              <div className="flex items-center gap-3.5 mb-3.5">
                {/* Initials Avatar */}
                <div className="w-9 h-9 rounded-full bg-[rgba(148,101,255,0.18)] text-[#cfb8ff] text-xs font-semibold flex items-center justify-center border border-[#712fff]/30">
                  {item.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-white tracking-tight">{item.name}</div>
                  <div className="text-[12px] text-[rgba(255,255,255,0.45)]">{item.handle}</div>
                </div>
              </div>
              <p className="text-[14px] leading-relaxed text-[rgba(255,255,255,0.72)]">
                {item.quote}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CLOSING CTA ────────────────────────────────────────────────────── */}
      <section className="text-center py-24 px-6 max-w-[1280px] mx-auto relative z-10 border-t border-[rgba(255,255,255,0.06)]">
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight max-w-xl mx-auto">
          Think better with Reflect
        </h2>
        <p className="text-[16px] text-[rgba(255,255,255,0.6)] mb-8 max-w-md mx-auto">
          Join thousands of thinkers, writers, and builders organizing their minds.
        </p>
        <button
          onClick={handlePrimaryAction}
          className="btn-space px-7 py-3.5 text-[15px] font-medium inline-flex items-center gap-2 cursor-pointer shadow-xl"
        >
          <span>Start your 14-day trial</span>
          <ArrowRight className="w-4 h-4 opacity-80" />
        </button>
      </section>

      {/* ─── FOOTER ─────────────────────────────────────────────────────────── */}
      <footer className="border-t border-[rgba(255,255,255,0.06)] bg-[rgba(3,0,20,0.85)] py-12 px-6 text-sm text-[rgba(255,255,255,0.5)]">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/reflect-app-icon.png" width={26} height={26} alt="Reflect" className="rounded" />
            <span className="text-white font-medium">Reflect</span>
            <span className="text-xs text-[rgba(255,255,255,0.4)]">© {new Date().getFullYear()} Reflect Technologies, Inc.</span>
          </div>

          <div className="flex items-center gap-6 text-xs text-[rgba(255,255,255,0.6)]">
            <a href="https://github.com/team-reflect/reflect-open" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              GitHub (reflect-open)
            </a>
            <a href="#features" className="hover:text-white transition-colors">
              Features
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#ai" className="hover:text-white transition-colors">
              AI
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
