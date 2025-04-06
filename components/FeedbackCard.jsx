import React from "react";

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className="flex justify-between flex-col px-6 py-4 rounded-2xl w-full border border-[#0066a1]">
      <img
        src="icons/quotes.svg"
        alt="double_quotes"
        className="w-10 h-10 object-contain"
      />
      <p className="font-normal text-md text-black my-4">{content}</p>

      <div className="flex flex-row">
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-black">
            {name}
          </h4>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
