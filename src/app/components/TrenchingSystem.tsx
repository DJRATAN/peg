"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Waypoints, Ruler, Shield, Zap } from "lucide-react";

const trenchData = [
  { 
    id: "01", 
    title: "Cable Trenching", 
    tagline: "The Arteries of Infrastructure.",
    img: "/assets/images/pre-trench/pre-trench-01.JPG",
    isPrimary: true 
  },
  { 
    id: "02", 
    title: "H-20 Road Crossing", 
    tagline: "Unyielding Under Pressure.",
    img: "/assets/images/pre-trench/pre-trench-05.JPG",
    isPrimary: false
  },
  { 
    id: "03", 
    title: "Substation Vaults", 
    tagline: "Securing the Node.",
    img: "/assets/images/pre-trench/trench-grates-img-diagonal-view (1).jpg",
    isPrimary: false
  }
];

export default function TrenchingSystemScroll() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Perfectly tuned scroll distance for a 3-card set + intro
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white">
      
      {/* CONSTRAINED STICKY VIEWPORT */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden max-w-[1600px] mx-auto px-10 md:px-20">
        
        {/* MILES & MILES BACKGROUND WATERMARK */}
        <div className="absolute top-24 left-10 md:left-20 pointer-events-none select-none">
            <h2 className="text-[10vw] font-black text-[#004aad] opacity-[0.03] leading-none uppercase">
                Miles & Miles
            </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-8 items-center relative z-10">
          
          {/* INTRO BLOCK: THE MANIFESTO */}
          <div className="flex h-[450px] w-[450px] shrink-0 flex-col justify-center p-12 bg-[#004aad] text-white relative shadow-xl">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#1B79EE]" />
            <Waypoints className="w-10 h-10 text-[#1B79EE] mb-6" />
            <h3 className="text-5xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
                Trenching <br /> Systems.
            </h3>
            <p className="text-white/70 text-xs leading-relaxed mb-8 font-medium">
                We have undertaken miles and miles of integrated trenching systems, delivering the unyielding backbone for global power and data networks.
            </p>
            <div className="flex items-center gap-3 text-white font-black text-[10px] uppercase tracking-widest bg-[#1B79EE] px-6 py-4 self-start shadow-lg">
                <Ruler className="w-4 h-4" /> 52,800+ Linear Feet
            </div>
          </div>

          {/* THE TRENCH CARDS */}
          {trenchData.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -10 }}
              className={`group relative h-[450px] w-[350px] shrink-0 border transition-all duration-500 overflow-hidden
                ${item.isPrimary 
                  ? 'bg-[#1B79EE] border-[#1B79EE] text-white shadow-[0_20px_50px_rgba(27,121,238,0.3)]' 
                  : 'bg-white border-[#004aad]/10 text-[#004aad] hover:border-[#1B79EE] hover:shadow-[0_20px_50px_rgba(0,74,173,0.1)]'
                }`}
            >
              {/* IMAGE CONTAINER */}
              <div className={`relative h-48 w-full flex items-center justify-center p-8 transition-colors duration-500
                ${item.isPrimary ? 'bg-white/10' : 'bg-[#004aad]/5 group-hover:bg-[#1B79EE]/5'}
              `}>
                <div className="relative w-full h-full">
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill 
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                {/* ID Tag */}
                <div className="absolute top-4 left-4 bg-white px-2 py-0.5 border border-[#004aad]/10">
                   <span className="text-[8px] font-black text-[#004aad] uppercase tracking-widest">{item.id}</span>
                </div>
              </div>

              {/* CONTENT AREA */}
              <div className="p-8 flex flex-col flex-grow">
                <h4 className={`text-2xl font-black uppercase tracking-tighter leading-tight mb-2
                  ${item.isPrimary ? 'text-white' : 'text-[#004aad]'}
                `}>
                    {item.title}
                </h4>
                <p className={`text-[10px] font-black uppercase tracking-tight mb-4
                  ${item.isPrimary ? 'text-white/80' : 'text-[#004aad]/70'}
                `}>
                    {item.tagline}
                </p>

                {/* FOOTER ACTION */}
                <div className={`mt-auto pt-6 border-t flex justify-between items-center
                  ${item.isPrimary ? 'border-white/20' : 'border-[#004aad]/5'}
                `}>
                  <button className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest transition-all">
                      View Blueprint <ArrowRight className="w-3 h-3" />
                  </button>
                  <Shield className={`w-4 h-4 ${item.isPrimary ? 'text-white/40' : 'text-[#004aad]/10'}`} />
                </div>
              </div>

              {/* Interaction Top Accent for White Cards */}
              {!item.isPrimary && (
                <div className="absolute top-0 left-0 w-0 h-1 bg-[#1B79EE] group-hover:w-full transition-all duration-700" />
              )}
            </motion.div>
          ))}

          {/* FINAL ACTION BLOCK */}
          <div className="flex h-[450px] w-[400px] shrink-0 flex-col items-center justify-center p-10 bg-white border-2 border-dashed border-[#1B79EE] relative">
             <Zap className="w-12 h-12 text-[#1B79EE] mb-6 animate-pulse" />
             <h3 className="text-3xl font-black text-[#004aad] text-center uppercase tracking-tighter leading-none mb-4">
                Scalable <br /> Systems.
             </h3>
             <p className="text-[#004aad]/60 text-center text-[10px] font-black mb-8 max-w-xs uppercase tracking-tighter">
                Seamlessly integrated from desk to shop floor.
             </p>
             <button className="bg-[#004aad] hover:bg-[#1B79EE] text-white px-10 py-4 text-[10px] font-black uppercase tracking-widest transition-all shadow-xl">
                Initiate Protocol
             </button>
          </div>

        </motion.div>
      </div>
    </section>
  );
}