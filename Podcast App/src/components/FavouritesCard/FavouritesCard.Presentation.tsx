import styled from "@emotion/styled";
import { PlayCircleOutlineTwoTone } from "@mui/icons-material";
import { Paper, Typography, Button } from "@mui/material";

const Title = styled(Typography)`
  font-size: 1.5rem;
  padding: 0.5rem;
  padding-bottom: 0.25rem;
  font-weight: 600;
`;

const EpisodeTitle = styled(Typography)`
  font-size: 1.25rem;
  font-weight: 550;
`;

const Details = styled(Typography)`
  font-size: 14px;
  font-weight: 500;
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
  height: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: auto;
`;

const Image = styled.img`
  width: 7rem;
  border-radius: 10px;
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

export type FavouritesCard = {
  title: string;
  image: string;
  episodetitle: string;
  handleClick: (id: number) => void;
  description: string;
  episode: number;
  season: number;
  file: string;
  id: number;
};

export const FavouritesCard = ({ title, description, episode, image, season, episodetitle, handleClick, id }: FavouritesCard) => {
  
  
  return (
    <>
      <Card>
        <Styling>
          <Title>{title}</Title>
          <Image src={image}/>
          <EpisodeTitle>{episodetitle}</EpisodeTitle>
          <Details>Season:{season}&nbsp;Episode:{episode}</Details>
          <Description>{description}</Description>
          <PlayButton variant="contained" endIcon={<PlayIcon />} onClick={() => handleClick(id)}>
            Play
          </PlayButton>
        </Styling>
      </Card>
    </>
  );
};
