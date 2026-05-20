"use client";

import React from 'react';
import Image from 'next/image'; // Importing Next.js Image for optimization
import { motion } from 'framer-motion';
import { Leaf, Rabbit, Zap, ArrowRight, Activity } from 'lucide-react';

// Keep your cleaned-up data array here
const futureInitiatives = [
  {
    title: "Wildlife Corridors",
    subtitle: "Ecological Continuity",
    description: "Re-engineering culverts into subterranean bridges that restore natural migration paths and reduce vehicle-wildlife collisions.",
    icon: <Rabbit className="w-8 h-8" />,
    data: "85% FATALITY REDUCTION",
    // We remove the img path from here and define it once below for cleaner code
  },
  {
    title: "Utility Tunnels",
    subtitle: "Modular Smart-Cities",
    description: "Dual-purpose box culverts designed to house fiber optics, power, and water, allowing for maintenance without surface excavation.",
    icon: <Zap className="w-8 h-8" />,
    data: "REF_UTILITY_V2.0",
  },
  {
    title: "Eco-Friendly Concrete",
    subtitle: "Carbon-Negative Precast",
    description: "Implementing Pozzolanic admixtures and CO2 mineralization to create culverts that actively sequester carbon over their 100-year lifespan.",
    icon: <Leaf className="w-6 h-6" />,
    data: "NET_ZERO_CERTIFIED",
  }
];

// Define your single image path once for perfect consistency across all 3 panels
const kulvertBgImage = "/assets/BOX CULVERTS.png";

export default function FutureCulvertComponent() {
  return (
    // We use PEG Dark Blue (#004aad) as the foundation color
    <section className="w-full bg-[#004aad] overflow-hidden flex flex-col select-none">
      
      {/* 1. HEADER STRIP: 32" Screen Information Density */}
      <div className="w-full px-10 md:px-20 py-16 flex justify-between items-end border-b border-white/10 relative z-30">
        <div className="space-y-2">
          <p className="text-[#1B79EE] font-mono text-[10px] font-black uppercase tracking-[0.5em]">Vision_026_Series // 2030+ OPS</p>
          <h2 className="text-white text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
            THE FUTURE OF <br />
            <span style={{ WebkitTextStroke: "1.5px #1B79EE", color: "transparent" }}>BOX CULVERTS.</span>
          </h2>
        </div>
        <div className="hidden 2xl:flex flex-col items-end gap-3 text-right opacity-50">
           <Activity className="w-8 h-8 text-[#1B79EE] animate-pulse" />
           <p className="font-mono text-xs text-white max-w-[280px] uppercase tracking-wider leading-relaxed">
             Simulating high-precision precast environments for next-generation ecological continuity and smart-city utility integration.
           </p>
        </div>
      </div>

      {/* 2. TRIPTYCH GRID: The 3 vertical panels */}
      <div className="flex-grow grid grid-cols-1 md:grid-cols-3 h-full">
        {futureInitiatives.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: idx * 0.2 }}
            // Cursor pointer invites interaction
            className="group relative flex flex-col justify-end p-12 overflow-hidden border-r border-white/10 last:border-r-0 min-h-[600px] cursor-pointer"
          >
            
            {/* THE FIX: We use a separate div for the background image.
               - object-cover handles the scaling and cropping.
               - grayscale and brightness filters create that clean editorial look.
               - duration-[3000ms] makes the hover transition slow and premium.
            */}
            <div className="absolute inset-0 z-0 transition-transform duration-[3000ms] group-hover:scale-110">
                <Image 
                    src={kulvertBgImage} 
                    alt="PEG Future Culvert Concept"
                    fill
                    priority={idx === 0} // Prioritize first panel for faster paint
                    className="object-cover object-center grayscale brightness-[0.3] group-hover:grayscale-0 group-hover:brightness-[0.6] transition-all duration-700"
                />
            </div>

            {/* Architectural Overlay for perfect text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#004aad] via-[#004aad]/50 to-transparent z-10" />

            {/* MAIN CONTENT: Elevated above the image and gradient */}
            <div className="relative z-20 space-y-7">
              <div className="flex justify-between items-center">
                {/* Icon animates (rotates 360) on card hover */}
                <div className="p-4 bg-white text-[#004aad] transition-transform duration-700 group-hover:rotate-[360deg]">
                  {item.icon}
                </div>
                {/* Data point fills the corner space */}
                <span className="font-mono text-[9px] text-white/50 tracking-[0.4em] uppercase font-bold">
                  {item.data}
                </span>
              </div>

              <div>
                <p className="text-[#1B79EE] font-black text-xs uppercase tracking-widest mb-2">{item.subtitle}</p>
                <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-5 transition-all group-hover:text-[#1B79EE] leading-none">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm font-medium leading-relaxed max-w-sm group-hover:text-white transition-colors">
                  {item.description}
                </p>
              </div>

              {/* Agency Pro Call-To-Action (hidden initially, reveals on hover) */}
              <div className="pt-6 border-t border-white/10 flex items-center gap-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                <span className="text-white font-black text-[10px] uppercase tracking-[0.4em]">Initialize Deployment</span>
                <ArrowRight className="w-5 h-5 text-[#1B79EE]" />
              </div>
            </div>

            {/* DECORATIVE CORNER NUMBER: Visually anchors the column */}
            <div className="absolute top-12 right-12 z-20 font-mono text-white/10 text-9xl font-black group-hover:text-[#1B79EE]/10 transition-colors cursor-default">
              0{idx + 1}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}