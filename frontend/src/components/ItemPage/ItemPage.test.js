import React from "react";
import renderer from "react-test-renderer";

import ItemPage from "./ItemPage";

it("renders correctly", () => {
  const component = renderer.create(<ItemPage />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
