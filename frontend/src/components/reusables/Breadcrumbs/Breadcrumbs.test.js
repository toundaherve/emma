import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

import Breadcrumbs from "./Breadcrumbs";

it("renders correctly", () => {
  const component = renderer.create(
    <Router>
      <Breadcrumbs />
    </Router>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
