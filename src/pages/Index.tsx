
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PracticeAreas from "@/components/PracticeAreas";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import AttorneysSection from "@/components/AttorneysSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <PracticeAreas />
        <WhyChooseUs />
        <Testimonials />
        <AttorneysSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
