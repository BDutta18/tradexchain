import { useState, useRef, useEffect } from "react";
import { EyeOff, Eye, ShieldCheck, Lock, CheckCircle2, ChevronRight } from "lucide-react";
import { XENOX_CONTENT } from "../../content/xenox";

export function PrivacyModelSection() {
  const [activeTab, setActiveTab] = useState<"cannot" | "can" | "proves">("cannot");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const { canLearn, cannotLearn, userProves } = XENOX_CONTENT.privacyModel;

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

  return (
    <section id="privacy-model" ref={sectionRef} className="py-24 lg:py-36 border-t border-black/[0.08] bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-zinc-500 mb-4">
              <span className="w-8 h-px bg-black/40" />
              Midnight Zero-Knowledge Privacy Model
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight text-black leading-[1.05]">
              Cryptographic boundary.
              <br />
              <span className="text-zinc-500">Zero mempool exposure.</span>
            </h2>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-2 p-1.5 rounded-full border border-black/10 bg-zinc-50 shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab("cannot")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
                activeTab === "cannot"
                  ? "bg-black text-white shadow-sm"
                  : "text-zinc-600 hover:text-black"
              }`}
            >
              <EyeOff size={13} />
              <span>What Stays Private ({cannotLearn.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("can")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
                activeTab === "can"
                  ? "bg-black text-white shadow-sm"
                  : "text-zinc-600 hover:text-black"
              }`}
            >
              <Eye size={13} />
              <span>What Is Public ({canLearn.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("proves")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
                activeTab === "proves"
                  ? "bg-black text-white shadow-sm"
                  : "text-zinc-600 hover:text-black"
              }`}
            >
              <ShieldCheck size={13} />
              <span>ZK Circuits ({userProves.length})</span>
            </button>
          </div>
        </div>

        {/* Tab 1: What Stays Private */}
        {activeTab === "cannot" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 border border-black/10 rounded-2xl overflow-hidden shadow-sm">
            {cannotLearn.map((item, idx) => (
              <div
                key={item.item}
                className="p-8 bg-white hover:bg-zinc-50/80 transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-zinc-400">0{idx + 1}</span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <Lock size={10} />
                      Zero-Knowledge
                    </span>
                  </div>
                  <h3 className="font-display text-2xl text-black mb-3 leading-snug">
                    {item.item}
                  </h3>
                  <div className="font-mono text-xs text-zinc-500 mb-3 bg-zinc-100 p-2 rounded">
                    {item.protection}
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {item.why}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: What Is Public */}
        {activeTab === "can" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 border border-black/10 rounded-2xl overflow-hidden shadow-sm">
            {canLearn.map((item, idx) => (
              <div
                key={item.item}
                className="p-8 bg-white hover:bg-zinc-50/80 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-zinc-400">0{idx + 1}</span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-blue-50 text-blue-700 border border-blue-200">
                      On-Chain Ledger
                    </span>
                  </div>
                  <h3 className="font-display text-2xl text-black mb-2 leading-snug">
                    {item.item}
                  </h3>
                  <div className="font-mono text-xs text-blue-600 mb-3">
                    Type: {item.type}
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {item.reveals}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: ZK Circuits & Mathematical Statements */}
        {activeTab === "proves" && (
          <div className="border border-black/10 rounded-2xl overflow-hidden bg-white shadow-sm">
            <div className="px-6 py-4 border-b border-black/10 bg-zinc-50 flex items-center justify-between text-xs font-mono text-zinc-500">
              <span className="uppercase tracking-wider font-semibold">Compact v0.24 Verified Circuits (v1.3.0)</span>
              <span>All 9 Circuits Formalized in ZKIR</span>
            </div>
            <div className="divide-y divide-black/5">
              {userProves.map((circuit, idx) => (
                <div key={circuit.circuit} className="p-6 hover:bg-zinc-50 transition-colors">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="space-y-1 max-w-xl">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-zinc-400">0{idx + 1}</span>
                        <code className="font-mono text-sm font-semibold text-black bg-zinc-100 px-2 py-0.5 rounded">
                          {circuit.circuit}()
                        </code>
                      </div>
                      <div className="text-xs text-zinc-700 font-mono pt-1">
                        Statement: <code className="text-zinc-900 bg-zinc-50 px-1 py-0.5 border border-zinc-200 rounded">{circuit.statement}</code>
                      </div>
                    </div>
                    <div className="lg:text-right shrink-0">
                      <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1">
                        Private Witness Inputs
                      </div>
                      <div className="font-mono text-xs text-purple-700 bg-purple-50 px-2.5 py-1 rounded border border-purple-200 inline-block">
                        {circuit.witnesses}
                      </div>
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
