"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import StatsSection from "./StatsSection";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function VictoryDayHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [particlePositions, setParticlePositions] = useState<
    { x: number; y: number; scale: number }[]
  >([]);
  const heroRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useRef(false);

  const slideshowImages = [
    "/unnamed-file-scaled-e1696186172332.jpg",
    "/6oct.jpg",
    "/41_2023-638319685702044943-204.jpg",
    "/3-2-400x253.png",
    "/c4108903-ce02-40b6-b2bf-5ac9141b71ab_16x9_1200x676.webp",
  ];

  // Browser-only setup
  useEffect(() => {
    if (typeof window === "undefined") return; 

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotion.current = mediaQuery.matches;

    const timer = setTimeout(() => setIsLoaded(true), 300);
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);

    // Generate particle positions on client
    const positions = [...Array(30)].map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      scale: Math.random() * 0.8 + 0.5,
    }));
    setParticlePositions(positions);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Slideshow logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      ref={heroRef}
      className={cn(
        "relative overflow-hidden transition-all duration-700 bg-black",
        isScrolled ? "h-24" : "h-screen min-h-[85vh]"
      )}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <EgyptianFlag isScrolled={isScrolled} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-amber-400/20 blur-[150px] animate-pulse z-5" />

      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        {particlePositions.map((pos, i) => (
          <motion.span
            key={i}
            className="absolute w-1.5 h-1.5 bg-amber-300 rounded-full opacity-70"
            initial={{
              x: pos.x,
              y: pos.y,
              scale: pos.scale,
            }}
            animate={{
              y: [null, -50],
              opacity: [0.7, 0.2],
              x: [null, pos.x + Math.random() * 100], // small random movement
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* PYRAMIDS & FOG */}
      <div className="absolute inset-0 z-10">
        <PyramidsSilhouette isScrolled={isScrolled} />
        <AtmosphericFog />
      </div>

      {/* FOREGROUND CONTENT */}
      <div
        className={cn(
          "relative z-30 h-full flex flex-col items-center justify-center text-center px-4"
        )}
      >
        {/* 🏆 Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className={`${cinzel.className} text-4xl md:text-7xl font-bold text-center mt-6 
          bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 
          bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,200,0,0.4)] tracking-wide`}
        >
          Victory of the 6th October
        </motion.h1>

        {/* ✨ Glow pulse behind title */}
        <motion.div
          className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-amber-400/20"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ✨ Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-xl md:text-3xl lg:text-4xl font-light text-amber-100/90 mt-4 mb-6 tracking-[0.3em]"
        >
          Pride • Glory • Freedom
        </motion.p>

        {/* 📸 Slideshow */}
        <motion.div
          style={{
            y: isScrolled ? -20 : 0,
          }}
          className="relative w-[90%] sm:w-[75%] md:w-[60%] lg:w-[50%] h-[300px] md:h-[420px] mb-10 rounded-[2rem] overflow-hidden border border-amber-400/30 shadow-[0_0_120px_rgba(255,200,100,0.3)]"
        >
          <AnimatePresence>
            <motion.img
              key={currentIndex}
              src={slideshowImages[currentIndex]}
              alt="Victory moment"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-0 backdrop-blur-[1px]" />
        </motion.div>

        {/* 📊 Stats Section */}
        <StatsSection />

        {/* 🌟 Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Button
            size="lg"
            className="group relative overflow-hidden px-10 py-6 text-lg font-semibold bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 text-black rounded-full shadow-[0_0_40px_rgba(251,191,36,0.4)] hover:shadow-[0_0_80px_rgba(251,191,36,0.7)] transition-all duration-500"
          >
            <a href="https://youtu.be/VfyB9wC1v6s?si=MdruSQN8ne3iOApk">
              <span className="relative z-10">Discover the Story</span>
            </a>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </Button>
        </motion.div>
      </div>
      <footer>
        <div className="absolute bottom-2 w-full text-center text-lg text-white opacity-50 z-30">
          &copy; By Habeba.Ehab.dev 2025 6th October.
        </div>
      </footer>
    </div>
  );
}

/* === FLAG === */
function EgyptianFlag({ isScrolled }: { isScrolled: boolean }) {
  return (
    <svg
      className={cn(
        "absolute inset-0 w-full h-full transition-opacity duration-700",
        isScrolled ? "opacity-10" : "opacity-40"
      )}
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <filter id="wave">
          <feTurbulence type="fractalNoise" baseFrequency="0.008 0.03" numOctaves="2">
            <animate
              attributeName="baseFrequency"
              values="0.008 0.03;0.02 0.05;0.008 0.03"
              dur="10s"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="25" />
        </filter>
      </defs>
      <g filter="url(#wave)">
        <rect x="0" y="0" width="1200" height="267" fill="#CE1126" />
        <rect x="0" y="267" width="1200" height="266" fill="#FFFFFF" />
        <rect x="0" y="533" width="1200" height="267" fill="#000000" />
        <circle cx="600" cy="400" r="50" fill="#D4AF37" opacity="0.8" />
      </g>
    </svg>
  );
}

/* === PYRAMIDS === */
function PyramidsSilhouette({ isScrolled }: { isScrolled: boolean }) {
  return (
    <svg
      className={cn(
        "absolute bottom-0 w-full h-1/2 transition-all duration-700",
        isScrolled ? "opacity-0" : "opacity-90"
      )}
      viewBox="0 0 1200 400"
      preserveAspectRatio="xMidYMax slice"
    >
      <defs>
        <linearGradient id="pyramidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#d4a34f" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#3a2208" stopOpacity="1" />
        </linearGradient>
      </defs>
      <polygon points="400,400 600,120 800,400" fill="url(#pyramidGrad)" />
      <polygon points="700,400 850,170 1000,400" fill="url(#pyramidGrad)" opacity="0.85" />
      <polygon points="180,400 320,200 460,400" fill="url(#pyramidGrad)" opacity="0.7" />
      <rect x="0" y="380" width="1200" height="40" fill="#000" />
    </svg>
  );
}

/* === FOG === */
function AtmosphericFog() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-amber-900/30 via-amber-600/15 to-transparent animate-pulse" />
    </div>
  );
}
