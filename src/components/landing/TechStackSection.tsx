import { XENOX_CONTENT } from "../../content/xenox";

export function TechStackSection() {
  const { techStack } = XENOX_CONTENT;

  return (
    <section id="tech-stack" className="py-24 lg:py-36 overflow-hidden bg-[#fcfcfc] border-t border-black/[0.08]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-16 lg:mb-20 text-center">
        <span className="inline-flex items-center gap-3 text-sm font-mono text-zinc-500 mb-4">
          <span className="w-8 h-px bg-black/40" />
          Production Tech Stack
          <span className="w-8 h-px bg-black/40" />
        </span>
        <h2 className="text-4xl lg:text-6xl font-display tracking-tight text-black mb-4">
          Engineered with modern primitives.
        </h2>
        <p className="text-base lg:text-lg text-zinc-600 max-w-xl mx-auto font-sans">
          From Midnight Compact ZKIR to Gemini 2.5 Flash, Xenox Trade leverages zero-knowledge cryptography and high-performance Web3 tooling.
        </p>
      </div>

      {/* Marquee Row 1 */}
      <div className="w-full mb-6 overflow-hidden">
        <div className="flex gap-6 marquee whitespace-nowrap">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-6 shrink-0">
              {techStack.map((item) => (
                <div
                  key={`${item.tech}-${setIdx}`}
                  className="px-8 py-5 border border-black/10 rounded-2xl bg-white hover:border-black/30 hover:shadow-sm transition-all"
                >
                  <div className="text-base font-semibold text-black font-sans">{item.tech}</div>
                  <div className="text-xs font-mono text-zinc-500 mt-1 flex items-center gap-2">
                    <span className="font-semibold text-purple-700">{item.layer}</span>
                    <span>·</span>
                    <span className="text-zinc-600">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (Reverse) */}
      <div className="w-full overflow-hidden">
        <div className="flex gap-6 marquee-reverse whitespace-nowrap">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-6 shrink-0">
              {[...techStack].reverse().map((item) => (
                <div
                  key={`${item.tech}-rev-${setIdx}`}
                  className="px-8 py-5 border border-black/10 rounded-2xl bg-white hover:border-black/30 hover:shadow-sm transition-all"
                >
                  <div className="text-base font-semibold text-black font-sans">{item.tech}</div>
                  <div className="text-xs font-mono text-zinc-500 mt-1 flex items-center gap-2">
                    <span className="font-semibold text-purple-700">{item.layer}</span>
                    <span>·</span>
                    <span className="text-zinc-600">{item.desc}</span>
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
