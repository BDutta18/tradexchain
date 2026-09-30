import { useEffect, useState } from "react";
import { ArrowRight, ExternalLink, Play, Shield, Terminal, CheckCircle2 } from "lucide-react";
import { AnimatedSphere } from "../canvas/AnimatedSphere";
import { MacbookTerminal } from "../terminal/MacbookTerminal";
import { XENOX_CONTENT } from "../../content/xenox";

interface HeroSectionProps {
  onEnterDashboard?: () => void;
  onConnectWallet?: () => void;
  walletConnected?: boolean;
}

export function HeroSection({ onEnterDashboard, onConnectWallet, walletConnected }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const words = XENOX_CONTENT.hero.rotatingWords;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-32 pb-12 bg-white text-[#0A1329]">
      {/* Animated 3D ASCII Sphere in upper-right corner */}
      <div className="absolute right-[-8%] top-16 w-[560px] h-[560px] lg:w-[780px] lg:h-[780px] opacity-20 pointer-events-none">
        <AnimatedSphere />
      </div>

      {/* Subtle crisp architectural grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-[#0A1329]/[0.06]"
            style={{
              top: `${12.5 * (i + 1)}%`,
              left: 0,
              right: 0,
            }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-[#0A1329]/[0.06]"
            style={{
              left: `${8.33 * (i + 1)}%`,
              top: 0,
              bottom: 0,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-4 pb-8">
        {/* Eyebrow & Bounty Tag */}
        <div
          className={`mb-6 transition-all duration-700 flex flex-wrap items-center gap-3 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#1E3A8A] font-semibold">
            <span className="w-8 h-px bg-[#1E3A8A]/40" />
            Midnight Preprod · Zero-Knowledge Trading Protocol
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-blue-50 text-blue-800 border border-blue-200">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            Supermoon Level 6
          </span>
        </div>

        {/* Main Headline */}
        <div className="mb-6">
          <h1
            className={`text-[clamp(2.75rem,8vw,7rem)] font-display leading-[0.92] tracking-tight text-[#0A1329] transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block">The confidential layer to</span>
            <span className="block mt-1">
              {" "}
              <span className="relative inline-block">
                <span key={wordIndex} className="inline-flex text-[#1E3A8A]">
                  {words[wordIndex].split("").map((char, i) => (
                    <span
                      key={`${wordIndex}-${i}`}
                      className="inline-block animate-char-in"
                      style={{
                        animationDelay: `${i * 45}ms`,
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-blue-100 -z-10" />
              </span>
              <span className="text-slate-500 italic ml-4 font-normal">in Zero-Knowledge.</span>
            </span>
          </h1>
        </div>

        {/* Crisp Tagline & Action Buttons */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-10">
          <p
            className={`lg:col-span-7 border-l-2 border-[#1E3A8A]/40 pl-5 text-base lg:text-lg text-slate-600 leading-relaxed font-sans transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Institutional-grade privacy on Midnight. Define risk in natural language, prove execution in Zero-Knowledge with zero strategy rules or portfolio balances exposed to mempools.
          </p>

          <div
            className={`lg:col-span-5 flex flex-wrap gap-3 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <button
              onClick={walletConnected ? onEnterDashboard : onConnectWallet || onEnterDashboard}
              className="inline-flex items-center justify-center bg-[#0A1931] hover:bg-[#132A52] text-white px-7 h-12 text-xs font-mono font-semibold uppercase tracking-wider rounded-full transition-all hover:-translate-y-0.5 group shadow-xl cursor-pointer"
            >
              {walletConnected ? "Open Terminal" : "Launch Live Demo"}
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href={XENOX_CONTENT.urls.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-5 text-xs font-mono font-semibold uppercase tracking-wider rounded-full border border-[#0A1931]/20 hover:bg-[#0A1931]/5 text-[#0A1931] transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href={XENOX_CONTENT.urls.demoVideo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-5 text-xs font-mono font-semibold uppercase tracking-wider rounded-full border border-blue-200 bg-blue-50 hover:bg-blue-100 text-blue-900 transition-colors"
            >
              <Play size={12} className="mr-1.5 fill-blue-900" />
              Demo Video
            </a>
          </div>
        </div>

        {/* Minimal Badge Row */}
        <div
          className={`flex flex-wrap items-center gap-2 mb-10 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {XENOX_CONTENT.hero.badges.slice(0, 4).map((b) => (
            <a
              key={b.label}
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-lg border border-[#0A1931]/10 bg-slate-50/80 hover:bg-slate-100 text-xs font-mono text-[#0A1931] transition-colors"
            >
              <span className="font-semibold">{b.label}</span>
              <span className="text-slate-500 flex items-center gap-1">
                {b.status.includes("Passing") && <CheckCircle2 size={11} className="text-emerald-600" />}
                {b.status}
              </span>
            </a>
          ))}
        </div>

        {/* MacBook Terminal in White & Navy Blue */}
        <div
          className={`transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="mb-3 text-center">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#1E3A8A] bg-blue-50/80 border border-blue-200/60 px-3.5 py-1 rounded-full inline-flex items-center gap-2 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Verifiable On-Chain Execution Simulator
            </span>
          </div>
          <MacbookTerminal />
        </div>
      </div>

      {/* Marquee Ticker - Premium Deep Navy Banner */}
      <div
        className={`w-full mt-6 border-y border-[#1E3A8A]/30 py-3.5 bg-[#0B1528] text-white transition-all duration-700 delay-500 overflow-hidden ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex gap-16 marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 shrink-0 items-center">
              {XENOX_CONTENT.hero.marqueeStats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="font-display text-2xl text-white font-semibold">
                    {stat.value}
                  </span>
                  <span className="text-xs font-mono text-slate-300 uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 ml-8" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
