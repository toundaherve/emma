import React from "react";

import ItemDetails from "./ItemDetails";
import Layout from "../reusables/Layout";
import Breadcrumbs from "../reusables/Breadcrumbs/Breadcrumbs";
import FactSheet from "../reusables/FactSheet";
import HealthNotice from "../reusables/HealthNotice";

const ItemPage = () => {
  return (
    <Layout>
      <div className="container page-item-details">
        <div className="hide-xxs">
          <Breadcrumbs />
        </div>
        <ItemDetails />
        <FactSheet />
        <HealthNotice />
      </div>
    </Layout>
  );
};

export default ItemPage;
