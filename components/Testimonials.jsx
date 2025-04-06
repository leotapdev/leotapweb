import React from "react";
import FeedbackCard from "./FeedbackCard";
import { feedback } from "@/constants";

const Testimonials = () => {
  return (
    <section id="clients" className={`paddingY flexCenter flex-col relative `}>
      <div className="w-full flex items-center flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gradient">
          Testimonials
        </h2>
        <div className="w-full md:mt-4 mt-2 max-w-2xl">
          <p className={`paragraph text-center w-full`}>
            Don’t just take our word for it! Hear from our users how LeoTap is
            making their lives easier, one tap at a time.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
