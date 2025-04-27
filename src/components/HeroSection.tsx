
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] bg-gradient-to-r from-law-blue to-law-blue/80 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJ3aGl0ZSI+PGcgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjEiPjxwYXRoIGQ9Ik05MCAwdjkwSDBoOTBWMHoiLz48cGF0aCBkPSJNNDYgMjJIMjJ2MjRoMjRWMjJ6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Experienced Legal Representation in Los Angeles
          </h1>
          <p className="text-xl text-white/90 mb-8 animate-fade-in animate-delay-200">
            Koszdin Law specializes in Workers' Compensation, Personal Injury and Social Security Disability cases.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in animate-delay-400">
            <Button className="bg-law-gold hover:bg-law-gold/90 text-white text-lg px-8 py-6">
              Free Case Evaluation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
              Our Practice Areas
            </Button>
          </div>
          <div className="flex flex-wrap mt-12 gap-8 animate-fade-in animate-delay-600">
            <div className="flex items-center">
              <div className="bg-white/20 p-3 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">30+ Years</h3>
                <p className="text-white/80">of Experience</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-white/20 p-3 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">98%</h3>
                <p className="text-white/80">Success Rate</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-white/20 p-3 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">250+</h3>
                <p className="text-white/80">5-Star Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
