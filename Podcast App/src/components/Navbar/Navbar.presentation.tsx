import styled from "@emotion/styled";
import { ButtonBase, Typography} from "@mui/material";

const Container = styled.div`
  width: 100%;
  background-color: black;
  height: 4rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 2;
`;
const Logo = styled(Typography)`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: aliceblue;
`;

const Menu = styled(ButtonBase)`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 1rem;
  color: aliceblue;
  height: 100%;
  padding: 1rem;
  :hover {
    background-color: #dcdcdc;
    cursor: pointer;
    color: black;
  }
`;


export const Navbar = () => {
  return (
    <>
      <Container>
        <Logo variant="h4">Podcast Now</Logo>
        <Menu>Favourites</Menu>
      </Container>
    </>
  );
};
