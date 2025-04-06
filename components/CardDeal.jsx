import React from "react";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className="flex md:flex-row flex-col paddingY">
      <div className="flex-1 flexStart flex-col">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gradient">
          Help Others with LeoTap
        </h2>
        <p className={`paragraph max-w-[470px] mt-5`}>
          With LeoTap, helping others has never been easier. Whether you're
          ordering food for a friend, getting groceries delivered to a loved
          one, or booking a ride for someone in need, LeoTap makes it simple to
          share the convenience of your favorite services. Our easy-to-use
          platform lets you manage orders, deliveries, and rides on behalf of
          others, ensuring they get the help they need in just a few taps.
          Whether it's surprising a family member with a special meal, sending
          essential supplies to someone across town, or arranging transport for
          a colleague, LeoTap is here to make giving a little easier and a lot
          more convenient.
        </p>
      </div>

      <div className="flex-1 flex flexCenter md:ml-10 ml-0 md:mt-0 mt-10 relative">
        <img
          src="assets/track.jpg"
          alt="billing"
          className="w-[100%] h-[100%] rounded-2xl object-cover"
        />
      </div>
    </section>
  );
};

export default CardDeal;
