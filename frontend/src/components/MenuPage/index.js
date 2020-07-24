import React from "react";

import TitleContainer from "./TitleContainer";
import MenuGrid from "./MenuGrid";
import Layout from "../reusables/Layout";
import FactSheet from "../reusables/FactSheet";
import HealthNotice from "../reusables/HealthNotice";

const MenuPage = () => {
  return (
    <>
      <Layout currentPage="menuPage">
        <TitleContainer />
        <MenuGrid />
        <FactSheet />
        <HealthNotice />
      </Layout>
    </>
  );
};

export default MenuPage;
