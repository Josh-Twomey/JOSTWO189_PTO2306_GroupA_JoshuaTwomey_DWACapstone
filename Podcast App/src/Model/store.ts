import { StoreApi, createStore as createZustandStore } from "zustand";
import { Api, createApi, getPodcastInfo } from "../api";

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

type Show = {
  id: string;
  title: string;
  description: string;
  seasons: Seasons[];
  image: string;
  genres: string[];
  updated: string;
};

type Preview = {
  id: string;
  title: string;
  description: string;
  seasons: number;
  image: string;
  genres: number[];
  updated: string;
};

type Podcast = {
  audio: "PLAYING" | "NULL";
  season: number;
  episode: number;
  channel: Show;
}
type Store = {
  phase: "LOADING" | "LISTING" | "ERROR" | "SEARCH" | "SHOW";
  list: Preview[];
  show: Show;
  timestamp: number;
  sort: number;
  podcast: Podcast;
  filter: string;
  toggleFilter: () => void;
  updateSearch: (value: string) => void;
  updateSort: (value: number) => void;
};

const showBase = {id: "",
        title: "",
        description: "",
        seasons: [],
        image: "",
        genres: [],
        updated: "",}

const createTypedStore = createZustandStore<Store>();

export const createStore = (api : Api) : StoreApi<Store> => {
    const store = createTypedStore((set, get) => ({
      phase: "LOADING",
      timestamp: 0,
      sort: 0,
      podcast: {
        audio: "NULL",
        season: 0,
        episode: 0,
        channel: showBase,
      },
      list: [],
      show: showBase,
      filter: "",
      updateSearch: (value?: string) => {
        set({ phase: "LISTING", filter: value || "" });
      },
      updateSort: (value?: number) => {
        set({ phase: "LISTING", sort: value});
      },
      toggleFilter: () => {
        const { phase } = get();
        return set({ phase: phase === "SEARCH" ? "LISTING" : "SEARCH" });
      },
    }));

    api.getPodcastList().then( data => {
        if (data instanceof Error) {
            return store.setState({
                phase: "ERROR"
            })
        }
        
        store.setState({
        phase: "LISTING",
        list: data,
    })})


    return store
}

export const closeDisplay = () => {
  return store.setState({
    phase: "LISTING",
  });
}

export const getShow = (id: string): StoreApi<Store> => {
  getPodcastInfo(id).then((data) => {
    if (data instanceof Error) {
      return store.setState({
        phase: "ERROR",
      });
    }

    store.setState({
      phase: "SHOW",
      show: data,
    });
  });

  return store;
};

export const playAudio = (episode: number, season: number, show: Show): StoreApi<Store> => {
  store.setState({podcast: {
    episode: episode,
    season: season,
    audio: "PLAYING",
    channel: show,
  }})

  return store
}

export const stopAudio = (episode: number, season: number, show: Show) => {
  store.setState({
    podcast: {
      episode: episode,
      season: season,
      audio: "NULL",
      channel: show,
    },
  });
};

const api = createApi();
export const store = createStore(api);

