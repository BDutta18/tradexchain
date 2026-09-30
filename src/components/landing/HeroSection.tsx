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
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-32 pb-16 bg-white text-black">
      {/* Animated 3D ASCII Sphere in upper-right corner */}
      <div className="absolute right-[-8%] top-16 w-[560px] h-[560px] lg:w-[780px] lg:h-[780px] opacity-25 pointer-events-none">
        <AnimatedSphere />
      </div>

      {/* Subtle crisp architectural grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-black/[0.06]"
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
            className="absolute w-px bg-black/[0.06]"
            style={{
              left: `${8.33 * (i + 1)}%`,
              top: 0,
              bottom: 0,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-4 pb-12">
        {/* Eyebrow & Bounty Tag */}
        <div
          className={`mb-6 transition-all duration-700 flex flex-wrap items-center gap-3 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-zinc-600">
            <span className="w-8 h-px bg-black/40" />
            {XENOX_CONTENT.hero.eyebrow}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-purple-50 text-purple-700 border border-purple-200">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
            {XENOX_CONTENT.brand.bountyMilestone}
          </span>
        </div>

        {/* Main Headline */}
        <div className="mb-8">
          <h1
            className={`text-[clamp(2.75rem,8.5vw,7.5rem)] font-display leading-[0.92] tracking-tight text-black transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block">{XENOX_CONTENT.hero.headlinePrefix}</span>
            <span className="block mt-1">
              {" "}
              <span className="relative inline-block">
                <span key={wordIndex} className="inline-flex text-purple-900">
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
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-purple-100 -z-10" />
              </span>
              <span className="text-zinc-500 italic ml-4 font-normal">in Zero-Knowledge.</span>
            </span>
          </h1>
        </div>

        {/* Tagline Blockquote + CTAs */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-12">
          <blockquote
            className={`lg:col-span-7 border-l-2 border-black/30 pl-5 text-lg lg:text-xl text-zinc-700 leading-relaxed font-sans transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            "{XENOX_CONTENT.hero.blockquote}"
          </blockquote>

          <div
            className={`lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <button
              onClick={walletConnected ? onEnterDashboard : onConnectWallet || onEnterDashboard}
              className="inline-flex items-center justify-center bg-black hover:bg-zinc-800 text-white px-7 h-13 text-sm font-mono font-semibold uppercase tracking-wider rounded-full transition-transform hover:-translate-y-0.5 group shadow-lg"
            >
              {walletConnected ? "Open Terminal" : "Launch Live Demo"}
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
            <div className="flex gap-3">
              <a
                href={XENOX_CONTENT.urls.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center h-12 px-5 text-xs font-mono font-semibold uppercase tracking-wider rounded-full border border-black/20 hover:bg-black/5 text-black transition-colors"
              >
                GitHub Repo ↗
              </a>
              <a
                href={XENOX_CONTENT.urls.demoVideo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center h-12 px-5 text-xs font-mono font-semibold uppercase tracking-wider rounded-full border border-purple-200 bg-purple-50/50 hover:bg-purple-100/60 text-purple-900 transition-colors"
              >
                <Play size={13} className="mr-1.5 fill-purple-900" />
                Demo Video
              </a>
            </div>
          </div>
        </div>

        {/* Badge Row */}
        <div
          className={`flex flex-wrap items-center gap-2.5 mb-14 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {XENOX_CONTENT.hero.badges.map((b) => (
            <a
              key={b.label}
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-black/[0.08] bg-zinc-50 hover:bg-zinc-100 hover:border-black/20 text-xs font-mono text-zinc-800 transition-colors"
            >
              <span className="font-semibold text-black">{b.label}</span>
              <span className="w-1 h-1 rounded-full bg-black/30" />
              <span className="text-zinc-600 flex items-center gap-1">
                {b.status.includes("Passing") && <CheckCircle2 size={12} className="text-emerald-600" />}
                {b.status}
              </span>
            </a>
          ))}
        </div>

        {/* MacBook Live Terminal Demonstration */}
        <div
          className={`transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="mb-4 text-center">
            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 bg-zinc-100 border border-zinc-200 px-3.5 py-1 rounded-full inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Verifiable On-Chain Execution Simulator
            </span>
          </div>
          <MacbookTerminal />
        </div>
      </div>

      {/* Marquee Ticker */}
      <div
        className={`w-full mt-6 border-y border-black/[0.08] py-4 bg-zinc-50/70 backdrop-blur-sm transition-all duration-700 delay-500 overflow-hidden ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex gap-16 marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 shrink-0 items-center">
              {XENOX_CONTENT.hero.marqueeStats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="font-display text-2xl text-black font-semibold">
                    {stat.value}
                  </span>
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-black/20 ml-8" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
