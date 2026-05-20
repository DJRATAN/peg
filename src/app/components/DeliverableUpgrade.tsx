"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileSignature, PenTool, BookOpenCheck, ArrowRight, Zap } from 'lucide-react';

const upgradeFeatures = [
  {
    title: "Powerful Submittals",
    subtitle: "Zero-Friction Approval",
    description: "Upgrade from basic drafting to comprehensive calculation packages, structural load logic, and PE-stamped documentation engineered for immediate agency sign-off.",
    icon: <FileSignature className="w-8 h-8" />,
    tag: "SYS_SUBMIT"
  },
  {
    title: "Precision Illustrations",
    subtitle: "Multi-Dimensional Clarity",
    description: "Eliminate site-level confusion. We deliver exact-tolerance shop drawings, 3D component isolation, and step-by-step erection sequencing.",
    icon: <PenTool className="w-8 h-8" />,
    tag: "SYS_VISUAL"
  },
  {
    title: "Dynamic Standards",
    subtitle: "Always Code-Compliant",
    description: "Never fall behind. Our drafting protocols are continuously synchronized with the latest PCI, AASHTO, ASTM, and state-specific DOT master specifications.",
    icon: <BookOpenCheck className="w-8 h-8" />,
    tag: "SYS_COMPLY"
  }
];

export default function DeliverableUpgrade() {
  return (
    <section className="relative w-full py-32 bg-[#004aad] text-white overflow-hidden">
      
      {/* BACKGROUND BLUEPRINT GRID */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{ 
          backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
          backgroundSize: '40px 40px' 
        }}
      />

      <div className="w-full px-10 md:px-20 relative z-10">
        
        {/* 1. MASSIVE TYPOGRAPHY HEADER */}
        <div className="max-w-5xl mb-24 space-y-6">
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '100px' }}
            className="h-1 bg-[#1B79EE]"
          />
          <div className="flex items-center gap-4 text-[#1B79EE] font-mono text-[10px] uppercase tracking-[0.5em] font-black">
             <Zap className="w-4 h-4 animate-pulse" /> Engineering Deliverables V2.0
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase">
            Upgrade your <br />
            <span className="text-[#1B79EE]">Precast Drawings.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/60 font-medium max-w-3xl leading-relaxed mt-8 border-l-4 border-[#1B79EE] pl-6">
            Stop losing time on revisions. Elevate your production pipeline with bulletproof submittals, hyper-accurate illustrations, and non-stop code compliance.
          </p>
        </div>

        {/* 2. THE THREE-PILLAR UPGRADE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upgradeFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              className="group relative bg-white/5 border border-white/10 p-10 hover:bg-white hover:text-[#004aad] transition-all duration-500 cursor-pointer flex flex-col h-full overflow-hidden"
            >
              {/* TOP STRIP */}
              <div className="flex justify-between items-start mb-16 relative z-10">
                <div className="p-5 bg-[#1B79EE] text-white transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-6 group-hover:shadow-xl">
                  {feature.icon}
                </div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-white/30 group-hover:text-[#1B79EE]">
                  {feature.tag}
                </span>
              </div>

              {/* CONTENT */}
              <div className="relative z-10 flex-grow">
                <p className="text-[#1B79EE] font-black text-[10px] uppercase tracking-widest mb-3">
                  {feature.subtitle}
                </p>
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 leading-none">
                  {feature.title}
                </h3>
                <p className="text-white/60 group-hover:text-slate-500 text-sm leading-relaxed font-medium transition-colors">
                  {feature.description}
                </p>
              </div>

              {/* ACTION FOOTER */}
              <div className="mt-12 pt-6 border-t border-white/10 group-hover:border-slate-100 flex justify-between items-center relative z-10">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1B79EE] opacity-0 group-hover:opacity-100 transition-opacity">
                  Initialize Upgrade
                </span>
                <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-[#1B79EE] transition-colors" />
              </div>

              {/* HOVER ACCENT: Large background icon */}
              <div className="absolute -bottom-10 -right-10 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none">
                <div className="scale-[4] text-[#004aad]">
                  {feature.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}