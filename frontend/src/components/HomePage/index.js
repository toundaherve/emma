import React from "react";

import Hero from "./Hero";
import Menu from "./Menu";
import Feature from "./Feature";
import CTABanner from "./CTABanner";
import Layout from "../reusables/Layout";

const HomePage = () => {
  return (
    <>
      <Layout>
        <div className="page-static page-home">
          <Hero />
          <Menu />
          <Feature direction="right" />
          <CTABanner />
        </div>
      </Layout>
    </>
  );
};

export default HomePage;
