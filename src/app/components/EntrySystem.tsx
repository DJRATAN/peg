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
        handleStart();
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
            {/* 2. FIXED AUDIO CONTROLLER */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isInitialized ? { opacity: 1, y: 0 } : {}}
                className="fixed top-15 right-8 z-[100] flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20   shadow-2xl"
            >
                <button
                    onClick={toggleMute}
                    className="text-[#004aad] curser-pointer"
                >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>

            </motion.div>
        </>
    );
}