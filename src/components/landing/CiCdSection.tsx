import { CheckCircle2, GitBranch, ArrowUpRight, Workflow } from "lucide-react";
import { XENOX_CONTENT } from "../../content/xenox";

export function CiCdSection() {
  const { jobs } = XENOX_CONTENT.cicd;
  const { ciWorkflow, githubCommits } = XENOX_CONTENT.urls;

  return (
    <section id="cicd" className="py-24 lg:py-36 border-t border-black/[0.08] bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-zinc-500 mb-4">
              <span className="w-8 h-px bg-black/40" />
              Automated CI/CD Pipeline
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight text-black">
              5-job verification matrix.
            </h2>
            <p className="mt-3 text-base text-zinc-600 font-sans">
              Every commit to <code className="bg-zinc-100 text-black px-1.5 py-0.5 rounded font-mono text-xs">main</code> is automatically verified across Compact AST, multi-node runtimes, and privacy leakage filters.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={ciWorkflow}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/15 bg-white text-xs font-mono text-black hover:bg-zinc-50 transition-colors shadow-sm"
            >
              <Workflow size={13} />
              <span>Inspect Workflow Run ↗</span>
            </a>
            <a
              href={githubCommits}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/15 bg-white text-xs font-mono text-zinc-600 hover:text-black hover:bg-zinc-50 transition-colors"
            >
              <GitBranch size={13} />
              <span>33+ Verified Commits ↗</span>
            </a>
          </div>
        </div>

        {/* 5-job Pipeline Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="p-5 border border-black/10 rounded-2xl bg-zinc-50/70 hover:bg-zinc-50 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-zinc-400">Job {job.id}</span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle2 size={11} /> Pass
                  </span>
                </div>
                <h3 className="font-mono text-sm font-bold text-black mb-1">
                  {job.name}
                </h3>
                <div className="font-mono text-[11px] text-purple-700 mb-3">
                  {job.env}
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                  {job.verifies}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-black/5 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                <span>Exit Code 0</span>
                <span className="text-emerald-600">Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
