import React from "react";

const Breadcrumbs = () => {
  return (
    <div
      class="breadcrumbs row"
      itemscope=""
      itemtype="http://schema.org/BreadcrumbList"
    >
      <div class="col12">
        <span
          itemprop="itemListElement"
          itemscope=""
          itemtype="http://schema.org/ListItem"
        >
          <span itemscope="" itemtype="http://schema.org/Thing" itemprop="item">
            <a href="/menu" itemprop="name" content="Menu">
              Menu
            </a>
            <meta itemprop="url" content="/menu" />
          </span>
          <meta itemprop="position" content="1" />
        </span>
        <span class="arrow">›</span>
        <span
          itemprop="itemListElement"
          itemscope=""
          itemtype="http://schema.org/ListItem"
        >
          <span itemscope="" itemtype="http://schema.org/Thing" itemprop="item">
            <a
              href="/menu/big-mouth-burgers"
              itemprop="name"
              content="Big Mouth Burgers®"
            >
              Big Mouth Burgers®
            </a>
            <meta itemprop="url" content="/menu/big-mouth-burgers" />
          </span>
          <meta itemprop="position" content="2" />
        </span>
        <span class="arrow">›</span>
        <span
          itemprop="itemListElement"
          itemscope=""
          itemtype="http://schema.org/ListItem"
        >
          <span itemscope="" itemtype="http://schema.org/Thing" itemprop="item">
            <strong itemprop="name">Queso Burger*</strong>
            <meta
              itemprop="url"
              content="/menu/big-mouth-burgers/queso-burger"
            />
          </span>
          <meta itemprop="position" content="3" />
        </span>
      </div>
    </div>
  );
};

export default Breadcrumbs;
