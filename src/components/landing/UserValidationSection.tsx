import { Users, CheckCircle2, ExternalLink } from "lucide-react";
import { XENOX_CONTENT } from "../../content/xenox";

export function UserValidationSection() {
  const { target, status, network, cohorts } = XENOX_CONTENT.userValidation;

  return (
    <section id="launch-users" className="py-24 lg:py-36 border-t border-black/[0.08] bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Summary */}
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-zinc-500 mb-4">
              <span className="w-8 h-px bg-black/40" />
              Preprod Testnet Validation
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight text-black mb-6">
              77 real addresses on Midnight.
            </h2>
            <p className="text-base lg:text-lg text-zinc-600 leading-relaxed font-sans mb-8">
              Exceeded the mandatory 70-user threshold for the Level 6 Supermoon milestone. 
              Active testnet participants submitted strategies, generated Zero-Knowledge proofs, and simulated trades.
            </p>

            <div className="p-6 rounded-2xl bg-zinc-50 border border-black/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500 uppercase">Supermoon Milestone Target</span>
                <span className="text-xs font-mono font-bold text-black">{target}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500 uppercase">Verification Network</span>
                <span className="text-xs font-mono text-purple-700 font-semibold">{network}</span>
              </div>
              <div className="pt-2 border-t border-black/5 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-emerald-700">{status}</span>
                <a
                  href="https://github.com/BDutta18/tradexchain/blob/main/LAUNCH_USERS.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-black hover:text-purple-700 underline font-semibold"
                >
                  View LAUNCH_USERS.md <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Cohorts Cards */}
          <div className="lg:col-span-6 space-y-4">
            {cohorts.map((cohort) => (
              <div
                key={cohort.name}
                className="p-6 border border-black/10 rounded-2xl bg-white shadow-sm hover:shadow transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-mono text-xs font-bold">
                      {cohort.count}
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-base text-black">{cohort.name}</h3>
                      <div className="font-mono text-xs text-zinc-500">{cohort.range}</div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle2 size={11} /> {cohort.status}
                  </span>
                </div>
                <p className="text-xs text-zinc-600 font-sans mt-2">
                  {cohort.phase}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
