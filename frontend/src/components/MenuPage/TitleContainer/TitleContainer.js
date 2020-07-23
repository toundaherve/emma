import React from "react";

const TitleContainer = () => {
  return (
    <div className="row">
      <div className="col12">
        <div className="page-title menu-page-title-container">
          <h1>Appetizers</h1>
          <div
            className="breadcrumbs row"
            itemScope=""
            itemType="http://schema.org/BreadcrumbList"
          >
            <div className="col12">
              <span
                itemProp="itemListElement"
                itemScope=""
                itemType="http://schema.org/ListItem"
              >
                <span
                  itemScope=""
                  itemType="http://schema.org/Thing"
                  itemProp="item"
                >
                  <a href="/menu" itemProp="name" content="Menu">
                    Menu
                  </a>
                  <meta itemProp="url" content="/menu" />
                </span>
                <meta itemProp="position" content="1" />
              </span>
              <span className="arrow">›</span>
              <span
                itemProp="itemListElement"
                itemScope=""
                itemType="http://schema.org/ListItem"
              >
                <span
                  itemScope=""
                  itemType="http://schema.org/Thing"
                  itemProp="item"
                >
                  <strong itemProp="name">Appetizers</strong>
                  <meta itemProp="url" content="/menu/appetizers" />
                </span>
                <meta itemProp="position" content="2" />
              </span>
            </div>
          </div>
        </div>
        <div className="page-title menu-page-summary-container on-mobile-show">
          <div className="summary">
            All our appetizers are made to order and deliver big flavor that's
            simply too good not to share.
          </div>
        </div>
        <div className="page-title menu-page-summary-container on-mobile-show"></div>
        <div className="menu-dropdown-container">
          <div className="dropdown dropdown-menu-wrapper">
            <a
              id="menu-dropdown"
              className="btn small tertiary outline btn-dropdown-menu"
              href="#"
              data-toggle="dropdown"
            >
              <span>Menu</span>
              <span className="caret"></span>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-right animated fadeIn"
              role="menu"
            >
              <li>
                <a
                  id="menu-dropdown-go-to-category-C1041"
                  href="/menu/to-go-alcohol"
                >
                  To-Go Alcohol
                </a>
              </li>
              <li className="active">
                <a
                  id="menu-dropdown-go-to-category-C1000"
                  href="/menu/appetizers"
                >
                  Appetizers
                </a>
              </li>
              <li>
                <a
                  id="menu-dropdown-go-to-category-C1004"
                  href="/menu/big-mouth-burgers"
                >
                  Big Mouth Burgers®
                </a>
              </li>
              <li>
                <a
                  id="menu-dropdown-go-to-category-C1002"
                  href="/menu/ribs-steaks"
                >
                  Ribs &amp; Steaks
                </a>
              </li>
              <li>
                <a id="menu-dropdown-go-to-category-C1019" href="/menu/fajitas">
                  Fajitas
                </a>
              </li>
              <li>
                <a
                  id="menu-dropdown-go-to-category-C1010"
                  href="/menu/salads-soups-chili"
                >
                  Salads, Soups &amp; Chili
                </a>
              </li>
              <li>
                <a
                  id="menu-dropdown-go-to-category-C1005"
                  href="/menu/chicken-seafood"
                >
                  Chicken &amp; Seafood
                </a>
              </li>
              <li>
                <a
                  id="menu-dropdown-go-to-category-C1001"
                  href="/menu/sandwiches"
                >
                  Sandwiches
                </a>
              </li>
              <li>
                <a
                  id="menu-dropdown-go-to-category-C1025"
                  href="/menu/chicken-crispers"
                >
                  Chicken Crispers®
                </a>
              </li>
              <li>
                <a
                  id="menu-dropdown-go-to-category-C1014"
                  href="/menu/guiltless-grill"
                >
                  Guiltless Grill
                </a>
              </li>
              <li>
                <a
                  id="menu-dropdown-go-to-category-C1021"
                  href="/menu/tacos-quesadillas"
                >
                  Tacos &amp; Quesadillas
                </a>
              </li>
              <li>
                <a
                  id="menu-dropdown-go-to-category-C1003"
                  href="/menu/smokehouse-combos"
                >
                  Smokehouse Combos
                </a>
              </li>
              <li>
                <a
                  id="menu-dropdown-go-to-category-C1013"
                  href="/menu/lunch-specials"
                >
                  Lunch Specials
                </a>
              </li>
              <li>
                <a
                  id="menu-dropdown-go-to-category-C1032"
                  href="/menu/3-for-10"
                >
                  3 for $10
                </a>
              </li>
              <li>
                <a
                  id="menu-dropdown-go-to-category-C1027"
                  href="/menu/meal-for-2"
                >
                  Meal for 2
                </a>
              </li>
              <li>
                <a id="menu-dropdown-go-to-category-C1011" href="/menu/sides">
                  Sides
                </a>
              </li>
              <li>
                <a
                  id="menu-dropdown-go-to-category-C1007"
                  href="/menu/desserts"
                >
                  Desserts
                </a>
              </li>
              <li>
                <a
                  id="menu-dropdown-go-to-category-C1006"
                  href="/menu/beverages"
                >
                  Beverages
                </a>
              </li>
              <li>
                <a
                  id="menu-dropdown-go-to-category-C1008"
                  href="/menu/kids-menu"
                >
                  Kids Menu
                </a>
              </li>
              <li>
                <a
                  id="menu-dropdown-go-to-category-C1009"
                  href="/menu/party-platters"
                >
                  Party Platters
                </a>
              </li>
              <li>
                <a
                  id="menu-dropdown-go-to-category-C1026"
                  href="/menu/party-platter-add-ons"
                >
                  Party Platter Add Ons
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="page-title menu-page-summary-container on-mobile-hide">
          <div className="summary">
            All our appetizers are made to order and deliver big flavor that's
            simply too good not to share.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleContainer;
