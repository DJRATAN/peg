import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { ChevronDown, Search } from 'lucide-react';

const menu = [
  {
    title: 'CAD/BIM',
    dropdown: [
      { name: 'CAD Drawings', href: '/products/cad-drawings' },
      { name: 'BIM Files (Revit)', href: '/bim-files' },
      { name: '3D Models', href: '/3d-models' }
    ],
  }, 
  {
    title: 'Specifications',
    dropdown: [
      { name: 'Master Specifications', href: '/specs/master' },
      { name: 'SpecWizard', href: '/specs/wizard' },
      { name: 'Short Form Specs', href: '/specs/short' },
      { name: 'Outline Specs', href: '/specs/outline' }
    ],
  }, 
  {
    title: 'Products',
    dropdown: [
      { name: 'CSI Divisions', href: '/products/divisions' },
      { name: 'Product Categories', href: '/products/categories' },
      { name: 'Certifications', href: '/products/certs' },
      { name: 'Data Sheets', href: '/products/data-sheets' },
    ],
  }, 
  {
    title: 'Resources',
    dropdown: [
      { name: 'Catalogs & Brochures', href: '/resources/catalogs' },
      { name: 'Technical Videos', href: '/resources/videos' },
      { name: 'Educational Webinars', href: '/resources/webinars' },
      { name: 'Project Gallery', href: '/resources/gallery' },
    ],
  },
  {
    title: 'BPM Services',
    dropdown: [
      { name: 'Get Specified More', href: '/bpm/specified' },
      { name: 'Add Products to Library', href: '/bpm/add' }
    ],
  },
];

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b-2 border-slate-100 h-[90px] flex items-center">
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        {/* LEFT: Professional Logo Area */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/PEG.png"
              alt="Precast Engineering Group"
              width={180}
              height={50}
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
          <button className="p-2 text-slate-400 hover:text-[#004aad] transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <Button className="bg-[#004aad] hover:bg-[#1B79EE] text-white font-bold px-6 py-5 rounded-none uppercase tracking-tighter transition-all shadow-[4px_4px_0px_#1B79EE]">
            Contact Us
          </Button>
        </div>

      </div>
    </nav>
  );
};