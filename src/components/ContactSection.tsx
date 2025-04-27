
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section className="section-padding bg-law-light">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get a Free Case Evaluation</h2>
              <p className="text-law-gray mb-8">
                Contact us today for a free, no-obligation consultation. Our team is ready to review your case and help you understand your legal options.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Our Office</h3>
                <address className="not-italic text-law-gray">
                  <p>6600 Sherman Way</p>
                  <p>Van Nuys, CA 91406</p>
                  <p className="mt-4">
                    <strong>Phone:</strong> (818) 901-9999
                  </p>
                  <p>
                    <strong>Email:</strong> info@koszdin.com
                  </p>
                </address>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                <ul className="text-law-gray">
                  <li className="mb-2">Monday - Friday: 9:00 AM - 5:30 PM</li>
                  <li>Saturday - Sunday: Closed</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in animate-delay-200">
              <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-law-gray mb-1">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="Your first name" className="border-gray-300" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-law-gray mb-1">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Your last name" className="border-gray-300" />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-law-gray mb-1">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email address" className="border-gray-300" />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-law-gray mb-1">
                    Phone Number
                  </label>
                  <Input id="phone" placeholder="Your phone number" className="border-gray-300" />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="caseType" className="block text-sm font-medium text-law-gray mb-1">
                    Case Type
                  </label>
                  <select id="caseType" className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm">
                    <option value="">Select case type</option>
                    <option value="workers-comp">Workers' Compensation</option>
                    <option value="personal-injury">Personal Injury</option>
                    <option value="social-security">Social Security Disability</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-law-gray mb-1">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Briefly describe your case" rows={4} className="border-gray-300" />
                </div>
                
                <Button className="w-full bg-law-blue hover:bg-law-blue/90 text-white">
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
