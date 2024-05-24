import { Presentation } from "./List.presentation";

const meta = {
  title: "components/List",
};

const list: Presentation["podcasts"] = new Array(40)
  .fill({
    title: "American History Tellers",
    description:
      "The Cold War, Prohibition, the Gold Rush, the Space Race. Every part of your life - the words you speak, the ideas you share - can be traced to our history, but how well do you really know the stories that made America? We'll take you to the events, the times and the people that shaped our nation. And we'll show you how our history affected them, their families and affects you today. Hosted by Lindsay Graham (not the Senator). From Wondery, the network behind American Scandal, Tides of History, American Innovations and more. New episodes come out every Wednesday for free, with 1-week early access for Wondery+ subscribers. Listen ad-free on Wondery+ or on Amazon Music with a Prime membership or Amazon Music Unlimited subscription.",
    seasons: 51,
    image:
      "https://content.production.cdn.art19.com/images/a4/8f/53/79/a48f5379-a90e-4197-915c-c0645e0d9336/8d9e6ebc4d65a9575fa626318e426fcf8be7f98ea0c1b7b103de2b32def46ded57537627d80b36f55edf7c9a8ad639bd9816f68c79b56845203a0b5bc4a63a55.png",
    genres: [3],
    updated: "2022-11-02T07:01:00.000Z",
  })

  

export default meta;

const props: Pick<Presentation, "configuration" | "toggleFilter" | "filter" | "onSelect"> = {
  toggleFilter: () => console.log("toggleFilter"),
  configuration: <div>Placeholder</div>,
  filter: "",
  onSelect: (value) => console.log(value)
};
export const Loading = () => <Presentation podcasts={[]} phase="LOADING" {...props} />;
export const Listing = () => <Presentation podcasts={list} phase="LISTING" {...props} />;
export const Error = () => <Presentation podcasts={[]} phase="ERROR" {...props} />;
export const Filter = () => <Presentation podcasts={list} phase="LISTING" {...props} />;
export const Search = () => <Presentation podcasts={list} phase="SEARCH" {...props} />;