import React from "react";

import Layout from "../reusables/Layout";

const CartPage = () => {
  return (
    <Layout currentPage="cart" SiblingComponent={Title}>
      <div class="row">
        <div class="col12">
          <div class="cart-empty-actions">
            <a
              id="cart-add-more-items"
              class="btn small cart-order-more-btn"
              href="/menu"
            >
              « Back to Menu
            </a>
            <a
              id="cart-reorder"
              class="btn small cart-reorder-btn"
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
    <div class="container-sm">
      <div class="row">
        <div class="col12">
          <div class="page-title">
            <div class="heading-primary">Your Cart is Empty</div>
            <div class="summary">Head to the menu page to add some food!</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
