import { AnimatedWave } from "../canvas/AnimatedWave";
import { XENOX_CONTENT } from "../../content/xenox";

export function FooterSection() {
  const { brand, urls, footer } = XENOX_CONTENT;

  return (
    <footer className="relative border-t border-[#0A1931]/10 bg-white overflow-hidden pt-14 pb-10">
      {/* Animated wave background */}
      <div className="absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10">
          {/* Logo ONLY (No text next to it) */}
          <div className="flex items-center">
            <a href="#" className="inline-block py-1" aria-label="Home">
              <img
                src={brand.logo}
                alt="Logo"
                className="h-9 w-auto object-contain"
              />
            </a>
          </div>

          {/* Navigation Links: Architecture, Privacy Model, Docs ONLY */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono uppercase tracking-wider text-slate-600">
            <a href="#architecture" className="hover:text-[#0A1329] transition-colors">
              Architecture
            </a>
            <a href="#privacy-model" className="hover:text-[#0A1329] transition-colors">
              Privacy Model
            </a>
            <a href="#docs" className="hover:text-[#0A1329] transition-colors">
              Docs
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#0A1931]/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© 2026 Xenox Trade. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Midnight Preprod Testnet Active</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
