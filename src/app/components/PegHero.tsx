"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Ruler, HardHat } from "lucide-react";

// --- Typing Outline Hook ---
const TypingOutline = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const letters = Array.from(text);
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.05, delayChildren: delay } },
      }}
      className="flex flex-wrap justify-center"
    >
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0 },
          }}
          className="inline-block"
          // PEG Light Blue used for the outline
          style={{
            WebkitTextStroke: "2px #1B79EE",
            color: "transparent",
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default function PegHero() {
  return (
    <section className="relative min-h-screen w-full bg-[#F5F5F5] flex flex-col justify-center items-center overflow-hidden px-4 py-20 font-sans select-none">
      
      {/* Background: Engineering Matrix Grid (Subtle) */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#004aad 1.5px, transparent 1.5px)`, backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl w-full flex flex-col items-center text-center z-10">
        
        {/* Top Floating Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#004aad] text-white px-6 py-2 mb-10 flex items-center gap-3 shadow-lg"
        >
          <HardHat className="w-4 h-4 text-[#1B79EE]" />
          <span className="text-[10px] font-black tracking-[0.5em] uppercase">
            The Infrastructure Standard
          </span>
        </motion.div>

        {/* The Brutalist Typography Block */}
        <div className="flex flex-col items-center leading-[0.8] mb-8 uppercase">
          {/* Row 1: PEG Dark Blue (Solid) */}
          <motion.h1 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[14vw] md:text-[11rem] font-black text-[#004aad] tracking-tighter"
          >
            PRECAST
          </motion.h1>
          
          {/* Row 2: PEG Light Blue (Typing Outline) */}
          <div className="text-[14vw] md:text-[11rem] font-black tracking-tighter">
            <TypingOutline text="ENGINEER" delay={0.6} />
          </div>
          
          {/* Row 3: Solid Dark Blue Accent */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="text-[#004aad] text-[7vw] md:text-[6.5rem] font-black tracking-tight mt-4"
          >
            FOR ANY STRUCTURE.
          </motion.div>
        </div>

        {/* Professional Subtext */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="max-w-2xl text-slate-500 italic text-lg md:text-xl font-medium leading-relaxed mt-4"
        >
          "From municipal streets to international airport runways, 
          we provide the vertical precision required for the world's toughest environments."
        </motion.p>

        {/* Actions using PEG Palette */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.4 }}
          className="flex flex-col sm:flex-row gap-5 mt-14 w-full max-w-lg"
        >
          {/* Primary Button: Dark Blue */}
          <Button className="flex-1 bg-[#004aad] hover:bg-[#1B79EE] text-white rounded-none h-20 text-sm font-black tracking-[0.2em] transition-all duration-500 group shadow-xl">
            INITIALIZE PROPOSAL
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-3" />
          </Button>

          {/* Secondary Button: Outline Dark Blue */}
          <Button variant="outline" className="flex-1 border-2 border-[#004aad] bg-transparent text-[#004aad] rounded-none h-20 text-sm font-black tracking-[0.2em] hover:bg-[#004aad] hover:text-white transition-all duration-500 uppercase">
            <Ruler className="mr-2 w-5 h-5" />
            CAPABILITIES
          </Button>
        </motion.div>
      </div>

      {/* Decorative Blueprint Markers */}
      <div className="absolute top-10 left-10 text-[10px] font-mono text-[#1B79EE] font-bold">
        VER: 2026.04 // ENGINEERED_PRECISION
      </div>
      <div className="absolute bottom-10 right-10 text-[10px] font-mono text-[#004aad] font-bold">
        PEG_GROUP_USA
      </div>
    </section>
  );
}