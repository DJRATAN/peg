'use client'

import { useState } from 'react';
import { ChevronDown, Menu, Search, X } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const topMenuItems = [
  { label: 'PEG', href: '/industry-solutions' },
  { label: 'peg.com', href: '/mega-advantage' }
];
const menu = [
  {
    title: 'PORTALS',
    dropdown: [
      { name: 'consulting', href: '/consulting' }
    ],
  }
];


const TopNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className='w-full relative z-50'>
      <nav className="bg-[#004aad] text-neutral-200 w-full mx-auto shadow-md">

        {/* Corrected lg:px-30 to lg:px-8 or standard container usage */}
        <div className="w-full px-10 md:px-20 mx-auto">
          <div className="flex justify-between items-center h-9">

            {/* --- DESKTOP: Left Menu Items --- */}
            {/* Added 'hidden lg:flex' to hide this long list on mobile */}
            <div className="hidden lg:flex space-x-1 gap-6 items-center">
              {topMenuItems.map((item) => (
                <Link
                  className='text-xs hover:text-[#004aad] transition-colors whitespace-nowrap'
                  key={item.label}
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* --- MOBILE: Hamburger Button --- */}
            {/* Visible only on mobile/tablet (lg:hidden) */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-neutral-200 hover:text-[#CC0000] focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
              <span className="ml-3 text-xs font-bold tracking-wider">MENU</span>
            </div>

            {/* --- DESKTOP: Right Side Icons --- */}
            <div className="hidden lg:flex items-center space-x-4">
              {menu.map((link) => (
                <div key={link.title} className="group relative">
                  {/* Nav Item */}
                  <button className="flex items-center gap-1 px-4 py-8 text-[12px] font-black uppercase tracking-widest text-white hover:text-[#1B79EE] hover:bg-white transition-all duration-200">
                    {link.title}
                    <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
                  </button>

                  {/* High-Density Dropdown */}
                  <div className="absolute left-0 top-[90px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 z-60">
                    <ul className="w-64 bg-white border-t-4 border-[#1B79EE] shadow-[0_15px_40px_-10px_rgba(0,74,173,0.15)] ring-1 ring-slate-100">
                      {link.dropdown.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className="block px-6 py-3.5 text-[11px] font-bold uppercase tracking-wider text-slate-600 hover:bg-slate-50 hover:text-white border-b border-slate-50 last:border-0 transition-colors"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              <Link
                className='text-xs flex items-center gap-2 hover:text-[#CC0000] transition-colors whitespace-nowrap'

                href={'item.href'}
              >
                SEARCH
                {/* 3. THE SEARCH ENGINE: Brutalist shadow and scaling */}
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="w-full max-w-4xl flex items-center gap-0 bg-white overflow-hidden shadow-[20px_20px_0px_-5px_rgba(0,74,173,0.05)]"
                >
                  <div className="pl-6">
                    <Search className="w-3 h-3 text-[#1B79EE]" />
                  </div>
                  <Input
                    type="text"
                    placeholder="Search CAD, Specs or technical specs..."
                    className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-xl placeholder:text-slate-300 font-medium"
                  />
                </motion.div>
              </Link>
              <Link
                className='text-xs hover:text-[#CC0000] transition-colors whitespace-nowrap'

                href={'item.href'}
              >
                CONTACT: (631) 452-1111
              </Link>
            </div>

          </div>
        </div>

        {/* --- MOBILE MENU DROPDOWN --- */}
        {/* Renders conditionally based on state */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-neutral-900 border-t border-neutral-700 absolute w-full left-0 top-9 shadow-xl py-4 px-4 flex flex-col gap-4">

            {/* Mobile Links Grid */}
            <div className="grid grid-cols-2 gap-3">
              {topMenuItems.map((item) => (
                <Link
                  onClick={() => setIsMobileMenuOpen(false)}
                  className='text-xs text-neutral-300 hover:text-[#CC0000] transition-colors'
                  key={item.label}
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="h-[1px] bg-neutral-700 w-full my-1"></div>

            {/* Mobile Settings & Socials */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between">
                <Link href={''} className='flex items-center gap-1.5 text-xs hover:text-[#CC0000]'>English-USD <ChevronDown className="w-3 h-3" /></Link>
                <Link href={''} className='flex items-center gap-1.5 text-xs hover:text-[#CC0000]'>Country <ChevronDown className="w-3 h-3" /></Link>
              </div>

              <div className="flex gap-4 justify-start mt-2">
                <Link href={'/'}><FaLinkedin className='w-4 h-4 hover:text-[#CC0000]' /></Link>
                <Link href={'/'}><FaFacebook className='w-4 h-4 hover:text-[#CC0000]' /></Link>
                <Link href={'/'}><FaInstagram className='w-4 h-4 hover:text-[#CC0000]' /></Link>
                <Link href={'/'}><FaTwitter className='w-4 h-4 hover:text-[#CC0000]' /></Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

export default TopNavbar