import Billing from "@/components/Billing";
import Business from "@/components/Business";
import CardDeal from "@/components/CardDeal";
import Clients from "@/components/Clients";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="bg-primary flexStart">
        <div className="">
          <Hero />
        </div>
      </div>
      <div className="paddingX flexStart">
        <div className="boxWidth">
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          {/* <Clients /> */}
          <CTA />
        </div>
      </div>
    </div>
  );
}
