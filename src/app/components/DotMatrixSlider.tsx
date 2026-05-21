"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MapPin, Layers, FileCode2, Zap } from 'lucide-react';

// 1. DEFINE THE TYPESCRIPT INTERFACE
interface AgencyData {
  id: string;
  state: string;
  tier: string;
  spec: string;
}

// 2. DEFINE THE PROPS FOR THE SLIDER TRACK
interface SliderTrackProps {
  items: AgencyData[];
  direction?: "left" | "right";
  speed?: number;
}

const dotData: AgencyData[] = [
  { id: "ALDOT", state: "Alabama", tier: "Standard", spec: "AASHTO LRFD 9th Ed." },
  { id: "AKDOT", state: "Alaska", tier: "Extreme", spec: "Freeze-Thaw Class F3" },
  { id: "ADOT", state: "Arizona", tier: "Standard", spec: "High-Temp Curing Req." },
  { id: "ARDOT", state: "Arkansas", tier: "Standard", spec: "AASHTO LRFD 9th Ed." },
  { id: "Caltrans", state: "California", tier: "Seismic+", spec: "Seismic Design Criteria v2" },
  { id: "CDOT", state: "Colorado", tier: "Extreme", spec: "Freeze-Thaw Class F3" },
  { id: "CTDOT", state: "Connecticut", tier: "Standard", spec: "M4 Concrete Spec" },
  { id: "DelDOT", state: "Delaware", tier: "Coastal", spec: "Corrosion Protection + EPS" },
  { id: "FDOT", state: "Florida", tier: "Coastal", spec: "Hurricane Wind-Load Max" },
  { id: "GDOT", state: "Georgia", tier: "Standard", spec: "AASHTO LRFD 9th Ed." },
  { id: "HDOT", state: "Hawaii", tier: "Coastal", spec: "Marine Grade Admixtures" },
  { id: "ITD", state: "Idaho", tier: "Standard", spec: "AASHTO LRFD 9th Ed." },
  { id: "IDOT", state: "Illinois", tier: "Heavy Load", spec: "High-Early Strength Req." },
  { id: "INDOT", state: "Indiana", tier: "Heavy Load", spec: "High-Early Strength Req." },
  { id: "Iowa DOT", state: "Iowa", tier: "Standard", spec: "Freeze-Thaw Class F2" },
  { id: "KDOT", state: "Kansas", tier: "Standard", spec: "AASHTO LRFD 9th Ed." },
  { id: "KYTC", state: "Kentucky", tier: "Standard", spec: "AASHTO LRFD 9th Ed." },
  { id: "LaDOTD", state: "Louisiana", tier: "Coastal", spec: "Corrosion Protection + EPS" },
  { id: "MaineDOT", state: "Maine", tier: "Extreme", spec: "Freeze-Thaw Class F3" },
  { id: "MDOT", state: "Maryland", tier: "Standard", spec: "AASHTO LRFD 9th Ed." },
  { id: "MassDOT", state: "Massachusetts", tier: "Standard", spec: "M4 Concrete Spec" },
  { id: "MDOT (MI)", state: "Michigan", tier: "Heavy Load", spec: "Freeze-Thaw Class F2" },
  { id: "MnDOT", state: "Minnesota", tier: "Extreme", spec: "Freeze-Thaw Class F3" },
  { id: "MDOT (MS)", state: "Mississippi", tier: "Standard", spec: "AASHTO LRFD 9th Ed." },
  { id: "MoDOT", state: "Missouri", tier: "Standard", spec: "AASHTO LRFD 9th Ed." },
  { id: "MDT", state: "Montana", tier: "Extreme", spec: "Freeze-Thaw Class F3" },
  { id: "NDOT (NE)", state: "Nebraska", tier: "Standard", spec: "AASHTO LRFD 9th Ed." },
  { id: "NDOT (NV)", state: "Nevada", tier: "Seismic+", spec: "Seismic Design Criteria v2" },
  { id: "NHDOT", state: "New Hampshire", tier: "Extreme", spec: "Freeze-Thaw Class F3" },
  { id: "NJDOT", state: "New Jersey", tier: "Heavy Load", spec: "High-Early Strength Req." },
  { id: "NMDOT", state: "New Mexico", tier: "Standard", spec: "High-Temp Curing Req." },
  { id: "NYSDOT", state: "New York", tier: "Heavy Load", spec: "M4 Concrete Spec" },
  { id: "NCDOT", state: "North Carolina", tier: "Coastal", spec: "Corrosion Protection + EPS" },
  { id: "NDDOT", state: "North Dakota", tier: "Extreme", spec: "Freeze-Thaw Class F3" },
  { id: "ODOT", state: "Ohio", tier: "Heavy Load", spec: "AASHTO LRFD 9th Ed." },
  { id: "ODOT (OK)", state: "Oklahoma", tier: "Standard", spec: "AASHTO LRFD 9th Ed." },
  { id: "ODOT (OR)", state: "Oregon", tier: "Seismic+", spec: "Seismic Design Criteria v2" },
  { id: "PennDOT", state: "Pennsylvania", tier: "Heavy Load", spec: "High-Early Strength Req." },
  { id: "RIDOT", state: "Rhode Island", tier: "Coastal", spec: "Marine Grade Admixtures" },
  { id: "SCDOT", state: "South Carolina", tier: "Coastal", spec: "Corrosion Protection + EPS" },
  { id: "SDDOT", state: "South Dakota", tier: "Extreme", spec: "Freeze-Thaw Class F3" },
  { id: "TDOT", state: "Tennessee", tier: "Standard", spec: "AASHTO LRFD 9th Ed." },
  { id: "TxDOT", state: "Texas", tier: "Heavy Load", spec: "High-Early Strength Req." },
  { id: "UDOT", state: "Utah", tier: "Extreme", spec: "Freeze-Thaw Class F3" },
  { id: "VTrans", state: "Vermont", tier: "Extreme", spec: "Freeze-Thaw Class F3" },
  { id: "VDOT", state: "Virginia", tier: "Standard", spec: "AASHTO LRFD 9th Ed." },
  { id: "WSDOT", state: "Washington", tier: "Seismic+", spec: "Seismic Design Criteria v2" },
  { id: "WVDOT", state: "West Virginia", tier: "Standard", spec: "AASHTO LRFD 9th Ed." },
  { id: "WisDOT", state: "Wisconsin", tier: "Extreme", spec: "Freeze-Thaw Class F3" },
  { id: "WYDOT", state: "Wyoming", tier: "Extreme", spec: "Freeze-Thaw Class F3" },
];

const track1 = dotData.slice(0, 17);
const track2 = dotData.slice(17, 34);
const track3 = dotData.slice(34, 50);

export default function DotMatrixSlider() {
  const [activeDot, setActiveDot] = useState<AgencyData>(dotData[4]);

  // 3. APPLY PROPS INTERFACE TO THE COMPONENT
  const SliderTrack = ({ items, direction = "left", speed = 40 }: SliderTrackProps) => (
    <div className="flex whitespace-nowrap overflow-hidden py-3">
      <motion.div
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ 
          duration: speed, 
          ease: "linear", 
          repeat: Infinity
          // Removed invalid playState property to fix the TS Error
        }}
        className="flex gap-6 w-max"
      >
        {[...items, ...items, ...items].map((dot, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setActiveDot(dot)}
            className={`cursor-pointer px-8 py-4 border-2 transition-all duration-300 flex items-center justify-center min-w-[220px] ${
              activeDot.id === dot.id 
                ? 'bg-[#004aad] border-[#004aad] text-white scale-105 shadow-[10px_10px_0px_rgba(27,121,238,0.2)]' 
                : 'bg-white border-slate-200 text-[#004aad] hover:border-[#1B79EE]'
            }`}
          >
            <span className="font-black text-xl tracking-tighter uppercase">
              {dot.id}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section className="w-full px-10 md:px-20 py-16 bg-slate-50 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* LEFT COLUMN: The "Live Telemetry" Active Panel (4 columns) */}
        <div className="lg:col-span-4 h-full flex flex-col justify-center">
          <div className="space-y-2 mb-10">
            <h2 className="text-[#1B79EE] font-mono text-[10px] font-black uppercase tracking-[0.5em] flex items-center gap-2">
               <Zap className="w-4 h-4 animate-pulse" /> Active Node Data
            </h2>
            <p className="text-5xl md:text-6xl font-black text-[#004aad] tracking-tighter leading-none uppercase">
              Compliance <br /> Matrix.
            </p>
          </div>

          <motion.div 
            key={activeDot.id} 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white border-l-8 border-[#004aad] p-10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
              <ShieldCheck className="w-32 h-32 text-[#004aad]" />
            </div>

            <div className="space-y-8 relative z-10">
              <div>
                <p className="text-slate-400 font-mono text-[9px] uppercase tracking-widest mb-2">Agency Jurisdiction</p>
                <h3 className="text-5xl font-black text-[#004aad] tracking-tighter">{activeDot.id}</h3>
                <p className="text-[#1B79EE] font-bold uppercase tracking-widest mt-1 flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> {activeDot.state}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 pt-6 border-t border-slate-100">
                <div className="bg-slate-50 p-4 border border-slate-100">
                    <p className="text-slate-400 font-mono text-[9px] uppercase tracking-widest mb-1 flex items-center gap-2">
                       <Layers className="w-3 h-3" /> Design Tier
                    </p>
                    <p className="font-black text-[#004aad] uppercase">{activeDot.tier}</p>
                </div>
                
                <div className="bg-slate-50 p-4 border border-slate-100">
                    <p className="text-slate-400 font-mono text-[9px] uppercase tracking-widest mb-1 flex items-center gap-2">
                       <FileCode2 className="w-3 h-3" /> Master Provision
                    </p>
                    <p className="font-black text-[#004aad] uppercase">{activeDot.spec}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: The Multi-Track Sliders (8 columns) */}
        <div className="lg:col-span-8 relative">
           <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
           <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

           <div className="space-y-4">
               <SliderTrack items={track1} direction="left" speed={45} />
               <SliderTrack items={track2} direction="right" speed={50} />
               <SliderTrack items={track3} direction="left" speed={55} />
           </div>

           <div className="mt-8 text-center hidden md:block">
               <p className="font-mono text-[9px] text-slate-400 tracking-[0.4em] uppercase">
                   Hover over any agency to view localized precast engineering provisions.
               </p>
           </div>
        </div>

      </div>
    </section>
  );
}