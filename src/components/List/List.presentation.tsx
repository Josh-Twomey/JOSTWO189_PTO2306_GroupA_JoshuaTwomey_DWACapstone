import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";
import { Preview } from "../Preview";
import {
  CssBaseline,
  Button,
  Skeleton,
  Alert,
} from "@mui/material";
import { Navbar } from "../Navbar";
import { useState, useEffect } from "react";
import { supabase } from "../Auth";
import { playAudio } from "../../Model";

const global = css`
  body {
    background-color: #eee;
  }
`;

const Grid = styled.div`
  align-items: center;
  display: grid;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;


const StyledSkeleton = styled(Skeleton)`
  margin: 1rem 0;
  min-height: 20rem;
  max-width: 20rem;
  border-radius: 10px;
`;

export type Presentation = {
  phase: "LOADING" | "LISTING" | "ERROR" | "SEARCH";
  page: "LIST" | "CHANNEL" | "FAVOURITE";
  podcasts: Preview[];
  filter: string;
  sort: number;
  toggleFilter: () => void;
  configuration: JSX.Element;
  onSelect: (id: number) => void;
};

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2rem;
`;

const Wrapper = styled.div`
  @media (max-width: 768px) {
    max-width: 20rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    max-width: 45rem;
  }

  @media (min-width: 1024px) {
    max-width: 67rem;
  }
  margin: 0 auto;
  padding: 1rem;
  max-width: 67rem;
  z-index: -1;
`;

export const Presentation = (props: Presentation) => {
  const { podcasts, phase, filter, sort, configuration, toggleFilter, onSelect, page } = props;
  const [prevPod,setPrevPod] = useState<any>([])
  const [user, setUser] = useState({});
   
  useEffect(() => {
      async function getUserData() {
          await supabase.auth.getUser().then((value) => {
            if (value.data?.user) {
                setUser(value.data.user.id);
              }
            })
          }

          getUserData();
        
     const fetchData = async () => {
       const { data } = await supabase
         .from("history")
         .select("*")
         .eq("user_id", user)
         .order("created", { ascending: false })
         .limit(1);

       setPrevPod(data);
     };
     fetchData();
   }, [user, prevPod]);

   const prevPodPlay = () => {
    if (prevPod.length < 1) {
      alert("You have no history for a previously played podcast")
      return
    } else {
      playAudio(prevPod[0].episode,prevPod[0].season,prevPod[0].podcast)
    }
   }
   
  

  const podcastSort = (podcast: Preview[], sort: number) => {
    switch (sort) {
      case 0:
        return podcast;
      case 1:
        return [...podcast].sort((a, b) => a.title.localeCompare(b.title));
      case 2:
        return [...podcast].sort((a, b) => a.title.localeCompare(b.title) * -1);
      case 3:
        return [...podcast].sort(
          (a, b) =>
            new Date(a.updated).getTime() - new Date(b.updated).getTime()
        );
      case 4:
        return [...podcast].sort(
          (a, b) =>
            new Date(b.updated).getTime() - new Date(a.updated).getTime()
        );
      default:
        throw new Error("Invalid sort option");
    }
  };
    
    
    
  return (
    <>
      <Navbar />
      <Wrapper>
        <CssBaseline />
        <Global styles={global} />
        {phase === "SEARCH" && configuration}
        {page === "LIST" && (
          <>
            <Row>
              <Button
                disabled={phase !== "LISTING"}
                variant="contained"
                onClick={toggleFilter}
              >
                Filter List
              </Button>
              <Button disabled={phase !== "LISTING"} onClick={prevPodPlay}>Play Last Podcast</Button>
            </Row>
            <Grid>
              {phase === "LISTING" &&
                podcastSort(podcasts, sort)
                  .filter((item) => {
                    if (filter.trim() === "") return true;
                    return item.title
                      .toLowerCase()
                      .includes(filter.toLowerCase());
                  })
                  .map((innerProps) => {
                    const clickHandler = () =>
                      onSelect(parseInt(innerProps.id));
                    return (
                      <div onClick={clickHandler} key={innerProps.id}>
                        <Preview {...innerProps} />
                      </div>
                    );
                  })}

              {phase === "LOADING" && (
                <>
                  {new Array(20).fill(undefined).map((_, index) => (
                    <StyledSkeleton variant="rectangular" key={index} />
                  ))}
                </>
              )}

              {phase === "ERROR" && (
                <Alert severity="error">
                  Something went wrong. Please try again later
                </Alert>
              )}
            </Grid>
          </>
        )}
      </Wrapper>
    </>
  );
};
