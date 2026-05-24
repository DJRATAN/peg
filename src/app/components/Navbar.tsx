"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';

const menu = [
  {
    title: 'ENGINEERING & CAD',
    dropdown: [
      { name: 'CAD Drawings', href: '/products/cad-drawings' },
      { name: 'Structural Submittals', href: '/structural-submittals' },
      { name: 'Engineering Services', href: '/engineering-servics' },
      { name: 'Consulting', href: '/consulting' }
    ],
  },
  {
    title: 'SPECS & COMPLIANCE',
    dropdown: [], 
  },
  {
    title: 'RESOURCES',
    dropdown: [
      { name: 'Catalogs & Brochures', href: '/resources/catalogs-brochures' },
      { name: 'Technical Videos', href: '/resources/technical-videos' },
      { name: 'Project Gallery', href: '/resources/project-gallery' },
      { name: 'Global Events/Shows', href: '/resources/global-shows' },
    ],
  },
  {
    title: 'PRODUCT & SOLUTION',
    dropdown: [
      { name: 'Product Categories', href: '/products/product-categories' },
      { name: 'Certifications', href: '/products/certifications' },
      { name: 'Data Sheets', href: '/products/data-sheet' },
      { name: 'Materials', href: '/products/materials' },
    ],
  },
  {
    title: 'COMPANY/CORPORATE',
    dropdown: [
      { name: 'About PEG', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Global Locations', href: '/global-location' },
      { name: 'Contacts', href: '/contact' }
    ],
  },
];

export const Navbar = () => {
  // STATE: Tracks which dropdown is currently open
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  
  // REF: Used to detect clicks outside the navbar
  const navRef = useRef<HTMLDivElement>(null);

  // LOGIC: Toggle menu open/close on Click
  const toggleMenu = (title: string) => {
    if (activeMenu === title) {
      setActiveMenu(null); // Close if clicking the currently open menu
    } else {
      setActiveMenu(title); // Open the new menu
    }
  };

  // LOGIC: Close menu if user clicks anywhere outside the navbar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav ref={navRef} className="sticky top-10 w-full z-[90] bg-white border-b-2 border-slate-100 shadow-sm">
      
      <div className="w-full px-10 md:px-20 h-24 flex items-center justify-between">
        
        {/* LEFT: Logo Container */}
        <div className="flex items-center shrink-0">
          <Link href="/" onClick={() => setActiveMenu(null)}>
            <Image
              src="/PEG.png"
              alt="Precast Engineering Group"
              width={180} 
              height={80}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* MIDDLE: Engineering-Grade Navigation */}
        <div className="hidden lg:flex items-center gap-1 h-full">
          {menu.map((link) => {
            const isOpen = activeMenu === link.title;

            return (
              <div 
                key={link.title} 
                className="relative h-full flex items-center"
                // 1. Opens immediately on hover
                onMouseEnter={() => {
                  if (link.dropdown.length > 0) setActiveMenu(link.title);
                }}
                // 2. We REMOVED onMouseLeave so it doesn't turn off when the mouse moves away!
              >
                
                {/* Nav Item Button */}
                <button 
                  // 3. Click toggles it off if it's already open
                  onClick={() => toggleMenu(link.title)}
                  className={`flex items-center gap-1 px-4 h-full text-[12px] font-black uppercase tracking-widest transition-all duration-200
                    ${isOpen ? 'text-[#1B79EE]' : 'text-[#004aad] hover:text-[#1B79EE]'}
                  `}
                >
                  {link.title}
                  {link.dropdown.length > 0 && (
                    <ChevronDown 
                      className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                    />
                  )}
                </button>

                {/* High-Density Dropdown */}
                {link.dropdown.length > 0 && (
                  <div 
                    className={`absolute left-0 top-full transition-all duration-200 
                      ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}
                    `}
                  >
                    <ul className="w-64 bg-white border-t-4 border-[#1B79EE] shadow-[0_15px_40px_-10px_rgba(0,74,173,0.15)] ring-1 ring-slate-100 flex flex-col">
                      {link.dropdown.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            onClick={() => setActiveMenu(null)} // Closes menu when a link is clicked
                            className="block px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-slate-600 hover:bg-slate-50 hover:text-[#1B79EE] border-b border-slate-50 last:border-0 transition-colors"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* RIGHT: Action Buttons */}
        <div className="flex items-center gap-4 shrink-0">
          <Link href="#contact-us">
            <Button className="bg-[#004aad] hover:bg-[#1B79EE] text-white font-black text-[11px] px-6 py-6 rounded-none uppercase tracking-widest transition-all shadow-[4px_4px_0px_#1B79EE] hover:shadow-[2px_2px_0px_#1B79EE] hover:translate-y-[2px] hover:translate-x-[2px]">
              ACCESS TECHNICAL VAULT
            </Button>
          </Link>
        </div>

      </div>
    </nav>
  );
};