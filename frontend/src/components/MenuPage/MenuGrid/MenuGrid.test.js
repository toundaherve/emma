import React from "react";
import renderer from "react-test-renderer";

import MenuGrid from "./MenuGrid";

it("renders correctly", () => {
  const component = renderer.create(<MenuGrid />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
