"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus, ArrowUpRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { BsTwitter } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

// export const footerData = [
//     {
//         title: "Corporate",
//         links: [
//             "Customer Service",
//             "Accounts",
//             "Awards",
//             "Achievements",
//             "Current Events",
//             "Executive Committee",
//             "Our Foundation",
//             "Human Resources",
//             "Media Management",
//             "Mission & Vision",
//             "Organizational Struture",
//             "Scholarships",
//             "Testmonials",
//             "Our Milestones",
//             "Industry News",
//         ],
//     },
//     {
//         title: "Policies",
//         links: [
//             "Warranties",
//             "Return Policy",
//             "Product Liability",
//             "Promotions",
//             "Confidentiality",
//             "Sustainability",
//             "Government Policy",
//             "Corporate Social Responsibility",
//             "Credit Application",
//             "Terms & Conditions",
//             "Security & Maintenance",
//             "Non Disclosure Agreement",
//             "Insurances",
//             "Complaints",
//             "Privacy Policy",
//             "Patents"
//         ],
//     },
//     {
//         title: "Sales",
//         links: [
//             "Pricing",
//             "Exports",
//             "Videos",
//             "Trade Shows",
//             "Sales Team",
//             "Library",
//             "Locations",
//             "On going projects",
//             "Ineractive",
//             "Valueable sales tools",
//             "Follow your",
//             "Request a Delivery",
//             "Request for quote",
//             "Digital Marketing",
//             "Logistics",
//             "Webinars"
//         ]
//     },
//     {
//         title: "Products",
//         links: [
//             "Molded Gratings",
//             "Pultruded Grating",
//             "Dynaform Structural Shapes",
//             "Dynarail/DynaRound Guardrail & Handrail Products",
//             "Dynarail Ladder Products",
//             "Stair Solutions",
//             "Fiberglass Plate",
//             "Work Platforms",
//             "Accessories / Complementary Products",
//             "Custom Pultrusions",
//             "Metering Pump Stands",
//             "Rooftop Safety Products",
//             "Unique Product Solutions"
//         ],
//     },
//     {
//         title: "Engineering",
//         links: [
//             "Submittals",
//             "Data Sheets",
//             "Engineers & Architects",
//             "Customization",
//             "Design Team",
//             "Certificates",
//             "Specifications",
//             "Standards",
//             "Get Digital With USF",
//             "IT Department",
//             "Case Studies",
//             "Design & Innovations",
//             "Product Approvals",
//             "Quality Control",
//             "Show Drawings"
//         ]
//     },
// ];
export const footerData = [
    {
        title: "Corporate",
        links: [
            "Corporate",
            "Corporate",
            "Corporate",
            "Corporate",
            "Corporate",
            "Corporate",
            "Corporate",
            "Corporate",
            "Corporate",
            "Corporate",
            "Corporate",
            "Corporate",
            "Corporate",
            "Corporate",
            "Corporate",
            "Corporate",
            "Corporate", 
        ],
    },
    {
        title: "Policies",
        links: [
            "Policies",
            "Policies",
            "Policies",
            "Policies",
            "Policies",
            "Policies",
            "Policies",
            "Policies",
            "Policies",
            "Policies",
            "Policies",
            "Policies",
            "Policies",
            "Policies",
            "Policies",
            "Policies",
            "Policies"
        ],
    },
    {
        title: "Products",
        links: [
            "Products",
            "Products",
            "Products",
            "Products",
            "Products",
            "Products",
            "Products",
            "Products",
            "Products",
            "Products",
            "Products",
            "Products",
            "Products",
            "Products",
            "Products",
            "Products",
            "Products"
        ],
    },
    {
        title: "Markets",
        links: [
            "Markets",
            "Markets",
            "Markets",
            "Markets",
            "Markets",
            "Markets",
            "Markets",
            "Markets",
            "Markets",
            "Markets",
            "Markets",
            "Markets",
            "Markets",
            "Markets",
            "Markets",
            "Markets",
            "Markets"
        ],
    },
    {
        title: "Resource Center",
        links: [
            "Resource Center",
            "Resource Center",
            "Resource Center",
            "Resource Center",
            "Resource Center",
            "Resource Center",
            "Resource Center",
            "Resource Center",
            "Resource Center",
            "Resource Center",
            "Resource Center",
            "Resource Center",
            "Resource Center",
            "Resource Center",
            "Resource Center",
            "Resource Center",
            "Resource Center",
        ],
    },
    {
        title: "Engineering",
        links: [
            "Engineering",
            "Engineering",
            "Engineering",
            "Engineering",
            "Engineering",
            "Engineering",
            "Engineering",
            "Engineering",
            "Engineering",
            "Engineering",
            "Engineering",
            "Engineering",
            "Engineering",
            "Engineering",
            "Engineering",
            "Engineering",
            "Engineering"
        ],
    }
];
export default function ExtraordinaryFooter() {
    return (
        <footer className="relative w-full bg-white border-t-2 border-slate-100 pt-24 pb-12 overflow-hidden select-none">

            {/* 32-INCH FULL WIDTH CONTAINER */}
            <div className="w-full px-6">

                {/* TOP SECTION: BIG BRANDING */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-10">
                    <div className="max-w-md">
                        <Image src={'/PEG.png'} alt="" width={200} height={200} />
                        {/* <h2 className="text-[#004aad] text-5xl font-black tracking-tighter mb-4">
                            PEG <span style={{ WebkitTextStroke: "1px #1B79EE", color: "transparent" }}>GLOBAL</span>
                        </h2>
                        <p className="text-slate-400 font-mono text-[10px] uppercase tracking-widest leading-relaxed">
                            Leading the infrastructure standard through precision precast engineering and vertical coordinate systems.
                        </p> */}
                    </div>

                    <div className="flex justify-center lg:justify-end gap-3 mb-12">
                        {[FaFacebook, BsTwitter, FaYoutube, FaInstagram, FaInstagram].map((Icon, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5, backgroundColor: "#004aad", color: "#fff" }}
                                className="p-4 border flex justify-center lg:justify-end gap-3 mb-12 border-slate-200 cursor-pointer transition-colors text-[#004aad]"
                            >
                                <Icon className="w-5 h-5" />
                            </motion.div>
                        ))}

                    </div>
                </div>

                {/* MAIN SITEMAP: 5-COLUMN GRID */}
                <div className="grid grid-cols-2 md:grid-cols-6 gap-1 border-b border-slate-100 pb-20">
                    {footerData.map((section, idx) => (
                        <div key={idx} className="flex flex-col gap-6">
                            <h3 className="text-[#004aad] text-[11px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#1B79EE]" />
                                {section.title}
                            </h3>

                            <ul className="flex flex-col gap-3">
                                {section.links.map((link, i) => (
                                    <motion.li
                                        key={i}
                                        whileHover={{ x: 5 }}
                                        className="group flex items-center gap-2 cursor-pointer"
                                    >
                                        <Plus className="w-3 h-3 text-[#1B79EE] opacity-40 group-hover:opacity-100 group-hover:rotate-90 transition-all" />
                                        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider group-hover:text-[#004aad] transition-colors">
                                            {link}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* BOTTOM BAR: LEGAL & STATUS */}
                <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-8 font-mono text-[9px] text-slate-300">
                        <span>© 2026 PRECAST ENGINEER GROUP</span>
                        <span className="hidden md:block w-[1px] h-3 bg-slate-200" />
                        <span className="hover:text-[#1B79EE] cursor-pointer transition-colors uppercase">Privacy Policy</span>
                        <span className="hover:text-[#1B79EE] cursor-pointer transition-colors uppercase">Terms of Service</span>
                    </div>

                    <div className="flex items-center gap-3 bg-[#F8F9FA] px-4 py-2 border border-slate-100">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="font-mono text-[9px] text-[#004aad] font-bold tracking-widest uppercase">
                            System_Status: Optimal
                        </span>
                    </div>
                </div>

            </div>

            {/* BACKGROUND DECORATION FOR ULTRA-WIDE SCREENS */}
            <div className="absolute -bottom-20 -right-20 opacity-[0.03] pointer-events-none select-none">
                <h1 className="text-[25rem] font-black text-[#004aad] leading-none tracking-tighter">
                    PEG
                </h1>
            </div>
        </footer>
    );
}
const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
    <Link
        href="#"
        className="p-2 border border-white/40 hover:border-white hover:bg-white/10 transition-all text-white"
    >
        {icon}
    </Link>
);