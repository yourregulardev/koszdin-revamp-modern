
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const attorneys = [
  {
    name: "Thomas Koszdin",
    title: "Founding Partner",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
    description: "Over 35 years of legal experience specializing in workers' compensation and personal injury cases.",
  },
  {
    name: "Jennifer Rodriguez",
    title: "Senior Partner",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
    description: "Specializing in Social Security Disability claims with a proven track record of successful appeals.",
  },
  {
    name: "Michael Chang",
    title: "Partner",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
    description: "Expert in complex personal injury litigation with particular focus on auto accidents and premise liability.",
  },
];

const AttorneysSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Attorneys</h2>
          <p className="text-law-gray max-w-2xl mx-auto">
            Our experienced team of attorneys is dedicated to fighting for your rights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attorneys.map((attorney, index) => (
            <Card key={index} className="overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={attorney.image}
                    alt={attorney.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{attorney.name}</h3>
                  <p className="text-law-gold font-medium mb-3">{attorney.title}</p>
                  <p className="text-law-gray">{attorney.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AttorneysSection;
