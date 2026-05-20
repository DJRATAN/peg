"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Power, Activity, Zap } from 'lucide-react';

export default function EntrySystem() {
    const [isInitialized, setIsInitialized] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Initialize Audio Object
    useEffect(() => {
        audioRef.current = new Audio('/assets/audio/background.mpeg');
        audioRef.current.loop = true;
    }, []);

    const handleStart = () => {
        setIsInitialized(true);
        if (audioRef.current) {
            audioRef.current.play();
            audioRef.current.volume = 0.4; // Start at 40% for premium feel
        }
    };

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <>
            {/* 1. INITIALIZATION OVERLAY (The "Boot" Screen) */}
            <AnimatePresence>
                {!isInitialized && (
                    <motion.div
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-[999] bg-[#004aad] flex flex-col items-center justify-center p-10"
                    >
                        {/* Background Tech Detail */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <div className="absolute top-10 left-10 font-mono text-[10px] text-white space-y-1">
                                <p>CORE_SYNC: ACTIVE</p>
                                <p>MEM_LOAD: 88%</p>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center space-y-12"
                        >
                            <div className="space-y-4">
                                <h1 className="text-white text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">
                                    PEG_SYSTEMS <br />
                                    <span style={{ WebkitTextStroke: "1px #1B79EE", color: "transparent" }}>V.2026.04</span>
                                </h1>
                                <p className="text-[#1B79EE] font-mono text-xs tracking-[0.6em] uppercase">Ready for Deployment</p>
                            </div>

                            <button
                                onClick={handleStart}
                                className="group relative px-20 py-6 border-2 border-[#1B79EE] overflow-hidden"
                            >
                                {/* Button Fill Animation */}
                                <div className="absolute inset-0 bg-[#1B79EE] -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />

                                <span className="relative z-10 flex items-center gap-4 text-white font-black text-xs uppercase tracking-[0.5em]">
                                    <Power className="w-4 h-4" /> Initialize Site
                                </span>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 2. FIXED AUDIO CONTROLLER */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isInitialized ? { opacity: 1, y: 0 } : {}}
                className="fixed top-20 right-8 z-[100] flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-2 pl-6 shadow-2xl"
            >
                {/* Dynamic Frequency Visualizer */}
                <div className="flex items-end gap-1 h-4 w-12">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={!isMuted ? { height: [4, 16, 8, 14, 4] } : { height: 2 }}
                            transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.1 }}
                            className="w-1 bg-[#1B79EE]"
                        />
                    ))}
                </div>

                <div className="h-6 w-[1px] bg-white/20 mx-2" />

                <button
                    onClick={toggleMute}
                    className="p-3 bg-[#004aad] text-white hover:bg-[#1B79EE] transition-colors"
                >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>

                {/* FIXED: Changed </button> to </div> here */}
                <div className="absolute -bottom-6 right-0 font-mono text-[8px] text-[#004aad] font-bold tracking-widest uppercase">
                    {isMuted ? "Audio_Disabled" : "Audio_Streaming"}
                </div>
            </motion.div>
        </>
    );
}