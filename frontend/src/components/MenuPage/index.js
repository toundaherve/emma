import React from "react";

import TitleContainer from "./TitleContainer";
import Header from "../HomePage/Header";
import MenuGrid from "./MenuGrid";
import FactSheet from "./FactSheet";
import HealthNotice from "./HealthNotice";

const MenuPage = () => {
  return (
    <>
      <Header />
      <section id="page-container" style={{ paddingTop: "0px" }}>
        <div className="container page-menu-category">
          <TitleContainer />
          <MenuGrid />
          <FactSheet />
          <HealthNotice />
        </div>
      </section>
    </>
  );
};

export default MenuPage;
