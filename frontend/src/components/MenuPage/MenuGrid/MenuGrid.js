import React from "react";
import MenuGridItem from "./MenuGridItem";

const MenuGrid = () => {
  return (
    <div className="row">
      <div className="menu-grid js-menu-grid">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((n, idx) => (
          <MenuGridItem key={idx} />
        ))}
      </div>
    </div>
  );
};

export default MenuGrid;
