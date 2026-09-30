import { useState } from "react";
import { Copy, Check, ExternalLink, Shield, Cpu, Flame, Database } from "lucide-react";
import { XENOX_CONTENT } from "../../content/xenox";

export function DeployedContractSection() {
  const [copied, setCopied] = useState(false);
  const contract = XENOX_CONTENT.contract;

  const handleCopy = () => {
    navigator.clipboard.writeText(contract.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contract" className="py-20 lg:py-28 bg-[#0A1329] text-white border-t border-[#1E3A8A]/30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-sky-400 mb-3 font-semibold">
              <span className="w-8 h-px bg-sky-400/50" />
              Midnight Preprod Ledger
            </span>
            <h2 className="text-3xl lg:text-5xl font-display tracking-tight text-white">
              Deployed Smart Contract
            </h2>
          </div>
          <a
            href={XENOX_CONTENT.urls.preprodExplorer}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-sky-400/30 bg-[#0F224A] text-sky-200 text-xs font-mono uppercase tracking-wider hover:bg-[#16326E] transition-colors"
          >
            <span>View on 1AM Preprod Explorer</span>
            <ExternalLink size={13} />
          </a>
        </div>

        {/* Contract Address Display Card */}
        <div className="p-6 lg:p-8 border border-[#1E3A8A]/40 rounded-2xl bg-[#0F1E3D]/80 mb-8 backdrop-blur-md shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#1E3A8A]/30">
            <div>
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest block mb-1.5">
                Active Preprod Contract Address (v1.3.0)
              </span>
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm sm:text-base lg:text-lg text-sky-300 break-all select-all font-semibold">
                  {contract.address}
                </span>
                <button
                  onClick={handleCopy}
                  className="p-2 rounded-lg bg-[#162D5A] hover:bg-[#1F3D7A] text-slate-200 transition-colors shrink-0 cursor-pointer"
                  title="Copy contract address"
                >
                  {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Active Preprod MVP
              </span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 text-xs font-mono">
            <div>
              <span className="text-slate-400 uppercase tracking-wider block mb-1">Network</span>
              <span className="text-white font-semibold">{contract.network}</span>
            </div>
            <div>
              <span className="text-slate-400 uppercase tracking-wider block mb-1">Specification</span>
              <span className="text-sky-300 font-semibold">{contract.version}</span>
            </div>
            <div>
              <span className="text-slate-400 uppercase tracking-wider block mb-1">Gas Proving</span>
              <span className="text-white font-semibold">1AM ProofStation (Zero-DUST)</span>
            </div>
            <div>
              <span className="text-slate-400 uppercase tracking-wider block mb-1">State Machine</span>
              <span className="text-emerald-400 font-semibold">Verifiable ZK Circuits</span>
            </div>
          </div>
        </div>

        {/* State Machine Grid: Active Circuits & Ledger State */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Active Circuits Card */}
          <div className="border border-[#1E3A8A]/30 rounded-2xl p-6 bg-[#0E1A33]/70">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <Cpu size={17} className="text-sky-400" />
                <h3 className="font-display text-xl text-white font-semibold">Active Compact Circuits</h3>
              </div>
              <span className="text-xs font-mono text-slate-400">{contract.circuits.length} Circuits</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {contract.circuits.map((circuit) => (
                <span
                  key={circuit}
                  className="px-2.5 py-1 rounded-md border border-[#1E3A8A]/40 bg-[#122247]/60 text-sky-200 font-mono text-xs"
                >
                  <code>{circuit}</code>
                </span>
              ))}
            </div>
          </div>

          {/* Ledger State Card */}
          <div className="border border-[#1E3A8A]/30 rounded-2xl p-6 bg-[#0E1A33]/70">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <Database size={17} className="text-emerald-400" />
                <h3 className="font-display text-xl text-white font-semibold">Public Ledger State Maps</h3>
              </div>
              <span className="text-xs font-mono text-slate-400">{contract.ledgerState.length} State Maps</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {contract.ledgerState.map((state) => (
                <span
                  key={state}
                  className="px-2.5 py-1 rounded-md border border-emerald-500/30 bg-[#0C2A3A]/40 text-emerald-200 font-mono text-xs"
                >
                  <code>{state}</code>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
