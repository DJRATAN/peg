"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Globe2 } from "lucide-react";

const locations = {
  usa: [
    { region: "Northeast", address: "105 Maxes Road", city: "Melville, NY 11747", phone: "631 452 1111" },
    { region: "South", address: "850 NW Federal Hwy", city: "Stuart, FL 34994", phone: "772 297 0700" },
    { region: "Midwest", address: "105 Maxes Road", city: "Melville, NY 11747", phone: "631 452 1111" },
    { region: "Westcoast", address: "105 Maxes Road", city: "Melville, NY 11747", phone: "631 452 1111" },
  ],
  international: [
    { region: "Canada", address: "One Younge Street", city: "Toronto, Ontario M5E 1R4", phone: "+1 (438) 805-9990" },
    { region: "Caribbean / Latin America", address: "Crypto Isle- Green Roofs, 1 E Bay St", city: "Nassau, Bahamas", phone: "242 802 8000" },
  ]
};

export default function PegLocations() {
  return (
    <section className="w-full px-10 md:px-20 py-16 bg-white overflow-hidden">
      <div className="w-full">
        
        {/* SECTION HEADER */}
        <div className="mb-16 flex items-end justify-between border-b-2 border-slate-100 pb-8">
          <div>
            <h2 className="text-[#004aad] text-xs font-black tracking-[0.5em] uppercase mb-2">Global Logstics</h2>
            <p className="text-5xl font-black text-[#004aad] tracking-tighter">
              OFFICES & <span style={{ WebkitTextStroke: "1px #1B79EE", color: "transparent" }}>LOCATIONS</span>
            </p>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-[#1B79EE] font-mono text-[10px] uppercase font-bold tracking-widest">Status: Active</p>
            <p className="text-slate-300 font-mono text-[9px] uppercase">Ref_Coord: 40.7128° N, 74.0060° W</p>
          </div>
        </div>

        {/* USA OFFICES SECTION */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-[#1B79EE] text-sm font-black uppercase tracking-widest">USA Offices</h3>
            <div className="h-[1px] flex-grow bg-slate-100" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.usa.map((loc, i) => (
              <LocationCard key={i} loc={loc} />
            ))}
          </div>
        </div>

        {/* INTERNATIONAL OFFICES SECTION */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-[#1B79EE] text-sm font-black uppercase tracking-widest">International Offices</h3>
            <div className="h-[1px] flex-grow bg-slate-100" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {locations.international.map((loc, i) => (
              <LocationCard key={i} loc={loc} isWide />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationCard({ loc, isWide = false }: { loc: any, isWide?: boolean }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className={`group relative p-8 border border-slate-200 bg-white transition-all duration-500 hover:border-[#1B79EE] hover:shadow-[20px_20px_0px_#1B79EE08] overflow-hidden`}
    >
      {/* Background Accent */}
      <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity">
        <Globe2 className="w-20 h-20 text-[#004aad]" />
      </div>

      <h4 className="text-[#004aad] text-2xl font-black uppercase tracking-tighter mb-6 group-hover:text-[#1B79EE] transition-colors">
        {loc.region}
      </h4>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <MapPin className="w-4 h-4 text-[#1B79EE] mt-1 shrink-0" />
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider leading-relaxed">
            {loc.address}<br />
            {loc.city}
          </div>
        </div>

        <div className="flex items-center gap-3 border-t border-slate-50 pt-4">
          <Phone className="w-4 h-4 text-[#1B79EE] shrink-0" />
          <span className="text-[11px] font-black text-[#004aad] tracking-widest">
            {loc.phone}
          </span>
        </div>
      </div>

      {/* Engineering Corner Marker */}
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-slate-100 group-hover:border-[#1B79EE] transition-colors" />
    </motion.div>
  );
}