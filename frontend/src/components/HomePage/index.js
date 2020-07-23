import React from "react";

import Header from "./Header";
import Hero from "./Hero";

const HomePage = () => {
  return (
    <>
      <Header />
      <section className="page-container">
        <div className="page-static page-home">
          <Hero />
        </div>
      </section>
    </>
  );
};

export default HomePage;
