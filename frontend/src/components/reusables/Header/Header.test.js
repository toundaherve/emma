import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";

import Header from "./Header";

it("renders correctly", () => {
  const component = renderer.create(
    <Router>
      <Header />
    </Router>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
