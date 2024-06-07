import { StoryObj, Meta } from "@storybook/react";
import { FavouritesCard } from "./FavouritesCard.Presentation";

const meta: Meta<FavouritesCard> = {
  title: "components/FavouritesCard",
  component: FavouritesCard,
};

export default meta;

export const Basic: StoryObj<FavouritesCard> = {
  args: {
    title: "Dirty John",
    episodetitle: "The Real Thing",
    season: 1,
    image:
      "https://content.production.cdn.art19.com/images/f5/cf/d8/37/f5cfd837-6c97-4422-a573-4ea06f2b2a13/129e1aa2908a3f47b8e2f28494ea5067ac6f96b6756e3c80f0ddcced5a43875af40077d78694f229a1cd9d5da05aba1cc6251b903e82e09ff73e05e861d453f5.png",
    description:
      "Debra Newell, an interior designer in Southern California, meets John Meehan on an over-50 dating site. His profile looks exciting: Anesthesiologist, divorced, Christian. She falls in love fast. But her children dislike him and warn her that his stories don’t add up. A psychologist advises Debra to set firmer boundaries with her kids, saying she has a right to be happy.",
    episode: 1,
    file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
  },
};
