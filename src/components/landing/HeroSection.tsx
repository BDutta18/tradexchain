import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { AnimatedSphere } from "../canvas/AnimatedSphere";
import { MacbookTerminal } from "../terminal/MacbookTerminal";
import { XENOX_CONTENT } from "../../content/xenox";

interface HeroSectionProps {
  onEnterDashboard?: () => void;
  onConnectWallet?: () => void;
  walletConnected?: boolean;
}

const SHORT_FLOATING_TEXT = [
  "100% Private Alpha",
  "$0.00 MEV Extracted",
  "Zero Strategy Leakage",
  "Client-Side Proving",
];

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
        {/* Eyebrow */}
        <div
          className={`mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#1E3A8A] font-semibold">
            <span className="w-8 h-px bg-[#1E3A8A]/50" />
            Zero-Knowledge Trading Protocol
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

        {/* Tagline */}
        <div className="mb-10 max-w-3xl">
          <p
            className={`border-l-2 border-[#1E3A8A]/40 pl-5 text-base lg:text-lg text-slate-600 leading-relaxed font-sans transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Institutional-grade privacy. Define risk in natural language, prove execution in Zero-Knowledge with zero strategy rules or portfolio balances exposed to mempools.
          </p>
        </div>

        {/* Interactive MacBook Terminal in White & Navy Blue */}
        <div
          className={`transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="mb-3 text-center">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#1E3A8A] bg-blue-50/80 border border-blue-200/60 px-3.5 py-1 rounded-full inline-flex items-center gap-2 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              On-Chain Execution Simulator
            </span>
          </div>
          <MacbookTerminal />
        </div>
      </div>

      {/* Short Floating Marquee Ticker */}
      <div
        className={`w-full mt-6 border-y border-[#1E3A8A]/30 py-3 bg-[#0B1528] text-white transition-all duration-700 delay-500 overflow-hidden ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex gap-12 marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-12 shrink-0 items-center">
              {SHORT_FLOATING_TEXT.map((text, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="font-display text-lg text-white font-medium">
                    {text}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 ml-6" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
