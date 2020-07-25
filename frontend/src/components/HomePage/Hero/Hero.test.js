import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

import Hero from "./Hero";

it("renders correctly", () => {
  const component = renderer.create(
    <Router>
      <Hero />
    </Router>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
