import React from "react";
import { action } from "@storybook/addon-actions";
import Image from "./Image";

export default {
  component: Image,
  title: "Image",
};

export const normal = () => <Image />;

export const ratios = () => (
  <div>
    <h4>16/9</h4>
    <Image ratio={9 / 16} />
    <h4>3/2</h4>
    <Image ratio={2 / 3} />
    <h4>4/3</h4>
    <Image ratio={3 / 4} />
    <h4>1/1</h4>
    <Image ratio={1 / 1} />
    <h4>3/4</h4>
    <Image ratio={4 / 3} />
    <h4>2/3</h4>
    <Image ratio={3 / 2} />
  </div>
);

export const objectPositon = () => (
  <div>
    <h4>right bottom</h4>
    <Image ratio={1 / 2} objectPosition="right bottom" />
    <h4>right top</h4>
    <Image ratio={1 / 2} objectPosition="right top" />
  </div>
);
