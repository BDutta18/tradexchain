import { XENOX_CONTENT } from "../../content/xenox";

export function TechStackSection() {
  const { techStack } = XENOX_CONTENT;

  return (
    <section id="tech-stack" className="py-20 lg:py-28 overflow-hidden bg-slate-50/60 border-t border-[#0A1931]/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-12 text-center">
        <span className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#1E3A8A] mb-3 font-semibold">
          <span className="w-8 h-px bg-[#1E3A8A]/50" />
          Production Stack
          <span className="w-8 h-px bg-[#1E3A8A]/50" />
        </span>
        <h2 className="text-3xl lg:text-5xl font-display tracking-tight text-[#0A1329]">
          Engineered with modern primitives.
        </h2>
      </div>

      {/* Marquee Row 1 */}
      <div className="w-full mb-4 overflow-hidden">
        <div className="flex gap-4 marquee whitespace-nowrap">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-4 shrink-0">
              {techStack.map((item) => (
                <div
                  key={`${item.tech}-${setIdx}`}
                  className="px-6 py-4 border border-[#0A1931]/10 rounded-xl bg-white hover:border-[#1E3A8A]/40 transition-all shadow-xs"
                >
                  <div className="text-sm font-semibold text-[#0A1329] font-sans">{item.tech}</div>
                  <div className="text-[11px] font-mono text-slate-500 mt-0.5 flex items-center gap-2">
                    <span className="font-semibold text-[#1E3A8A]">{item.layer}</span>
                    <span>·</span>
                    <span className="text-slate-600">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (Reverse) */}
      <div className="w-full overflow-hidden">
        <div className="flex gap-4 marquee-reverse whitespace-nowrap">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-4 shrink-0">
              {[...techStack].reverse().map((item) => (
                <div
                  key={`${item.tech}-rev-${setIdx}`}
                  className="px-6 py-4 border border-[#0A1931]/10 rounded-xl bg-white hover:border-[#1E3A8A]/40 transition-all shadow-xs"
                >
                  <div className="text-sm font-semibold text-[#0A1329] font-sans">{item.tech}</div>
                  <div className="text-[11px] font-mono text-slate-500 mt-0.5 flex items-center gap-2">
                    <span className="font-semibold text-[#1E3A8A]">{item.layer}</span>
                    <span>·</span>
                    <span className="text-slate-600">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
