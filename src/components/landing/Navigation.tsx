import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, ShieldCheck, Terminal } from "lucide-react";
import { XENOX_CONTENT } from "../../content/xenox";

interface NavigationProps {
  onEnterDashboard?: () => void;
  onConnectWallet?: () => void;
  walletConnected?: boolean;
  walletAddress?: string | null;
}

const navLinks = [
  { name: "Contract", href: "#contract" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Privacy Model", href: "#privacy-model" },
  { name: "Architecture", href: "#architecture" },
  { name: "Tests (42/42)", href: "#tests" },
  { name: "CI/CD", href: "#cicd" },
  { name: "Checklist", href: "#checklist" },
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
            : "bg-white/80 backdrop-blur-xl border border-black/[0.08] shadow-sm max-w-[1400px]"
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 px-6 lg:px-8 ${
            isScrolled ? "h-14" : "h-20"
          }`}
        >
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src={XENOX_CONTENT.brand.logo}
              alt="Xenox Trade Logo"
              className={`transition-all duration-500 object-contain rounded-md ${
                isScrolled ? "h-7" : "h-9"
              }`}
            />
            <span
              className={`font-display font-bold tracking-tight text-black transition-all duration-500 ${
                isScrolled ? "text-xl" : "text-2xl"
              }`}
            >
              {XENOX_CONTENT.brand.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono font-medium text-zinc-700 hover:text-black transition-colors duration-200 relative group uppercase tracking-wider"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={XENOX_CONTENT.urls.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-zinc-700 hover:text-black flex items-center gap-1 transition-colors px-3 py-1.5 rounded-full hover:bg-black/5"
            >
              GitHub
              <ArrowUpRight size={13} />
            </a>
            <a
              href={XENOX_CONTENT.urls.xProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-zinc-700 hover:text-black flex items-center gap-1 transition-colors px-3 py-1.5 rounded-full hover:bg-black/5"
            >
              X (@Xenoxtradex)
              <ArrowUpRight size={13} />
            </a>
            <button
              onClick={walletConnected ? onEnterDashboard : onConnectWallet || onEnterDashboard}
              className={`bg-black hover:bg-zinc-800 text-white rounded-full font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2 ${
                isScrolled ? "px-4 h-9" : "px-5 h-10"
              }`}
            >
              <ShieldCheck size={14} className="text-emerald-400" />
              {walletConnected ? "Open Terminal" : "Launch App"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-black"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed inset-0 bg-white/95 backdrop-blur-2xl z-40 transition-all duration-500 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: 0 }}
      >
        <div className="flex flex-col h-full px-8 pt-28 pb-8">
          <div className="flex-1 flex flex-col justify-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-display font-semibold text-black hover:text-zinc-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href={XENOX_CONTENT.urls.xProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-mono text-zinc-600 hover:text-black transition-colors pt-2"
            >
              X Profile (@Xenoxtradex) ↗
            </a>
          </div>

          <div className="flex gap-4 pt-6 border-t border-black/10">
            <a
              href={XENOX_CONTENT.urls.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border border-black/20 text-black rounded-full h-12 text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center hover:bg-black/5"
            >
              GitHub
            </a>
            <button
              className="flex-1 bg-black text-white rounded-full h-12 text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-zinc-800"
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (walletConnected && onEnterDashboard) onEnterDashboard();
                else if (onConnectWallet) onConnectWallet();
                else if (onEnterDashboard) onEnterDashboard();
              }}
            >
              <Terminal size={14} className="text-emerald-400" />
              {walletConnected ? "Open Terminal" : "Launch App"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
