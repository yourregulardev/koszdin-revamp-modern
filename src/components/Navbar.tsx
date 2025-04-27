
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [practiceAreasOpen, setPracticeAreasOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const togglePracticeAreas = () => setPracticeAreasOpen(!practiceAreasOpen);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-law-blue">
            KOSZDIN <span className="text-law-gold">LAW</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link to="/" className="text-law-blue hover:text-law-gold font-medium transition-colors">
            Home
          </Link>
          <div className="relative group">
            <button 
              className="flex items-center text-law-blue hover:text-law-gold font-medium transition-colors"
              onClick={togglePracticeAreas}
            >
              Practice Areas <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-1">
                <Link to="/workers-compensation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Workers' Compensation
                </Link>
                <Link to="/personal-injury" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Personal Injury
                </Link>
                <Link to="/social-security-disability" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Social Security Disability
                </Link>
              </div>
            </div>
          </div>
          <Link to="/attorneys" className="text-law-blue hover:text-law-gold font-medium transition-colors">
            Attorneys
          </Link>
          <Link to="/about" className="text-law-blue hover:text-law-gold font-medium transition-colors">
            About Us
          </Link>
          <Link to="/blog" className="text-law-blue hover:text-law-gold font-medium transition-colors">
            Blog
          </Link>
          <Link to="/contact" className="text-law-blue hover:text-law-gold font-medium transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Button className="bg-law-blue hover:bg-law-blue/90 text-white">
            Free Consultation
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button className="lg:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="h-6 w-6 text-law-blue" />
          ) : (
            <Menu className="h-6 w-6 text-law-blue" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-law-blue hover:text-law-gold font-medium transition-colors">
                Home
              </Link>
              <div>
                <button 
                  className="flex items-center text-law-blue hover:text-law-gold font-medium transition-colors"
                  onClick={togglePracticeAreas}
                >
                  Practice Areas <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${practiceAreasOpen ? "rotate-180" : ""}`} />
                </button>
                {practiceAreasOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link to="/workers-compensation" className="block text-sm text-gray-700 hover:text-law-gold">
                      Workers' Compensation
                    </Link>
                    <Link to="/personal-injury" className="block text-sm text-gray-700 hover:text-law-gold">
                      Personal Injury
                    </Link>
                    <Link to="/social-security-disability" className="block text-sm text-gray-700 hover:text-law-gold">
                      Social Security Disability
                    </Link>
                  </div>
                )}
              </div>
              <Link to="/attorneys" className="text-law-blue hover:text-law-gold font-medium transition-colors">
                Attorneys
              </Link>
              <Link to="/about" className="text-law-blue hover:text-law-gold font-medium transition-colors">
                About Us
              </Link>
              <Link to="/blog" className="text-law-blue hover:text-law-gold font-medium transition-colors">
                Blog
              </Link>
              <Link to="/contact" className="text-law-blue hover:text-law-gold font-medium transition-colors">
                Contact
              </Link>
              <Button className="bg-law-blue hover:bg-law-blue/90 text-white w-full">
                Free Consultation
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
