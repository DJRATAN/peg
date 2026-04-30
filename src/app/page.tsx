import Link from "next/link";
import { Search, FileText, Box, PenTool, ClipboardCheck, LayoutGrid, HardHat, Factory } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RegistrationBanner } from "./components/CtaBanner";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center bg-slate-50">
      {/* Hero Section - Engineering Focus */}
      <section className="relative w-full py-24 md:py-32 flex flex-col items-center justify-center border-b bg-white">
        {/* Subtle Engineering Grid Overlay */}
        <div className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
        
        <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-8 z-10">
          <div className="space-y-4 max-w-4xl">
            <div className="inline-block px-3 py-1 rounded-full bg-[#1B79EE]/10 text-[#1B79EE] text-sm font-bold tracking-wide uppercase mb-4">
              Precast Engineering Group
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-[#004aad]">
              High-Performance <span className="text-[#1B79EE]">Precast</span> Data
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              The industry's most comprehensive library for precast concrete specifications, 
              CAD details, and BIM objects. Precision engineered for model analysis.
            </p>
          </div>

          {/* Search Bar - ARCAT Style (Bold & Functional) */}
          <div className="w-full max-w-3xl flex items-center gap-0 bg-white border-2 border-[#004aad] rounded-lg overflow-hidden shadow-[8px_8px_0px_rgba(0,74,173,0.1)]">
            <div className="pl-4">
              <Search className="w-6 h-6 text-slate-400" />
            </div>
            <Input
              type="text"
              placeholder="Search structural precast, architectural panels, BIM objects..."
              className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-lg py-8 placeholder:text-slate-400"
            />
            <Button className="rounded-none h-16 px-10 bg-[#004aad] hover:bg-[#1B79EE] text-white font-bold transition-all text-lg">
              SEARCH
            </Button>
          </div>
          
          <div className="flex gap-6 text-sm font-medium text-slate-500">
            <span>Popular: Wall Panels</span>
            <span>•</span>
            <span>Hollow-Core Slabs</span>
            <span>•</span>
            <span>Bridge Girders</span>
          </div>
        </div>
      </section>

      {/* Grid Content Section */}
      <section className="w-full py-20">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-[#004aad]">Technical Resources</h2>
              <p className="text-slate-500">Select a category to view drawings and data</p>
            </div>
            <Button variant="outline" className="border-[#1B79EE] text-[#1B79EE] font-bold">View All Resources</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <QuickLinkCard
              icon={<PenTool className="w-8 h-8" />}
              title="CAD Details"
              description="DWG, DXF & PDF library for structural precast connections."
              href="/content-type/cad"
              count="1,200+ Files"
            />
            <QuickLinkCard
              icon={<Box className="w-8 h-8" />}
              title="BIM Objects"
              description="Revit-ready families with embedded structural metadata."
              href="/content-type/bim"
              count="450+ Objects"
            />
            <QuickLinkCard
              icon={<FileText className="w-8 h-8" />}
              title="CSI Specs"
              description="3-Part specifications formatted for Section 03 40 00."
              href="/content-type/spec"
              count="85 Specs"
            />
            <QuickLinkCard
              icon={<ClipboardCheck className="w-8 h-8" />}
              title="SpecWizard"
              description="Configure custom precast specs in minutes."
              href="/content-type/sw"
              count="Interactive"
            />
          </div>
        </div>
      </section>

      <RegistrationBanner/>
    </main>
  );
}

function QuickLinkCard({ icon, title, description, href, count }: { icon: React.ReactNode, title: string, description: string, href: string, count: string }) {
  return (
    <Link href={href} className="group">
      <div className="bg-white border border-slate-200 p-8 rounded-none transition-all duration-300 group-hover:border-[#1B79EE] group-hover:shadow-xl flex flex-col h-full relative">
        <div className="mb-6 text-[#1B79EE] group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div className="flex flex-col flex-1">
          <h3 className="text-xl font-bold text-[#004aad] mb-2">{title}</h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-4">{description}</p>
        </div>
        <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{count}</span>
          <span className="text-[#1B79EE] font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">BROWSE →</span>
        </div>
        {/* Accent Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-[#1B79EE] opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
    </Link>
  );
}