import styled from "@emotion/styled";
import { Paper, Typography, ButtonBase } from "@mui/material";
import { genreNames } from "../../api";

const Card = styled(Paper)<{ as: string }>`
  margin: 1rem 0;
  min-height: 26rem;
  max-width: 20rem;
  border-radius: 10px;
`;

const StyledButtonBase = styled(ButtonBase)`
  padding: 1rem;
  width: 100%;
  min-height: 26rem;
  display:flex;
  flex-direction: column;
  border-radius:10px;
`;

const Image = styled.img`
  width: 11rem;
  position: absolute;
  top: 20px;
  border-radius:10px;
`;

const ShowInfo = styled.div`
  position: absolute;
  top: 200px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled(Typography)`
  max-width: 95%;
  margin-left: 5px;
  font-weight: 600;
  overflow: hidden;
  display: -webkit-box;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

const MoreInfo = styled.div`
  padding:0.25rem;
`
const GenreTag = styled(Typography)`
  background-color: #DCDCDC;
  border-radius: 10px;
  margin: 5px;
  padding: 5px;
  font-size: 12px;
`;
const Line = styled(Typography)`
`;

const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"]

export type Preview = {
  id: string;
  title: string;
  description: string;
  seasons: number;
  image: string;
  genres: number[];
  updated: string;
};

export const Preview = ({title, seasons, image, genres, updated }: Preview) => {
    const day = new Date(updated).getDate();
    const month = new Date(updated).getMonth();
    const year = new Date(updated).getFullYear();
  return (
    <>
      <Card as="div">
        <StyledButtonBase>
          <Image src={image} />
          <ShowInfo>
            <Title variant="h6">
              {title}
            </Title>
            <MoreInfo>
              <Line variant="body2">
                {seasons} Seasons
              </Line>
              <Line variant="body2">Last Updated: {day} {monthNames[month]} {year}</Line>
            </MoreInfo>
            {genres.map((_,index) => (
            <GenreTag key={index} variant="caption">{genreNames[index]}</GenreTag>))}
          </ShowInfo>
        </StyledButtonBase>
      </Card>
    </>
  );};