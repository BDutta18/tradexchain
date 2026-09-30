import { useEffect, useState, useRef } from "react";
import { XENOX_CONTENT } from "../../content/xenox";

const architectureNodes = [
  { name: "Gemini 2.5 Flash Engine", role: "Risk Boundary Synthesis", latency: "<650ms", status: "Active" },
  { name: "Compact v0.24 ZKIR Compiler", role: "Local ZK Proof Generator", latency: "<120ms", status: "Operational" },
  { name: "1AM DApp Connector v4", role: "Browser Key Vault & Signer", latency: "<20ms", status: "Connected" },
  { name: "1AM ProofStation", role: "Zero-DUST Gas Prover Sponsor", latency: "<85ms", status: "Sponsored" },
  { name: "Midnight Preprod Testnet", role: "Confidential State Ledger", latency: "~2.4s", status: "Operational" },
  { name: "Supabase IST Telemetry", role: "Sanitized Public Hashes & Sync", latency: "<35ms", status: "Synced" },
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
    <section id="architecture" ref={sectionRef} className="py-20 lg:py-28 overflow-hidden bg-white border-t border-[#0A1931]/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Architecture Stages */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#1E3A8A] mb-3 font-semibold">
              <span className="w-8 h-px bg-[#1E3A8A]/50" />
              System Architecture
            </span>
            <h2 className="text-3xl lg:text-5xl font-display tracking-tight mb-4 text-[#0A1329]">
              Zero-knowledge
              <br />
              by design.
            </h2>
            <p className="text-sm lg:text-base text-slate-600 leading-relaxed mb-8 max-w-lg font-sans">
              Traders state rules in plain language. Proofs compile client-side in memory. Midnight Preprod verifies mathematical compliance without revealing parameters.
            </p>

            {/* Stages Stack */}
            <div className="space-y-3 mb-8">
              {stages.map((stage) => (
                <div
                  key={stage.stage}
                  className="p-4 rounded-xl border border-[#0A1931]/10 bg-slate-50/70 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      {stage.stage}
                    </span>
                    <span className="font-mono text-xs text-[#1E3A8A] font-semibold">
                      {stage.subtitle}
                    </span>
                  </div>
                  <h3 className="font-display text-lg text-[#0A1329] font-bold mb-1.5">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans mb-2.5">
                    {stage.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {stage.features.map((feat) => (
                      <span
                        key={feat}
                        className="text-[11px] font-mono text-slate-700 bg-white px-2 py-0.5 rounded border border-[#0A1931]/10 font-medium"
                      >
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#0A1931]/10">
              <div>
                <div className="text-2xl lg:text-3xl font-display text-[#0A1329] font-bold">&lt;120ms</div>
                <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">ZK Proof Time</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-display text-[#0A1329] font-bold">100%</div>
                <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">Client-side Proving</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-display text-emerald-600 font-bold">$0.00</div>
                <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">MEV Extracted</div>
              </div>
            </div>
          </div>

          {/* Right: Real-Time Protocol Nodes Board in Navy Blue */}
          <div
            className={`lg:sticky lg:top-28 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="border border-[#1E3A8A]/30 rounded-2xl overflow-hidden bg-[#0A1329] text-white shadow-xl">
              <div className="px-6 py-4 border-b border-[#1E3A8A]/30 flex items-center justify-between bg-[#0F1E3D]">
                <span className="text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold">
                  Protocol Subsystems
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-300 font-medium bg-emerald-950/70 px-2.5 py-0.5 rounded-full border border-emerald-500/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  All 6 Operational
                </span>
              </div>

              <div className="divide-y divide-[#1E3A8A]/20">
                {architectureNodes.map((node, index) => (
                  <div
                    key={node.name}
                    className={`px-6 py-3.5 flex items-center justify-between transition-colors duration-200 ${
                      activeNode === index ? "bg-[#14264E]/70" : "hover:bg-[#122246]/40"
                    }`}
                  >
                    <div>
                      <div className="font-semibold text-sm text-white flex items-center gap-2">
                        {node.name}
                      </div>
                      <div className="text-xs text-slate-300 font-mono mt-0.5">{node.role}</div>
                    </div>
                    <div className="flex items-center gap-2.5 shrink-0">
                      <span className="font-mono text-xs text-sky-300">{node.latency}</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="px-6 py-3.5 bg-[#070E1C] border-t border-[#1E3A8A]/30 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Deployed Compact Contract</span>
                <a
                  href={XENOX_CONTENT.urls.preprodExplorer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-300 hover:text-sky-200 font-semibold truncate max-w-[200px]"
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
