import React from "react";

import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <section id="page-container">{children}</section>
      <Footer />
    </>
  );
};

export default Layout;
