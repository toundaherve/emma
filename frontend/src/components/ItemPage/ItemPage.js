import React from "react";

import Breadcrumbs from "./Breadcrumbs";
import ItemDetails from "./ItemDetails";

const ItemPage = () => {
  return (
    <section id="page-container">
      <div className="container page-item-details">
        <Breadcrumbs />
        <ItemDetails />
      </div>
    </section>
  );
};

export default ItemPage;
