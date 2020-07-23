import React from "react";
import renderer from "react-test-renderer";

import MenuGridItem from "./MenuGridItem";

it("renders correctly", () => {
  const component = renderer.create(<MenuGridItem />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
