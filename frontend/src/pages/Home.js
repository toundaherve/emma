import React from "react";

import Header from "../layout/Header";
import Hero from "../layout/Hero";
import Favorites from "../layout/Favorites";
import Features from "../layout/Features";
import Footer from "../layout/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Favorites />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
