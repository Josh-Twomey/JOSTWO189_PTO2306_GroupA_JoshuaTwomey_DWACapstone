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

const global = css`
  body {
    background-color: #eee;
  }
`;

const Grid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
`;


const StyledSkeleton = styled(Skeleton)`
  margin: 1rem 0;
  min-height: 20rem;
  max-width: 20rem;
  border-radius: 10px;
`;

export type Presentation = {
  phase: "LOADING" | "LISTING" | "ERROR" | "SEARCH" | "SHOW";
  podcasts: Preview[];
  filter: string;
  toggleFilter: () => void;
  configuration: JSX.Element;
  audioplayer: JSX.Element;
  onSelect: ( id: number) => void
};

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2rem;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 1rem;
  max-width: 67rem;
  z-index: -1;
`;

export const Presentation = (props: Presentation) => {
  const { podcasts, phase, filter, configuration, toggleFilter, onSelect } = props;
  return (
    <>
      <Navbar />
      <Wrapper>
        <CssBaseline />
        <Global styles={global} />

        {phase === "SEARCH" && configuration}
        <Row>
          <Button
            disabled={phase !== "LISTING"}
            variant="contained"
            onClick={toggleFilter}
          >
            Filter List
          </Button>
        </Row>
        <Grid>
          {phase === "LISTING" &&
            podcasts
              .filter((item) => {
                if (filter.trim() === "") return true;
                return item.title.toLowerCase().includes(filter.toLowerCase());
              })
              .map((innerProps) => {
                const clickHandler = () => onSelect(parseInt(innerProps.id));
                return (
                  <div onClick={clickHandler}>
                    <Preview key={innerProps.id} {...innerProps} />
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
      </Wrapper>
    </>
  );
};
