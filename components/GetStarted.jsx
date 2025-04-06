import Image from "next/image";
import React from "react";

const GetStarted = () => {
  return (
    <div
      className={`flexCenter w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`flexCenter flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`flexStart flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">Get</span>
          </p>
          <Image
            src="assets/arrow-up.svg"
            alt="arrow-up"
            height={512}
            width={512}
            className="w-[23px] h-[23px] object-contain"
          />
        </div>

        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
