import React from "react";
import Button from "./Button";
import { features } from "@/constants";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } border border-[#0066a1]/10 bg-[#0066a1]/10`}
  >
    <div className={`w-[64px] h-[64px] rounded-full flexCenter bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-[#0066a1] text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] line-clamp-2">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  const features = [
    "Online Shopping",
    "Food Ordering",
    "Rides",
    "Accommodation",
    "Instant Payments",
    "Delivery",
  ];
  return (
    <section id="about" className="layoutSection">
      <div className="flex-1 flex flex-col justify-center items-center text-center md:text-start">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gradient tracking-wide w-full">
          About Us
        </h2>
        <p className={`paragraph w-full mt-5`}>
          At LeoTap, we're redefining convenience. Our mission is to simplify
          your everyday life by bringing shopping, food delivery, ride-hailing,
          and on-demand services together in one powerful app. Born from the
          idea that life should be easier, LeoTap is built for speed,
          simplicity, and reliability. Whether you're craving a late-night meal,
          need a quick ride across town, or want to get your shopping delivered
          without the hassle — LeoTap has you covered. We're more than just an
          app — we're your daily companion for getting things done, saving time,
          and living smarter.
        </p>
        <div className="flex flex-wrap gap-3 mt-4">
          <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
            {features.map((item) => (
              <span
                key={item}
                className="px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 flex flexCenter md:mr-10 mr-0 md:mt-0 mt-10 relative">
        <img
          src="assets/ui.png"
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5] rounded-2xl object-contain"
        />

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Business;
