import {
  Button,
  Dialog,
  TextField,
  DialogActions,
  DialogContent,
  DialogTitle,
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";
import styled from "@emotion/styled";
import { FormEvent, useState, useRef, useEffect } from "react";
import z from "zod";
import { useSpring, animated } from "@react-spring/web";

const StyledAlert = styled(Alert)<{ error: string | null }>`
  margin-top: 1rem;
  height: ${(props) => (props.error ? "auto" : "1rem")};
`;

const Spacer = styled.div`
  width: 100%;
  margin-top: 1rem;
`
const StyledContent = styled.div`
  width: 100%;
  max-width: 20rem;
`;

const response = z.object({
  search: z
    .string()
    .min(3, { message: "Search needs to be empty or atleast 3 characters" })
    .optional()
    .or(z.literal("")),
  sort: z.string(),
});

export type Response = z.infer<typeof response>;

export type Presentation = {
  filter: string;
  sort: number;
  onSubmit: (response: Response) => void;
  toggleFilter: () => void;
};

const useFilters = ({ onSubmit }: Presentation) => {
  const [error, setError] = useState<string | null>(null);

  const isStarting = useRef(true);

  const styles = useSpring({
    from: { opacity: error || isStarting ? 0 : 1 },
    to: { opacity: error ? 1 : 0 },
  });

  useEffect(() => {
    isStarting.current = false;
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const entries = new FormData(event.target as any);
    const transformed = Object.fromEntries(entries);
    const validation = response.safeParse(transformed);
    if (!validation.success) {
      const { error } = validation;
      return setError(error.issues[0].message);
    }
    setError(null);
    const { data } = validation;
    onSubmit(data);
  };

  return {
    error,
    styles,
    handleSubmit,
  };
};

export const Presentation = (props: Presentation) => {
  const { toggleFilter } = props;
  const { error, handleSubmit, styles } = useFilters(props);
  const [sort,setSort] = useState(0)

  const handleChange = (event : any) => {
    setSort(event.target.value)
  }
  return (
    <>
      <Dialog open>
        <StyledContent>
          <DialogTitle>Filters</DialogTitle>

          <DialogContent>
            <form id="filters" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                name="search"
                placeholder="Title"
                variant="filled"
                label="Search"
              />
              <Spacer>
                <FormControl fullWidth>
                  <InputLabel id="select-label">Sort By:</InputLabel>
                  <Select
                    name="sort"
                    labelId="select-label"
                    id="select"
                    label="Sort By"
                    value={sort}
                    onChange={handleChange}
                  >
                    <MenuItem value={0}>None</MenuItem>
                    <MenuItem value={1}>A-Z (Title)</MenuItem>
                    <MenuItem value={2}>Z-A (Title)</MenuItem>
                    <MenuItem value={3}>
                      Ascending order (Last updated)
                    </MenuItem>
                    <MenuItem value={4}>
                      Descending order (Last updated)
                    </MenuItem>
                  </Select>
                </FormControl>
              </Spacer>
            </form>
            <animated.div style={styles}>
              <StyledAlert error={error} severity="warning">
                {error}
              </StyledAlert>
            </animated.div>
          </DialogContent>

          <DialogActions>
            <Button variant="outlined" onClick={toggleFilter}>
              Cancel
            </Button>
            <Button variant="contained" type="submit" form="filters">
              Apply
            </Button>
          </DialogActions>
        </StyledContent>
      </Dialog>
    </>
  );
};
