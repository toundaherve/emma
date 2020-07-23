import React from "react";

const Header = () => {
  return (
    <header>
      <div className="user-account-bar logged-out"></div>
      <div id="header-container" className="container navigation">
        <a
          id="chili-logo"
          className="logo"
          href="/"
          title="Chili's Grill &amp; Bar - Local Restaurants Near Me | Chili's"
        >
          Chili's Grill &amp; Bar - Local Restaurants Near Me | Chili's
        </a>
        <a
          id="header-cart"
          className="cart-btn js-cart-btn"
          href="/cart"
          data-cart-has-items="false"
        >
          <div className="count">0</div>
          <span className="items">0 items</span>
          <img
            className="bag js-bag"
            alt="Cart"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5NiA5NiI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM0YTRhNGE7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5iYWc8L3RpdGxlPjxnIGlkPSJfNGE0YTRhIiBkYXRhLW5hbWU9IjRhNGE0YSI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNjQuNSwzM1YyMC41YTE2LjUsMTYuNSwwLDAsMC0zMywwVjMzSDExVjc3LjRBMTQuNiwxNC42LDAsMCwwLDI1LjYsOTJINzAuNEExNC42LDE0LjYsMCwwLDAsODUsNzcuNFYzM1ptLTI3LTEyLjVhMTAuNSwxMC41LDAsMCwxLDIxLDBWMzNoLTIxWiIvPjwvZz48L3N2Zz4="
          />
        </a>
        <a href="#" className="nav-toggle js-nav-toggle">
          Menu
        </a>
        <nav className="nav-collapse animated fadeIn js-nav-collapse">
          <ul id="header-menu-list">
            <li>
              <a id="header-rewards" className="header-link" href="/rewards">
                Rewards
              </a>
            </li>
            <li>
              <a id="header-order" className="header-link" href="/order">
                Order Now
              </a>
            </li>
            <li>
              <a id="header-menu" className="header-link" href="/menu">
                Menu
              </a>
            </li>
            <li>
              <a
                id="header-locations"
                className="header-link"
                href="/locations"
              >
                Locations
              </a>
            </li>
            <li className="header-hide-medium">
              <a
                id="header-gift-cards"
                className="header-link"
                href="/gift-cards"
              >
                Gift Cards
              </a>
            </li>
            <li>
              <a id="header-login" className="header-link" href="/login">
                Log In
              </a>
            </li>
          </ul>
        </nav>
        <div className="mini-cart-form animated fadeIn js-mini-cart-form">
          <div className="arrow-up"></div>
          <div className="arrow-up-2"></div>
          <div className="row header-mini-cart-form">
            <div className="heading-secondary mini-cart-title">Your Order</div>
          </div>
          <div className="row">
            <div className="col-mini-cart-item mini-cart-heading">Item</div>
            <div className="col-mini-cart-qty mini-cart-heading">Qty</div>
          </div>
          <div className="mini-cart-total row">
            <div className="col6 total-label">Subtotal</div>
            <div className="col6 total-value">
              <span></span>
            </div>
            <div className="mini-cart-actions btn-container center">
              <a
                id="mini-cart-view-upsell"
                className="btn small js-view-cart-btn"
                href="/cart"
              >
                View Cart
              </a>
              <a
                id="mini-cart-add-food"
                className="btn small tertiary outline js-close-btn"
                href="/menu"
              >
                Add Food
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="location-bar text-center"
        aria-label="Restaurant location bar"
        style={{ position: "static", top: "0px" }}
      >
        <div className="container location-bar-wrapper">
          <a
            id="location-bar-select-location"
            className="location-bar-link"
            href="/locations"
          >
            <span className="location-bar-icon icon-search-location"></span>
            <span className="location-bar-text">Find a nearby Chili’s</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
