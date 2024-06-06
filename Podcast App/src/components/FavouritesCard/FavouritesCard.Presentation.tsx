import styled from "@emotion/styled";
import { Paper, Typography, Button } from "@mui/material";
import { Close } from "@mui/icons-material";
import { supabase } from "../Auth";

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
  padding:0.25rem 1rem;
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

const DateTime = styled(Typography)`
  font-size: 12px;
  font-weight: 500;
  padding-bottom: 1rem;
`
const Positioning = styled.div`
  position: relative;
  top:10px;
  left: 43%;
`

export type FavouritesCard = {
  title: string;
  image: string;
  episodetitle: string;
  description: string;
  episode: number;
  season: number;
  created: string;
  getFavourites: () => Promise<void>;
};



 const monthNames = [
   "January",
   "February",
   "March",
   "April",
   "May",
   "June",
   "July",
   "August",
   "September",
   "October",
   "November",
   "December",
 ];

export const FavouritesCard = ({ title, description, episode, image, season, episodetitle, created, getFavourites}: FavouritesCard) => {
  const createdDate = new Date(created)
  const year = createdDate.getFullYear()
  const month = createdDate.getMonth()
  const day = createdDate.getDate()
  const hour = createdDate.getHours()
  const minutes = createdDate.getMinutes()
  

  const removehandler = (episodetitle: string) => {
        async function removedata(episodetitle: string) {
          try {
            const { data, error } = await supabase
              .from("favourites")
              .delete()
              .eq("episode_title", episodetitle);

            if (error) throw error;
          } catch (error: any) {
            alert(error.message);
          }
        }

        removedata(episodetitle).then(() => getFavourites());
        
      };
  
  return (
    <>
      <Card>
        <Styling>
          <Positioning>
            <Button onClick={() => {removehandler(episodetitle)}} endIcon={<Close />}>Remove</Button>
          </Positioning>
          <Title>{title}</Title>
          <Image src={image} />
          <EpisodeTitle>{episodetitle}</EpisodeTitle>
          <Details>
            Season:{season}&nbsp;Episode:{episode}
          </Details>
          <Description>{description}</Description>
          <DateTime>
            Added: {day} {monthNames[month]} {year} {hour}:{minutes}
          </DateTime>
        </Styling>
      </Card>
    </>
  );
};
