"use client";

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Calendar, Users, ArrowUpRight, Globe, 
  ChevronLeft, ChevronRight, LayoutGrid, GalleryHorizontal, Rows3 
} from 'lucide-react';

// Actual provided video paths, used here as thumbnails or placeholder imagery
const exhibitionData = [
  {
    title: "The Precast Show",
    location: "Indianapolis, IN",
    date: "Feb 5–7, 2025",
    booth: "Booth 457",
    img: "/assets/images/72 precast manhole Double Internal Drop.657.png",
    tag: "NORTH AMERICA"
  },
  {
    title: "World of Concrete",
    location: "Las Vegas, NV",
    date: "Jan 21–23, 2025",
    booth: "Central Hall",
    img: "/assets/images/1050.2 - Copy.png",
    tag: "INTERNATIONAL"
  },
  {
    title: "Bauma Munich",
    location: "Munich, Germany",
    date: "Apr 7–13, 2025",
    booth: "Hall B3.210",
    img: "/assets/images/2440 MANHOLE CUT VIEW.png",
    tag: "EUROPE"
  },
  {
    title: "PCI Convention",
    location: "Denver, CO",
    date: "Feb 6–10, 2025",
    booth: "Booth 1102",
    img: "/assets/images/Manhole Type 1.2.674.png",
    tag: "PCI INSTITUTE"
  },
  {
    title: "CONEXPO-CON/AGG",
    location: "Las Vegas, NV",
    date: "Mar 3-7, 2026",
    booth: "Silver Lot",
    img: "/assets/images/10 FT LOW DOME.117.png",
    tag: "HEAVY CIVIL"
  },
  {
    title: "UK Concrete Show",
    location: "Birmingham, UK",
    date: "Feb 26-27, 2025",
    booth: "Stand 45",
    img: "/assets/images/a04.JPG",
    tag: "EUROPE"
  },
  {
    title: "World of Modular",
    location: "Orlando, FL",
    date: "Mar 18-21, 2025",
    booth: "Booth 305",
    img: "/assets/images/PAIPING.2 - Copy.png",
    tag: "MODULAR BUILD"
  },
  {
    title: "Big 5 Global",
    location: "Dubai, UAE",
    date: "Nov 26-29, 2025",
    booth: "Sheikh Saeed Hall",
    img: "/assets/images/trench-forms-01-5001.JPG",
    tag: "MIDDLE EAST"
  }
];

type ViewMode = 'slider' | 'grid' | 'stack';

export default function MeetAtShows() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('slider');

  // Auto-Slide Logic (Only runs in 'slider' mode)
  useEffect(() => {
    if (isHovered || viewMode !== 'slider') return;
    const intervalId = setInterval(() => scrollRight(true), 6000);
    return () => clearInterval(intervalId);
  }, [isHovered, viewMode]);

  const scrollLeft = () => {
    if (sliderRef.current) sliderRef.current.scrollBy({ left: -500, behavior: 'smooth' });
  };

  const scrollRight = (isAuto = false) => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        sliderRef.current.scrollBy({ left: 500, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="w-full py-24 bg-white px-10 md:px-20 overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        
        {/* HEADER & CONTROLS */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-2 border-slate-100 pb-10 gap-8">
          <div className="space-y-2">
            <h2 className="text-[#1B79EE] font-mono text-[10px] font-black uppercase tracking-[0.5em]">Global_Events_Itinerary</h2>
            <p className="text-5xl md:text-7xl font-black text-[#004aad] tracking-tighter uppercase">
              Meet at <span style={{ WebkitTextStroke: "1px #1B79EE", color: "transparent" }}>the Shows.</span>
            </p>
          </div>
          
          <div className="flex flex-col items-end gap-6">
            <div className="hidden md:block text-right">
               <div className="flex justify-end items-center gap-3 text-[#004aad] font-black text-xs tracking-widest uppercase mb-2">
                  <Globe className="w-4 h-4 text-[#1B79EE] animate-pulse" /> Worldwide Presence
               </div>
               <p className="text-slate-400 font-mono text-[9px] uppercase tracking-widest">Connect with our PE's live on the floor.</p>
            </div>

            <div className="flex items-center gap-6">
              
              {/* VIEW TOGGLE CONTROLS */}
              <div className="flex bg-slate-50 border border-slate-200 p-1">
                {[
                  { mode: 'slider', icon: GalleryHorizontal, title: 'Row View' },
                  { mode: 'grid', icon: LayoutGrid, title: 'Column View' },
                  { mode: 'stack', icon: Rows3, title: 'List View' }
                ].map(item => {
                  const Icon = item.icon;
                  return (
                    <button 
                      key={item.mode}
                      onClick={() => setViewMode(item.mode as ViewMode)}
                      className={`p-2.5 transition-all duration-300 ${viewMode === item.mode ? 'bg-white text-[#004aad] shadow-sm border border-slate-200/50' : 'text-slate-400 hover:text-[#1B79EE]'}`}
                      title={item.title}
                    >
                      <Icon className="w-5 h-5" />
                    </button>
                  )
                })}
              </div>

              {/* Slider Navigation Buttons (Animate in/out) */}
              <AnimatePresence>
                {viewMode === 'slider' && (
                  <motion.div 
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    className="flex gap-2 overflow-hidden"
                  >
                    {[
                      { icon: ChevronLeft, onClick: scrollLeft, anim: '-translate-x-1' },
                      { icon: ChevronRight, onClick: () => scrollRight(), anim: 'translate-x-1' }
                    ].map((btn, i) => {
                      const Icon = btn.icon;
                      return (
                        <button key={i} onClick={btn.onClick} className="w-12 h-12 border border-slate-200 flex items-center justify-center text-[#004aad] hover:bg-[#004aad] hover:text-white transition-all duration-300 group shrink-0">
                          <Icon className={`w-6 h-6 group-hover:${btn.anim} transition-transform`} />
                        </button>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* DYNAMIC LAYOUT CONTAINER */}
        <div 
          ref={sliderRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`
            transition-all duration-500 ease-in-out
            ${viewMode === 'slider' ? 'flex gap-8 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 -mt-4 cursor-grab active:cursor-grabbing' : ''}
            ${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 pt-4' : ''}
            ${viewMode === 'stack' ? 'flex flex-col gap-8 pt-4 max-w-5xl mx-auto' : ''}
          `}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style dangerouslySetInnerHTML={{__html: `div::-webkit-scrollbar { display: none; }`}} />

          {exhibitionData.map((show, idx) => (
            <motion.div
              key={idx}
              layout // Framer Motion enables smooth layout transitions
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: viewMode === 'slider' ? idx * 0.05 : 0 }}
              className={`
                group relative bg-white border border-slate-100 overflow-hidden cursor-pointer shadow-[0_10px_40px_rgba(0,74,173,0.03)] hover:shadow-[0_20px_50px_rgba(0,74,173,0.1)] transition-all duration-500
                ${viewMode === 'slider' ? 'flex flex-col h-[600px] w-full min-w-[320px] md:min-w-[400px] lg:min-w-[480px] snap-start shrink-0' : ''}
                ${viewMode === 'grid' ? 'flex flex-col h-[500px] xl:h-[600px] w-full' : ''}
                ${viewMode === 'stack' ? 'flex flex-col md:flex-row h-auto md:h-[300px] w-full' : ''}
              `}
            >
              
              {/* THE IMAGE CONTAINER */}
              <div className={`relative overflow-hidden bg-slate-100 transition-all duration-500
                ${viewMode === 'stack' ? 'w-full md:w-1/2 h-[250px] md:h-full' : 'w-full h-2/3'}
              `}>
                {/* Visual Fix: Ensured brightness stays high on hover in stack view */}
                <div className="relative h-full w-full scale-125 group-hover:scale-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <Image src={show.img} alt={show.title} fill className="object-cover brightness-90 group-hover:brightness-110 transition-all duration-700" />
                </div>
                <div className="absolute top-6 left-6 z-10 px-3 py-1 bg-white/30 backdrop-blur-md border border-white/40 text-white text-[10px] font-black tracking-widest uppercase">
                  {show.tag}
                </div>
              </div>

              {/* CONTENT AREA */}
              <div className={`relative p-8 flex flex-col justify-between transition-all duration-500 z-10 
                ${viewMode === 'stack' ? 'w-full md:w-1/2 bg-slate-50 group-hover:bg-white' : 'flex-1 bg-white'}
              `}>
                <div className="space-y-4">
                  {/* Visual Fix: Headline turns brand blue on hover */}
                  <h3 className="text-3xl font-black text-[#004aad] uppercase tracking-tighter group-hover:text-[#1B79EE] transition-colors duration-300 leading-none truncate">
                    {show.title}
                  </h3>
                  <div className="space-y-2 pt-4">
                    <div className="flex items-center gap-3 text-slate-500 font-medium text-xs">
                      <MapPin className="w-3.5 h-3.5 text-[#1B79EE]" /> {show.location}
                    </div>
                    <div className="flex items-center gap-3 text-slate-500 font-medium text-xs">
                      <Calendar className="w-3.5 h-3.5 text-[#1B79EE]" /> {show.date}
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-slate-100 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#004aad]" />
                    <span className="font-mono text-[10px] font-bold text-[#004aad] uppercase">{show.booth}</span>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-[#004aad] group-hover:text-white transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>

              {/* FIXED: ACCENT LINE LOGIC. Sitting at z-20 (top) */}
              <div className={`absolute bg-[#1B79EE] transition-all duration-700 z-20 
                ${viewMode === 'stack' 
                  ? 'left-0 top-0 h-full w-1 group-hover:w-3' // List View: Anchor to left edge, widen slightly
                  : 'top-0 left-0 h-1 w-0 group-hover:w-full' // Row/Column View: Anchor to top edge, stretch across
                }
              `} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}