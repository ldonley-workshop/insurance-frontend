import React from "react";
import MarketingLayout from "../components/layouts/marketingLayout";
import HomeHero from "../components/heroes/HomeHero";
import BlogSection from "../components/sections/BlogSection";
import Testimonial from "../components/sections/Testimonial";
import FeaturesSection from "../components/sections/FeaturesSection";

const Home = () => {
  return (
    <MarketingLayout>
      <HomeHero />
      <FeaturesSection />
      <Testimonial />
      <BlogSection />
    </MarketingLayout>
  );
};

export default Home;
