import React from "react";

import Header from "./Header";
import Hero from "./Hero";
import Menu from "./Menu";

const HomePage = () => {
  return (
    <>
      <Header />
      <section className="page-container">
        <div className="page-static page-home">
          <Hero />
          <Menu />
        </div>
      </section>
    </>
  );
};

export default HomePage;
