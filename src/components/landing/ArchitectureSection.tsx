import { useEffect, useState, useRef } from "react";
import { CheckCircle2, Cpu, Database, Globe, Shield } from "lucide-react";
import { XENOX_CONTENT } from "../../content/xenox";

const architectureNodes = [
  { name: "Gemini 2.5 Flash Engine", role: "Client NLP & Risk Boundary Synthesis", latency: "<650ms", status: "Active" },
  { name: "Compact v0.24 ZKIR Compiler", role: "Local Zero-Knowledge Proof Prover", latency: "<120ms", status: "Operational" },
  { name: "1AM DApp Connector v4", role: "Extension Key Vault & Pop-up Signer", latency: "<20ms", status: "Connected" },
  { name: "1AM ProofStation", role: "Zero-DUST Gas & Proving Node Sponsor", latency: "<85ms", status: "Sponsored" },
  { name: "Midnight Preprod Testnet", role: "Decentralized Confidential State Ledger", latency: "~2.4s", status: "Operational" },
  { name: "Supabase IST Telemetry", role: "Sanitized Public Hashes & Timestamps", latency: "<35ms", status: "Synced" },
];

export function ArchitectureSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeNode, setActiveNode] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const { stages } = XENOX_CONTENT.architecture;

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
      setActiveNode((prev) => (prev + 1) % architectureNodes.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="architecture" ref={sectionRef} className="py-24 lg:py-36 overflow-hidden bg-white border-t border-black/[0.08]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Architecture Stages */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-zinc-500 mb-4">
              <span className="w-8 h-px bg-black/40" />
              Three-Stage System Architecture
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-6 text-black">
              Zero-knowledge
              <br />
              by design.
            </h2>
            <p className="text-base lg:text-lg text-zinc-600 leading-relaxed mb-10 max-w-lg font-sans">
              Traders state rules in natural language. Proofs generate client-side in browser memory. 
              The Midnight Preprod ledger verifies invariants without ever learning parameters or balances.
            </p>

            {/* Stages Stack */}
            <div className="space-y-4 mb-10">
              {stages.map((stage, idx) => (
                <div
                  key={stage.stage}
                  className="p-5 rounded-2xl border border-black/10 bg-zinc-50/70 hover:bg-zinc-50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                      {stage.stage}
                    </span>
                    <span className="font-mono text-xs text-purple-700 font-medium">
                      {stage.subtitle}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-black font-semibold mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed mb-3">
                    {stage.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {stage.features.map((feat) => (
                      <span
                        key={feat}
                        className="text-[11px] font-mono text-zinc-700 bg-white px-2.5 py-1 rounded-md border border-black/5"
                      >
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-black/10">
              <div>
                <div className="text-3xl lg:text-4xl font-display mb-1 text-black font-semibold">&lt;120ms</div>
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">ZK Proof Time</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-display mb-1 text-black font-semibold">100%</div>
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Client-side Proving</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-display mb-1 text-black font-semibold">$0.00</div>
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">MEV Extracted</div>
              </div>
            </div>
          </div>

          {/* Right: Real-Time Protocol Nodes Board */}
          <div
            className={`lg:sticky lg:top-28 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="border border-black/10 rounded-2xl overflow-hidden bg-white shadow-md">
              <div className="px-6 py-4 border-b border-black/10 flex items-center justify-between bg-zinc-50">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                  Protocol Component Health
                </span>
                <span className="flex items-center gap-2 text-xs font-mono text-emerald-700 font-medium bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  All 6 Subsystems Operational
                </span>
              </div>

              <div className="divide-y divide-black/5">
                {architectureNodes.map((node, index) => (
                  <div
                    key={node.name}
                    className={`px-6 py-4.5 flex items-center justify-between transition-colors duration-200 ${
                      activeNode === index ? "bg-zinc-100/70" : "hover:bg-zinc-50/50"
                    }`}
                  >
                    <div>
                      <div className="font-semibold text-sm text-black flex items-center gap-2">
                        {node.name}
                        {index === 4 && (
                          <span className="text-[10px] font-mono uppercase bg-purple-100 text-purple-800 px-1.5 py-0.5 rounded font-normal">
                            Preprod MVP
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-zinc-500 font-mono mt-0.5">{node.role}</div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="font-mono text-xs text-zinc-400">{node.latency}</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="px-6 py-4 bg-zinc-950 text-white border-t border-black/10 flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400">Deployed Compact Contract</span>
                <a
                  href={XENOX_CONTENT.urls.preprodExplorer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors truncate max-w-[240px]"
                >
                  0x2acabf...9bfdc ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
