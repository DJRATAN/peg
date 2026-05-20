"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Activity } from 'lucide-react';

const HeroEngineering = () => {
  return ( 
    <section className="relative w-full py-32 md:py-48 flex flex-col items-center justify-center border-b bg-white overflow-hidden">
      
      {/* 1. THE GRID SYSTEM: Increased opacity slightly for 32" monitors */}
      <div className="absolute inset-0 -z-10 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
      
      {/* 2. THE BACKGROUND DATA DECORATION (Extraordinary Detail) */}
      <div className="absolute top-20 right-10 opacity-20 hidden 2xl:block">
        <Activity className="w-12 h-12 text-[#1B79EE] animate-pulse" />
        <p className="font-mono text-[8px] text-[#004aad] mt-2 uppercase tracking-widest">System_Lat: 0.002ms</p>
      </div>

      <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-10 z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 max-w-5xl"
        >
          {/* PEG Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none border-l-4 border-[#1B79EE] bg-[#1B79EE]/5 text-[#1B79EE] text-[11px] font-black tracking-[0.3em] uppercase mb-4">
            <span className="w-2 h-2 bg-[#1B79EE] animate-ping" />
            Precast Engineering Group
          </div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-[#004aad] leading-[0.9]">
            HIGH-PERFORMANCE <br />
            <span style={{ WebkitTextStroke: "1.5px #1B79EE", color: "transparent" }}>PRECAST DATA.</span>
          </h1>

          {/* THE UPDATED TEXT: More professional and high-velocity */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium italic"
          >
            "from conception to execution the Futurstic highway of  <span className="text-[#004aad] font-bold">Precast Engineering</span>, <span className="text-[#004aad] font-bold">Advanced Technologies</span> & beyond."
          </motion.p>
        </motion.div>

        {/* 3. THE SEARCH ENGINE: Brutalist shadow and scaling */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="w-full max-w-4xl flex items-center gap-0 bg-white border-[3px] border-[#004aad] rounded-none overflow-hidden shadow-[20px_20px_0px_-5px_rgba(0,74,173,0.05)]"
        >
          <div className="pl-6">
            <Search className="w-7 h-7 text-[#1B79EE]" />
          </div>
          <Input
            type="text"
            placeholder="Search structural precast, BIM objects, or technical specs..."
            className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-xl py-10 placeholder:text-slate-300 font-medium"
          />
          <Button className="rounded-none h-20 px-12 bg-[#004aad] hover:bg-[#1B79EE] text-white font-black transition-all text-xl tracking-widest">
            INITIALIZE SEARCH
          </Button>
        </motion.div>
        
        {/* 4. POPULAR TAGS: Technical styling */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
          <span className="hover:text-[#1B79EE] cursor-pointer transition-colors">Popular_Nodes:</span>
          <span className="hover:text-[#004aad] cursor-pointer transition-colors text-slate-300">Wall Panels</span>
          <span className="hover:text-[#004aad] cursor-pointer transition-colors text-slate-300">Hollow-Core Slabs</span>
          <span className="hover:text-[#004aad] cursor-pointer transition-colors text-slate-300">Bridge Girders</span>
          <span className="hover:text-[#004aad] cursor-pointer transition-colors text-slate-300">Culvert Systems</span>
        </div>

      </div>
    </section>
  )
}

export default HeroEngineering;