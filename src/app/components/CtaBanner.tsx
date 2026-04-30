import React from 'react';
import { Button } from "@/components/ui/button";

export const RegistrationBanner = () => {
  return (
    <section className="w-full bg-[#004aad] py-6 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
        
        {/* The Text Content */}
        <h2 className="text-white text-lg md:text-xl font-medium tracking-wide text-center md:text-left">
          Register now to save projects, bookmark favorites, and get the most out of PEG
        </h2>

        {/* The Outlined Button - Mimicking the ARCAT style */}
        <Button 
          variant="outline" 
          className="rounded-none border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#004aad] px-8 py-6 font-bold uppercase tracking-[0.15em] text-sm transition-all duration-300"
        >
          Join PEG
        </Button>
        
      </div>
    </section>
  );
};