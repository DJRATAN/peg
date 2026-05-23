"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus, ArrowUpRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { BsTwitter } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { footerData } from "@/lib/data";

const logos = [
    { src: "/assets/footer_logo/peg.jpeg", alt: "Partner 01" },
    { src: "/assets/footer_logo/precasteng.jpeg", alt: "Partner 02" },
    { src: "/assets/footer_logo/pxchange.jpeg", alt: "Partner 03" },
    { src: "/assets/footer_logo/totaltech.jpeg", alt: "Partner 04" },
    { src: "/assets/footer_logo/trench-unlimited.jpeg", alt: "Partner 05" },
];
const socialLinks = [
    { icon: FaFacebook, href: "#" },
    { icon: BsTwitter, href: "#" },
    { icon: FaYoutube, href: "#" },
    { icon: FaInstagram, href: "#" },
    { icon: FaLinkedinIn, href: "#" },
];
export default function ExtraordinaryFooter() {
    const marqueeLogos = [...logos, ...logos, ...logos];
    return (

        <footer className="relative w-full bg-white border-t-2 border-slate-100 overflow-hidden select-none">

            {/* 32-INCH FULL WIDTH CONTAINER */}
            <div className="w-full px-10 md:px-20 py-16">
                <div className="w-full bg-white pb-10 overflow-hidden">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                        {/* 1. LEFT: LOGO + ABOUT (Spans 3 Columns) */}
                        <div className="lg:col-span-3 flex flex-col items-center lg:items-start space-y-6">
                            <Image
                                src="/PEG.png"
                                alt="Precast Engineering Group"
                                width={200}
                                height={80}
                                className="object-contain"
                            />
                            <p className="text-slate-500 font-medium text-sm leading-relaxed text-center lg:text-left max-w-xs">
                                <strong className="text-[#004aad]">Precast Engineering Group (PEG)</strong> is the global authority dedicated to advancing structural precast technology, engineering, and manufacturing.
                            </p>
                        </div>

                        {/* 2. MIDDLE: HEADLINE + MARQUEE (Spans 6 Columns) */}
                        <div className="lg:col-span-6 flex flex-col items-center lg:border-x border-slate-100 px-0 lg:px-10">

                            <h3 className="text-3xl font-black text-[#004aad] uppercase tracking-tighter mb-8 text-center">
                                Our Group Dedicated to Precast
                            </h3>

                            <div className="relative w-full max-w-[800px] h-20 overflow-hidden">
                                {/* Edge Blur Masks for smooth entry/exit */}
                                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                                {/* Infinite Marquee Animation */}
                                <motion.div
                                    animate={{ x: ["0%", "-50%"] }}
                                    transition={{
                                        duration: 20,
                                        ease: "linear",
                                        repeat: Infinity,
                                    }}
                                    className="flex items-center h-full w-max"
                                >
                                    {[...marqueeLogos, ...marqueeLogos].map((logo, i) => (
                                        <div key={i} className="px-8 shrink-0">
                                            <div className="relative w-32 h-16 opacity-100 cursor-pointer">
                                                <Image
                                                    src={logo.src}
                                                    alt={logo.alt}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>

                        {/* 3. RIGHT: SOCIAL ICONS (Spans 3 Columns) */}
                        <div className="lg:col-span-3 flex flex-wrap justify-center lg:justify-end gap-3">
                            {socialLinks.map((social, i) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={i}
                                        href={social.href}
                                        whileHover={{ y: -5, backgroundColor: "#004aad", borderColor: "#004aad", color: "#ffffff" }}
                                        className="p-4 border border-slate-200 text-[#004aad] transition-colors duration-300 flex items-center justify-center bg-slate-50"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </motion.a>
                                );
                            })}
                        </div>

                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-1 border-b border-slate-100 pb-12 ">
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
                <div className=" flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="font-mono text-[9px] text-[#004aad] font-bold tracking-widest flex items-center gap-8   ">
                        <span>© 2026 PRECAST ENGINEERING GROUP</span>
                        <span className="hidden md:block w-[1px] h-3 bg-slate-200" />
                        <span className="hover:text-[#1B79EE] cursor-pointer transition-colors uppercase">Privacy Policy</span>
                        <span className="hover:text-[#1B79EE] cursor-pointer transition-colors uppercase">Terms of Service</span>
                    </div>

                </div>

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