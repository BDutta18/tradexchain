import { useState, useEffect, useRef } from "react";
import { Terminal as TerminalIcon, Play, RotateCcw, Copy, Check, Sparkles } from "lucide-react";
import { XENOX_CONTENT } from "../../content/xenox";

interface TerminalStep {
  cmd: string;
  output: { text: string; color?: string }[];
  delayAfter?: number;
}

const DEMO_STEPS: TerminalStep[] = [
  {
    cmd: 'xenox compile --prompt "Only buy ADA, max 20% position size, 8% stop-loss, run for 30 days"',
    output: [
      { text: "⚡ Compiling natural language intent via Gemini 2.5 Flash...", color: "text-amber-300" },
      { text: "  Structured Bounds: Asset: ADA | Max Pos: 20% | Stop Loss: 8% | Expiry: 30d", color: "text-cyan-300" },
      { text: "✓ Local commitment hash derived: 0x8a92f0c76...b1e4", color: "text-emerald-400" },
    ],
    delayAfter: 1400,
  },
  {
    cmd: `1am commit-strategy --contract ${XENOX_CONTENT.contract.address.slice(0, 18)}...`,
    output: [
      { text: "⚡ Triggering 1AM wallet authorization popup on Midnight Preprod...", color: "text-amber-300" },
      { text: "  Fee Sponsorship: ProofStation zero-DUST active", color: "text-zinc-400" },
      { text: "✓ 1AM extension popup approved! Strategy anchored on-chain.", color: "text-emerald-400" },
      { text: "  Ledger state updated: strategyActive = true | tradeCount = 0", color: "text-cyan-300" },
    ],
    delayAfter: 1600,
  },
  {
    cmd: "xenox vault deposit --amount 25000 --asset vUSD",
    output: [
      { text: "✓ Private shielded note minted in browser memory ($25,000 vUSD)", color: "text-emerald-400" },
      { text: "  On-chain record: Decrypted client-side only (0 balance leakage to mempools)", color: "text-zinc-400" },
    ],
    delayAfter: 1400,
  },
  {
    cmd: "compact prove-trade --asset ADA --size 5000 --slippage 15bps",
    output: [
      { text: "⚡ Proving trade execution in Zero-Knowledge via Compact v0.24 ZKIR...", color: "text-amber-300" },
      { text: "  Circuit check: tradeSize * 100 <= portfolioVal * maxPos [PASSED]", color: "text-emerald-400" },
      { text: "  Circuit check: currentTime <= timelineExpiry [PASSED]", color: "text-emerald-400" },
      { text: "  Circuit check: slippage <= maxSlippageBps [PASSED]", color: "text-emerald-400" },
      { text: "✓ 32-byte Halo2 ZK proof generated in 184ms with 0 witness leakage!", color: "text-emerald-300 font-bold" },
    ],
    delayAfter: 1800,
  },
  {
    cmd: "midnight submit-trade --proof <zk-proof> --network preprod",
    output: [
      { text: "HTTP/1.1 200 OK — Midnight Preprod Transaction Broadcast", color: "text-emerald-400 font-bold" },
      { text: '  Tx Hash: 0x7e3a91bf284dc60a1789b52...4c2d', color: "text-cyan-300" },
      { text: '  Ledger Outcome: tradeStatus = 1 (Executed) | MEV Extracted: $0.00 (Immune)', color: "text-amber-200 font-medium" },
    ],
    delayAfter: 3500,
  },
];

export function MacbookTerminal() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [typedChars, setTypedChars] = useState(0);
  const [history, setHistory] = useState<{ cmd: string; output: { text: string; color?: string }[] }[]>([]);
  const [isTyping, setIsTyping] = useState(true);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [copied, setCopied] = useState(false);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  const currentStep = DEMO_STEPS[currentStepIndex];

  // Auto-typing effect
  useEffect(() => {
    if (!isAutoPlay) return;

    if (typedChars < currentStep.cmd.length) {
      const timeout = setTimeout(() => {
        setTypedChars((prev) => prev + 1);
      }, Math.floor(Math.random() * 20) + 30);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
      const delay = currentStep.delayAfter || 1500;
      const timeout = setTimeout(() => {
        setHistory((prev) => [
          ...prev,
          { cmd: currentStep.cmd, output: currentStep.output },
        ]);
        setTypedChars(0);
        setIsTyping(true);

        if (currentStepIndex + 1 < DEMO_STEPS.length) {
          setCurrentStepIndex((prev) => prev + 1);
        } else {
          // Loop back after delay
          setTimeout(() => {
            setHistory([]);
            setCurrentStepIndex(0);
          }, 3000);
        }
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [typedChars, currentStepIndex, isAutoPlay, currentStep]);

  // Auto-scroll
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history, typedChars]);

  const handleCopy = () => {
    const fullText = history
      .map((h) => `$ ${h.cmd}\n${h.output.map((o) => o.text).join("\n")}`)
      .join("\n\n");
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setHistory([]);
    setCurrentStepIndex(0);
    setTypedChars(0);
    setIsTyping(true);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mac-terminal">
      {/* MacBook Title Bar */}
      <div className="mac-titlebar flex items-center justify-between">
        <div className="mac-traffic-lights">
          <span className="mac-dot mac-dot-close" />
          <span className="mac-dot mac-dot-minimize" />
          <span className="mac-dot mac-dot-maximize" />
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
          <TerminalIcon size={12} className="text-zinc-500" />
          <span>trader@midnight: ~/xenox-protocol — step {currentStepIndex + 1} of {DEMO_STEPS.length}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="text-xs font-mono text-zinc-400 hover:text-white p-1 rounded hover:bg-zinc-800 transition-colors"
            title={isAutoPlay ? "Pause Auto-play" : "Resume Auto-play"}
          >
            <Play size={12} className={isAutoPlay ? "text-emerald-400" : ""} />
          </button>
          <button
            onClick={handleReset}
            className="text-xs font-mono text-zinc-400 hover:text-white p-1 rounded hover:bg-zinc-800 transition-colors"
            title="Reset Terminal"
          >
            <RotateCcw size={12} />
          </button>
          <button
            onClick={handleCopy}
            className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1 p-1 rounded hover:bg-zinc-800 transition-colors"
            title="Copy Terminal Output"
          >
            {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
          </button>
        </div>
      </div>

      {/* Terminal Step Progress Indicator */}
      <div className="bg-[#12151d] px-4 py-2 border-b border-zinc-800/80 flex items-center justify-between text-[11px] font-mono">
        <div className="flex items-center gap-3">
          <span className="text-zinc-500">ZK Workflow:</span>
          {DEMO_STEPS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setHistory(DEMO_STEPS.slice(0, i).map((s) => ({ cmd: s.cmd, output: s.output })));
                setCurrentStepIndex(i);
                setTypedChars(0);
                setIsTyping(true);
              }}
              className={`transition-colors ${
                i === currentStepIndex
                  ? "text-emerald-400 font-bold"
                  : i < currentStepIndex
                  ? "text-cyan-400"
                  : "text-zinc-600 hover:text-zinc-400"
              }`}
            >
              {`0${i + 1}`}
            </button>
          ))}
        </div>
        <span className="text-zinc-500 hidden sm:inline flex items-center gap-1.5">
          <Sparkles size={11} className="text-purple-400" />
          Midnight Compact v1.3.0 ZKIR
        </span>
      </div>

      {/* Terminal Body */}
      <div
        ref={terminalBodyRef}
        className="p-6 font-mono text-[13px] leading-relaxed overflow-y-auto max-h-[380px] bg-[#0a0c10]"
      >
        {/* Previous commands & outputs */}
        {history.map((item, idx) => (
          <div key={idx} className="mb-4">
            <div className="flex items-center text-zinc-300">
              <span className="text-emerald-400 select-none mr-2 font-bold">❯</span>
              <span className="text-zinc-100">{item.cmd}</span>
            </div>
            <div className="mt-1.5 space-y-1 pl-4 border-l border-zinc-800">
              {item.output.map((out, oIdx) => (
                <div key={oIdx} className={out.color || "text-zinc-300"}>
                  {out.text}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Current typing command */}
        <div>
          <div className="flex items-center text-zinc-300">
            <span className="text-emerald-400 select-none mr-2 font-bold">❯</span>
            <span className="text-zinc-100">
              {currentStep.cmd.slice(0, typedChars)}
              <span
                className={`inline-block w-2 h-4 bg-emerald-400 ml-0.5 align-middle ${
                  isTyping ? "animate-terminal-blink" : ""
                }`}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
