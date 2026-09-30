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
  Sparkles,
  Code,
  Layers,
  Zap,
  CheckCircle2,
  EyeOff,
} from "lucide-react";
import { XENOX_CONTENT } from "../../content/xenox";

interface StepDetail {
  number: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  formula: string | null;
  codeSnippet: string;
  privateWitnesses: string[];
  publicAnchors: string[];
  verificationTime: string;
}

const ADVANCED_STEPS: StepDetail[] = [
  {
    number: "01",
    badge: "AI Intent Ingestion",
    title: "Natural Language to Structured Risk Intent",
    tagline: "Natural speech compiled directly to mathematical trading boundaries",
    description:
      'Traders state execution parameters in plain natural language (e.g., "Only buy ADA, max 20% position size, 8% stop-loss, run for 30 days"). Gemini 2.5 Flash tokenizes and validates risk boundaries locally in client memory with zero server telemetry.',
    formula: "\\text{Intent} = \\text{NLP}(\\text{prompt}) \\to \\{ \\text{maxPos}: 20\\%, \\text{stopLoss}: 8\\%, \\text{expiry}: 30\\text{d} \\}",
    codeSnippet: `// 1. Natural Language Intent Input in Browser Client
const prompt = "Only buy ADA, max 20% position size, 8% stop-loss, run for 30 days";

// 2. Client-side NLP Intent Parsing via Gemini 2.5 Flash
const intent = await parseStrategyIntent(prompt);
// -> Output: { maxPositionPct: 20, stopLossPct: 8, timelineExpiry: 1774880000 }`,
    privateWitnesses: ["User risk tolerance", "Exact stop-loss %", "Asset allocation strategy"],
    publicAnchors: ["Zero data sent over network", "No server-side prompt storage"],
    verificationTime: "120ms (Local Client)",
  },
  {
    number: "02",
    badge: "Cryptographic Commitment",
    title: "Client-Side Zero-Knowledge Commitment",
    tagline: "Generating the 32-byte cryptographic anchor before state entry",
    description:
      "A deterministic 32-byte cryptographic commitment hash is computed locally matching persistentHash([maxPos, stopLoss, expiry]). Only this hash will ever touch the blockchain, sealing your strategy rules permanently behind a zero-knowledge barrier.",
    formula: "\\text{commitment} = \\mathcal{H}(\\text{maxPositionPct}, \\text{stopLossPct}, \\text{timelineExpiry})",
    codeSnippet: `// Cryptographic Commitment Formulation (Client-side)
const commitment = hash(
  intent.maxPositionPct, // 20
  intent.stopLossPct,    // 8
  intent.timelineExpiry  // 1774880000
);
// -> 0x8a92f0c7... (32-byte cryptographic anchor for Midnight)`,
    privateWitnesses: ["maxPositionPct (20%)", "stopLossPct (8%)", "timelineExpiry (1774880000)"],
    publicAnchors: ["32-byte commitment hash", "Agent public registration address"],
    verificationTime: "45ms (Native Crypto)",
  },
  {
    number: "03",
    badge: "1AM ProofStation",
    title: "Gas-Sponsored Zero-Knowledge Attestation",
    tagline: "One-click 1AM wallet popup with zero upfront DUST required",
    description:
      "The trader commits the hash to Midnight Preprod through the 1AM wallet extension. ProofStation provides autonomous fee sponsorship, creating the on-chain agent state without exposing wallet balances or requiring upfront transaction fees.",
    formula: "\\text{state}_{\\text{agent}} = \\text{commitStrategy}(\\mathcal{H}) \\quad [\\text{sponsored via ProofStation}]",
    codeSnippet: `// 1AM Extension Popup Signing & ProofStation Relay
const txHash = await midnightContract.commitStrategy(
  commitment,
  { feeSponsorship: 'ProofStation' }
);
// State: strategyActive = true, tradeCount = 0, circuitBreaker = normal`,
    privateWitnesses: ["Wallet master secret key", "Local witness storage keys"],
    publicAnchors: ["agentCommitment[agent] = 0x8a92...", "strategyActive = true"],
    verificationTime: "380ms (ProofStation Relay)",
  },
  {
    number: "04",
    badge: "Shielded Vault",
    title: "Private vUSD Collateral Note Management",
    tagline: "Zero balance leakage through cryptographic UTXO state notes",
    description:
      "Trading collateral is held in private shielded vUSD state notes. Deposits, internal allocation shifts, and withdrawals update state roots via Compact v0.24 without linking public wallet addresses to individual transaction amounts.",
    formula: "\\text{vaultBalance}_{\\text{new}} = \\text{vaultBalance}_{\\text{old}} + \\Delta \\text{vUSD} \\quad [\\text{Shielded Note}]",
    codeSnippet: `// Private vUSD Shielded Note Management
await vault.mintVaultBalance(amountUsd, privateSecretKey);

// Observers see only state root transitions:
// Merkle root updated -> Note nullifiers verified -> Zero balance leaked`,
    privateWitnesses: ["Shielded note amount", "Note blinding factor", "Vault balance"],
    publicAnchors: ["New Merkle state root", "Spent nullifier hashes"],
    verificationTime: "240ms (ZK Note Circuit)",
  },
  {
    number: "05",
    badge: "MEV-Immune Execution",
    title: "Asset-Agnostic Zero-Knowledge Settlement",
    tagline: "Mathematical compliance proved locally before transaction submission",
    description:
      "Every trade across ADA, BTC, ETH, SOL, or tNIGHT proves compliance with the locked commitment inside Compact v0.24 ZKIR. Mempools never see order sizes, slippage tolerances, or stop-loss trigger levels, rendering front-running and sandwich attacks impossible.",
    formula: "\\text{tradeSize} \\times 100 \\le \\text{portfolioVal} \\times \\text{maxPos} \\ \\wedge \\ \\text{slippage} \\le \\text{maxSlippage}",
    codeSnippet: `// Zero-Knowledge Circuit Boundary Check (Compact v0.24)
circuit.executeTrade({
  witnesses: [tradeSizeUsd, portfolioValueUsd, maxPos, stopLoss, expiry, secretKey],
  enforce: "tradeSize * 100 <= portfolioVal * maxPos && !circuitBreakerTripped"
});
// Result: On-Chain Executed | MEV Extracted: $0.00 | Witness Leaks: 0`,
    privateWitnesses: ["tradeSizeUsd", "portfolioValueUsd", "maxSlippageBps", "secretKey"],
    publicAnchors: ["tradeStatus[trade] = Executed", "tradeCount++", "MEV Volume counter"],
    verificationTime: "520ms (Compact ZKIR)",
  },
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeView, setActiveView] = useState<"circuit" | "privacy" | "state">("circuit");
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % ADVANCED_STEPS.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const step = ADVANCED_STEPS[activeStep];

  return (
    <section
      id="how-it-works"
      className="relative py-24 lg:py-32 bg-[#070E1C] text-white overflow-hidden border-t border-[#1E3A8A]/30"
    >
      {/* Dynamic ambient backdrop lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#1E3A8A]/25 via-sky-600/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[400px] bg-blue-900/15 blur-[120px] pointer-events-none rounded-full" />

      {/* Subtle architectural grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-sky-400 mb-3 font-semibold">
              <span className="w-8 h-px bg-sky-400/50" />
              Confidential Execution Protocol
            </span>
            <h2 className="text-3xl lg:text-5xl font-display tracking-tight text-white leading-[1.05]">
              How Xenox Trade works.
              <br />
              <span className="text-sky-300">Natural prompt to ZK settlement.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 border border-white/10 transition-colors cursor-pointer"
            >
              {isAutoPlaying ? <Pause size={12} className="text-sky-400" /> : <Play size={12} className="text-sky-400" />}
              <span>{isAutoPlaying ? "Pause Auto-Flow" : "Auto-Play Flow"}</span>
            </button>
            <div className="text-xs font-mono text-slate-400 bg-sky-950/60 border border-sky-500/30 px-3 py-1.5 rounded-full">
              Phase {activeStep + 1} of 5
            </div>
          </div>
        </div>

        {/* Step Selector Pipeline Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5 mb-10">
          {ADVANCED_STEPS.map((s, idx) => (
            <button
              key={s.number}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`p-3.5 rounded-xl border text-left transition-all duration-300 cursor-pointer relative overflow-hidden ${
                activeStep === idx
                  ? "bg-white/[0.10] backdrop-blur-xl border-sky-400/60 shadow-[0_0_25px_rgba(56,189,248,0.2)]"
                  : "bg-white/[0.02] backdrop-blur-md border-white/[0.08] hover:bg-white/[0.05] text-slate-400"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                  activeStep === idx ? "bg-sky-400 text-[#070E1C]" : "bg-white/[0.06] text-slate-400"
                }`}>
                  {s.number}
                </span>
                {activeStep === idx && (
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                )}
              </div>
              <div className="font-display text-xs lg:text-sm font-semibold text-white truncate">
                {s.badge}
              </div>
            </button>
          ))}
        </div>

        {/* ADVANCED TRANSPARENT PART (Glassmorphic Execution Cockpit) */}
        <div className="relative rounded-3xl p-6 lg:p-10 border border-white/[0.12] bg-white/[0.03] backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden">
          {/* Subtle frosted glass reflection overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-sky-500/[0.04] pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Stage Intelligence & Formal Guarantees */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono bg-sky-400/10 text-sky-300 border border-sky-400/30 mb-3 uppercase tracking-wider font-semibold">
                  <Sparkles size={11} className="text-sky-400" />
                  Stage {step.number} • {step.badge}
                </div>
                <h3 className="text-2xl lg:text-3xl font-display font-semibold text-white leading-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-xs font-mono text-sky-400/90 mb-3">
                  {step.tagline}
                </p>
                <p className="text-sm text-slate-300 font-sans leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Mathematical Invariant Box */}
              {step.formula && (
                <div className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5 uppercase tracking-wider">
                    <span>Mathematical Invariant</span>
                    <span className="text-emerald-400">✓ Formal Proof</span>
                  </div>
                  <div className="font-mono text-xs text-sky-300 overflow-x-auto py-1">
                    <code>{step.formula}</code>
                  </div>
                </div>
              )}

              {/* Private Witness vs Public Anchors Glass Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-amber-300 font-semibold mb-2">
                    <EyeOff size={13} />
                    <span>Private Witnesses</span>
                  </div>
                  <ul className="space-y-1 text-[11px] text-slate-400 font-sans">
                    {step.privateWitnesses.map((w, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-amber-400/80">•</span>
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-300 font-semibold mb-2">
                    <CheckCircle2 size={13} />
                    <span>Public Anchors</span>
                  </div>
                  <ul className="space-y-1 text-[11px] text-slate-400 font-sans">
                    {step.publicAnchors.map((p, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-400/80">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Prev / Next Controls */}
              <div className="pt-2 flex items-center justify-between text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev - 1 + ADVANCED_STEPS.length) % ADVANCED_STEPS.length)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 transition-colors cursor-pointer"
                >
                  <ArrowLeft size={13} /> Previous
                </button>
                <span className="text-slate-500 font-mono text-[11px]">
                  Latency: {step.verificationTime}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev + 1) % ADVANCED_STEPS.length)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-400 hover:bg-sky-300 text-[#070E1C] font-semibold transition-colors cursor-pointer"
                >
                  Next Phase <ArrowRight size={13} />
                </button>
              </div>
            </div>

            {/* Right: Transparent High-Tech Inspector Bay */}
            <div className="lg:col-span-7 rounded-2xl border border-white/[0.15] bg-[#0A1329]/80 backdrop-blur-xl shadow-2xl overflow-hidden">
              {/* Glass Cockpit Titlebar */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-white/[0.04] border-b border-white/[0.10] backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-3 text-xs font-mono text-slate-300 flex items-center gap-1.5">
                    <Terminal size={12} className="text-sky-400" />
                    <span>xenox-core // phase-{step.number}</span>
                  </span>
                </div>

                {/* View switcher tabs */}
                <div className="flex items-center gap-1 p-1 rounded-lg bg-white/[0.04] border border-white/[0.08]">
                  <button
                    type="button"
                    onClick={() => setActiveView("circuit")}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors cursor-pointer flex items-center gap-1 ${
                      activeView === "circuit"
                        ? "bg-sky-400 text-[#070E1C] font-semibold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Code size={11} /> Circuit
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveView("privacy")}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors cursor-pointer flex items-center gap-1 ${
                      activeView === "privacy"
                        ? "bg-sky-400 text-[#070E1C] font-semibold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <ShieldCheck size={11} /> Security
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveView("state")}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors cursor-pointer flex items-center gap-1 ${
                      activeView === "state"
                        ? "bg-sky-400 text-[#070E1C] font-semibold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Layers size={11} /> State Root
                  </button>
                </div>
              </div>

              {/* View Content */}
              <div className="p-6 space-y-4">
                {activeView === "circuit" && (
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-3 border-b border-white/[0.08]">
                      <span className="text-white font-medium">{step.title}</span>
                      <span className="text-sky-400">Compact v0.24 ZKIR</span>
                    </div>
                    <pre className="font-mono text-xs leading-relaxed text-slate-100 overflow-x-auto min-h-[200px] pt-3">
                      <code>{step.codeSnippet}</code>
                    </pre>
                  </div>
                )}

                {activeView === "privacy" && (
                  <div className="space-y-4 min-h-[200px]">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-3 border-b border-white/[0.08]">
                      <span className="text-white font-medium">Confidential Cryptographic Boundary</span>
                      <span className="text-emerald-400 font-semibold">100% Mempool Immune</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1">Mempool Exposure</div>
                        <div className="text-xl font-display font-semibold text-emerald-400">0.00%</div>
                        <div className="text-[10px] text-slate-400 font-sans mt-0.5">Zero witness leaks</div>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1">Prover Environment</div>
                        <div className="text-xl font-display font-semibold text-sky-400">Client-Side</div>
                        <div className="text-[10px] text-slate-400 font-sans mt-0.5">WASM & 1AM Wallet</div>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1">MEV Front-Running</div>
                        <div className="text-xl font-display font-semibold text-white">$0.00</div>
                        <div className="text-[10px] text-slate-400 font-sans mt-0.5">Sandwich impossible</div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-sky-950/40 border border-sky-500/20 text-xs font-mono text-sky-200">
                      <span className="text-sky-400 font-bold">Midnight Consensus Guarantee: </span>
                      Validators verify proof satisfaction across ZKIR polynomial constraints. The transaction payload contains only cryptographic commitments and public state transitions.
                    </div>
                  </div>
                )}

                {activeView === "state" && (
                  <div className="space-y-4 min-h-[200px]">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-3 border-b border-white/[0.08]">
                      <span className="text-white font-medium">On-Chain State Transition Matrix</span>
                      <span className="text-sky-400">Midnight Preprod</span>
                    </div>

                    <div className="space-y-2 font-mono text-xs">
                      <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                        <span className="text-slate-400">Contract Address</span>
                        <span className="text-sky-300 font-semibold truncate max-w-[280px]">
                          {XENOX_CONTENT.contract.address}
                        </span>
                      </div>
                      <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                        <span className="text-slate-400">Active Stage Method</span>
                        <span className="text-emerald-300 font-semibold">{step.badge}()</span>
                      </div>
                      <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                        <span className="text-slate-400">Network Consensus</span>
                        <span className="text-white">Midnight Preprod Testnet</span>
                      </div>
                      <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                        <span className="text-slate-400">State Security Model</span>
                        <span className="text-emerald-300">Dual Shielded State Machine</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom Status bar */}
                <div className="pt-3 border-t border-white/[0.08] flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Proof Generated Locally via Compact ZKIR</span>
                  </div>
                  <span className="text-sky-400 font-semibold">1AM DApp Connector v4 Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Transparent Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] hover:border-sky-500/40 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center text-sky-400 mb-4">
              <Zap size={20} />
            </div>
            <h4 className="font-display text-lg font-semibold text-white mb-2">
              Sponsored ProofStation Relay
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Deploy strategies and execute trades without holding native DUST gas upfront. 1AM ProofStation securely sponsors the zero-knowledge transaction fee.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] hover:border-sky-500/40 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-sky-300 mb-4">
              <Lock size={20} />
            </div>
            <h4 className="font-display text-lg font-semibold text-white mb-2">
              Mempool Front-Running Immunity
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              By evaluating trading bounds inside client ZK circuits, MEV bots and copy-traders cannot inspect stop-losses, slippage limits, or order sizes before block inclusion.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] hover:border-sky-500/40 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-300 mb-4">
              <Cpu size={20} />
            </div>
            <h4 className="font-display text-lg font-semibold text-white mb-2">
              Asset-Agnostic ZK Settlement
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Trade ADA, BTC, ETH, SOL, and tNIGHT under one unified shielded contract architecture with multi-token state notes and real-time IST telemetry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
