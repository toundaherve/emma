import React from "react";

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
        <a
          id="menu-item-image-P101942"
          className="item-image b-lazy b-loaded"
          href="/menu/appetizers/triple-dipper"
          title="Triple Dipper™"
          style={{
            backgroundImage: `url("https://static.olocdn.net/menu/chilis/a30644e222a6f6d261f13b5bf1f0b089.jpg")`,
          }}
        >
          Triple Dipper™
        </a>
        <div className="item-body">
          <a
            id="menu-item-name-P101942"
            className="item-title js-item-title height-calculated"
            href="/menu/appetizers/triple-dipper"
            itemProp="url"
            style={{ height: "25px" }}
          >
            <span itemProp="name">Triple Dipper™</span>
          </a>
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
          <a
            id="menu-item-button-P101942"
            className="btn slim btn-menu-item"
            href="/menu/appetizers/triple-dipper"
          >
            Order
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuGridItem;
