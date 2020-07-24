import React from "react";

import Header from "../Header";
import Footer from "../Footer";

const pagesClassnames = {
  home: "page-home",
  menuPage: "page-menu-category",
  itemDetails: "page-item-details",
};

const Layout = ({ page, children }) => {
  return (
    <>
      <Header />
      <section id="page-container">
        <div className={`page-static ${pagesClassnames[page]}`}>{children}</div>
      </section>
      <Footer />
    </>
  );
};

export default Layout;
