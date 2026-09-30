import { useState, useEffect } from "react";
import { ShieldCheck, Lock, ExternalLink } from "lucide-react";
import { XENOX_CONTENT } from "../../content/xenox";

export function PrivacyClaimSection() {
  const [activeAdvantage, setActiveAdvantage] = useState(0);
  const { statement, advantages } = XENOX_CONTENT.privacyClaim;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAdvantage((prev) => (prev + 1) % advantages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [advantages.length]);

  return (
    <section className="py-24 lg:py-36 border-t border-black/[0.08] bg-[#fafafa]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-widest text-zinc-500 uppercase">
            Protocol Privacy Assurance
          </span>
          <div className="flex-1 h-px bg-black/10" />
          <span className="font-mono text-xs text-zinc-500">
            01 / 01 · Midnight Preprod Invariant
          </span>
        </div>

        {/* Main Statement Quote & Key Advantage Card */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-end">
          <div className="lg:col-span-8">
            <blockquote className="min-h-[160px] flex items-center">
              <p className="font-display text-2xl md:text-4xl lg:text-4xl leading-[1.25] tracking-tight text-black">
                "{statement}"
              </p>
            </blockquote>

            <div className="mt-10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-display text-xl">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-black text-base">Xenox Compact Verification Engine</p>
                <p className="text-sm text-zinc-500 font-mono">contracts/axiom.compact (v1.3.0 Supermoon Edition)</p>
              </div>
            </div>
          </div>

          {/* Right Advantage Display */}
          <div className="lg:col-span-4 p-8 border border-black/10 rounded-2xl bg-white shadow-sm">
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
              Cryptographic Guarantee
            </div>
            <div className="font-display text-4xl lg:text-5xl text-black font-bold mb-2">
              {advantages[activeAdvantage].metric}
            </div>
            <div className="text-base font-semibold text-zinc-800 mb-1">
              {advantages[activeAdvantage].label}
            </div>
            <p className="text-xs text-zinc-500 font-mono mb-6">
              {advantages[activeAdvantage].note}
            </p>

            <div className="flex gap-2">
              {advantages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveAdvantage(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeAdvantage === i ? "w-8 bg-black" : "w-2 bg-black/20"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
