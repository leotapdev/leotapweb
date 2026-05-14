import PolicySection from "@/components/PolicySection";
import CTA from "@/components/CTA";
import { terms } from "@/constants";
import React from "react";

const TermsOfService = () => {
  const description = [
    "Welcome to LeoTap! By using our services, you agree to these Terms of Service. Please read them carefully.",
    "These terms govern your use of the LeoTap website and mobile application. They include information about your rights and obligations when using our platform.",
    "If you have any questions about these Terms of Service, you can contact us at support@leotap.com.",
  ];

  return (
    <div>
      <div className="paddingX flexStart">
        <div className="boxWidth">
          <PolicySection
            title="Terms of Service"
            description={description}
            data={terms}
          />
          <CTA />
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
