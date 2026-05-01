import React from 'react';
import Link from 'next/link';

const resourceColumns = [
  {
    links: [
      { name: 'PROJECTS (NEW)', href: '/projects', highlight: true },
      { name: 'VIDEOS', href: '/videos' },
      { name: 'CATALOGS', href: '/catalogs' },
      { name: 'GREENREPORTS', href: '/sustainability' },
      { name: 'NEWSLETTER', href: '/news' },
      { name: 'OUTLINE', href: '/outline-specs' },
    ]
  },
  {
    links: [
      { name: 'CONTINUING ED (NEW)', href: '/education', highlight: true },
      { name: 'WEBINARS', href: '/webinars' },
      { name: 'DETAILED PODCAST', href: '/podcasts', italic: true },
      { name: 'CERTIFICATIONS', href: '/certs' },
      { name: 'DATA SHEETS', href: '/data-sheets' },
      { name: 'ADA PRODUCTS', href: '/ada' },
    ]
  }
];

export const ResourceDirectory = () => {
  return (
    <section className="relative w-full min-h-100 flex items-center overflow-hidden border-y border-slate-200">
      {/* Background Image with PEG Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/assets/csd8.1 - Copy.png')` }} // Replace with a high-res precast building shot
      >
        <div className="absolute inset-0 " />
      </div>

      <div className="container mx-auto px-6 relative z-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Main Heading */}
          <div className="lg:col-span-5 border-r-0 lg:border-r border-white/20 pr-0 lg:pr-12">
            <h2 className="text-4xl md:text-5xl font-serif text-[#004aad] leading-tight">
              Go beyond specs with reports, videos, podcasts, and more.
            </h2>
          </div>

          {/* Right: Link Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 pl-0 lg:pl-12">
            {resourceColumns.map((col, idx) => (
              <ul key={idx} className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className={`
                        text-sm font-bold tracking-widest text-[#004aad] hover:text-[#1B79EE] transition-colors flex items-center
                        ${link.italic ? 'italic' : ''}
                      `}
                    >
                      {link.name}
                      {link.highlight && (
                        <span className="ml-2 text-[10px] bg-white/20 px-1.5 py-0.5 rounded backdrop-blur-sm">
                          NEW
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
    </section>
  );
};