import { ArrowUpRight } from "lucide-react";
import { AnimatedWave } from "../canvas/AnimatedWave";
import { XENOX_CONTENT } from "../../content/xenox";

export function FooterSection() {
  const { brand, urls, footer } = XENOX_CONTENT;

  return (
    <footer className="relative border-t border-black/[0.08] bg-white overflow-hidden pt-16 pb-12">
      {/* Animated wave background */}
      <div className="absolute inset-0 h-72 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 lg:gap-8 pb-16">
          {/* Brand */}
          <div className="col-span-2">
            <div className="inline-flex items-center gap-3 mb-4">
              <img
                src={brand.logo}
                alt="Xenox Trade"
                className="w-8 h-8 rounded-lg object-contain shadow-sm border border-black/10"
              />
              <span className="text-2xl font-display font-bold text-black tracking-tight">
                {brand.name}
              </span>
            </div>

            <p className="text-sm text-zinc-600 leading-relaxed mb-6 max-w-xs font-sans">
              Confidential AI-orchestrated trading protocol built on Midnight. Proving execution in Zero-Knowledge with zero strategy rules exposed.
            </p>

            <div className="flex flex-col gap-2 text-xs font-mono text-zinc-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Midnight Preprod Testnet Active
              </span>
              <span className="text-[11px] text-zinc-400">
                Compact v1.3.0 · Supermoon Level 6
              </span>
            </div>
          </div>

          {/* 3 Link Columns from content */}
          {Object.entries(footer.columns).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-black mb-4">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-zinc-500 hover:text-black transition-colors inline-flex items-center gap-1 group font-sans"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Submission Info Column */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-black mb-4">
              Bounty Submission
            </h3>
            <ul className="space-y-2.5 text-xs text-zinc-500 font-sans">
              <li>
                <a
                  href={brand.bountyDocUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors inline-flex items-center gap-1"
                >
                  Level 6 Doc <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={urls.feedbackForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors inline-flex items-center gap-1"
                >
                  Feedback Form <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={urls.xProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors inline-flex items-center gap-1"
                >
                  {urls.xProfileHandle} <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <p>{footer.copyright}</p>
          <div className="flex gap-6">
            <a
              href={urls.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              GitHub
            </a>
            <a
              href={urls.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              Live Demo
            </a>
            <a
              href={urls.preprodExplorer}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              Preprod Explorer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
