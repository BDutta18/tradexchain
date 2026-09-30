import { ExternalLink, ArrowRight } from "lucide-react";
import { XENOX_CONTENT } from "../../content/xenox";

export function CommunityLinksSection() {
  const { resources } = XENOX_CONTENT;

  return (
    <section id="community" className="py-20 lg:py-28 border-t border-[#0A1931]/10 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-xl mb-12">
          <span className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#1E3A8A] mb-3 font-semibold">
            <span className="w-8 h-px bg-[#1E3A8A]/50" />
            Artifacts & Resources
          </span>
          <h2 className="text-3xl lg:text-5xl font-display tracking-tight text-[#0A1329]">
            Public submission artifacts.
          </h2>
        </div>

        {/* Resources Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {resources.map((res) => (
            <a
              key={res.title}
              href={res.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 border border-[#0A1931]/10 rounded-xl bg-slate-50/60 hover:bg-slate-50 hover:border-[#1E3A8A]/40 transition-all flex flex-col justify-between group shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Resource</span>
                  <ExternalLink size={12} className="text-slate-400 group-hover:text-[#0A1931] transition-colors" />
                </div>
                <h3 className="font-display text-lg text-[#0A1329] font-bold mb-1 group-hover:text-[#1E3A8A] transition-colors">
                  {res.title}
                </h3>
                <p className="text-xs text-slate-600 font-sans mb-4">
                  {res.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#0A1931]/5 flex items-center justify-between text-xs font-mono font-semibold text-[#0A1931] group-hover:text-[#1E3A8A]">
                <span>{res.cta}</span>
                <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
