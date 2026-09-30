import { ArrowUpRight } from "lucide-react";
import { AnimatedWave } from "../canvas/AnimatedWave";
import { XENOX_CONTENT } from "../../content/xenox";

export function FooterSection() {
  const { brand, urls, footer } = XENOX_CONTENT;

  return (
    <footer className="relative border-t border-[#0A1931]/10 bg-white overflow-hidden pt-16 pb-12">
      {/* Animated wave background */}
      <div className="absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 pb-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="inline-flex items-center gap-3 mb-3">
              <img
                src={brand.logo}
                alt="Xenox Trade"
                className="w-8 h-8 rounded-lg object-contain shadow-xs border border-[#0A1931]/10"
              />
              <span className="text-2xl font-display font-bold text-[#0A1329] tracking-tight">
                {brand.name}
              </span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-4 max-w-xs font-sans">
              Confidential AI-orchestrated trading protocol on Midnight. Proving execution in Zero-Knowledge with zero strategy rules exposed.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Midnight Preprod Testnet Active</span>
            </div>
          </div>

          {/* 3 Link Columns */}
          {Object.entries(footer.columns).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0A1329] mb-3">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-600 hover:text-[#0A1329] transition-colors inline-flex items-center gap-1 group font-sans"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#1E3A8A]" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Submission Info Column */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0A1329] mb-3">
              Supermoon Level 6
            </h3>
            <ul className="space-y-2 text-xs text-slate-600 font-sans">
              <li>
                <a
                  href={brand.bountyDocUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0A1329] transition-colors inline-flex items-center gap-1"
                >
                  Bounty Doc <ArrowUpRight className="w-3 h-3 text-[#1E3A8A]" />
                </a>
              </li>
              <li>
                <a
                  href={urls.feedbackForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0A1329] transition-colors inline-flex items-center gap-1"
                >
                  Feedback Form <ArrowUpRight className="w-3 h-3 text-[#1E3A8A]" />
                </a>
              </li>
              <li>
                <a
                  href={urls.xProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0A1329] transition-colors inline-flex items-center gap-1"
                >
                  {urls.xProfileHandle} <ArrowUpRight className="w-3 h-3 text-[#1E3A8A]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#0A1931]/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>{footer.copyright}</p>
          <div className="flex gap-6">
            <a
              href={urls.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0A1329] transition-colors"
            >
              GitHub
            </a>
            <a
              href={urls.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0A1329] transition-colors"
            >
              Live Demo
            </a>
            <a
              href={urls.preprodExplorer}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0A1329] transition-colors"
            >
              Preprod Explorer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
