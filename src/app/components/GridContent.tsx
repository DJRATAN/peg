import React from 'react'
import { Search, FileText, Box, PenTool, ClipboardCheck, LayoutGrid, HardHat, Factory } from "lucide-react";
import { Button } from '@/components/ui/button';
import Link from 'next/link';


const GridContent = () => {
    return (
        < section className="w-full" >
            <div className="container px-4 mx-auto">
                <h2 className='text-5xl text-center m-8 font-bold text-[#004aad]'>Get complete PEG solutions for everyone on the team. </h2>
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
        </section >
    )
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
export default GridContent
