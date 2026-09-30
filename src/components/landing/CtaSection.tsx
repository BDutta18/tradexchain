import { useState } from "react";
import { ArrowRight, Play, ExternalLink } from "lucide-react";
import { AnimatedTetrahedron } from "../canvas/AnimatedTetrahedron";
import { XENOX_CONTENT } from "../../content/xenox";

interface CtaSectionProps {
  onEnterDashboard?: () => void;
}

export function CtaSection({ onEnterDashboard }: CtaSectionProps) {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section className="py-24 lg:py-36 overflow-hidden bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          onMouseMove={handleMouseMove}
          className="relative border border-black/15 rounded-3xl p-8 lg:p-16 overflow-hidden bg-white shadow-xl"
        >
          {/* Mouse spotlight */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(20,20,16,0.2), transparent 45%)`,
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 block mb-4">
                Midnight Preprod Confidential Trading
              </span>
              <h2 className="text-4xl lg:text-7xl font-display tracking-tight text-black mb-6 leading-[0.95]">
                Ready to trade in
                <br />
                Zero-Knowledge?
              </h2>
              <p className="text-base lg:text-lg text-zinc-600 leading-relaxed mb-8 max-w-xl font-sans">
                State your risk parameters once. Every trade after is cryptographically proven in Zero-Knowledge on Midnight Preprod — with 0% strategy exposure and zero front-running.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <button
                  type="button"
                  onClick={onEnterDashboard}
                  className="inline-flex items-center justify-center bg-black hover:bg-zinc-800 text-white px-8 h-14 text-base font-medium rounded-full transition-transform hover:-translate-y-0.5 group shadow-lg cursor-pointer"
                >
                  Launch Xenox DApp
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </button>
                <a
                  href={XENOX_CONTENT.urls.demoVideo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-14 px-8 text-base font-medium rounded-full border border-black/20 hover:bg-black/5 transition-colors text-black"
                >
                  <Play className="w-4 h-4 mr-2 fill-current" />
                  Watch Demo Video
                </a>
              </div>

              <div className="mt-8 flex items-center gap-3 text-xs font-mono text-zinc-400">
                <span>Contract:</span>
                <code className="text-zinc-600 select-all truncate max-w-sm">
                  {XENOX_CONTENT.contract.address}
                </code>
              </div>
            </div>

            {/* Right 3D Wireframe ASCII Tetrahedron */}
            <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] shrink-0 opacity-80 pointer-events-none">
              <AnimatedTetrahedron />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
