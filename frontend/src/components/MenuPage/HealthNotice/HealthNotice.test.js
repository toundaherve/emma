import React from "react";
import renderer from "react-test-renderer";

import HealthNotice from "./HealthNotice";

it("renders correctly", () => {
  const component = renderer.create(<HealthNotice />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
