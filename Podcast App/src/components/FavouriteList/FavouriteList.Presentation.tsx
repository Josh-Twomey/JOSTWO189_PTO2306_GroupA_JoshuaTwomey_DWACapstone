import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";
import {useState, useEffect} from "react";
import IconButton from "@mui/material/IconButton";
import { Close } from "@mui/icons-material";
import {
  CssBaseline,
  Typography,
  Button
} from "@mui/material";
import { supabase } from "../Auth";
import { FavouritesCard } from "../FavouritesCard";

const global = css`
  body {
    background-color: #eee;
  }
`;

type Episodes = {
  title: string;
  description: string;
  episode: number;
  file: string;
};

export type Seasons = {
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

export type Presentation = {
  phase: "LOADING" | "LISTING" | "ERROR" | "SEARCH" | "SHOW" | "FAVOURITE";
  favs: any[];
  page: "LIST" | "CHANNEL" | "FAVOURITE"
  onClose: () => void;
  getFavourites: () => Promise<void>;
  filter: string;
  sort: number;
  toggleFilter: () => void;
  configuration: JSX.Element;
};

const Row = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 67rem;
`;

const Title = styled(Typography)`
  padding-bottom: 1rem;
  font-size: 40px;
  font-weight: 600;
`;

const Icon = styled(IconButton)`
  color: #dcdcdc;
  background-color: grey;
  padding:1rem;
  position: sticky;
  top: 30px;
  left: 93%;
  :hover {
    background-color: #dcdcdc;
    color: grey;
  }
`;



export const FavouriteList = (props: Presentation) => {
  const {
    favs,
    phase,
    onClose,
    getFavourites,
    filter,
    sort,
    configuration,
    toggleFilter,
    page
  } = props;
  const [user, setUser] = useState({});

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        if (value.data?.user) {
          setUser(value.data.user);
        }
      });
    }
    getUserData();
  }, []);

  const FavSort = (favs: any[], sort: number) => {
    switch (sort) {
      case 0:
        return [...favs].sort((a, b) =>
          a.podcast_title.localeCompare(b.podcast_title)
        );
      case 1:
        return [...favs].sort((a, b) =>
          a.podcast_title.localeCompare(b.podcast_title)
        );
      case 2:
        return [...favs].sort(
          (a, b) => a.podcast_title.localeCompare(b.podcast_title) * -1
        );
      case 3:
        return [...favs].sort(
          (a, b) =>
            new Date(b.created).getTime() - new Date(a.created).getTime()
        );
      case 4:
        return [...favs].sort(
          (a, b) =>
            new Date(a.created).getTime() - new Date(b.created).getTime()
        );
      default:
        throw new Error("Invalid sort option");
    }
  };


  return (
    <>
      <CssBaseline />
      <Global styles={global} />
      <Icon onClick={onClose}>
        <Close />
      </Icon>
      {phase === "SEARCH" && configuration}
      <Wrapper>
        <Row>
          <Title>Favourites</Title>
          <Button variant="contained" onClick={toggleFilter}>
            Filter List
          </Button>
          {page === "FAVOURITE" &&
            FavSort(favs, sort)
              .filter((item) => {
                if (filter.trim() === "") return true;
                return item.podcast_title.toLowerCase().includes(filter.toLowerCase());
              })
              .map((item) => (
                <FavouritesCard
                  key={item.id}
                  title={item.podcast_title}
                  description={item.description}
                  episode={item.episode}
                  image={item.podcast_img}
                  season={item.season}
                  episodetitle={item.episode_title}
                  created={item.created}
                  getFavourites={getFavourites}
                />
              ))}
        </Row>
      </Wrapper>
    </>
  );
};
