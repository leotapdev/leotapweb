"use client";
import React, { useState } from "react";

const FeatureCard = ({
  icon,
  title,
  content,
  details,
  index,
  isActive,
  onClick,
  length,
}) => {
  return (
    <div
      className={`flex flex-col p-6 rounded-[20px] cursor-pointer ${
        index !== length - 1 ? "mb-6" : "mb-0"
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

const PolicySection = ({ title, description, data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleCardClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="flex md:flex-row flex-col sm:py-16 py-6 mt-32 items-start"
    >
      <div className="flex-1 flexStart flex-col text-center md:text-start">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gradient tracking-wide w-full">
          {title}
        </h1>
        {description.map((para, i) => (
          <p key={i} className={`paragraph max-w-[600px] mt-5`}>
            {para}
          </p>
        ))}
      </div>

      <div
        className={`flex-1 flex flexCenter md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col`}
      >
        {data.map((feature, index) => (
          <FeatureCard
            key={feature.id}
            {...feature}
            index={index}
            length={data.length}
            isActive={activeIndex === index}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default PolicySection;
