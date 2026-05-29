"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Power, Activity, HardHat, Hammer } from 'lucide-react';

export default function EntrySystem() {
    const [isInitialized, setIsInitialized] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Simulated Progress Loader
    useEffect(() => {
        if (progress < 100) {
            const timer = setTimeout(() => setProgress(prev => prev + 1), 30);
            return () => clearTimeout(timer);
        }
    }, [progress]);

    useEffect(() => {
        audioRef.current = new Audio('/assets/audio/background.mpeg');
        audioRef.current.loop = true;
    }, []);

    const handleStart = () => {
        setIsInitialized(true);
        if (audioRef.current) {
            audioRef.current.play();
            audioRef.current.volume = 0.4;
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
            <AnimatePresence>
                {!isInitialized && (
                    <motion.div
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-[999] bg-[#004aad] flex flex-col items-center justify-center p-10 overflow-hidden"
                    >
                        {/* Background Industrial Grid */}
                        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center space-y-8 max-w-2xl w-full"
                        >
                            <div className="space-y-2">
                                <h1 className="text-white text-3xl md:text-6xl font-black tracking-tighter uppercase leading-none">
                                 The site is under Maintenance  <br /> 
                                </h1>
                                
                                <div className="flex items-center justify-center gap-4 py-4">
                                    <Activity className="w-4 h-4 text-[#1B79EE] animate-pulse" />
                                    <p className="text-[#1B79EE] font-mono text-[10px] tracking-[0.4em] uppercase">
                                        {progress < 100 ? "Syncing Trenching Systems..." : "Systems Synchronized"}
                                    </p>
                                </div>
                            </div>

                            {/* PROGRESS BAR SECTION */}
                            <div className="w-full space-y-4">
                                <div className="flex justify-between font-mono text-[10px] text-white/50 uppercase tracking-widest">
                                    <span>Deployment Progress</span>
                                    <span>{progress}%</span>
                                </div>
                                <div className="h-[2px] w-full bg-white/10 relative">
                                    <motion.div 
                                        className="absolute top-0 left-0 h-full bg-[#1B79EE]"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${progress}%` }}
                                    />
                                </div>
                            </div>

                            {/* BUTTON - Only fully visible when progress is 100 */}
                            <div className="h-24 flex items-center justify-center">
                                {progress === 100 ? (
                                    <motion.button
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        onClick={handleStart}
                                        className="group relative px-20 py-6 border-2 border-[#1B79EE] overflow-hidden bg-transparent transition-all"
                                    >
                                        <div className="absolute inset-0 bg-[#1B79EE] -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                                        <span className="relative z-10 flex items-center gap-4 text-white font-black text-xs uppercase tracking-[0.5em]">
                                            <Power className="w-4 h-4" /> Enter Site
                                        </span>
                                    </motion.button>
                                ) : (
                                    <div className="flex gap-8 opacity-40 grayscale">
                                        <Hammer className="w-6 h-6 text-white animate-bounce" />
                                        <HardHat className="w-6 h-6 text-white animate-bounce delay-150" />
                                    </div>
                                )}
                            </div>
                        </motion.div>
 
                    </motion.div>
                )}
            </AnimatePresence>

            {/* AUDIO CONTROLLER (Remains the same as your original) */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isInitialized ? { opacity: 1, y: 0 } : {}}
                className="fixed top-0 right-8 md:right-7 z-[100] flex items-center "
            >
 
                <div className="h-6 w-[1px] bg-white/20 mx-2" />
                <button
                    onClick={toggleMute}
                    className="p-3 text-white transition-colors"
                >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
            </motion.div>
        </>
    );
}