import { useState } from "react";
import { Copy, Check, Terminal as TerminalIcon, ExternalLink } from "lucide-react";
import { XENOX_CONTENT } from "../../content/xenox";

export function WalletSetupSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const { steps, codeSnippets } = XENOX_CONTENT.walletSetup;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="setup" className="py-20 lg:py-28 border-t border-[#0A1931]/10 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <span className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#1E3A8A] mb-3 font-semibold">
            <span className="w-8 h-px bg-[#1E3A8A]/50" />
            Developer & Wallet Setup
          </span>
          <h2 className="text-3xl lg:text-5xl font-display tracking-tight text-[#0A1329]">
            Connect 1AM, run tests, and trade.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* MacBook Style Code Window in Navy Blue */}
          <div className="lg:col-span-7 mac-terminal border border-[#1E3A8A]/40 shadow-xl">
            {/* Titlebar with Traffic Lights & Tab Chips */}
            <div className="mac-titlebar flex items-center justify-between bg-gradient-to-r from-[#112140] to-[#162952] border-b border-[#1E3A8A]/40 px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="mac-traffic-lights">
                  <span className="mac-dot mac-dot-close" />
                  <span className="mac-dot mac-dot-minimize" />
                  <span className="mac-dot mac-dot-maximize" />
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-300 font-mono">
                  <TerminalIcon size={12} className="text-sky-400" />
                  <span>xenox-setup</span>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-1.5">
                {codeSnippets.map((snippet, idx) => (
                  <button
                    key={snippet.label}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors cursor-pointer ${
                      activeTab === idx
                        ? "bg-[#1E3A8A]/70 text-white font-medium border border-sky-400/40"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {snippet.label}
                  </button>
                ))}
              </div>

              {/* Copy */}
              <button
                type="button"
                onClick={handleCopy}
                className="text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 p-1 rounded hover:bg-[#1E3A8A]/40 transition-colors cursor-pointer"
                title="Copy code"
              >
                {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                <span className="hidden sm:inline">{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>

            {/* Code Body */}
            <pre className="p-6 font-mono text-[13px] leading-relaxed text-slate-100 overflow-x-auto min-h-[220px] bg-[#070E1C]">
              <code>{codeSnippets[activeTab].code}</code>
            </pre>
          </div>

          {/* Right: Numbered Wallet Setup Steps */}
          <div className="lg:col-span-5 space-y-4">
            {steps.map((step) => (
              <div
                key={step.step}
                className="p-5 border border-[#0A1931]/10 rounded-xl bg-slate-50/70 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#0A1931] text-white">
                    {step.step}
                  </span>
                  <h3 className="font-semibold text-[#0A1329] text-base">{step.title}</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-8 mb-2 font-sans">
                  {step.desc}
                </p>
                {step.url && (
                  <div className="pl-8">
                    <a
                      href={step.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-[#1E3A8A] hover:underline font-semibold"
                    >
                      {step.url.replace("https://", "")} <ExternalLink size={11} />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
