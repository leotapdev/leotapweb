import React from "react";

const Billing = () => {
  return (
    <section
      id="product"
      className="flex md:flex-row flex-col-reverse paddingY"
    >
      <div className="flex-1 flex flexCenter md:mr-10 mr-0 md:mt-0 mt-10 relative">
        <img
          src="assets/product.jpg"
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5] rounded-2xl object-cover"
        />

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>

      <div className="flex-1 flexStart flex-col">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gradient">
          Anytime, Anywhere
        </h2>
        <p className={`paragraph max-w-[470px] mt-5`}>
          LeoTap is designed to seamlessly fit into your lifestyle, offering an
          effortless experience across all your devices. Whether you're browsing
          from your desktop, managing orders from a tablet, or booking a ride on
          the go, LeoTap delivers a smooth, consistent service on both the web
          app and our fully-optimized mobile apps for iOS and Android. Enjoy a
          full range of features—shopping, food ordering, ride booking,
          accommodation, payments, and on-demand delivery—with everything synced
          across devices. No downloads needed for the web version, and the
          mobile apps are built for speed and convenience, with one account
          giving you full access to all your preferences, orders, and saved
          locations, wherever you are.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src="assets/apple.svg"
            alt="google_play"
            className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
          />
          <img
            src="assets/google.svg"
            alt="google_play"
            className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
