import React from "react";
import { Link } from "react-router-dom";

import HeroSection from "../components/HeroSection";
import Services from '../components/Services'

const HomePage = () => {
  return (
    <section className="section">
      <HeroSection />
      <Services />
    </section>
  );
};

export default HomePage;
