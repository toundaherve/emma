import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";

import CartPage from "./CartPage";

it("renders correctly", () => {
  const component = renderer.create(
    <Router>
      <CartPage />
    </Router>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
