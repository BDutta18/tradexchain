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
    <section id="contract" className="py-24 lg:py-32 bg-zinc-950 text-white border-t border-zinc-800">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <span className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4">
              <span className="w-8 h-px bg-white/40" />
              Verifiable On-Chain State
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight text-white">
              Deployed Smart Contract
            </h2>
          </div>
          <a
            href={XENOX_CONTENT.urls.preprodExplorer}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-purple-400/40 bg-purple-950/40 text-purple-200 text-xs font-mono uppercase tracking-wider hover:bg-purple-900/60 transition-colors"
          >
            <span>View on 1AM Preprod Explorer</span>
            <ExternalLink size={13} />
          </a>
        </div>

        {/* Contract Address Display Card */}
        <div className="p-8 lg:p-10 border border-zinc-800 rounded-2xl bg-zinc-900/60 mb-12 backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-zinc-800">
            <div>
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-2">
                Active Preprod Contract Address
              </span>
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm sm:text-base lg:text-lg text-emerald-400 break-all select-all font-semibold">
                  {contract.address}
                </span>
                <button
                  onClick={handleCopy}
                  className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors shrink-0"
                  title="Copy contract address"
                >
                  {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-600/50 text-emerald-300 text-xs font-mono font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {contract.status}
              </span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 text-xs font-mono">
            <div>
              <span className="text-zinc-500 uppercase tracking-wider block mb-1">Target Network</span>
              <span className="text-zinc-200 font-semibold text-sm">{contract.network}</span>
            </div>
            <div>
              <span className="text-zinc-500 uppercase tracking-wider block mb-1">Contract Version</span>
              <span className="text-purple-300 font-semibold text-sm">{contract.version}</span>
            </div>
            <div>
              <span className="text-zinc-500 uppercase tracking-wider block mb-1">Gas & Proving</span>
              <span className="text-zinc-200 font-semibold text-sm">{contract.gasProving}</span>
            </div>
            <div>
              <span className="text-zinc-500 uppercase tracking-wider block mb-1">Operational State</span>
              <span className="text-emerald-400 font-semibold text-sm">Verifiable ZK State Machine</span>
            </div>
          </div>
        </div>

        {/* State Machine Grid: Active Circuits & Ledger State */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Active Circuits Card */}
          <div className="border border-zinc-800 rounded-2xl p-8 bg-zinc-900/40">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2.5">
                <Cpu size={18} className="text-purple-400" />
                <h3 className="font-display text-2xl text-white">Active Compact Circuits</h3>
              </div>
              <span className="text-xs font-mono text-zinc-500">{contract.circuits.length} Circuits</span>
            </div>
            <p className="text-xs font-mono text-zinc-400 mb-6 leading-relaxed">
              Native zero-knowledge state transitions authored in Compact v0.24 and compiled to ZKIR.
            </p>
            <div className="flex flex-wrap gap-2">
              {contract.circuits.map((circuit) => (
                <span
                  key={circuit}
                  className="px-3 py-1.5 rounded-lg border border-purple-500/20 bg-purple-950/20 text-purple-200 font-mono text-xs hover:border-purple-500/40 transition-colors"
                >
                  <code>{circuit}</code>
                </span>
              ))}
            </div>
          </div>

          {/* Ledger State Card */}
          <div className="border border-zinc-800 rounded-2xl p-8 bg-zinc-900/40">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2.5">
                <Database size={18} className="text-emerald-400" />
                <h3 className="font-display text-2xl text-white">Public Ledger State Maps</h3>
              </div>
              <span className="text-xs font-mono text-zinc-500">{contract.ledgerState.length} State Maps</span>
            </div>
            <p className="text-xs font-mono text-zinc-400 mb-6 leading-relaxed">
              Verifiable public anchors visible to block explorers; reveals zero underlying witness parameters.
            </p>
            <div className="flex flex-wrap gap-2">
              {contract.ledgerState.map((state) => (
                <span
                  key={state}
                  className="px-3 py-1.5 rounded-lg border border-emerald-500/20 bg-emerald-950/20 text-emerald-200 font-mono text-xs hover:border-emerald-500/40 transition-colors"
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
