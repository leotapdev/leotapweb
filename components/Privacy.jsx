"use client";
import React, { useState } from "react";
import Button from "./Button";
import { policies } from "@/constants";

const FeatureCard = ({
  icon,
  title,
  content,
  details,
  index,
  isActive,
  onClick,
}) => {
  return (
    <div
      className={`flex flex-col p-6 rounded-[20px] cursor-pointer ${
        index !== policies.length - 1 ? "mb-6" : "mb-0"
      } border border-[#B28CFF] ${
        isActive && "border border-[#B28CFF] bg-[#B28CFF]/20"
      }`}
      onClick={onClick}
    >
      <h4 className="font-poppins font-semibold text-[#B28CFF] text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
      {isActive && (
        <p
          className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mt-2"
          dangerouslySetInnerHTML={{ __html: details }}
        />
      )}
    </div>
  );
};
const Privacy = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleCardClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the active card
  };
  return (
    <section
      id="policies"
      className="flex md:flex-row flex-col sm:py-16 py-6 mt-32 items-start"
    >
      <div className="flex-1 flexStart flex-col text-center md:text-start">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gradient tracking-wide w-full">
          Privacy Policy
        </h1>
        <p className={`paragraph max-w-[600px] mt-5`}>
          Welcome to AfyaConnect! Your privacy is important to us. This Privacy
          Policy explains how we collect, use, and protect your personal
          information when you use our services.
        </p>
        <p className={`paragraph max-w-[600px] mt-5`}>
          You can use our services in various ways to manage your privacy. For
          example, you can sign up for an account to access online medical
          consultations, or you can choose to browse certain sections of
          AfyaConnect without creating an account. For enhanced privacy, you may
          limit the information you share or adjust your privacy settings to
          control the types of data we collect and how it is used. At
          AfyaConnect, we are committed to protecting your privacy and ensuring
          transparency about how your personal data is collected, used, and
          shared.
        </p>

        <p className={`paragraph max-w-[600px] mt-5`}>
          To help explain things as clearly as possible, we’ve added examples,
          and definitions for key terms. And if you have any questions about
          this Privacy Policy, you can contact us.
        </p>
      </div>

      <div
        className={`flex-1 flex flexCenter md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col`}
      >
        {policies.map((feature, index) => (
          <FeatureCard
            key={feature.id}
            {...feature}
            index={index}
            isActive={activeIndex === index} // Check if this card is active
            onClick={() => handleCardClick(index)} // Handle click event
          />
        ))}
      </div>
    </section>
  );
};

export default Privacy;
