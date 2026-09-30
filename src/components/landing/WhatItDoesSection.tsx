import { useEffect, useRef, useState } from "react";
import { Terminal, Shield, ArrowRight } from "lucide-react";
import { XENOX_CONTENT } from "../../content/xenox";

export function WhatItDoesSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { steps } = XENOX_CONTENT.whatItDoes;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-24 lg:py-36 bg-zinc-950 text-white overflow-hidden border-t border-zinc-800"
    >
      {/* Subtle diagonal grid lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 40px,
              currentColor 40px,
              currentColor 41px
            )`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24 max-w-3xl">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-zinc-400 mb-4">
            <span className="w-8 h-px bg-white/40" />
            Zero-Knowledge Execution Flow
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight text-white transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Confidential from prompt.
            <br />
            <span className="text-zinc-500">Proven on Midnight.</span>
          </h2>
          <p className="mt-4 text-base lg:text-lg text-zinc-400 leading-relaxed font-sans">
            {XENOX_CONTENT.whatItDoes.summary}
          </p>
        </div>

        {/* 5 Steps Grid with MacBook Terminal Preview */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Step Selector */}
          <div className="lg:col-span-5 space-y-3">
            {steps.map((step, idx) => (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left p-5 lg:p-6 rounded-2xl border transition-all duration-300 ${
                  activeStep === idx
                    ? "bg-white/10 border-white/30 shadow-xl"
                    : "border-transparent hover:bg-white/5 text-zinc-400"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded border border-white/20 text-white bg-zinc-900">
                    {step.number}
                  </span>
                  <h3 className="font-display text-xl lg:text-2xl text-white font-semibold leading-snug">
                    {step.title}
                  </h3>
                </div>
                <p className="text-xs lg:text-sm text-zinc-300 leading-relaxed font-sans pl-8">
                  {step.description}
                </p>

                {step.formula && (
                  <div className="mt-3 ml-8 p-2.5 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-zinc-300 overflow-x-auto">
                    <code>{step.formula}</code>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Interactive Terminal Window */}
          <div className="lg:col-span-7 mac-terminal sticky top-28">
            <div className="mac-titlebar flex items-center justify-between">
              <div className="mac-traffic-lights">
                <span className="mac-dot mac-dot-close" />
                <span className="mac-dot mac-dot-minimize" />
                <span className="mac-dot mac-dot-maximize" />
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <Terminal size={12} className="text-zinc-500" />
                <span>xenox-core: ~/engine — step {steps[activeStep].number}</span>
              </div>

              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800 uppercase tracking-wider">
                1AM Preprod
              </span>
            </div>

            <div className="p-6 lg:p-8 bg-[#0a0c10] border-t border-white/5 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400 pb-3 border-b border-white/10">
                <span className="text-white font-semibold">{steps[activeStep].title}</span>
                <span className="text-zinc-500">Step {activeStep + 1} of 5</span>
              </div>

              <pre className="font-mono text-[12.5px] leading-relaxed text-zinc-200 overflow-x-auto min-h-[220px]">
                <code>{steps[activeStep].codeSnippet}</code>
              </pre>

              {steps[activeStep].formula && (
                <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-700/60">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-1">
                    Mathematical Invariant Enforced
                  </div>
                  <div className="font-mono text-xs text-emerald-400">
                    {steps[activeStep].formula}
                  </div>
                </div>
              )}

              <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span className="flex items-center gap-1.5 text-zinc-400">
                  <Shield size={12} className="text-emerald-400" />
                  0 witnesses leaked to mempool
                </span>
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                  className="inline-flex items-center gap-1 text-white hover:text-emerald-300 transition-colors cursor-pointer"
                >
                  Next Stage <ArrowRight size={12} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
