import React from 'react';

export const ContentSection = () => {
  return (
    <section className="w-full bg-[#f8fafc] py-20 px-4">
      <div className="container px-4 mx-auto bg-[#004aad] text-white p-12 md:p-16 shadow-2xl">
        
        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 border-b border-white/20 pb-6">
          Precast Engineering and Construction Solutions for PEGs
        </h2>

        {/* Introduction Section */}
        <div className="space-y-6 text-slate-100 leading-relaxed">
          <p>
            Picture this: It's 1 am, you're on your 5th cup of coffee, and a draft of your design is due first thing in the morning. 
            Manufacturers' reps are not available. Time is of the essence. You need to select and document 4 more products. 
            You're out of time and you need product selections now.
          </p>
          <p>
            You need a building information modeling services company you can trust to provide a quality BIM with minimal geometry 
            and the key data needed for model analysis. You need the best CSI specification writing firm to document the selected products. 
            And you need architecture details showing how products work together to solve problems.
          </p>
          <p className="font-bold text-white text-lg">
            Where can you find all this? PEG to the rescue.
          </p>
          <p>
            PEG is the free building information modeling company, the free building details modeler, and the free spec writer you need now.
          </p>
        </div>

        {/* Supporting Lifecycle Section */}
        <div className="mt-12 space-y-6">
          <h3 className="text-2xl font-bold text-white">
            Supporting You Throughout the Building Lifecycle
          </h3>
          <div className="space-y-4 text-slate-200">
            <p>From design, to construction, to facilities management, we’re with you throughout every step of the building lifecycle.</p>
            <p>Browse our easy-to-navigate building materials directory and building product database to find the right products to complete your project documents.</p>
            <p>You don’t need to be under a time crunch to find our free building information modeling company resources useful.</p>
            <p>We’re experts, providing you with the building details, architecture details, and construction project information you require to get every job done right.</p>
          </div>
        </div>

        {/* Save Time and Money Section */}
        <div className="mt-12 space-y-6">
          <h3 className="text-2xl font-bold text-white">
            Save Time and Money
          </h3>
          <div className="space-y-4 text-slate-200">
            <p>
              A BIM company will charge you to create content. PEG is a free building information modeling company. 
              We create BIM for you and your project. Our architectural detail library and specifications are also 
              free and available for your next project.
            </p>
            <p>You could create this content yourself, but that would take time that you do not have.</p>
            <p>And, we do not require you to give us your email or phone number to access this building information database and construction project information.</p>
            <p className="italic font-black text-[#1B79EE]">Free and open allowing you to save time and money on all your projects.</p>
          </div>
        </div>

      </div>
    </section>
  );
};