import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";
import React from "react";
import {
  CssBaseline,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { ShowPreview } from "../ShowPreview";

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

export type Presentation = {
  phase: "LOADING" | "LISTING" | "ERROR" | "SEARCH" | "SHOW";
  title: string;
  description: string;
  seasons: Seasons[];
  image: string;
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
  font-weight: 600;
`;

const Description = styled(Typography)`
  padding: 1rem;
  font-size: 14px;
`;

export const ShowDisplay = (props: Presentation) => {
  const { title, description, seasons, image, phase } = props;
  const [seasonIndex, setSeasonIndex] = React.useState(0);

  const onClick = (id : number) => {
    
  }

  const handleChange = (event: any) => {
    setSeasonIndex(event.target.value);
  };
  

  return (
    <>
      <CssBaseline />
      <Global styles={global} />
      {phase ==="SHOW" &&<Wrapper>
        <Row>
          <Title>{title}</Title>
          <Image src={image} />
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
                return <MenuItem value={index}>{item.season}</MenuItem>;
              })}
            </Select>
          </FormControl>

          {seasons[seasonIndex].episodes.map((item,index) => {
            return (
              <ShowPreview
                key={index}
                id={index}
                file={item.file}
                title={item.title}
                description={item.description}
                episode={item.episode}
                handleClick={onClick}
              />
            );
          })}
        </Row>
      </Wrapper>}
    </>
  );
};
