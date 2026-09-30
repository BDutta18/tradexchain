import { useState } from "react";
import { BookOpen, Copy, Check, Terminal, Shield, Layers, FileCode, ArrowRight } from "lucide-react";
import { XENOX_CONTENT } from "../../content/xenox";

const DOCS_TOPICS = [
  {
    id: "getting-started",
    label: "Getting Started",
    icon: Terminal,
    title: "Protocol Quickstart",
    content: (
      <div className="space-y-4">
        <p className="text-sm text-slate-600 leading-relaxed font-sans">
          Xenox Trade is an institutional-grade, privacy-preserving automated trading protocol on the Midnight blockchain. Traders state risk boundaries in natural language and prove trade execution in Zero-Knowledge.
        </p>

        <div className="p-4 rounded-xl bg-[#0B1528] text-slate-100 font-mono text-xs space-y-2 border border-[#1E3A8A]/30">
          <div className="text-sky-300 font-bold mb-1"># 1. Connect to Midnight Preprod via 1AM Extension</div>
          <div className="text-slate-300">dappConnector.connect("1am", &#123; network: "preprod" &#125;)</div>
          <div className="text-sky-300 font-bold mt-2 mb-1"># 2. Compile Intent to Cryptographic Anchor</div>
          <div className="text-slate-300">const commitment = persistentHash([maxPositionPct, stopLossPct, timelineExpiry]);</div>
          <div className="text-sky-300 font-bold mt-2 mb-1"># 3. Prove Execution in Zero-Knowledge</div>
          <div className="text-slate-300">const proof = await compactProver.proveTrade(witnesses, stateRoot);</div>
        </div>
      </div>
    ),
  },
  {
    id: "zk-circuits",
    label: "Compact Circuits",
    icon: FileCode,
    title: "Compact v0.24 ZKIR Circuits",
    content: (
      <div className="space-y-4">
        <p className="text-sm text-slate-600 leading-relaxed font-sans">
          All state transitions are formalized in Midnight's native Compact language and compiled into Zero-Knowledge Intermediate Representation (ZKIR).
        </p>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { name: "commitStrategy", desc: "Anchors 32-byte hash commitment on-chain; parameters stay local." },
            { name: "executeTrade", desc: "Proves tradeSize * 100 <= portfolioVal * maxPos without exposing amounts." },
            { name: "tripCircuitBreaker", desc: "Emergency halt circuit triggered upon drawdown violation." },
            { name: "mintVaultBalance", desc: "Mints shielded private vUSD notes in local client storage." },
            { name: "burnVaultBalance", desc: "Zero-knowledge note spend proof for order execution." },
            { name: "unshieldWithdraw", desc: "Validates ownership and burns private note for withdrawal." },
          ].map((c) => (
            <div key={c.name} className="p-3.5 rounded-lg border border-[#0A1931]/10 bg-slate-50">
              <code className="text-xs font-mono font-bold text-[#1E3A8A] block mb-1">{c.name}()</code>
              <p className="text-xs text-slate-600 font-sans">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "math-invariants",
    label: "Invariants & Math",
    icon: Layers,
    title: "Cryptographic Formulations",
    content: (
      <div className="space-y-4">
        <p className="text-sm text-slate-600 leading-relaxed font-sans">
          Mathematical constraints enforced inside client-side Groth16 / Halo2 zero-knowledge circuits:
        </p>

        <div className="space-y-3">
          <div className="p-4 rounded-xl border border-[#0A1931]/10 bg-slate-50">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1E3A8A] mb-1">
              Commitment Hash Formulation
            </div>
            <code className="text-xs font-mono text-[#0A1329] block">
              commitment = H(maxPositionPct, stopLossPct, timelineExpiry)
            </code>
          </div>

          <div className="p-4 rounded-xl border border-[#0A1931]/10 bg-slate-50">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1E3A8A] mb-1">
              Trade Boundary Check
            </div>
            <code className="text-xs font-mono text-[#0A1329] block">
              tradeSize * 100 &le; portfolioValue * maxPositionPct &and; currentTime &le; timelineExpiry
            </code>
          </div>

          <div className="p-4 rounded-xl border border-[#0A1931]/10 bg-slate-50">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1E3A8A] mb-1">
              Balance Invariance Guarantee
            </div>
            <code className="text-xs font-mono text-[#0A1329] block">
              b_new = b_old &plusmn; &Delta; &and; b_new &ge; 0 (proven without revealing b_old or &Delta;)
            </code>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "security",
    label: "Security & MEV",
    icon: Shield,
    title: "Zero Mempool Exposure & MEV Immunity",
    content: (
      <div className="space-y-4">
        <p className="text-sm text-slate-600 leading-relaxed font-sans">
          Public mempool surveillance enables predatory trading algorithms to front-run and sandwich on-chain orders. Xenox Trade eliminates MEV by proving transactions in zero-knowledge:
        </p>

        <div className="grid md:grid-cols-3 gap-3 pt-2">
          <div className="p-4 rounded-xl border border-[#0A1931]/10 bg-slate-50 text-center">
            <div className="text-2xl font-display font-bold text-emerald-600">$0.00</div>
            <div className="text-xs font-mono text-[#0A1329] font-semibold mt-1">MEV Extracted</div>
            <p className="text-[11px] text-slate-500 mt-1 font-sans">Mempool searchers cannot extract sandwich value</p>
          </div>
          <div className="p-4 rounded-xl border border-[#0A1931]/10 bg-slate-50 text-center">
            <div className="text-2xl font-display font-bold text-[#1E3A8A]">100%</div>
            <div className="text-xs font-mono text-[#0A1329] font-semibold mt-1">Private Alpha</div>
            <p className="text-[11px] text-slate-500 mt-1 font-sans">Stop-loss triggers never disclosed to liquidators</p>
          </div>
          <div className="p-4 rounded-xl border border-[#0A1931]/10 bg-slate-50 text-center">
            <div className="text-2xl font-display font-bold text-[#0A1329]">0 Witnesses</div>
            <div className="text-xs font-mono text-[#0A1329] font-semibold mt-1">Leaked to Network</div>
            <p className="text-[11px] text-slate-500 mt-1 font-sans">Strict client-side witness memory cleanup</p>
          </div>
        </div>
      </div>
    ),
  },
];

export function DocsSection() {
  const [activeTopic, setActiveTopic] = useState(0);

  return (
    <section id="docs" className="py-20 lg:py-28 border-t border-[#0A1931]/10 bg-slate-50/60">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <span className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#1E3A8A] mb-3 font-semibold">
            <span className="w-8 h-px bg-[#1E3A8A]/50" />
            Protocol Documentation
          </span>
          <h2 className="text-3xl lg:text-5xl font-display tracking-tight text-[#0A1329]">
            Architecture & Reference
          </h2>
        </div>

        {/* Docs Explorer Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-4 space-y-2">
            {DOCS_TOPICS.map((topic, idx) => {
              const Icon = topic.icon;
              return (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => setActiveTopic(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                    activeTopic === idx
                      ? "bg-[#0A1931] border-[#0A1931] text-white shadow-md"
                      : "bg-white border-[#0A1931]/10 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={16} className={activeTopic === idx ? "text-sky-300" : "text-[#1E3A8A]"} />
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider">
                      {topic.label}
                    </span>
                  </div>
                  <ArrowRight size={13} className={activeTopic === idx ? "text-sky-300" : "text-slate-400"} />
                </button>
              );
            })}
          </div>

          {/* Docs Content Panel */}
          <div className="lg:col-span-8 p-6 lg:p-8 rounded-2xl bg-white border border-[#0A1931]/10 shadow-sm min-h-[380px]">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#0A1931]/10">
              <h3 className="font-display text-2xl font-bold text-[#0A1329]">
                {DOCS_TOPICS[activeTopic].title}
              </h3>
              <span className="text-xs font-mono text-slate-400">
                Docs / {DOCS_TOPICS[activeTopic].label}
              </span>
            </div>

            {DOCS_TOPICS[activeTopic].content}
          </div>
        </div>
      </div>
    </section>
  );
}
