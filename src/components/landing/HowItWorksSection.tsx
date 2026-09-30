import { useState, useEffect } from "react";
import {
  Terminal,
  Cpu,
  ShieldCheck,
  Lock,
  ArrowRight,
  ArrowLeft,
  Play,
  Pause,
  Code,
  Layers,
  Zap,
} from "lucide-react";
import { XENOX_CONTENT } from "../../content/xenox";

interface StepDetail {
  number: string;
  badge: string;
  title: string;
  description: string;
  formula: string | null;
  codeSnippet: string;
  latency: string;
}

const MINIMAL_STEPS: StepDetail[] = [
  {
    number: "01",
    badge: "AI Intent",
    title: "Natural Language to Risk Intent",
    description:
      "Traders define risk in plain language. Gemini 2.5 Flash compiles boundaries into structured parameters in client memory with zero server telemetry.",
    formula: "\\text{Intent} = \\text{NLP}(\\text{prompt}) \\to \\{ \\text{maxPos}, \\text{stopLoss}, \\text{expiry} \\}",
    codeSnippet: `// 1. Natural Language Intent Parsed Client-Side
const intent = await parseStrategyIntent(
  "Only buy ADA, max 20% position, 8% stop-loss"
);
// -> { maxPositionPct: 20, stopLossPct: 8, expiry: 1774880000 }`,
    latency: "120ms (Client)",
  },
  {
    number: "02",
    badge: "Commitment",
    title: "Cryptographic Anchor Synthesis",
    description:
      "A deterministic 32-byte commitment hash is generated locally. Only this hash touches Midnight, keeping underlying strategy rules permanently confidential.",
    formula: "\\text{commitment} = \\mathcal{H}(\\text{maxPos}, \\text{stopLoss}, \\text{expiry})",
    codeSnippet: `// 2. Deterministic Hash Anchor
const commitment = hash(
  intent.maxPositionPct,
  intent.stopLossPct,
  intent.timelineExpiry
);
// -> 0x8a92f0c7... (32-byte public anchor)`,
    latency: "45ms (Native Crypto)",
  },
  {
    number: "03",
    badge: "1AM ProofStation",
    title: "Gas-Sponsored ZK Attestation",
    description:
      "One-click 1AM wallet confirmation. ProofStation sponsors transaction fees so users deploy without upfront DUST gas.",
    formula: "\\text{state} = \\text{commitStrategy}(\\mathcal{H}) \\quad [\\text{Sponsored}]",
    codeSnippet: `// 3. 1AM Popup & ProofStation Relay
const tx = await midnightContract.commitStrategy(
  commitment,
  { feeSponsorship: 'ProofStation' }
);
// State: strategyActive = true, tradeCount = 0`,
    latency: "380ms (ProofStation)",
  },
  {
    number: "04",
    badge: "Shielded Vault",
    title: "Private vUSD Collateral Notes",
    description:
      "Trading collateral is held in private shielded vUSD state notes. Deposits and rebalances update state roots without linking public wallet addresses.",
    formula: "\\text{vaultBalance}' = \\text{vaultBalance} + \\Delta \\text{vUSD}",
    codeSnippet: `// 4. Shielded vUSD Note Management
await vault.mintVaultBalance(amountUsd, privateSecretKey);
// Observers see Merkle root update only; 0 balance leaked`,
    latency: "240ms (ZK Note)",
  },
  {
    number: "05",
    badge: "ZK Settlement",
    title: "Asset-Agnostic ZK Execution",
    description:
      "Trades prove risk compliance locally inside Compact v0.24 ZKIR. Mempools never see order sizes, slippage, or stop triggers.",
    formula: "\\text{tradeSize} \\times 100 \\le \\text{portfolioVal} \\times \\text{maxPos}",
    codeSnippet: `// 5. Zero-Knowledge Circuit Boundary Check
circuit.executeTrade({
  witnesses: [tradeSize, portfolioVal, maxPos, stopLoss, key],
  enforce: "tradeSize * 100 <= portfolioVal * maxPos"
});
// Result: Executed on-chain | MEV: $0.00 | Witness Leaks: 0`,
    latency: "520ms (Compact ZKIR)",
  },
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeView, setActiveView] = useState<"circuit" | "security" | "state">("circuit");
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % MINIMAL_STEPS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const step = MINIMAL_STEPS[activeStep];

  return (
    <section
      id="how-it-works"
      className="relative py-20 lg:py-28 bg-transparent text-[#0A1329] overflow-hidden border-t border-[#0A1931]/10"
    >
      {/* Subtle ambient light gradient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-b from-blue-500/5 via-sky-500/5 to-transparent blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Minimal Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#1E3A8A] mb-3 font-semibold">
              <span className="w-8 h-px bg-[#1E3A8A]/50" />
              Execution Flow
            </span>
            <h2 className="text-3xl lg:text-5xl font-display tracking-tight text-[#0A1329] leading-[1.05]">
              How it works.
              <br />
              <span className="text-slate-500">Natural prompt to ZK settlement.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-white/80 hover:bg-white text-slate-700 border border-slate-200 shadow-sm transition-colors cursor-pointer"
            >
              {isAutoPlaying ? <Pause size={12} className="text-[#1E3A8A]" /> : <Play size={12} className="text-[#1E3A8A]" />}
              <span>{isAutoPlaying ? "Pause" : "Auto-Play"}</span>
            </button>
            <div className="text-xs font-mono text-[#1E3A8A] bg-blue-50 border border-blue-200/80 px-3 py-1.5 rounded-full font-medium">
              Phase {activeStep + 1} of 5
            </div>
          </div>
        </div>

        {/* Minimal Step Selector Pills with Transparent Frosted Glass */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5 mb-8">
          {MINIMAL_STEPS.map((s, idx) => (
            <button
              key={s.number}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                activeStep === idx
                  ? "bg-[#0A1931] text-white border-[#0A1931] shadow-md"
                  : "bg-white/70 backdrop-blur-md border-slate-200/80 hover:bg-white text-slate-600"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`font-mono text-xs font-bold px-1.5 py-0.5 rounded ${
                  activeStep === idx ? "bg-white text-[#0A1931]" : "bg-slate-100 text-slate-600"
                }`}>
                  {s.number}
                </span>
                {activeStep === idx && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                )}
              </div>
              <div className="font-display text-xs lg:text-sm font-semibold truncate">
                {s.badge}
              </div>
            </button>
          ))}
        </div>

        {/* Transparent Frosted Glass Execution Cockpit */}
        <div className="relative rounded-3xl p-6 lg:p-8 border border-slate-200/80 bg-white/60 backdrop-blur-2xl shadow-xl shadow-slate-200/40 overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left: Minimal Description & Invariant */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-[11px] font-mono text-[#1E3A8A] uppercase tracking-wider font-semibold">
                  Phase {step.number} • {step.badge}
                </span>
                <h3 className="text-2xl font-display font-semibold text-[#0A1329] leading-snug mt-1 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 font-sans leading-relaxed">
                  {step.description}
                </p>
              </div>

              {step.formula && (
                <div className="p-3.5 rounded-xl bg-slate-50/90 border border-slate-200">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                    Invariant Verified
                  </div>
                  <div className="font-mono text-xs text-[#0A1931] overflow-x-auto">
                    <code>{step.formula}</code>
                  </div>
                </div>
              )}

              {/* Prev / Next Minimal Controls */}
              <div className="pt-2 flex items-center justify-between text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev - 1 + MINIMAL_STEPS.length) % MINIMAL_STEPS.length)}
                  className="inline-flex items-center gap-1 text-slate-500 hover:text-[#0A1329] transition-colors cursor-pointer"
                >
                  <ArrowLeft size={13} /> Previous
                </button>
                <span className="text-slate-400 font-mono text-[11px]">
                  {step.latency}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev + 1) % MINIMAL_STEPS.length)}
                  className="inline-flex items-center gap-1 text-[#1E3A8A] font-semibold hover:underline transition-colors cursor-pointer"
                >
                  Next Phase <ArrowRight size={13} />
                </button>
              </div>
            </div>

            {/* Right: Transparent Dark Navy Inspector Bay */}
            <div className="lg:col-span-7 rounded-2xl border border-[#1E3A8A]/30 bg-[#0A1329] text-white shadow-xl overflow-hidden">
              {/* Titlebar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#070E1C] border-b border-[#1E3A8A]/30">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-300 flex items-center gap-1.5">
                    <Terminal size={12} className="text-sky-400" />
                    <span>xenox: phase-{step.number}</span>
                  </span>
                </div>

                <div className="flex items-center gap-1 p-0.5 rounded-lg bg-white/5 border border-white/10">
                  <button
                    type="button"
                    onClick={() => setActiveView("circuit")}
                    className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors cursor-pointer ${
                      activeView === "circuit"
                        ? "bg-sky-400 text-[#070E1C] font-semibold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Circuit
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveView("security")}
                    className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors cursor-pointer ${
                      activeView === "security"
                        ? "bg-sky-400 text-[#070E1C] font-semibold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Security
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveView("state")}
                    className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors cursor-pointer ${
                      activeView === "state"
                        ? "bg-sky-400 text-[#070E1C] font-semibold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    State Root
                  </button>
                </div>
              </div>

              {/* View Content */}
              <div className="p-5">
                {activeView === "circuit" && (
                  <div>
                    <pre className="font-mono text-xs leading-relaxed text-slate-100 overflow-x-auto min-h-[160px]">
                      <code>{step.codeSnippet}</code>
                    </pre>
                  </div>
                )}

                {activeView === "security" && (
                  <div className="space-y-3 min-h-[160px]">
                    <div className="grid grid-cols-3 gap-2.5">
                      <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08]">
                        <div className="text-[10px] font-mono text-slate-400 uppercase">Mempool Exposure</div>
                        <div className="text-lg font-display font-semibold text-emerald-400">0.00%</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08]">
                        <div className="text-[10px] font-mono text-slate-400 uppercase">Prover</div>
                        <div className="text-lg font-display font-semibold text-sky-400">Client-Side</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08]">
                        <div className="text-[10px] font-mono text-slate-400 uppercase">MEV Extracted</div>
                        <div className="text-lg font-display font-semibold text-white">$0.00</div>
                      </div>
                    </div>
                    <p className="text-xs font-mono text-slate-300 bg-blue-950/40 p-2.5 rounded border border-blue-500/20">
                      Zero witness leakage to miners or validators. All risk bounds evaluated locally in ZKIR.
                    </p>
                  </div>
                )}

                {activeView === "state" && (
                  <div className="space-y-2 min-h-[160px] font-mono text-xs">
                    <div className="p-2 rounded bg-white/[0.04] flex items-center justify-between">
                      <span className="text-slate-400">Contract</span>
                      <span className="text-sky-300 font-semibold truncate max-w-[240px]">
                        {XENOX_CONTENT.contract.address}
                      </span>
                    </div>
                    <div className="p-2 rounded bg-white/[0.04] flex items-center justify-between">
                      <span className="text-slate-400">Consensus</span>
                      <span className="text-white">Midnight Preprod</span>
                    </div>
                    <div className="p-2 rounded bg-white/[0.04] flex items-center justify-between">
                      <span className="text-slate-400">State Transition</span>
                      <span className="text-emerald-300">{step.badge}()</span>
                    </div>
                  </div>
                )}

                {/* Footer status */}
                <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Verified by Compact v0.24 ZKIR
                  </span>
                  <span className="text-sky-400">1AM DApp Connector</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Transparent Minimal Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-5 mt-8">
          <div className="p-5 rounded-2xl bg-white/60 backdrop-blur-xl border border-slate-200/80 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1E3A8A] mb-3">
              <Zap size={16} />
            </div>
            <h4 className="font-display text-base font-semibold text-[#0A1329] mb-1">
              Sponsored ProofStation Relay
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              Zero upfront DUST required. 1AM ProofStation securely sponsors the zero-knowledge transaction fee.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/60 backdrop-blur-xl border border-slate-200/80 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1E3A8A] mb-3">
              <Lock size={16} />
            </div>
            <h4 className="font-display text-base font-semibold text-[#0A1329] mb-1">
              Mempool Front-Running Immunity
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              Order sizes, slippage limits, and stop triggers are evaluated inside client ZK circuits with zero mempool exposure.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/60 backdrop-blur-xl border border-slate-200/80 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1E3A8A] mb-3">
              <Cpu size={16} />
            </div>
            <h4 className="font-display text-base font-semibold text-[#0A1329] mb-1">
              Multi-Asset ZK Settlement
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              Trade ADA, BTC, ETH, SOL, and tNIGHT under a unified shielded contract architecture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
