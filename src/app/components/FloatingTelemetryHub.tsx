"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Mail, Share2 } from 'lucide-react';
import { FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';

const socialLinks = [
  { id: "LINKEDIN", icon: <FaLinkedinIn className="w-5 h-5" />, href: "#" },
  { id: "X_NETWORK", icon: <FaTwitter className="w-5 h-5" />, href: "#" },
  { id: "YOUTUBE", icon: <FaYoutube className="w-5 h-5" />, href: "#" },
  { id: "CONTACT", icon: <Mail className="w-5 h-5" />, href: "#" }
];

export default function FloatingTelemetryHub() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100] flex flex-col items-end gap-6 pointer-events-none">
      
      {/* 1. SOCIAL MEDIA QUICK LINKS */}
      <div className="flex flex-col items-end gap-2 pointer-events-auto">
 

        {socialLinks.map((social, idx) => (
          <Link key={idx} href={social.href} className="group relative flex justify-end">
            {/* FIXED: Changed base to Solid Dark Blue so it never vanishes on white backgrounds */}
            <div className="flex items-center w-12 h-12 bg-[#004aad] border border-[#1B79EE]/30 text-white group-hover:w-36 group-hover:bg-[#1B79EE] group-hover:border-[#1B79EE] transition-all duration-500 overflow-hidden shadow-[0_8px_20px_rgba(0,74,173,0.2)]">
              
              {/* Hidden Text (Reveals on Hover) */}
              <span className="absolute left-4 opacity-0 group-hover:opacity-100 font-mono text-[10px] font-black tracking-widest whitespace-nowrap transition-opacity duration-300 delay-100">
                {social.id}
              </span>
              
              {/* Icon (Anchored Right) */}
              <div className="absolute right-0 w-12 h-12 flex items-center justify-center">
                {social.icon}
              </div>
              
            </div>
          </Link>
        ))}
      </div>

      {/* 2. SCROLL TO TOP BUTTON */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto mt-4 relative"
          >
            <button 
              onClick={scrollToTop}
              className="group relative w-14 h-14 bg-white text-[#004aad] border-2 border-[#004aad] flex items-center justify-center overflow-hidden shadow-[0_8px_20px_rgba(0,74,173,0.15)] hover:shadow-[0_0_30px_rgba(27,121,238,0.4)] transition-all duration-300"
            >
              {/* Hover Fill Animation */}
              <div className="absolute inset-0 bg-[#004aad] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
              
              {/* Icon */}
              <ArrowUp className="w-6 h-6 relative z-10 group-hover:text-white transition-colors duration-500" />
              
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-2 h-2 bg-[#1B79EE] z-10" />
            </button>
             
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}