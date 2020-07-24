import React from "react";

import TitleContainer from "./TitleContainer";
import MenuGrid from "./MenuGrid";
import Layout from "../reusables/Layout";
import FactSheet from "../reusables/FactSheet";
import HealthNotice from "../reusables/HealthNotice";

const MenuPage = () => {
  return (
    <>
      <Layout>
        <div className="container page-menu-category">
          <TitleContainer />
          <MenuGrid />
          <FactSheet />
          <HealthNotice />
        </div>
      </Layout>
    </>
  );
};

export default MenuPage;
