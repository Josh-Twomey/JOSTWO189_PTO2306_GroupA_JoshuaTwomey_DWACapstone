import { StoryObj, Meta } from "@storybook/react";
import { ShowPreview } from "./ShowPreview.Presentation";

const meta: Meta<ShowPreview> = {
  title: "components/ShowPreview",
  component: ShowPreview,
};

export default meta;

export const Basic: StoryObj = {
  args: {
    title: "The Real Thing",
    description:
      "Debra Newell, an interior designer in Southern California, meets John Meehan on an over-50 dating site. His profile looks exciting: Anesthesiologist, divorced, Christian. She falls in love fast. But her children dislike him and warn her that his stories don’t add up. A psychologist advises Debra to set firmer boundaries with her kids, saying she has a right to be happy.",
    episode: 1,
    file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
  },
};
