import React from "react";
import renderer from "react-test-renderer";

import Footer from "./Footer";

it("renders correctly to the left", () => {
  const component = renderer.create(<Footer direction="left" />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
