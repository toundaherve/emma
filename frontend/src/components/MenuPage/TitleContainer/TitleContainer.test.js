import React from "react";
import renderer from "react-test-renderer";

import TitleContainer from "./TitleContainer";

it("renders correctly", () => {
  const component = renderer.create(<TitleContainer />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
