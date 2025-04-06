import Image from "next/image";
import React from "react";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row md:justify-between flex-col my-32 border border-[#EAE2F7] rounded-2xl mx-6 md:mx-16 bg-[#EAE2F7]`}
    >
      <div
        className={`flex-1 flex flex-col justify-center items-center sm:px-16 px-6 py-16 text-center md:text-start `}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gradient tracking-wide w-full">
          LeoTap
        </h1>

        <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl text-black w-full mt-2">
          Everything App.
        </h1>
        <p className={`paragraph w-full mt-5`}>
          Ever wish everything you need was in one app? Meet LeoTap, your
          all-in-one super app. Shop your favorite stores, order the best food,
          book rides, and get anything delivered. All in one seamless
          experience. Fast, simple, and right at your fingertips.
        </p>
      </div>

      <div className={`flex-1 flex flexCenter md:my-0 my-10 relative`}>
        <Image
          src="/assets/hero-2.png"
          alt="billing"
          height={512}
          width={512}
          className="w-[50%] h-[100%] relative z-[5] object-contain"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
