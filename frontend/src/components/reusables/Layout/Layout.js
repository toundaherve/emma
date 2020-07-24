import React from "react";

import Header from "../Header";
import Footer from "../Footer";

const pagesClassnames = {
  home: "page-home",
  menuPage: "page-menu-category",
  itemDetails: "page-item-details",
  cart: "page-cart",
};

const Layout = ({ currentPage, SiblingComponent, children }) => {
  return (
    <>
      <Header />
      <section id="page-container">
        <SiblingComponent />
        <div className={`page-static ${pagesClassnames[currentPage]}`}>
          {children}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Layout;
