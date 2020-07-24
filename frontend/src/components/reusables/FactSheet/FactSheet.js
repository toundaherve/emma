import React from "react";

const FactSheet = () => {
  return (
    <div className="row menu-fact-sheets">
      <div className="fact-sheets-separator"></div>
      <div id="fact-sheets" className="col8 fact-sheets">
        <label>Download Fact Sheets</label>
        <a
          id="menu-fact-allergen"
          className="fact-sheet-link"
          href="/media/docs/chilis-allergen-vegetarian-generic"
          rel="noopener"
          target="_blank"
        >
          Allergen/Vegetarian,
        </a>
        <a
          id="menu-fact-nutrition"
          className="fact-sheet-link"
          href="/media/docs/chilis-nutrition-menu-generic"
          rel="noopener"
          target="_blank"
        >
          Nutrition,
        </a>
        <a
          id="menu-fact-gluten"
          className="fact-sheet-link"
          href="/gluten-friendly-menu"
          rel="noopener"
        >
          Gluten-Friendly Menu
        </a>
      </div>
      <div className="col4 center">
        <a
          id="menu-back-to-top"
          className="btn slim tertiary outline back-to-top-btn"
        >
          <span>Back To Top</span> <span className="caret-up"></span>
        </a>
      </div>
    </div>
  );
};

export default FactSheet;
