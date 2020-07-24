import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";

import MenuGridItem from "./MenuGridItem";

it("renders correctly", () => {
  const component = renderer.create(
    <Router>
      <MenuGridItem />
    </Router>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
