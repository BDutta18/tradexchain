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
    }, 6000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-[#0D1832] text-white overflow-hidden border-t border-[#1E3A8A]/30"
    >
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <span className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-sky-400 mb-3 font-semibold">
            <span className="w-8 h-px bg-sky-400/50" />
            Execution Flow
          </span>
          <h2
            className={`text-3xl lg:text-5xl font-display tracking-tight text-white transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Confidential from prompt.
            <br />
            <span className="text-sky-300">Proven on Midnight.</span>
          </h2>
        </div>

        {/* 5 Steps Grid with MacBook Terminal Preview */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Step Selector */}
          <div className="lg:col-span-5 space-y-2.5">
            {steps.map((step, idx) => (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left p-4 lg:p-5 rounded-xl border transition-all duration-300 cursor-pointer ${
                  activeStep === idx
                    ? "bg-[#16274D] border-sky-400/40 shadow-lg text-white"
                    : "border-transparent hover:bg-[#132244]/40 text-slate-300"
                }`}
              >
                <div className="flex items-center gap-3 mb-1.5">
                  <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                    activeStep === idx ? "bg-sky-400 text-[#0A1329]" : "bg-[#0A1329] text-slate-300 border border-slate-700"
                  }`}>
                    {step.number}
                  </span>
                  <h3 className="font-display text-lg lg:text-xl font-semibold leading-snug">
                    {step.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans pl-8">
                  {step.description}
                </p>

                {step.formula && (
                  <div className="mt-2.5 ml-8 p-2 rounded bg-[#080E1C] border border-[#1E3A8A]/40 font-mono text-[11px] text-sky-300 overflow-x-auto">
                    <code>{step.formula}</code>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Interactive Terminal Window in Navy Blue & White */}
          <div className="lg:col-span-7 mac-terminal sticky top-28 border border-[#1E3A8A]/40 shadow-2xl">
            <div className="mac-titlebar flex items-center justify-between bg-gradient-to-r from-[#112140] to-[#162952] border-b border-[#1E3A8A]/40 px-4 py-3">
              <div className="mac-traffic-lights">
                <span className="mac-dot mac-dot-close" />
                <span className="mac-dot mac-dot-minimize" />
                <span className="mac-dot mac-dot-maximize" />
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <Terminal size={12} className="text-sky-400" />
                <span>xenox-core: step {steps[activeStep].number}</span>
              </div>

              <span className="text-[10px] font-mono text-sky-300 bg-[#0C2244] px-2 py-0.5 rounded border border-sky-500/30 uppercase tracking-wider">
                1AM Preprod
              </span>
            </div>

            <div className="p-6 bg-[#070E1C] border-t border-[#1E3A8A]/30 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-[#1E3A8A]/30">
                <span className="text-white font-semibold">{steps[activeStep].title}</span>
                <span className="text-sky-400">Step {activeStep + 1} of 5</span>
              </div>

              <pre className="font-mono text-[12.5px] leading-relaxed text-slate-100 overflow-x-auto min-h-[190px]">
                <code>{steps[activeStep].codeSnippet}</code>
              </pre>

              {steps[activeStep].formula && (
                <div className="p-3 rounded-lg bg-[#0D1933] border border-[#1E3A8A]/50">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-0.5">
                    Invariant Verified
                  </div>
                  <div className="font-mono text-xs text-emerald-300">
                    {steps[activeStep].formula}
                  </div>
                </div>
              )}

              <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Shield size={12} className="text-sky-400" />
                  0 witnesses leaked to mempools
                </span>
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                  className="inline-flex items-center gap-1 text-white hover:text-sky-300 transition-colors cursor-pointer"
                >
                  Next Step <ArrowRight size={12} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
