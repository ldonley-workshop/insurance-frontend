import React from "react";
import MarketingLayout from "../components/layouts/marketingLayout";
import PlanPricingHeader from "../components/headers/PlanPricing";
import PricingSection from "../components/sections/PricingSection";

const Plans = () => {
  return (
    <MarketingLayout>
      <PlanPricingHeader />
      <PricingSection />
    </MarketingLayout>
  );
};

export default Plans;
