import React from "react";
import Button from "./Button";
import Image from "next/image";

const CTA = () => {
  return (
    <section
      className={`flexCenter marginY padding sm:flex-row flex-col bg-[#B28CFF]/10 border border-[#B28CFF]/10 rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className="text-xl">A message from the Founder!</h2>
        <p className={`text-md w-full mt-5`}>
          We at LeoTap, our mission is simple: to make your life easier by bringing
          all your essential services into one seamless experience. Whether
          you're shopping, ordering food, booking a ride, or sending a gift to a
          loved one, LeoTap is here to save you time and energy. We believe in
          innovation, convenience, and putting our users first—because every tap
          should be effortless. Thank you for choosing LeoTap, and we look
          forward to making your day-to-day simpler, one tap at a time.
        </p>
      </div>

      <div className={`flexCenter sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Image
          src="/assets/people01.png"
          height={512}
          width={512}
          alt="founder"
          className="h-32 w-32 object-cover"
        />
      </div>
    </section>
  );
};

export default CTA;
