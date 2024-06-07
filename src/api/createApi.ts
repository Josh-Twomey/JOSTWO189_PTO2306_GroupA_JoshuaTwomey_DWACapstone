import z from "zod"

type Episodes = {
  title: string;
  description: string;
  episode: number;
  file: string;
};

type Seasons = {
  season: number;
  title: string;
  image: string;
  episodes: Episodes[];
};

export type Api = {
  getPodcastList: () => Promise<
    | Error
    | {
        id: string;
        title: string;
        description: string;
        seasons: number;
        image: string;
        genres: number[];
        updated: string;
      }[]
  >;
  
};

export type API = {
  getPodcastInfo: (id: string) => Promise<
    | Error
    | {
        id: string;
        title: string;
        description: string;
        seasons: Seasons[];
        image: string;
        genres: string[];
        updated: string;
      }
  >;
};


const zodgetPodcastList = z.array(
  z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    seasons: z.number(),
    image: z.string(),
    genres: z.array(z.number()),
    updated: z.string(),
  })
);





const getPodcastList: Api["getPodcastList"] = () => {
  const URL = "https://podcast-api.netlify.app/shows";
  const result = fetch(URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          "Something went wrong come back in a couple of minutes"
        );
      }
      return response.json();
    })
    .then((dataCheck) => zodgetPodcastList.parse(dataCheck))
    .then((data) => {
        const result = data.map((item) => ({
            ...item
        }))

        return result
    })
    .catch((err) => {
        console.error(err)
        return err
    })

  return result;
};


export const getPodcastInfo: API["getPodcastInfo"] = (id) => {
  const URL = `https://podcast-api.netlify.app/id/${id}`;
  const result = fetch(URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          "Something went wrong come back in a couple of minutes"
        );
      }
      return response.json();
    })
    .then((data) => data)
    .catch((err) => {
      console.error(err);
      return err;
    });

  return result;
};


export const createApi = (): Api => {
  return {
    getPodcastList,
  };
};
