import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import {
  FavoriteBorder,
  Favorite,
  PlayCircleOutlineTwoTone,
} from "@mui/icons-material";
import { IconButton, Typography, Paper, Button } from "@mui/material";
import { supabase } from "../Auth"; // Assuming Auth.js holds Supabase instance


const Title = styled(Typography)`
  font-size: 1rem;
  padding-top: 2rem;
  font-weight: 600;
`;

const Icon = styled(IconButton)`
  color: grey;
`;

const Episode = styled(Typography)`
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  position: absolute;
  left: 0;
  background-color: grey;
  color: white;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 4px;
  box-shadow: 2px 2px black;
`;

const Card = styled(Paper)`
  margin: 1rem 0;
  border-bottom-right-radius: 12px;
  width: 100%;
`;

const Description = styled(Typography)`
  padding: 0 1rem;
  font-size: 12px;
`;

const Styling = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: auto;
`;

const PlayButton = styled(Button)`
  padding: 0.5rem;
  margin: 1rem;
  background-color: grey;
  :hover {
    background-color: #dcdcdc;
    color: black;
  }
`;
const PlayIcon = styled(PlayCircleOutlineTwoTone)``;


export type ShowPreview = {
  episodeTitle: string;
  podcastTitle: string;
  handleClick: (id: number) => void;
  description: string;
  episode: number;
  user: object;
  id: number;
  seasonIndex: number;
  image: string;
};

export const ShowPreview = ({
  episodeTitle,
  description,
  episode,
  handleClick,
  id,
  user,
  seasonIndex,
  image,
  podcastTitle,
}: ShowPreview) => {
  const [isFav, setIsFav] = useState(false);
  const [time, setTime] = useState(0); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const historyResponse = await supabase
          .from("history")
          .select("*")
          .eq("user_id", user);

        const favsResponse = await supabase
          .from("favourites")
          .select("*")
          .eq("user_id", user);

        if (historyResponse.error || favsResponse.error) {
          throw historyResponse.error || favsResponse.error;
        }

        const matchingHistory = historyResponse.data?.find(
          (data) => data.episode_title === episodeTitle
        );
        if (matchingHistory) {
          setTime(matchingHistory.timestamp);
        }

        const matchingFav = favsResponse.data?.find(
          (data) => data.episode_title === episodeTitle
        );
        setIsFav(matchingFav?.Fav || false); // Set default to false if not found
      } catch (error: any) {
        alert(error.message);
      }
    };

    fetchData();
  }, [user, episodeTitle]); // Update on user or episode title change

  const handleFavClick = async () => {
    setIsFav(!isFav);
    try {
      if (isFav) {
        await supabase
          .from("favourites")
          .delete()
          .match({ episode_title: episodeTitle });
      } else {
        await supabase.from("favourites").insert({
          season: seasonIndex + 1,
          podcast_title: podcastTitle,
          episode_title: episodeTitle,
          podcast_img: image,
          user_id: user,
          description,
          episode,
          Fav: true,
        });
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <>
      <Card>
        <Styling>
          <Episode>Episode: {episode}</Episode>
          <Title>{episodeTitle}</Title>
          <Icon onClick={handleFavClick}>
            {isFav ? <Favorite /> : <FavoriteBorder />}
          </Icon>
          <Description>{description}</Description>
          <PlayButton
            variant="contained"
            endIcon={<PlayIcon />}
            onClick={() => handleClick(id)}
          >
            Play
          </PlayButton>
          <Typography>{time === 42 ? `Completed Episode` : `Watched(seconds): ${time}`}</Typography>
        </Styling>
      </Card>
    </>
  );
};
