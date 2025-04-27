import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-law-blue text-white">
      <div className="container mx-auto px-4">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <img 
                src="/koszdin-logo.webp" 
                alt="Koszdin Law Firm Logo" 
                className="h-16 mb-6"
              />
              <p className="text-white/80 mb-6">
                Committed to protecting the rights of injured workers and individuals in Los Angeles since 1992.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-5">Practice Areas</h4>
              <ul className="space-y-3">
                <li><Link to="/workers-compensation" className="text-white/80 hover:text-law-gold transition-colors">Workers' Compensation</Link></li>
                <li><Link to="/personal-injury" className="text-white/80 hover:text-law-gold transition-colors">Personal Injury</Link></li>
                <li><Link to="/social-security-disability" className="text-white/80 hover:text-law-gold transition-colors">Social Security Disability</Link></li>
                <li><Link to="/work-injury" className="text-white/80 hover:text-law-gold transition-colors">Work Injuries</Link></li>
                <li><Link to="/car-accidents" className="text-white/80 hover:text-law-gold transition-colors">Car Accidents</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-5">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-white/80 hover:text-law-gold transition-colors">About Us</Link></li>
                <li><Link to="/attorneys" className="text-white/80 hover:text-law-gold transition-colors">Our Attorneys</Link></li>
                <li><Link to="/testimonials" className="text-white/80 hover:text-law-gold transition-colors">Testimonials</Link></li>
                <li><Link to="/blog" className="text-white/80 hover:text-law-gold transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="text-white/80 hover:text-law-gold transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-5">Contact</h4>
              <address className="not-italic text-white/80">
                <p className="mb-3">6600 Sherman Way</p>
                <p className="mb-3">Van Nuys, CA 91406</p>
                <p className="mb-3">
                  <strong className="text-white">Phone:</strong> (818) 901-9999
                </p>
                <p className="mb-3">
                  <strong className="text-white">Fax:</strong> (818) 901-9933
                </p>
                <p>
                  <strong className="text-white">Email:</strong> info@koszdin.com
                </p>
              </address>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 mb-4 md:mb-0">
            © {currentYear} Koszdin Law. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-white/60 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-white/60 hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
