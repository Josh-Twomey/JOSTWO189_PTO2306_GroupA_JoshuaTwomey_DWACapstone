import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";
import React, {useState, useEffect} from "react";
import IconButton from "@mui/material/IconButton";
import { Close } from "@mui/icons-material";
import {
  CircularProgress,
  CssBaseline,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { ShowPreview } from "../ShowPreview";
import { playAudio } from "../../Model";
import { supabase } from "../Auth";

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
  phase: "LOADING" | "LISTING" | "ERROR" | "SEARCH";
  page: "LIST" | "CHANNEL" | "FAVOURITE";
  description: string;
  seasons: Seasons[];
  podcast: Show;
  onClose: () => void;
};

const Row = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 2rem;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 1rem;
  max-width: 67rem;
`;

const Image = styled.img`
  width: 20rem;
  border-radius: 10px;
`;

const Title = styled(Typography)`
  padding: 1rem;
  font-size: 40px;
  font-weight: 650;
`;

const Subtitle = styled(Typography)`
  padding-bottom: 1rem;
  font-size: 34px;
  font-weight: 600;
`;

const Description = styled(Typography)`
  padding: 1rem;
  font-size: 14px;
`;

const Icon = styled(IconButton)`
  color: #dcdcdc;
  background-color: grey;
  padding:1rem;
  position: sticky;
  top: 40px;
  left: 93%;
  :hover {
    background-color: #dcdcdc;
    color: grey;
  }
`;

const Episode = styled(Typography)`
  font-size: 18px;
  font-weight: 550;

`

const Positioning = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height: 100vh;
  margin: 0;
  padding: 0;
`



export const ShowDisplay = (props: Presentation) => {
  const { description, seasons, onClose, podcast, page, phase } = props;
  const [seasonIndex, setSeasonIndex] = React.useState(0);
  const [user, setUser] = useState({});


 const PlayButtonClick = (episodeIndex: number) => {
   playAudio(episodeIndex, seasonIndex, podcast);
 };

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

    


  const handleChange = (event: any) => {
    setSeasonIndex(event.target.value);
  };

  return (
    <>
      <CssBaseline />
      <Global styles={global} />

      {page === "CHANNEL" && (
        <>
          {phase === "LOADING" && (
              <Positioning>
                <CircularProgress />
                <Typography variant="h3">Loading...</Typography>
              </Positioning>
          )}
          {phase === "LISTING" && (
            <>
              <Icon onClick={onClose}>
                <Close />
              </Icon>
              <Wrapper>
                <Row>
                  <Title>{podcast.title}</Title>
                  <Subtitle>{seasons[seasonIndex].title}</Subtitle>
                  <Image src={seasons[seasonIndex].image} />
                  <Description>{description}</Description>

                  <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="select-helper-label">Season</InputLabel>
                    <Select
                      labelId="select-helper-label"
                      id="select-helper"
                      value={seasonIndex}
                      label="Season"
                      onChange={handleChange}
                    >
                      {seasons.map((item, index) => {
                        return (
                          <MenuItem key={index} value={index}>
                            {item.season}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                  <Episode>
                    Episodes: {seasons[seasonIndex].episodes.length}
                  </Episode>
                  {seasons[seasonIndex].episodes.map((item, index) => {
                    return (
                      <ShowPreview
                        key={index}
                        id={index}
                        user={user}
                        episodeTitle={item.title}
                        description={item.description}
                        episode={item.episode}
                        podcastTitle={podcast.title}
                        seasonIndex={seasonIndex}
                        image={seasons[seasonIndex].image}
                        handleClick={PlayButtonClick}
                      />
                    );
                  })}
                </Row>
              </Wrapper>
            </>
          )}
        </>
      )}
    </>
  )};