import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = () => {
  return (
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
          <span itemScope="" itemType="http://schema.org/Thing" itemProp="item">
            <Link to="/menu" itemProp="name" content="Menu">
              Menu
            </Link>
            <meta itemProp="url" content="/menu" />
          </span>
          <meta itemProp="position" content="1" />
        </span>
        {/* <span className="arrow">›</span>
        <span
          itemProp="itemListElement"
          itemScope=""
          itemType="http://schema.org/ListItem"
        >
          <span itemScope="" itemType="http://schema.org/Thing" itemProp="item">
            <a
              href="/menu/big-mouth-burgers"
              itemProp="name"
              content="Big Mouth Burgers®"
            >
              Ndolè Poisson Braisé
            </a>
            <meta itemProp="url" content="/menu/big-mouth-burgers" />
          </span>
          <meta itemProp="position" content="2" />
        </span> */}
        <span className="arrow">›</span>
        <span
          itemProp="itemListElement"
          itemScope=""
          itemType="http://schema.org/ListItem"
        >
          <span itemScope="" itemType="http://schema.org/Thing" itemProp="item">
            <strong itemProp="name"> Ndolè Poisson Braisé</strong>
            <meta
              itemProp="url"
              content="/menu/big-mouth-burgers/queso-burger"
            />
          </span>
          <meta itemProp="position" content="3" />
        </span>
      </div>
    </div>
  );
};

export default Breadcrumbs;
