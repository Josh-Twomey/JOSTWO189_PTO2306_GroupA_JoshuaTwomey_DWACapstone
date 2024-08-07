import { StoryObj, Meta } from "@storybook/react";
import { Presentation, ShowDisplay } from "./ShowDisplay.Presentation";


const meta: Meta<Presentation> = {
  title: "components/ShowDisplay",
  component: ShowDisplay
};

export default meta;

export const Basic: StoryObj<Presentation> = {
  args: {
    phase: "LISTING",
    page: "CHANNEL",
    description: "",
    seasons: [
      {
        season: 1,
        title: "Season 1",
        image:
          "https://content.production.cdn.art19.com/images/f5/cf/d8/37/f5cfd837-6c97-4422-a573-4ea06f2b2a13/129e1aa2908a3f47b8e2f28494ea5067ac6f96b6756e3c80f0ddcced5a43875af40077d78694f229a1cd9d5da05aba1cc6251b903e82e09ff73e05e861d453f5.png",
        episodes: [
          {
            title: "The Real Thing",
            description:
              "Debra Newell, an interior designer in Southern California, meets John Meehan on an over-50 dating site. His profile looks exciting: Anesthesiologist, divorced, Christian. She falls in love fast. But her children dislike him and warn her that his stories don’t add up. A psychologist advises Debra to set firmer boundaries with her kids, saying she has a right to be happy.",
            episode: 1,
            file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
          },
          {
            title: "Newlyweds",
            description:
              "After an intruder appears in John and Debra’s livingroom, John insists that they install security cameras. Debra begins to wonder whether he is spying on her. Her nephew, Shad, looks into John’s background and confronts him with what he finds. Debra’s vision of an idyllic marriage is shattered when she discovers a stash of paperwork in John’s home office.",
            episode: 2,
            file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
          },
          {
            title: "Filthy",
            description:
              "Debra grapples with the question, “Who did I marry?” The story of John’s mysterious past unfolds through the eyes of his sisters, his law-school housemate, his ex-wife, and an Ohio cop who hunted him. The origins of John’s nickname are revealed. Bed-ridden in an Orange County hospital, he pleads with Debra to take him back.",
            episode: 3,
            file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
          },
          {
            title: "Forgiveness",
            description:
              "Debra is in hiding, living out of hotels and disguising herself with a wig. Debra fears she will meet the fate of her sister Cindi, who was killed by her husband as she tried to escape a bad marriage. John has explanations for the accusations against him. He weeps and apologizes. Three decades earlier, that had helped Cindi’s killer walk out of prison. ",
            episode: 4,
            file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
          },
          {
            title: "Escape",
            description:
              "Episode 5: John finds a lawyer and plots to unleash a blizzard of lawsuits against his enemies, with the aim of proving to Debra that he is the victim, in case after case. The lawyer believes her life is in danger. As her painful isolation from her family deepens, she secretly plans her escape from the marriage. ",
            episode: 5,
            file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
          },
          {
            title: "Terra",
            description:
              "Jacquelyn and Terra Newell suspect that John has been watching them. When Jacquelyn tells her mother that he is in town, her mother believes she is mistaken. Jacquelyn warns Terra to carry her pocket knife. But Terra is preoccupied by a country-music concert, and she is watching for the wrong car. ",
            episode: 6,
            file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
          },
          {
            title: "Dirty John: Live at The Theatre at Ace Hotel",
            description:
              "In the months since “Dirty John” was released, more of John Meehan’s victims have told their stories. Carolina Miranda from the LA Times interviews Christopher Goffard, Debra and Terra Newell, and John Meehan’s first wife. Plus, a panel on coercive control and a special live performance by Tracy Bonham. Recorded live at the Ace Theatre.",
            episode: 7,
            file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
          },
        ],
      },
      {
        season: 2,
        title: "Season 1",
        image:
          "https://content.production.cdn.art19.com/images/f5/cf/d8/37/f5cfd837-6c97-4422-a573-4ea06f2b2a13/129e1aa2908a3f47b8e2f28494ea5067ac6f96b6756e3c80f0ddcced5a43875af40077d78694f229a1cd9d5da05aba1cc6251b903e82e09ff73e05e861d453f5.png",
        episodes: [
          {
            title: "The Real Thing",
            description:
              "Debra Newell, an interior designer in Southern California, meets John Meehan on an over-50 dating site. His profile looks exciting: Anesthesiologist, divorced, Christian. She falls in love fast. But her children dislike him and warn her that his stories don’t add up. A psychologist advises Debra to set firmer boundaries with her kids, saying she has a right to be happy.",
            episode: 1,
            file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
          },
          {
            title: "Newlyweds",
            description:
              "After an intruder appears in John and Debra’s livingroom, John insists that they install security cameras. Debra begins to wonder whether he is spying on her. Her nephew, Shad, looks into John’s background and confronts him with what he finds. Debra’s vision of an idyllic marriage is shattered when she discovers a stash of paperwork in John’s home office.",
            episode: 2,
            file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
          },
          {
            title: "Filthy",
            description:
              "Debra grapples with the question, “Who did I marry?” The story of John’s mysterious past unfolds through the eyes of his sisters, his law-school housemate, his ex-wife, and an Ohio cop who hunted him. The origins of John’s nickname are revealed. Bed-ridden in an Orange County hospital, he pleads with Debra to take him back.",
            episode: 3,
            file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
          },
          {
            title: "Forgiveness",
            description:
              "Debra is in hiding, living out of hotels and disguising herself with a wig. Debra fears she will meet the fate of her sister Cindi, who was killed by her husband as she tried to escape a bad marriage. John has explanations for the accusations against him. He weeps and apologizes. Three decades earlier, that had helped Cindi’s killer walk out of prison. ",
            episode: 4,
            file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
          },
          {
            title: "Escape",
            description:
              "Episode 5: John finds a lawyer and plots to unleash a blizzard of lawsuits against his enemies, with the aim of proving to Debra that he is the victim, in case after case. The lawyer believes her life is in danger. As her painful isolation from her family deepens, she secretly plans her escape from the marriage. ",
            episode: 5,
            file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
          },
          {
            title: "Terra",
            description:
              "Jacquelyn and Terra Newell suspect that John has been watching them. When Jacquelyn tells her mother that he is in town, her mother believes she is mistaken. Jacquelyn warns Terra to carry her pocket knife. But Terra is preoccupied by a country-music concert, and she is watching for the wrong car. ",
            episode: 6,
            file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
          },
          {
            title: "Dirty John: Live at The Theatre at Ace Hotel",
            description:
              "In the months since “Dirty John” was released, more of John Meehan’s victims have told their stories. Carolina Miranda from the LA Times interviews Christopher Goffard, Debra and Terra Newell, and John Meehan’s first wife. Plus, a panel on coercive control and a special live performance by Tracy Bonham. Recorded live at the Ace Theatre.",
            episode: 7,
            file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
          },
          {
            title: "Newlyweds",
            description:
              "After an intruder appears in John and Debra’s livingroom, John insists that they install security cameras. Debra begins to wonder whether he is spying on her. Her nephew, Shad, looks into John’s background and confronts him with what he finds. Debra’s vision of an idyllic marriage is shattered when she discovers a stash of paperwork in John’s home office.",
            episode: 8,
            file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
          },
        ],
      },
      {
        season: 4,
        title: "Season 1",
        image:
          "https://content.production.cdn.art19.com/images/f5/cf/d8/37/f5cfd837-6c97-4422-a573-4ea06f2b2a13/129e1aa2908a3f47b8e2f28494ea5067ac6f96b6756e3c80f0ddcced5a43875af40077d78694f229a1cd9d5da05aba1cc6251b903e82e09ff73e05e861d453f5.png",
        episodes: [
          {
            title: "The Real Thing",
            description:
              "Debra Newell, an interior designer in Southern California, meets John Meehan on an over-50 dating site. His profile looks exciting: Anesthesiologist, divorced, Christian. She falls in love fast. But her children dislike him and warn her that his stories don’t add up. A psychologist advises Debra to set firmer boundaries with her kids, saying she has a right to be happy.",
            episode: 1,
            file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
          },
          {
            title: "Newlyweds",
            description:
              "After an intruder appears in John and Debra’s livingroom, John insists that they install security cameras. Debra begins to wonder whether he is spying on her. Her nephew, Shad, looks into John’s background and confronts him with what he finds. Debra’s vision of an idyllic marriage is shattered when she discovers a stash of paperwork in John’s home office.",
            episode: 2,
            file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
          },
          {
            title: "Filthy",
            description:
              "Debra grapples with the question, “Who did I marry?” The story of John’s mysterious past unfolds through the eyes of his sisters, his law-school housemate, his ex-wife, and an Ohio cop who hunted him. The origins of John’s nickname are revealed. Bed-ridden in an Orange County hospital, he pleads with Debra to take him back.",
            episode: 3,
            file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
          },
          {
            title: "Forgiveness",
            description:
              "Debra is in hiding, living out of hotels and disguising herself with a wig. Debra fears she will meet the fate of her sister Cindi, who was killed by her husband as she tried to escape a bad marriage. John has explanations for the accusations against him. He weeps and apologizes. Three decades earlier, that had helped Cindi’s killer walk out of prison. ",
            episode: 4,
            file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
          },
          {
            title: "Escape",
            description:
              "Episode 5: John finds a lawyer and plots to unleash a blizzard of lawsuits against his enemies, with the aim of proving to Debra that he is the victim, in case after case. The lawyer believes her life is in danger. As her painful isolation from her family deepens, she secretly plans her escape from the marriage. ",
            episode: 5,
            file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
          },
        ],
      },
    ],
    podcast: {
      id: "8291",
      title: "Dirty John",
      description:
        "All episodes are available for free, with remastered ad-free episodes available for Wondery+ subscribers. Debra Newell is a successful interior designer. She meets John Meehan, a handsome man who seems to check all the boxes: attentive, available, just back from a year in Iraq with Doctors Without Borders. But her family doesn’t like John, and they get entangled in an increasingly complex web of love, deception, forgiveness, denial, and ultimately, survival. Reported and hosted by Christopher Goffard from the L.A. Times.",
      seasons: [
        {
          season: 1,
          title: "Season 1",
          image:
            "https://content.production.cdn.art19.com/images/f5/cf/d8/37/f5cfd837-6c97-4422-a573-4ea06f2b2a13/129e1aa2908a3f47b8e2f28494ea5067ac6f96b6756e3c80f0ddcced5a43875af40077d78694f229a1cd9d5da05aba1cc6251b903e82e09ff73e05e861d453f5.png",
          episodes: [
            {
              title: "The Real Thing",
              description:
                "Debra Newell, an interior designer in Southern California, meets John Meehan on an over-50 dating site. His profile looks exciting: Anesthesiologist, divorced, Christian. She falls in love fast. But her children dislike him and warn her that his stories don’t add up. A psychologist advises Debra to set firmer boundaries with her kids, saying she has a right to be happy.",
              episode: 1,
              file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
            },
            {
              title: "Newlyweds",
              description:
                "After an intruder appears in John and Debra’s livingroom, John insists that they install security cameras. Debra begins to wonder whether he is spying on her. Her nephew, Shad, looks into John’s background and confronts him with what he finds. Debra’s vision of an idyllic marriage is shattered when she discovers a stash of paperwork in John’s home office.",
              episode: 2,
              file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
            },
            {
              title: "Filthy",
              description:
                "Debra grapples with the question, “Who did I marry?” The story of John’s mysterious past unfolds through the eyes of his sisters, his law-school housemate, his ex-wife, and an Ohio cop who hunted him. The origins of John’s nickname are revealed. Bed-ridden in an Orange County hospital, he pleads with Debra to take him back.",
              episode: 3,
              file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
            },
            {
              title: "Forgiveness",
              description:
                "Debra is in hiding, living out of hotels and disguising herself with a wig. Debra fears she will meet the fate of her sister Cindi, who was killed by her husband as she tried to escape a bad marriage. John has explanations for the accusations against him. He weeps and apologizes. Three decades earlier, that had helped Cindi’s killer walk out of prison. ",
              episode: 4,
              file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
            },
            {
              title: "Escape",
              description:
                "Episode 5: John finds a lawyer and plots to unleash a blizzard of lawsuits against his enemies, with the aim of proving to Debra that he is the victim, in case after case. The lawyer believes her life is in danger. As her painful isolation from her family deepens, she secretly plans her escape from the marriage. ",
              episode: 5,
              file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
            },
            {
              title: "Terra",
              description:
                "Jacquelyn and Terra Newell suspect that John has been watching them. When Jacquelyn tells her mother that he is in town, her mother believes she is mistaken. Jacquelyn warns Terra to carry her pocket knife. But Terra is preoccupied by a country-music concert, and she is watching for the wrong car. ",
              episode: 6,
              file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
            },
            {
              title: "Dirty John: Live at The Theatre at Ace Hotel",
              description:
                "In the months since “Dirty John” was released, more of John Meehan’s victims have told their stories. Carolina Miranda from the LA Times interviews Christopher Goffard, Debra and Terra Newell, and John Meehan’s first wife. Plus, a panel on coercive control and a special live performance by Tracy Bonham. Recorded live at the Ace Theatre.",
              episode: 7,
              file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
            },
          ],
        },
        {
          season: 2,
          title: "Season 1",
          image:
            "https://content.production.cdn.art19.com/images/f5/cf/d8/37/f5cfd837-6c97-4422-a573-4ea06f2b2a13/129e1aa2908a3f47b8e2f28494ea5067ac6f96b6756e3c80f0ddcced5a43875af40077d78694f229a1cd9d5da05aba1cc6251b903e82e09ff73e05e861d453f5.png",
          episodes: [
            {
              title: "The Real Thing",
              description:
                "Debra Newell, an interior designer in Southern California, meets John Meehan on an over-50 dating site. His profile looks exciting: Anesthesiologist, divorced, Christian. She falls in love fast. But her children dislike him and warn her that his stories don’t add up. A psychologist advises Debra to set firmer boundaries with her kids, saying she has a right to be happy.",
              episode: 1,
              file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
            },
            {
              title: "Newlyweds",
              description:
                "After an intruder appears in John and Debra’s livingroom, John insists that they install security cameras. Debra begins to wonder whether he is spying on her. Her nephew, Shad, looks into John’s background and confronts him with what he finds. Debra’s vision of an idyllic marriage is shattered when she discovers a stash of paperwork in John’s home office.",
              episode: 2,
              file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
            },
            {
              title: "Filthy",
              description:
                "Debra grapples with the question, “Who did I marry?” The story of John’s mysterious past unfolds through the eyes of his sisters, his law-school housemate, his ex-wife, and an Ohio cop who hunted him. The origins of John’s nickname are revealed. Bed-ridden in an Orange County hospital, he pleads with Debra to take him back.",
              episode: 3,
              file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
            },
            {
              title: "Forgiveness",
              description:
                "Debra is in hiding, living out of hotels and disguising herself with a wig. Debra fears she will meet the fate of her sister Cindi, who was killed by her husband as she tried to escape a bad marriage. John has explanations for the accusations against him. He weeps and apologizes. Three decades earlier, that had helped Cindi’s killer walk out of prison. ",
              episode: 4,
              file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
            },
            {
              title: "Escape",
              description:
                "Episode 5: John finds a lawyer and plots to unleash a blizzard of lawsuits against his enemies, with the aim of proving to Debra that he is the victim, in case after case. The lawyer believes her life is in danger. As her painful isolation from her family deepens, she secretly plans her escape from the marriage. ",
              episode: 5,
              file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
            },
            {
              title: "Terra",
              description:
                "Jacquelyn and Terra Newell suspect that John has been watching them. When Jacquelyn tells her mother that he is in town, her mother believes she is mistaken. Jacquelyn warns Terra to carry her pocket knife. But Terra is preoccupied by a country-music concert, and she is watching for the wrong car. ",
              episode: 6,
              file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
            },
            {
              title: "Dirty John: Live at The Theatre at Ace Hotel",
              description:
                "In the months since “Dirty John” was released, more of John Meehan’s victims have told their stories. Carolina Miranda from the LA Times interviews Christopher Goffard, Debra and Terra Newell, and John Meehan’s first wife. Plus, a panel on coercive control and a special live performance by Tracy Bonham. Recorded live at the Ace Theatre.",
              episode: 7,
              file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
            },
            {
              title: "Newlyweds",
              description:
                "After an intruder appears in John and Debra’s livingroom, John insists that they install security cameras. Debra begins to wonder whether he is spying on her. Her nephew, Shad, looks into John’s background and confronts him with what he finds. Debra’s vision of an idyllic marriage is shattered when she discovers a stash of paperwork in John’s home office.",
              episode: 8,
              file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
            },
          ],
        },
        {
          season: 4,
          title: "Season 1",
          image:
            "https://content.production.cdn.art19.com/images/f5/cf/d8/37/f5cfd837-6c97-4422-a573-4ea06f2b2a13/129e1aa2908a3f47b8e2f28494ea5067ac6f96b6756e3c80f0ddcced5a43875af40077d78694f229a1cd9d5da05aba1cc6251b903e82e09ff73e05e861d453f5.png",
          episodes: [
            {
              title: "The Real Thing",
              description:
                "Debra Newell, an interior designer in Southern California, meets John Meehan on an over-50 dating site. His profile looks exciting: Anesthesiologist, divorced, Christian. She falls in love fast. But her children dislike him and warn her that his stories don’t add up. A psychologist advises Debra to set firmer boundaries with her kids, saying she has a right to be happy.",
              episode: 1,
              file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
            },
            {
              title: "Newlyweds",
              description:
                "After an intruder appears in John and Debra’s livingroom, John insists that they install security cameras. Debra begins to wonder whether he is spying on her. Her nephew, Shad, looks into John’s background and confronts him with what he finds. Debra’s vision of an idyllic marriage is shattered when she discovers a stash of paperwork in John’s home office.",
              episode: 2,
              file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
            },
            {
              title: "Filthy",
              description:
                "Debra grapples with the question, “Who did I marry?” The story of John’s mysterious past unfolds through the eyes of his sisters, his law-school housemate, his ex-wife, and an Ohio cop who hunted him. The origins of John’s nickname are revealed. Bed-ridden in an Orange County hospital, he pleads with Debra to take him back.",
              episode: 3,
              file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
            },
            {
              title: "Forgiveness",
              description:
                "Debra is in hiding, living out of hotels and disguising herself with a wig. Debra fears she will meet the fate of her sister Cindi, who was killed by her husband as she tried to escape a bad marriage. John has explanations for the accusations against him. He weeps and apologizes. Three decades earlier, that had helped Cindi’s killer walk out of prison. ",
              episode: 4,
              file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
            },
            {
              title: "Escape",
              description:
                "Episode 5: John finds a lawyer and plots to unleash a blizzard of lawsuits against his enemies, with the aim of proving to Debra that he is the victim, in case after case. The lawyer believes her life is in danger. As her painful isolation from her family deepens, she secretly plans her escape from the marriage. ",
              episode: 5,
              file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
            },
          ],
        },
      ],
      image:
        "https://content.production.cdn.art19.com/images/f5/cf/d8/37/f5cfd837-6c97-4422-a573-4ea06f2b2a13/129e1aa2908a3f47b8e2f28494ea5067ac6f96b6756e3c80f0ddcced5a43875af40077d78694f229a1cd9d5da05aba1cc6251b903e82e09ff73e05e861d453f5.png",
      genres: ["All", "News", "True Crime and Investigative Journalism"],
      updated: "2018-11-21T08:05:00.000Z",
    },
  },
};
