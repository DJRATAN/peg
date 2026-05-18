"use client";

import React from "react";
import { motion } from "framer-motion";

// Mock data for 50 agencies (You would replace these with actual logo components or SVGs)
const AGENCIES = Array.from({ length: 50 }).map((_, i) => ({
  id: i,
  name: `AGENCY_${i + 1 < 10 ? `0${i + 1}` : i + 1}`,
}));

export default function AgencySlider() {
  return (
    <section className="py-24 bg-[#F5F5F5] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#004aad]/10 pb-8"
        >
          <div>
            <h2 className="text-[#004aad] text-xs font-black tracking-[0.3em] uppercase mb-2">
              Global Network
            </h2>
            <p className="text-4xl md:text-5xl font-black text-[#004aad] tracking-tighter">
              AGENCY <span style={{ WebkitTextStroke: "1px #1B79EE", color: "transparent" }}>STANDARDS</span>
            </p>
          </div>
          <p className="text-slate-500 font-mono text-xs max-w-[200px]">
            PROVISION FOR 050_CERTIFIED_PARTNERS_USA
          </p>
        </motion.div>
      </div>

      {/* The Slider Container with Edge Masking */}
      <div className="relative flex flex-col gap-8">
        
        {/* Row 1: Sliding Left */}
        <div className="relative flex overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-40 before:bg-gradient-to-r before:from-[#F5F5F5] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-40 after:bg-gradient-to-l after:from-[#F5F5F5] after:to-transparent">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-nowrap"
          >
            {[...AGENCIES, ...AGENCIES].map((agency, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center px-12 py-8 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 group"
              >
                <span className="text-2xl font-black tracking-widest text-[#004aad] group-hover:text-[#1B79EE]">
                  {agency.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Sliding Right (Opposite Direction) */}
        <div className="relative flex overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-40 before:bg-gradient-to-r before:from-[#F5F5F5] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-40 after:bg-gradient-to-l after:from-[#F5F5F5] after:to-transparent">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 55,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-nowrap"
          >
            {[...AGENCIES, ...AGENCIES].reverse().map((agency, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center px-12 py-8 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 group"
              >
                <span className="text-2xl font-black tracking-widest text-[#004aad] group-hover:text-[#1B79EE]"
                      style={{ WebkitTextStroke: "1px #004aad", color: "transparent" }}>
                  {agency.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Descriptive Footer */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-[#004aad]/5"
        >
          {['Compliance', 'Precision', 'Scalability', 'Authorization'].map((stat, i) => (
            <div key={i} className="space-y-1">
              <p className="text-[10px] font-mono text-[#1B79EE]">0{i + 1} // STATUS</p>
              <p className="text-sm font-black text-[#004aad] uppercase tracking-wider">{stat}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}