import React from "react";
import renderer from "react-test-renderer";

import Menu from "./Menu";

it("renders correctly", () => {
  const component = renderer.create(<Menu />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
