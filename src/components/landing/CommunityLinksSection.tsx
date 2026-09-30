import { ExternalLink, ArrowRight } from "lucide-react";
import { XENOX_CONTENT } from "../../content/xenox";

export function CommunityLinksSection() {
  const { resources } = XENOX_CONTENT;

  return (
    <section id="community" className="py-24 lg:py-36 border-t border-black/[0.08] bg-[#f9fafb]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-16">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-zinc-500 mb-4">
            <span className="w-8 h-px bg-black/40" />
            Ecosystem & Community Verification
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight text-black">
            Public artifacts & proof of work.
          </h2>
          <p className="mt-3 text-base text-zinc-600 font-sans">
            Every link, form, sheet, commit, and demonstration video verifiable by evaluators and the Midnight community.
          </p>
        </div>

        {/* Resources Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((res) => (
            <a
              key={res.title}
              href={res.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 border border-black/10 rounded-2xl bg-white shadow-sm hover:border-black/30 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-zinc-400">Resource</span>
                  <ExternalLink size={13} className="text-zinc-400 group-hover:text-black transition-colors" />
                </div>
                <h3 className="font-display text-xl text-black font-semibold mb-2 group-hover:text-purple-700 transition-colors">
                  {res.title}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed font-sans mb-6">
                  {res.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-black/5 flex items-center justify-between text-xs font-mono font-semibold text-black group-hover:text-purple-700">
                <span>{res.cta}</span>
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
