
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Carlos R.",
    quote: "I was injured at work and Thomas was the only lawyer who believed in my case. He fought for me every step of the way and got me the compensation I deserved.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    name: "Maria L.",
    quote: "When I was denied Social Security benefits, I felt hopeless. The team at Koszdin Law was compassionate, professional, and ultimately successful in winning my appeal.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    name: "David S.",
    quote: "After my car accident, I was overwhelmed with medical bills and insurance paperwork. Koszdin Law took care of everything and secured a settlement that covered all my expenses.",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-law-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Client Testimonials</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur border-0 overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-4 w-4 text-law-gold"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 15.585l-5.995 3.14 1.146-6.675L.293 7.22l6.676-.97L10 0l3.031 6.25 6.676.97-4.858 4.83 1.146 6.675L10 15.585z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="italic text-white/90">"{testimonial.quote}"</blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
