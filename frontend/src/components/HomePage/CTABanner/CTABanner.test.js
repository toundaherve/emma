import React from "react";
import renderer from "react-test-renderer";

import CTABanner from "./CTABanner";

it("renders correctly", () => {
  const component = renderer.create(<CTABanner />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
