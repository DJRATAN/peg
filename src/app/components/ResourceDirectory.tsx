"use client";

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { 
  FolderKanban, Video, BookOpen, Leaf, Mail, FileText, 
  GraduationCap, MonitorPlay, Mic, Award, FileDigit, Accessibility, Play
} from 'lucide-react';

const resourceColumns = [
  // ... (Keep your existing resourceColumns array here)
  {
    links: [
      { name: 'PROJECTS', href: '/projects', highlight: true, icon: <FolderKanban className="w-4 h-4" /> },
      { name: 'VIDEOS', href: '/videos', icon: <Video className="w-4 h-4" /> },
      { name: 'CATALOGS', href: '/catalogs', icon: <BookOpen className="w-4 h-4" /> },
      { name: 'GREENREPORTS', href: '/sustainability', icon: <Leaf className="w-4 h-4" /> },
      { name: 'NEWSLETTER', href: '/news', icon: <Mail className="w-4 h-4" /> },
      { name: 'OUTLINE', href: '/outline-specs', icon: <FileText className="w-4 h-4" /> },
    ]
  },
  {
    links: [
      { name: 'CONTINUING ED', href: '/education', highlight: true, icon: <GraduationCap className="w-4 h-4" /> },
      { name: 'WEBINARS', href: '/webinars', icon: <MonitorPlay className="w-4 h-4" /> },
      { name: 'DETAILED PODCAST', href: '/podcasts', italic: true, icon: <Mic className="w-4 h-4" /> },
      { name: 'CERTIFICATIONS', href: '/certs', icon: <Award className="w-4 h-4" /> },
      { name: 'DATA SHEETS', href: '/data-sheets', icon: <FileDigit className="w-4 h-4" /> },
      { name: 'ADA PRODUCTS', href: '/ada', icon: <Accessibility className="w-4 h-4" /> },
    ]
  }
];

export const ResourceDirectory = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Fallback to guarantee playback starts and continues
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.warn("Video autoplay prevented by browser:", error);
      });
    }
  }, []);

  // Bulletproof infinite loop handler
  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <section className="relative w-full min-h-[600px] flex items-center overflow-hidden bg-[#004aad]">
      
      {/* BULLETPROOF CINEMATIC VIDEO BACKGROUND */}
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted 
        playsInline
        onEnded={handleVideoEnd} // Forces replay if browser stops it
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-100"
      >
        <source src="/assets/E25 V2 final.mp4" type="video/mp4" />
      </video>

      {/* COLOR GRADE OVERLAYS */}
      <div className="absolute inset-0 z-0 bg-[#004aad]/40 mix-blend-multiply" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#004aad] via-[#004aad]/80 to-transparent" />

      {/* CONTENT CONTAINER */}
      <div className="w-full px-10 md:px-20 py-16 relative z-10">
        
        {/* FROSTED GLASS TERMINAL */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-12 md:p-16 shadow-[0_20px_50px_rgba(0,74,173,0.3)] max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Main Heading */}
            <div className="lg:col-span-6 lg:border-r border-white/20 pr-0 lg:pr-12">
              <div className="flex items-center gap-3 text-cyan-300 font-mono text-[10px] font-black uppercase tracking-[0.5em] mb-6">
                 <Play className="w-4 h-4 animate-pulse" /> Active Media Directory
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-[0.9] uppercase">
                BEYOND <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-[#1B79EE]">
                  SPECIFICATIONS.
                </span>
              </h2>
              <p className="mt-6 text-white/80 font-medium leading-relaxed max-w-sm">
                Access our master library of engineering reports, structural videos, and technical podcasts.
              </p>
            </div>

            {/* Right: Link Columns */}
            <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-8 pl-0 lg:pl-8">
              {resourceColumns.map((col, idx) => (
                <ul key={idx} className="space-y-4">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="group flex items-center gap-4 text-sm font-black tracking-widest text-white hover:text-cyan-300 transition-colors"
                      >
                        {/* Interactive Icon Box */}
                        <div className="p-2 bg-white/10 border border-white/20 group-hover:bg-cyan-300/20 group-hover:border-cyan-300 transition-all duration-300">
                          {link.icon}
                        </div>
                        
                        <span className={`uppercase ${link.italic ? 'italic' : ''}`}>
                          {link.name}
                        </span>

                        {/* High-Tech 'NEW' Badge */}
                        {link.highlight && (
                          <span className="ml-auto text-[8px] font-mono font-bold bg-cyan-300 text-[#004aad] px-2 py-1 tracking-widest shadow-[0_0_10px_rgba(103,232,249,0.4)] animate-pulse">
                            NEW_NODE
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};