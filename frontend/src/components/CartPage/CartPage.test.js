import React from "react";
import renderer from "react-test-renderer";

import CartPage from "./CartPage";

it("renders correctly", () => {
  const component = renderer.create(<CartPage />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
