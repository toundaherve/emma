import React from "react";
import renderer from "react-test-renderer";

import ItemDetails from "./ItemDetails";

it("renders correctly", () => {
  const component = renderer.create(<ItemDetails />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
