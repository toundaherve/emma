import React from "react";
import renderer from "react-test-renderer";

import FactSheet from "./FactSheet";

it("renders correctly", () => {
  const component = renderer.create(<FactSheet />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
