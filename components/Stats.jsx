import { stats } from "@/constants";
import Image from "next/image";
import React from "react";

const Stats = () => {
  return (
    <section
      className={`grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8`}
    >
      {/* bg-[#B28CFF] */}
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="relative w-full h-80 rounded-2xl overflow-hidden"
        >
          <Image
            src={stat.image}
            alt="Shopping"
            height={1080}
            width={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10 bg-opacity-40 flex items-center justify-center">
            <h2 className="text-white text-xl font-bold">{stat.title}</h2>
          </div>
        </div>
        // <div
        //   key={stat.id}
        //   style={{ backgroundImage: "url('/assets/shopping.jpg')" }}
        //   className={`flex-1 flex-col justify-start items-center rounded-2xl border border-[#B28CFF] p-8`}
        // >
        //   <div className="h-12">
        //     <Image
        //       className="h-12 w-12"
        //       src={stat.icon}
        //       height={512}
        //       width={512}
        //       alt="robe"
        //     />
        //   </div>
        //   <div className="my-2">
        //     <h2 className="text-4xl font-bold text-black">
        //       <span>{stat.value}</span>
        //     </h2>
        //   </div>

        //   <div>
        //     <p className="mt-2 text-base font-medium text-black tracking-wide">
        //       {stat.title}
        //     </p>
        //   </div>
        // </div>
      ))}
    </section>
  );
};

export default Stats;
