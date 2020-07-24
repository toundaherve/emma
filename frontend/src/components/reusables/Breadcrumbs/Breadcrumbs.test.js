import React from "react";
import renderer from "react-test-renderer";

import Breadcrumbs from "./Breadcrumbs";

it("renders correctly", () => {
  const component = renderer.create(<Breadcrumbs />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
