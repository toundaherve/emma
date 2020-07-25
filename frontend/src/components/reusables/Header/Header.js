import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="user-account-bar logged-out"></div>
      <div id="header-container" className="container navigation">
        <Link
          to="/"
          id="chili-logo"
          className="logo"
          title="Chili's Grill &amp; Bar - Local Restaurants Near Me | Chili's"
        >
          Chili's Grill &amp; Bar - Local Restaurants Near Me | Chili's
        </Link>
        <Link
          to="/cart"
          id="header-cart"
          className="cart-btn js-cart-btn"
          data-cart-has-items="false"
        >
          <div className="count">0</div>
          <span className="items">0 items</span>
          <img
            className="bag js-bag"
            alt="Cart"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5NiA5NiI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM0YTRhNGE7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5iYWc8L3RpdGxlPjxnIGlkPSJfNGE0YTRhIiBkYXRhLW5hbWU9IjRhNGE0YSI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNjQuNSwzM1YyMC41YTE2LjUsMTYuNSwwLDAsMC0zMywwVjMzSDExVjc3LjRBMTQuNiwxNC42LDAsMCwwLDI1LjYsOTJINzAuNEExNC42LDE0LjYsMCwwLDAsODUsNzcuNFYzM1ptLTI3LTEyLjVhMTAuNSwxMC41LDAsMCwxLDIxLDBWMzNoLTIxWiIvPjwvZz48L3N2Zz4="
          />
        </Link>
        <a href="#" className="nav-toggle js-nav-toggle">
          Menu
        </a>
        <nav className="nav-collapse animated fadeIn js-nav-collapse">
          <ul id="header-menu-list">
            <li>
              <Link to="/" id="header-order" className="header-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" id="header-menu" className="header-link">
                Menu
              </Link>
            </li>

            <li>
              <Link to="/" id="header-login" className="header-link">
                Log In
              </Link>
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
            <span className="location-bar-text">Enter your postcode</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
