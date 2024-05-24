import styled from "@emotion/styled";
import { PlayCircleOutlineTwoTone } from "@mui/icons-material";
import { Paper, Typography, Button } from "@mui/material";

const Title = styled(Typography)`
  font-size: 1rem;
  padding: 1rem;
  padding-bottom: 0.25rem;
  font-weight: 600;
`;

const Episode = styled(Typography)`
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  position: absolute;
  left: 0;
  background-color: grey;
  color: white;
  border-bottom-right-radius: 8px;
  border-top-left-radius:4px;
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
  height: 10rem;
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
  title: string;
  handleClick: (id: number) => void;
  description: string;
  episode: number;
  file: string;
  id: number;
};

export const ShowPreview = ({ title, description, episode, handleClick, id }: ShowPreview) => {
  

  return (
    <>
      <Card>
        <Styling>
          <Episode>Episode: {episode}</Episode>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <PlayButton variant="contained" endIcon={<PlayIcon />} onClick={() => handleClick(id)}>
            Play
          </PlayButton>
        </Styling>
      </Card>
    </>
  );
};
