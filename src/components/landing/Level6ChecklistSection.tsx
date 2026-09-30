import { CheckCircle2, ExternalLink } from "lucide-react";
import { XENOX_CONTENT } from "../../content/xenox";

export function Level6ChecklistSection() {
  const { checklist } = XENOX_CONTENT;

  return (
    <section id="checklist" className="py-24 lg:py-36 border-t border-black/[0.08] bg-[#fafafa]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-16">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-zinc-500 mb-4">
            <span className="w-8 h-px bg-black/40" />
            Supermoon Level 6 Bounty
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight text-black">
            Submission checklist.
          </h2>
          <p className="mt-3 text-base text-zinc-600 font-sans">
            Every mandatory requirement satisfied and verifiable on GitHub, Vercel, and the Midnight Preprod blockchain.
          </p>
        </div>

        {/* 6-item Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {checklist.map((item) => (
            <div
              key={item.num}
              className="p-6 border border-black/10 rounded-2xl bg-white shadow-sm hover:border-black/30 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-zinc-400">Requirement 0{item.num}</span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle2 size={11} /> {item.status}
                  </span>
                </div>
                <h3 className="font-sans text-base font-semibold text-black mb-3">
                  {item.req}
                </h3>
              </div>

              <div className="pt-4 border-t border-black/5 mt-4">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-700 hover:text-purple-900 font-semibold group"
                >
                  <span>{item.linkText}</span>
                  <ExternalLink size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
