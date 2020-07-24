import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";

import MenuGrid from "./MenuGrid";

it("renders correctly", () => {
  const component = renderer.create(
    <Router>
      <MenuGrid />
    </Router>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
