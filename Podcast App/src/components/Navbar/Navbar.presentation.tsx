import styled from "@emotion/styled";
import { FavouriteDisplay } from "../../Model/store"
import { Button, ButtonBase, Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { supabase } from "../Auth";

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
  const navigate = useNavigate()

  async function signOutUser() {
    try {
      await supabase.auth.signOut()
      navigate("/")
    } catch (error: any) {
      alert(error.message)
    }
    
  } 

  const handleFavourites = () => {
    navigate("/Favourites")
    FavouriteDisplay()
  }
  return (
    <>
      <Container>
        <Logo variant="h4">Podcast Now</Logo>
        <Menu onClick={handleFavourites}>Favourites</Menu>
        <Button onClick={() => signOutUser()}>Sign Out</Button>
      </Container>
    </>
  );
};
