'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { ChevronDown, Search } from 'lucide-react';

const menu = [
  {
    title: 'ENGINEERING & CAD',
    dropdown: [
      { name: 'CAD Drawings', href: '/products/cad-drawings' },
      { name: 'Structural Submittals', href: '/structural-submittals' },
      { name: 'Engineering Services', href: '/engineering-servics' },
      { name: 'consulting', href: '/consulting' }
    ],
  },
  {
    title: 'SPECS & COMPLIANCE',
    dropdown: [
    ],
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
  return (
    <nav className="relative top-0 w-full z-50 bg-white border-b-2 border-slate-100 h-22.5 flex items-center">
      <div className="w-full px-10 md:px-20 py-16 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/PEG.png"
              alt="Precast Engineering Group"
              width={280}
              height={180}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* MIDDLE: Engineering-Grade Navigation */}
        <div className="hidden lg:flex items-center gap-2">
          {menu.map((link) => (
            <div key={link.title} className="group relative">
              {/* Nav Item */}
              <button className="flex items-center gap-1 px-4 py-8 text-[12px] font-black uppercase tracking-widest text-[#004aad] hover:text-[#1B79EE] transition-all duration-200">
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
                        className="block px-6 py-3.5 text-[11px] font-bold uppercase tracking-wider text-slate-600 hover:bg-slate-50 hover:text-[#1B79EE] border-b border-slate-50 last:border-0 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: Action Buttons */}
        <div className="flex items-center gap-4">
          {/* <button className="p-2 text-slate-400 hover:text-[#004aad] transition-colors">
            <Search className="w-5 h-5" />
          </button> */}
          <Link href={'#contact-us'}>
            <Button className="bg-[#004aad] hover:bg-[#1B79EE] text-white font-bold px-6 py-5 rounded-none uppercase tracking-tighter transition-all shadow-[4px_4px_0px_#1B79EE]">
              ACCESS TECHNICAL VAULT
            </Button>
            </Link>
        </div>

      </div>
    </nav>
  );
};