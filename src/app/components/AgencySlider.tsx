"use client";

import React from "react";
import { motion } from "framer-motion";

// Provision for 50 Agencies
const AGENCIES = Array.from({ length: 50 }).map((_, i) => ({
  id: i,
  name: `AGENCY_${i + 1 < 10 ? `0${i + 1}` : i + 1}`,
}));

export default function FullWidthAgencySlider() {
  return (
    /* overflow-x-hidden on the section prevents the scrollbar entirely */
    <section className="relative w-full   bg-[#F5F5F5] overflow-x-hidden select-none">
      
      {/* 1. HEADER: FULL WIDTH WITH PADDING */}
      <div className="w-full px-10 md:px-20 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#004aad]/10 pb-10"
        >
          <div className="space-y-2">
 
            <p className="text-5xl md:text-7xl font-black text-[#004aad] tracking-tighter leading-none">
              AGENCY <span style={{ WebkitTextStroke: "1.5px #1B79EE", color: "transparent" }}>STANDARDS</span>
            </p>
          </div>
          
 
        </motion.div>
      </div>

      {/* 2. THE SLIDER: EDGE-TO-EDGE */}
      <div className="relative flex flex-col gap-4 w-full">
        
        {/* Row 1: Sliding Left */}
        <div className="relative w-full flex overflow-hidden group">
          {/* Edge Fading Masks */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#F5F5F5] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#F5F5F5] to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 60,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-nowrap whitespace-nowrap"
          >
            {[...AGENCIES, ...AGENCIES].map((agency, idx) => (
              <div
                key={`left-${idx}`}
                className="flex items-center justify-center px-16 py-12 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-default"
              >
                <span className="text-3xl font-black tracking-[0.2em] text-[#004aad] hover:text-[#1B79EE]">
                  {agency.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Sliding Right */}
        <div className="relative w-full flex overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#F5F5F5] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#F5F5F5] to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 75,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-nowrap whitespace-nowrap"
          >
            {[...AGENCIES, ...AGENCIES].reverse().map((agency, idx) => (
              <div
                key={`right-${idx}`}
                className="flex items-center justify-center px-16 py-12 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-default"
              >
                <span 
                  className="text-3xl font-black tracking-[0.2em]"
                  style={{ WebkitTextStroke: "1px #004aad", color: "transparent" }}
                >
                  {agency.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 3. FOOTER: FULL WIDTH GRID */}
      {/* <div className="w-full px-10 md:px-20 mt-16">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-10 border-t border-[#004aad]/5"
        >
          {[
            { label: 'Compliance', status: 'Verified' },
            { label: 'Precision', status: 'Millimeter' },
            { label: 'Scalability', status: 'Unlimited' },
            { label: 'Authorization', status: 'Active' }
          ].map((item, i) => (
            <div key={i} className="group cursor-default">
              <p className="text-xs font-mono text-[#1B79EE] mb-1">
                DATA_POINT_0{i + 1}
              </p>
              <p className="text-lg font-black text-[#004aad] uppercase tracking-tighter group-hover:text-[#1B79EE] transition-colors">
                {item.label}
              </p>
              <p className="text-xs font-mono text-slate-400 mt-1 uppercase">
                Status: {item.status}
              </p>
            </div>
          ))}
        </motion.div>
      </div> */}

    </section>
  );
}