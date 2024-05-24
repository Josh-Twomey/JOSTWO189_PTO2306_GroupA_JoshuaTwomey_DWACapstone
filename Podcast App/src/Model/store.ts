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

type Store = {
  phase: "LOADING" | "LISTING" | "ERROR" | "SEARCH" | "SHOW";
  list: Preview[];
  show: Show;
  filter: string;
  toggleFilter: () => void;
  updateSearch: (value: string) => void;
};

const createTypedStore = createZustandStore<Store>();

export const createStore = (api : Api) : StoreApi<Store> => {
    const store = createTypedStore((set, get) => ({
        phase: "LOADING",
        list: [],
        show: {id: "",
        title: "",
        description: "",
        seasons: [],
        image: "",
        genres: [],
        updated: "",},
        filter: "",
        updateSearch: ( value?: string ) => {
            set({ phase: "LISTING", filter: value || ""})
        },
        toggleFilter: () => {
            const { phase } = get() 
            return set({phase: phase === "SEARCH" ? "LISTING" : "SEARCH"})
        }
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


const api = createApi();
export const store = createStore(api);

