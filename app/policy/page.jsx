import PolicySection from "@/components/PolicySection";
import CTA from "@/components/CTA";
import { policies } from "@/constants";
import React from "react";

const PrivacyPolicy = () => {
  const description = [
    "Welcome to LeoTap! Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our services.",
    "At LeoTap, we are committed to ensuring transparency about how your personal data is collected, used, and shared. We prioritize your privacy and implement robust security measures to protect your information.",
    "If you have any questions about this Privacy Policy, you can contact us at support@leotap.com.",
  ];

  return (
    <div>
      <div className="paddingX flexStart">
        <div className="boxWidth">
          <PolicySection
            title="Privacy Policy"
            description={description}
            data={policies}
          />
          <CTA />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
