import React from "react";

import Layout from "../reusables/Layout";

const CartPage = () => {
  return (
    <Layout currentPage="cart" SiblingComponent={Title}>
      <div className="row">
        <div className="col12">
          <div className="cart-empty-actions">
            <a
              id="cart-add-more-items"
              className="btn small cart-order-more-btn"
              href="/menu"
            >
              « Back to Menu
            </a>
            <a
              id="cart-reorder"
              className="btn small cart-reorder-btn"
              href="/account/order-history"
            >
              Reorder
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const Title = () => {
  return (
    <div className="container-sm">
      <div className="row">
        <div className="col12">
          <div className="page-title">
            <div className="heading-primary">Your Cart is Empty</div>
            <div className="summary">
              Head to the menu page to add some food!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
