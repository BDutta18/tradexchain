import { useState, useRef, useEffect } from "react";
import { CheckCircle2, Search, Terminal, Filter } from "lucide-react";
import { XENOX_CONTENT } from "../../content/xenox";

function AnimatedCounter({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1600;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <div ref={ref} className="text-5xl lg:text-7xl font-display tracking-tight text-black">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
}

export function TestCoverageSection() {
  const { total, passing, runtime, suitesCount, vitestOutput, testsList } = XENOX_CONTENT.testCoverage;
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSuite, setSelectedSuite] = useState<string>("all");
  const [showTerminal, setShowTerminal] = useState(false);

  const suites = ["all", ...Array.from(new Set(testsList.map((t) => t.suite)))];

  const filteredTests = testsList.filter((t) => {
    const matchesSuite = selectedSuite === "all" || t.suite === selectedSuite;
    const matchesSearch =
      searchTerm === "" ||
      t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.verifies.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.suite.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSuite && matchesSearch;
  });

  return (
    <section id="tests" className="py-24 lg:py-36 border-t border-black/[0.08] bg-[#f9fafb]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header & Metrics */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-zinc-500 mb-4">
              <span className="w-8 h-px bg-black/40" />
              Automated Test Verification Matrix
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight text-black">
              42 of 42 suites passing.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowTerminal((prev) => !prev)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/15 bg-white text-xs font-mono text-zinc-700 hover:bg-zinc-50 transition-colors cursor-pointer"
            >
              <Terminal size={13} />
              <span>{showTerminal ? "Hide Vitest Output" : "View Vitest Terminal"}</span>
            </button>
          </div>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 border border-black/10 rounded-2xl bg-white shadow-sm">
            <AnimatedCounter end={42} suffix="/42" />
            <div className="mt-3 text-xs text-zinc-500 font-mono uppercase tracking-wider">
              Passing Tests (100%)
            </div>
          </div>
          <div className="p-6 border border-black/10 rounded-2xl bg-white shadow-sm">
            <AnimatedCounter end={7} suffix=" Suites" />
            <div className="mt-3 text-xs text-zinc-500 font-mono uppercase tracking-wider">
              Modular Test Files
            </div>
          </div>
          <div className="p-6 border border-black/10 rounded-2xl bg-white shadow-sm">
            <div className="text-5xl lg:text-7xl font-display tracking-tight text-black">
              {runtime}
            </div>
            <div className="mt-3 text-xs text-zinc-500 font-mono uppercase tracking-wider">
              Total Execution Time
            </div>
          </div>
          <div className="p-6 border border-black/10 rounded-2xl bg-white shadow-sm">
            <div className="text-5xl lg:text-7xl font-display tracking-tight text-emerald-600">
              0 Leaks
            </div>
            <div className="mt-3 text-xs text-zinc-500 font-mono uppercase tracking-wider">
              Privacy Invariant Stripped
            </div>
          </div>
        </div>

        {/* Vitest Terminal Output (Collapsible) */}
        {showTerminal && (
          <div className="mac-terminal mb-12 animate-char-in">
            <div className="mac-titlebar flex items-center justify-between">
              <div className="mac-traffic-lights">
                <span className="mac-dot mac-dot-close" />
                <span className="mac-dot mac-dot-minimize" />
                <span className="mac-dot mac-dot-maximize" />
              </div>
              <div className="text-xs font-mono text-zinc-400">vitest run (42 passed)</div>
              <span className="text-[10px] font-mono text-emerald-400">EXIT 0</span>
            </div>
            <pre className="p-6 font-mono text-xs text-emerald-300 bg-[#0a0c10] overflow-x-auto leading-relaxed">
              <code>{vitestOutput}</code>
            </pre>
          </div>
        )}

        {/* Searchable Test Matrix Table */}
        <div className="border border-black/10 rounded-2xl overflow-hidden bg-white shadow-sm">
          {/* Controls bar */}
          <div className="p-4 border-b border-black/10 bg-zinc-50/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search tests or verification statements..."
                className="w-full pl-9 pr-4 py-2 text-xs font-mono bg-white border border-black/10 rounded-lg focus:outline-none focus:border-black"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
              <Filter className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
              {suites.map((suite) => (
                <button
                  key={suite}
                  type="button"
                  onClick={() => setSelectedSuite(suite)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-mono whitespace-nowrap transition-colors cursor-pointer ${
                    selectedSuite === suite
                      ? "bg-black text-white"
                      : "bg-white border border-black/10 text-zinc-600 hover:text-black"
                  }`}
                >
                  {suite}
                </button>
              ))}
            </div>
          </div>

          {/* Test items list */}
          <div className="divide-y divide-black/5 max-h-[500px] overflow-y-auto">
            {filteredTests.map((test) => (
              <div
                key={test.id}
                className="p-4 hover:bg-zinc-50/80 transition-colors flex items-start justify-between gap-4"
              >
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-black">{test.name}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 text-zinc-600 border border-zinc-200">
                        {test.suite}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-500 font-sans mt-0.5">{test.verifies}</p>
                  </div>
                </div>
                <span className="font-mono text-[11px] text-zinc-400 shrink-0">#{test.id}</span>
              </div>
            ))}

            {filteredTests.length === 0 && (
              <div className="p-8 text-center text-xs font-mono text-zinc-500">
                No tests match your search criteria.
              </div>
            )}
          </div>

          <div className="px-6 py-3 border-t border-black/10 bg-zinc-50 flex items-center justify-between text-xs font-mono text-zinc-500">
            <span>Showing {filteredTests.length} of {total} verified test assertions</span>
            <span className="text-emerald-700 font-medium">✓ 100% Deterministic Pass</span>
          </div>
        </div>
      </div>
    </section>
  );
}
