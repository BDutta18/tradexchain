import { useState } from "react";
import { CheckCircle2, GitBranch, ExternalLink, Workflow, Users, ShieldCheck } from "lucide-react";
import { XENOX_CONTENT } from "../../content/xenox";

export function VerificationSection() {
  const [activeTab, setActiveTab] = useState<"tests" | "cicd" | "checklist" | "users">("tests");
  const { testCoverage, cicd, checklist, userValidation, urls } = XENOX_CONTENT;

  return (
    <section id="verification" className="py-20 lg:py-28 border-t border-[#0A1931]/10 bg-slate-50/60">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#1E3A8A] mb-3 font-semibold">
              <span className="w-8 h-px bg-[#1E3A8A]/50" />
              Verification & Compliance
            </span>
            <h2 className="text-3xl lg:text-5xl font-display tracking-tight text-[#0A1329]">
              Verified on-chain and in CI.
            </h2>
          </div>

          {/* Quick Metrics Bar */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full border border-[#0A1931]/15 bg-white shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab("tests")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                activeTab === "tests" ? "bg-[#0A1931] text-white font-semibold" : "text-slate-600 hover:text-[#0A1329]"
              }`}
            >
              42/42 Tests
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("cicd")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                activeTab === "cicd" ? "bg-[#0A1931] text-white font-semibold" : "text-slate-600 hover:text-[#0A1329]"
              }`}
            >
              5 CI Jobs
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("checklist")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                activeTab === "checklist" ? "bg-[#0A1931] text-white font-semibold" : "text-slate-600 hover:text-[#0A1329]"
              }`}
            >
              Level 6 Checklist
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("users")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                activeTab === "users" ? "bg-[#0A1931] text-white font-semibold" : "text-slate-600 hover:text-[#0A1329]"
              }`}
            >
              77 Launch Users
            </button>
          </div>
        </div>

        {/* 4 Minimal Metric Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="p-5 border border-[#0A1931]/10 rounded-xl bg-white shadow-xs">
            <div className="text-3xl lg:text-4xl font-display text-[#0A1329] font-bold">42 / 42</div>
            <div className="text-xs font-mono text-emerald-600 font-semibold mt-1">✓ Vitest Suites Passing</div>
          </div>
          <div className="p-5 border border-[#0A1931]/10 rounded-xl bg-white shadow-xs">
            <div className="text-3xl lg:text-4xl font-display text-[#0A1329] font-bold">5 of 5</div>
            <div className="text-xs font-mono text-[#1E3A8A] font-semibold mt-1">✓ GitHub Actions Jobs Green</div>
          </div>
          <div className="p-5 border border-[#0A1931]/10 rounded-xl bg-white shadow-xs">
            <div className="text-3xl lg:text-4xl font-display text-[#0A1329] font-bold">77 Addresses</div>
            <div className="text-xs font-mono text-emerald-600 font-semibold mt-1">✓ Preprod Target (70+) Met</div>
          </div>
          <div className="p-5 border border-[#0A1931]/10 rounded-xl bg-white shadow-xs">
            <div className="text-3xl lg:text-4xl font-display text-emerald-600 font-bold">$0.00 MEV</div>
            <div className="text-xs font-mono text-slate-500 font-semibold mt-1">✓ Front-Running Protected</div>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="border border-[#0A1931]/10 rounded-2xl bg-white shadow-sm overflow-hidden p-6 lg:p-8">
          {/* Tab 1: Vitest 42 Tests Overview */}
          {activeTab === "tests" && (
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#0A1931]/10 text-xs font-mono">
                <span className="font-semibold text-[#0A1329]">7 Modular Test Suites (1.28s Runtime)</span>
                <span className="text-emerald-600 font-bold">100% Deterministic Pass</span>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { file: "tests/axiom.test.ts", count: "14 tests", desc: "Compact state, balance invariance, circuit breakers" },
                  { file: "tests/analytics.test.ts", count: "8 tests", desc: "Telemetry sanitization & privacy witness strip" },
                  { file: "tests/zkBotEngine.test.ts", count: "5 tests", desc: "MEV sandwich immunity & stress scenarios" },
                  { file: "tests/agent.test.ts", count: "5 tests", desc: "Gemini 2.5 Flash natural language parser" },
                  { file: "tests/level6Agent.test.ts", count: "5 tests", desc: "Multi-regime risk models & offline fallbacks" },
                  { file: "tests/riskModel.test.ts", count: "3 tests", desc: "EZKL Halo2 client-side proof generation" },
                  { file: "tests/riskFlowVerification.test.ts", count: "2 tests", desc: "Multi-asset execution & stop-loss bounds" },
                ].map((s) => (
                  <div key={s.file} className="p-3.5 rounded-lg border border-[#0A1931]/10 bg-slate-50">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-xs font-bold text-[#0A1329]">{s.file}</span>
                      <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold border border-emerald-200">
                        {s.count}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 font-sans">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2: 5 CI/CD Jobs */}
          {activeTab === "cicd" && (
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#0A1931]/10 text-xs font-mono">
                <span className="font-semibold text-[#0A1329]">Automated GitHub Actions Matrix</span>
                <a
                  href={urls.ciWorkflow}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1E3A8A] hover:underline font-semibold flex items-center gap-1"
                >
                  Inspect Workflow <ExternalLink size={11} />
                </a>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
                {cicd.jobs.map((job) => (
                  <div key={job.id} className="p-3.5 rounded-lg border border-[#0A1931]/10 bg-slate-50 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-[10px] text-slate-400">Job {job.id}</span>
                        <span className="text-[10px] font-mono text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                          Pass
                        </span>
                      </div>
                      <div className="font-mono text-xs font-bold text-[#0A1329] mb-1">{job.name}</div>
                      <div className="font-mono text-[11px] text-[#1E3A8A] mb-1.5">{job.env}</div>
                      <p className="text-xs text-slate-600 font-sans leading-relaxed">{job.verifies}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Level 6 Submission Checklist */}
          {activeTab === "checklist" && (
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#0A1931]/10 text-xs font-mono">
                <span className="font-semibold text-[#0A1329]">Supermoon Level 6 Mandatory Deliverables</span>
                <span className="text-emerald-700 font-bold">6/6 Complete</span>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {checklist.map((item) => (
                  <div key={item.num} className="p-3.5 rounded-lg border border-[#0A1931]/10 bg-slate-50 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-mono text-[11px] text-slate-400 font-bold">Requirement {item.num}</span>
                        <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 font-semibold">
                          Complete
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-[#0A1329] font-sans mb-3">{item.req}</p>
                    </div>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-[#1E3A8A] hover:underline font-semibold inline-flex items-center gap-1"
                    >
                      <span>{item.linkText}</span>
                      <ExternalLink size={11} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 4: 77 Launch Users */}
          {activeTab === "users" && (
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#0A1931]/10 text-xs font-mono">
                <span className="font-semibold text-[#0A1329]">77 Active Midnight Preprod Addresses (Target: 70+)</span>
                <a
                  href="https://github.com/BDutta18/tradexchain/blob/main/LAUNCH_USERS.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1E3A8A] hover:underline font-semibold flex items-center gap-1"
                >
                  View LAUNCH_USERS.md <ExternalLink size={11} />
                </a>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {userValidation.cohorts.map((cohort) => (
                  <div key={cohort.name} className="p-4 rounded-lg border border-[#0A1931]/10 bg-slate-50 flex items-center justify-between">
                    <div>
                      <div className="font-sans font-bold text-sm text-[#0A1329]">{cohort.name}</div>
                      <div className="font-mono text-xs text-slate-500">{cohort.range} · {cohort.phase}</div>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#0A1931] bg-white border border-[#0A1931]/10 px-3 py-1 rounded-full shadow-2xs">
                      {cohort.count} users
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
