import React from "react";

import TitleContainer from "./TitleContainer";
import Header from "../HomePage/Header";

const MenuPage = () => {
  return (
    <>
      <Header />
      <section id="page-container" style={{ paddingTop: "0px" }}>
        <div className="container page-menu-category">
          <TitleContainer />
        </div>
      </section>
    </>
  );
};

export default MenuPage;
