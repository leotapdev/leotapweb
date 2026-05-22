"use client";
import React from "react";
import Image from "next/image";
import { founders } from "@/constants";

const Founders = () => {
  return (
    <section id="founders" className="py-16 md:py-24 relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute z-[0] w-[30%] h-[30%] -right-1/4 top-1/4 rounded-full blue__gradient opacity-40" />
      <div className="absolute z-[0] w-[30%] h-[30%] -left-1/4 bottom-1/4 rounded-full pink__gradient opacity-30" />

      <div className="flex flex-col items-center justify-center text-center mb-16 relative z-[1]">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gradient tracking-wide">
          Meet Our Founders
        </h2>
        <p className="paragraph max-w-2xl mt-4 text-center">
          The visionaries behind LeoTap's mission to redefine convenience and simplify daily life.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16 relative z-[1] max-w-5xl mx-auto px-4">
        {founders.map((founder) => (
          <div
            key={founder.id}
            className="flex flex-col items-center bg-white/70 backdrop-blur-md border border-[#0066a1]/10 rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl hover:border-[#0066a1]/30 transition-all duration-500 w-full max-w-[360px] group hover:-translate-y-2"
          >
            {/* Image Frame - Equal sizes using aspect-square and object-cover */}
            <div className="w-[280px] h-[280px] rounded-2xl overflow-hidden mb-6 relative shadow-md border-4 border-white ring-2 ring-[#0066a1]/10">
              <Image
                src={founder.img}
                alt={founder.name}
                fill
                sizes="280px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0066a1]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="text-center w-full flex flex-col items-center">
              <h3 className="font-poppins font-bold text-[22px] leading-[30px] text-black mb-1 tracking-wide">
                {founder.name}
              </h3>
              <p className="font-poppins font-semibold text-[15px] leading-[22px] text-[#0066a1] uppercase tracking-wider mb-4">
                {founder.role}
              </p>
              <p className="font-poppins font-normal text-[15px] leading-[24px] text-gray-600 mb-6 max-w-[280px]">
                {founder.bio}
              </p>

              {/* Decorative Social icons */}
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-[#0066a1]/5 hover:bg-[#0066a1]/10 flex items-center justify-center text-[#0066a1] transition-all duration-300">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#0066a1]/5 hover:bg-[#0066a1]/10 flex items-center justify-center text-[#0066a1] transition-all duration-300">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Founders;
