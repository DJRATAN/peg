"use client";

import { useState } from 'react';
import { ChevronDown, Menu, Search, X } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const topMenuItems = [
  { label: 'PEG', href: '/industry-solutions' },
  { label: 'peg.com', href: '/mega-advantage' }
];

const menu = [
  {
    title: 'PORTALS',
    dropdown: [
      { name: 'Consulting', href: '/consulting' },
      { name: 'Engineering Login', href: '#' }
    ],
  }
];

const TopNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    // 1. FIXED POSITIONING: Locks the navbar to the top of the viewport
    <div className='fixed top-0 left-0 w-full z-[100]'>
      <nav className="bg-[#004aad] text-white w-full mx-auto shadow-md">
        
        <div className="w-full px-6 md:px-10 lg:px-20 mx-auto">
          {/* Slightly increased height to h-10 for better touch targets */}
          <div className="flex justify-between items-center h-10">

            {/* --- DESKTOP: Left Menu Items --- */}
            <div className="hidden lg:flex space-x-1 gap-6 items-center h-full">
              {topMenuItems.map((item) => (
                <Link
                  className='text-[11px] font-bold uppercase tracking-widest text-white/80 hover:text-white transition-colors whitespace-nowrap'
                  key={item.label}
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* --- MOBILE: Hamburger Button --- */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-cyan-300 focus:outline-none transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
              <span className="ml-3 text-[10px] font-black tracking-widest uppercase">MENU</span>
            </div>

            {/* --- DESKTOP: Right Side Icons & Actions --- */}
            <div className="hidden lg:flex items-center space-x-6 h-full">
              
              {/* Portals Dropdown */}
              {menu.map((link) => (
                <div key={link.title} className="group relative h-full flex items-center">
                  
                  <button className="flex items-center gap-1 text-[11px] font-black uppercase tracking-widest text-white/80 hover:text-white transition-all duration-200 h-full">
                    {link.title}
                    <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
                  </button>

                  {/* FIXED HOVER GAP: Uses top-full to attach directly to the bottom of the navbar */}
                  <div className="absolute left-0 top-full pt-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <ul className="w-56 bg-white border-t-2 border-[#1B79EE] shadow-xl">
                      {link.dropdown.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className="block px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-slate-600 hover:bg-slate-50 hover:text-[#004aad] border-b border-slate-100 last:border-0 transition-colors"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

              {/* FIXED: The Search Bar (Removed invalid Link wrapper) */}
              <div className="relative flex items-center">
                <motion.div 
                  initial={false}
                  animate={{ width: isSearchFocused ? 200 : 140 }}
                  className="flex items-center bg-black/20 focus-within:bg-white/10 border border-transparent focus-within:border-white/20 transition-colors px-3 py-1 rounded-sm"
                >
                  <Search className="w-3 h-3 text-white/50 mr-2" />
                  <input
                    type="text"
                    placeholder="Search CAD..."
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    className="w-full bg-transparent border-0 text-[11px] text-white placeholder:text-white/50 focus:outline-none focus:ring-0"
                  />
                </motion.div>
              </div>

              {/* Contact Link */}
              <Link
                href="/contact"
                className="text-[11px] font-black uppercase tracking-widest text-cyan-300 hover:text-white transition-colors whitespace-nowrap flex items-center h-full"
              >
                CONTACT: (631) 452-1111
              </Link>

            </div>

          </div>
        </div>

        {/* --- MOBILE MENU DROPDOWN --- */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#003882] border-t border-white/10 w-full overflow-hidden shadow-2xl"
            >
              <div className="py-6 px-6 flex flex-col gap-6">
                
                {/* Mobile Search */}
                <div className="flex items-center bg-black/20 px-4 py-3 rounded-sm">
                  <Search className="w-4 h-4 text-white/50 mr-3" />
                  <input
                    type="text"
                    placeholder="Search specs..."
                    className="w-full bg-transparent border-0 text-sm text-white placeholder:text-white/50 focus:outline-none"
                  />
                </div>

                {/* Mobile Links Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {topMenuItems.map((item) => (
                    <Link
                      onClick={() => setIsMobileMenuOpen(false)}
                      className='text-xs font-bold uppercase tracking-widest text-white/80 hover:text-cyan-300 transition-colors'
                      key={item.label}
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  ))}
                  {menu[0].dropdown.map((item) => (
                    <Link
                      onClick={() => setIsMobileMenuOpen(false)}
                      className='text-xs font-bold uppercase tracking-widest text-white/80 hover:text-cyan-300 transition-colors'
                      key={item.name}
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="h-px bg-white/10 w-full my-2" />

                {/* Mobile Socials & Locales */}
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <button className='flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors'>
                      English-USD <ChevronDown className="w-3 h-3" />
                    </button>
                    <button className='flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors'>
                      Global <ChevronDown className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="flex gap-6 justify-start mt-2">
                    <Link href={'#'}><FaLinkedin className='w-4 h-4 text-white/60 hover:text-cyan-300 transition-colors' /></Link>
                    <Link href={'#'}><FaFacebook className='w-4 h-4 text-white/60 hover:text-cyan-300 transition-colors' /></Link>
                    <Link href={'#'}><FaInstagram className='w-4 h-4 text-white/60 hover:text-cyan-300 transition-colors' /></Link>
                    <Link href={'#'}><FaTwitter className='w-4 h-4 text-white/60 hover:text-cyan-300 transition-colors' /></Link>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}

export default TopNavbar;