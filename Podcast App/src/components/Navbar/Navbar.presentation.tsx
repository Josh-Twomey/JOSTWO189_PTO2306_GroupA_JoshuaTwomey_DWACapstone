import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Button, ButtonBase, Typography} from "@mui/material";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";


const supabase = createClient(
  "https://hzzrysdlytckseaafymp.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6enJ5c2RseXRja3NlYWFmeW1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcxNDYzODcsImV4cCI6MjAzMjcyMjM4N30.VQfbvCoS0eZVnh9O5P23d9LmjH2uTcCleIlce3z349o"
);

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
  const [user,setUser] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        if (value.data?.user) {
          setUser(value.data.user)
        }
      })
    }
    getUserData()
  }, [])


  async function signOutUser() {
    const { error } = await supabase.auth.signOut()
    navigate("/")
  } 
  return (
    <>
      <Container>
        <Logo variant="h4">Podcast Now</Logo>
        <Menu>Favourites</Menu>
        <Button onClick={() => signOutUser()}>Sign Out</Button>
      </Container>
    </>
  );
};
