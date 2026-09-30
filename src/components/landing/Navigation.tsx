import { useState, useEffect } from "react";
import { Menu, X, ShieldCheck, ArrowUpRight } from "lucide-react";
import { XENOX_CONTENT } from "../../content/xenox";

interface NavigationProps {
  onEnterDashboard?: () => void;
  onConnectWallet?: () => void;
  walletConnected?: boolean;
  walletAddress?: string | null;
}

const navLinks = [
  { name: "How It Works", href: "#how-it-works" },
  { name: "Architecture", href: "#architecture" },
  { name: "Privacy Model", href: "#privacy-model" },
  { name: "Docs", href: "#docs" },
];

export function Navigation({
  onEnterDashboard,
  onConnectWallet,
  walletConnected,
  walletAddress,
}: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ${
        isScrolled ? "top-4 left-4 right-4" : "top-0 left-0 right-0"
      }`}
    >
      <nav
        className={`mx-auto transition-all duration-500 rounded-full ${
          isScrolled || isMobileMenuOpen
            ? "glass-navbar max-w-[1280px]"
            : "bg-white/90 backdrop-blur-xl border border-[#0A1931]/10 shadow-sm max-w-[1400px]"
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 px-6 lg:px-8 ${
            isScrolled ? "h-14" : "h-20"
          }`}
        >
          {/* Logo ONLY */}
          <a href="#" className="flex items-center group py-2" aria-label="Home">
            <img
              src={XENOX_CONTENT.brand.logo}
              alt="Logo"
              className={`transition-all duration-500 object-contain ${
                isScrolled ? "h-7" : "h-9"
              }`}
            />
          </a>

          {/* Desktop Navigation: Architecture, Privacy Model, Docs ONLY */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono font-medium text-slate-600 hover:text-[#0A1329] transition-colors duration-200 relative group uppercase tracking-wider"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0A1931] transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </div>

          {/* Desktop Top Right: GitHub ↗ and Launch App ONLY */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={XENOX_CONTENT.urls.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-semibold text-slate-600 hover:text-[#0A1329] flex items-center gap-1 transition-colors px-3 py-1.5 rounded-full hover:bg-slate-100 uppercase tracking-wider"
            >
              GitHub
              <ArrowUpRight size={13} />
            </a>

            <button
              onClick={walletConnected ? onEnterDashboard : onConnectWallet || onEnterDashboard}
              className={`bg-[#0A1931] hover:bg-[#132A52] text-white rounded-full font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer ${
                isScrolled ? "px-4 h-9" : "px-5 h-10"
              }`}
            >
              {walletConnected ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>
                    {walletAddress
                      ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
                      : "Connected"}
                  </span>
                </>
              ) : (
                <>
                  <ShieldCheck size={14} className="text-sky-300" />
                  <span>Launch App</span>
                </>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#0A1329]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed inset-0 bg-white/98 backdrop-blur-2xl z-50 transition-all duration-500 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: 0 }}
      >
        {/* Mobile Drawer Top Header: Logo on left, prominent Cross in top right */}
        <div className="absolute top-0 left-0 right-0 h-20 px-6 flex items-center justify-between border-b border-slate-100 bg-white/90 backdrop-blur-md">
          <div className="flex items-center">
            <img
              src={XENOX_CONTENT.brand.logo}
              alt="Logo"
              className="h-8 w-auto object-contain"
            />
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0A1329] transition-colors cursor-pointer flex items-center justify-center shadow-sm"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col h-full px-8 pt-28 pb-8">
          <div className="flex-1 flex flex-col justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-display font-semibold text-[#0A1329] hover:text-[#1E3A8A] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href={XENOX_CONTENT.urls.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-mono text-slate-600 hover:text-[#0A1329] transition-colors flex items-center gap-1 uppercase tracking-wider"
            >
              GitHub <ArrowUpRight size={16} />
            </a>
          </div>

          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              walletConnected ? onEnterDashboard?.() : onConnectWallet ? onConnectWallet() : onEnterDashboard?.();
            }}
            className="w-full bg-[#0A1931] text-white py-3.5 rounded-full font-mono text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <ShieldCheck size={14} />
            <span>Launch App</span>
          </button>
        </div>
      </div>
    </header>
  );
}
