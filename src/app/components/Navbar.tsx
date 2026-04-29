import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button"; 
import { ChevronDown } from 'lucide-react'

const menu = [
  {
    title: 'CAD/BIM',
    href: '#products',
    dropdown: [
      { name: 'CAD Drawing', href: '/products/round-risers' },
      { name: 'BIM Files', href: '/bim-files' }
    ],
  }, {
    title: 'Spec',
    href: '#products',
    dropdown: [
      { name: 'Specifications', href: '/products/round-risers' },
      { name: 'SpecWizard', href: '/products/round-risers' },
      { name: 'Short Form Specs', href: '/products/catch-basin-frames' },
      { name: 'Ourline Specs', href: '/products/d-shape-risers' }
    ],
  }, {
    title: 'Building Products',
    href: '#products',
    dropdown: [
      { name: 'CSI Divisions', href: '/products/round-risers' },
      { name: 'Building Product Category', href: '/products/round-risers' },
      { name: 'Certifications', href: '/products/catch-basin-frames' },
      { name: 'HPDs', href: '/products/d-shape-risers' },
      { name: 'EPDs', href: '/products/valve-box-risers' }, ,
      { name: 'DATA Sheets', href: '/products/valve-box-risers' },
    ],
  }, {




    title: 'Catalog / Videos',
    href: '#products',
    dropdown: [
      { name: 'Catalogs / Brochures', href: '/products/round-risers' },
      { name: 'Directory of 100s Products', href: '/products/round-risers' },
      { name: 'Videos', href: '/products/catch-basin-frames' },
      { name: 'Webinars', href: '/products/d-shape-risers' },
    ],
  }, {
    title: 'Resources',
    href: '#products',
    dropdown: [
      { name: 'Round Manhole Risers', href: '/products/round-risers' },
      { name: 'Expandable Adjustment Rings', href: '/products/round-risers' },
      { name: 'Catch Basin Frames', href: '/products/catch-basin-frames' },
      { name: 'Curb Inlet Risers', href: '/products/d-shape-risers' },
      { name: 'Valve Box Extensions', href: '/products/valve-box-risers' },
    ],
  }, {
    title: 'BPMs',
    href: '#products',
    dropdown: [
      { name: 'Get Specified More', href: '/products/round-risers' },
      { name: 'Add your products to ARCAT', href: '/products/round-risers' }
    ],
  },
];

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-8 py-0 bg-white shadow-sm border-b border-slate-100 h-[100px]">

      {/* LEFT: Logo - Height reduced to 55px to keep nav slim */}
      <div className="flex items-center h-full">
        <Image
          src="/PEG.png"
          alt="H2O Logo"
          width={200}
          height={65}
          className="object-contain h-[100px] py-2 w-auto"
          priority
        />
      </div>

      {/* MIDDLE: Slate Gray Text, Bold, Light Blue Hover */}
      <div className="hidden lg:flex items-center gap-10 text-sm font-bold uppercase tracking-[0.2em] text-slate-600">
        {menu.map((link) => (
          <div key={link.title} className="group relative">
            {/* Main Navigation Item */}
            <button className="flex items-center gap-1 px-4 py-2 text-[13px] font-black uppercase tracking-widest text-[#1B79EE] hover:text-[#004aad] transition-colors group-hover:bg-gray-50">
              {link.title}
              <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
            </button>

            {/* Dropdown Menu (Black & Red Theme) */}
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-[60]">
              <ul className="w-72 bg-white border-t-[3px] border-[#004aad] shadow-2xl ring-1 ring-[#1B79EE]/5 overflow-hidden">
                {link.dropdown.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="block px-6 py-4 text-[12px] font-bold text-[#1B79EE] hover:bg-[#1B79EE] hover:text-white border-b border-gray-100 last:border-0 transition-all duration-200"
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
 
    </nav>
  );
};