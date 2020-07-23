import React from "react";

import Header from "./Header";
import Hero from "./Hero";
import Menu from "./Menu";
import Feature from "./Feature";
import CTABanner from "./CTABanner";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <section id="page-container">
        <div className="page-static page-home">
          <Hero />
          <Menu />
          <Feature direction="right" />
          <CTABanner />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
