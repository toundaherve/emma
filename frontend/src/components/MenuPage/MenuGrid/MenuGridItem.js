import React from "react";
import { Link } from "react-router-dom";

const MenuGridItem = () => {
  return (
    <div className="menu-grid-item js-menu-grid-item">
      <div
        className="grid-item"
        itemScope=""
        itemType="https://schema.org/Product"
      >
        <meta itemProp="brand" content="Chili's" />
        <meta itemProp="category" content="Appetizers" />
        <meta
          itemProp="image"
          content="https://static.olocdn.net/menu/chilis/a30644e222a6f6d261f13b5bf1f0b089.jpg"
        />
        <div className="item-image-placeholder"></div>
        <Link
          to="/item"
          id="menu-item-image-P101942"
          className="item-image b-lazy b-loaded"
          title="Triple Dipper™"
          style={{
            backgroundImage: `url("https://static.olocdn.net/menu/chilis/a30644e222a6f6d261f13b5bf1f0b089.jpg")`,
          }}
        >
          Ndolè Poisson Braisé
        </Link>
        <div className="item-body">
          <Link
            to="/item"
            id="menu-item-name-P101942"
            className="item-title js-item-title height-calculated"
            itemProp="url"
            style={{ height: "25px" }}
          >
            <span itemProp="name">Ndolè Poisson Braisé</span>
          </Link>
          <div className="item-description-wrapper">
            <div
              className="item-description js-item-description height-calculated"
              style={{ height: "70px" }}
            >
              <span
                itemProp="description"
                data-js-extra-max-height="3"
                title="Why choose one when you can choose three? Select three appetizers and enjoy! Served with dipping sauces."
              >
                Why choose one when you can choose three? Select three
                appetizers and enjoy! Served with dipping sauces.
              </span>
            </div>
          </div>
          <Link
            to="/item"
            id="menu-item-button-P101942"
            className="btn slim btn-menu-item"
          >
            Order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuGridItem;
