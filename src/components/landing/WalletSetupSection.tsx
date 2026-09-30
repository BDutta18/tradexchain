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
    <section id="setup" className="py-24 lg:py-36 border-t border-black/[0.08] bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-zinc-500 mb-4">
            <span className="w-8 h-px bg-black/40" />
            Developer & Wallet Setup
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight text-black">
            Connect 1AM,
            <br />
            run tests, and trade.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* MacBook Style Code Window */}
          <div className="lg:col-span-7 mac-terminal">
            {/* Titlebar with Traffic Lights & Tab Chips */}
            <div className="mac-titlebar flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="mac-traffic-lights">
                  <span className="mac-dot mac-dot-close" />
                  <span className="mac-dot mac-dot-minimize" />
                  <span className="mac-dot mac-dot-maximize" />
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                  <TerminalIcon size={12} className="text-zinc-500" />
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
                    className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors cursor-pointer ${
                      activeTab === idx
                        ? "bg-zinc-800 text-white font-medium shadow-sm"
                        : "text-zinc-400 hover:text-zinc-200"
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
                className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1.5 p-1 rounded hover:bg-zinc-800 transition-colors cursor-pointer"
                title="Copy code"
              >
                {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                <span className="hidden sm:inline">{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>

            {/* Code Body */}
            <pre className="p-6 font-mono text-[13px] leading-relaxed text-zinc-200 overflow-x-auto min-h-[240px] bg-[#0a0c10]">
              <code>{codeSnippets[activeTab].code}</code>
            </pre>
          </div>

          {/* Right: Numbered Wallet Setup Steps */}
          <div className="lg:col-span-5 space-y-6">
            {steps.map((step) => (
              <div
                key={step.step}
                className="p-6 border border-black/10 rounded-2xl bg-zinc-50/60 hover:bg-zinc-50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-black text-white">
                    {step.step}
                  </span>
                  <h3 className="font-semibold text-black text-base">{step.title}</h3>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed pl-8 mb-3 font-sans">
                  {step.desc}
                </p>
                {step.url && (
                  <div className="pl-8">
                    <a
                      href={step.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-700 hover:text-purple-900 font-semibold"
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
