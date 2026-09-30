import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { AnimatedTetrahedron } from "../canvas/AnimatedTetrahedron";

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
    <section className="py-20 lg:py-28 overflow-hidden bg-white border-t border-[#0A1931]/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          onMouseMove={handleMouseMove}
          className="relative border border-[#0A1931]/15 rounded-3xl p-8 lg:p-14 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-[#F0F4FA] shadow-lg"
        >
          {/* Mouse spotlight in subtle navy */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(15,31,61,0.18), transparent 45%)`,
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex-1 max-w-xl">
              <span className="font-mono text-xs uppercase tracking-widest text-[#1E3A8A] block mb-3 font-semibold">
                Confidential Protocol
              </span>
              <h2 className="text-3xl lg:text-6xl font-display tracking-tight text-[#0A1329] mb-4 leading-[0.96]">
                Ready to trade in
                <br />
                Zero-Knowledge?
              </h2>
              <p className="text-sm lg:text-base text-slate-600 leading-relaxed mb-6 font-sans">
                State risk parameters once. Every trade after is mathematically proven in Zero-Knowledge — with zero strategy exposure and zero front-running.
              </p>

              <div>
                <button
                  type="button"
                  onClick={onEnterDashboard}
                  className="inline-flex items-center justify-center bg-[#0A1931] hover:bg-[#132A52] text-white px-8 h-12 text-xs font-mono font-semibold uppercase tracking-wider rounded-full transition-all hover:-translate-y-0.5 group shadow-md cursor-pointer"
                >
                  Launch App
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right 3D Wireframe ASCII Tetrahedron */}
            <div className="w-[280px] h-[280px] lg:w-[360px] lg:h-[360px] shrink-0 opacity-80 pointer-events-none">
              <AnimatedTetrahedron />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
