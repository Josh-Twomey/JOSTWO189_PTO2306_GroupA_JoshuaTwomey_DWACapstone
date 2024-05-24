import { StoryObj, Meta } from "@storybook/react"
import { Presentation } from "./Filters.presentation";


const meta: Meta<Presentation> = {
  title: "components/Filter",
  component: Presentation,
};

export default meta;

export const Basic: StoryObj<Presentation> = {
  args: {},
};