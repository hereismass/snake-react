import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { SnakePart } from "./index";

storiesOf("SnakePart", module)
  .add("Dark part", () => <SnakePart color="purple-darkest" />)
  .add("light part", () => <SnakePart color="purple-lightest" />);
