import React from "react";
import renderer from "react-test-renderer";

import Feature from "./Feature";

it("renders correctly to the left", () => {
  const component = renderer.create(<Feature direction="left" />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it("renders correctly to the right", () => {
  const component = renderer.create(<Feature direction="right" />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
