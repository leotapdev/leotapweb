import Billing from "@/components/Billing";
import Business from "@/components/Business";
import CardDeal from "@/components/CardDeal";
import Clients from "@/components/Clients";
import CTA from "@/components/CTA";
import Privacy from "@/components/Privacy";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="paddingX flexStart">
        <div className="boxWidth">
          <Privacy />

          <CTA />
        </div>
      </div>
    </div>
  );
};

export default page;
