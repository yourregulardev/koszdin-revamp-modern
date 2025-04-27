
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const practiceAreas = [
  {
    title: "Workers' Compensation",
    description:
      "We help injured workers get the compensation they deserve for workplace injuries, including medical treatment and disability benefits.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-law-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    link: "/workers-compensation",
  },
  {
    title: "Personal Injury",
    description:
      "If you've been injured due to someone else's negligence, we'll help you recover compensation for medical bills, lost wages, and pain and suffering.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-law-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    link: "/personal-injury",
  },
  {
    title: "Social Security Disability",
    description:
      "We'll guide you through the complex Social Security Disability claims process to help you obtain the benefits you're entitled to.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-law-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    link: "/social-security-disability",
  },
];

const PracticeAreas = () => {
  return (
    <section className="section-padding bg-law-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Practice Areas</h2>
          <p className="text-law-gray max-w-2xl mx-auto">
            With over 30 years of experience, our attorneys specialize in the following areas of law.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <div key={index} className="group animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="mb-4">{area.icon}</div>
                  <CardTitle>{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-6">{area.description}</CardDescription>
                  <Link to={area.link} className="inline-flex items-center text-law-blue group-hover:text-law-gold transition-colors font-medium">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
