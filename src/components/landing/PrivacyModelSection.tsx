import { useState } from "react";
import { EyeOff, Eye, ShieldCheck, Lock } from "lucide-react";
import { XENOX_CONTENT } from "../../content/xenox";

export function PrivacyModelSection() {
  const [activeTab, setActiveTab] = useState<"cannot" | "can" | "proves">("cannot");
  const { canLearn, cannotLearn, userProves } = XENOX_CONTENT.privacyModel;

  return (
    <section id="privacy-model" className="py-20 lg:py-28 border-t border-[#0A1931]/10 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#1E3A8A] mb-3 font-semibold">
              <span className="w-8 h-px bg-[#1E3A8A]/50" />
              Midnight Privacy Model
            </span>
            <h2 className="text-3xl lg:text-5xl font-display tracking-tight text-[#0A1329] leading-[1.05]">
              Cryptographic boundary.
              <br />
              <span className="text-slate-500">Zero mempool exposure.</span>
            </h2>
          </div>

          {/* Tab Selector in Navy & White */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-full border border-[#0A1931]/15 bg-slate-50 shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab("cannot")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
                activeTab === "cannot"
                  ? "bg-[#0A1931] text-white shadow-md font-semibold"
                  : "text-slate-600 hover:text-[#0A1329]"
              }`}
            >
              <EyeOff size={13} />
              <span>What Stays Private</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("can")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
                activeTab === "can"
                  ? "bg-[#0A1931] text-white shadow-md font-semibold"
                  : "text-slate-600 hover:text-[#0A1329]"
              }`}
            >
              <Eye size={13} />
              <span>What Is Public</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("proves")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
                activeTab === "proves"
                  ? "bg-[#0A1931] text-white shadow-md font-semibold"
                  : "text-slate-600 hover:text-[#0A1329]"
              }`}
            >
              <ShieldCheck size={13} />
              <span>ZK Circuits</span>
            </button>
          </div>
        </div>

        {/* Tab 1: What Stays Private */}
        {activeTab === "cannot" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0A1931]/10 border border-[#0A1931]/10 rounded-2xl overflow-hidden shadow-sm">
            {cannotLearn.map((item, idx) => (
              <div
                key={item.item}
                className="p-6 bg-white hover:bg-slate-50/80 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-slate-400">0{idx + 1}</span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-blue-50 text-[#1E3A8A] border border-blue-200 font-semibold">
                      <Lock size={10} />
                      Shielded
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-[#0A1329] mb-2 font-semibold">
                    {item.item}
                  </h3>
                  <div className="font-mono text-xs text-[#1E3A8A] mb-2 bg-blue-50/50 p-2 rounded border border-blue-100">
                    {item.protection}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {item.why}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: What Is Public */}
        {activeTab === "can" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0A1931]/10 border border-[#0A1931]/10 rounded-2xl overflow-hidden shadow-sm">
            {canLearn.map((item, idx) => (
              <div
                key={item.item}
                className="p-6 bg-white hover:bg-slate-50/80 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-slate-400">0{idx + 1}</span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-slate-100 text-slate-700 border border-slate-200">
                      Public Anchor
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-[#0A1329] mb-1.5 font-semibold">
                    {item.item}
                  </h3>
                  <div className="font-mono text-xs text-[#1E3A8A] mb-2 font-medium">
                    Type: {item.type}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {item.reveals}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: ZK Circuits */}
        {activeTab === "proves" && (
          <div className="border border-[#0A1931]/10 rounded-2xl overflow-hidden bg-white shadow-sm">
            <div className="px-6 py-3.5 border-b border-[#0A1931]/10 bg-slate-50 flex items-center justify-between text-xs font-mono text-slate-500">
              <span className="uppercase tracking-wider font-semibold text-[#0A1329]">Compact v0.24 Verified Circuits</span>
              <span className="text-emerald-700 font-medium">✓ Formalized in ZKIR</span>
            </div>
            <div className="divide-y divide-[#0A1931]/5">
              {userProves.map((circuit, idx) => (
                <div key={circuit.circuit} className="p-4 hover:bg-slate-50/80 transition-colors">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-slate-400">0{idx + 1}</span>
                        <code className="font-mono text-xs font-bold text-[#0A1329] bg-slate-100 px-2 py-0.5 rounded">
                          {circuit.circuit}()
                        </code>
                      </div>
                      <div className="text-xs text-slate-600 font-mono">
                        Statement: <code className="text-[#0A1329] bg-slate-50 px-1 py-0.5 border border-slate-200 rounded">{circuit.statement}</code>
                      </div>
                    </div>
                    <div className="font-mono text-xs text-[#1E3A8A] bg-blue-50 px-2.5 py-1 rounded border border-blue-200 shrink-0">
                      {circuit.witnesses}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
