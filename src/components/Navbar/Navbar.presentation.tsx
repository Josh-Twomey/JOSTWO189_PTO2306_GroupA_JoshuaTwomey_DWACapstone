import styled from "@emotion/styled";
import { useEffect, useState }from "react";
import { FavouriteDisplay } from "../../Model/store";

import {
  Menu,
  MenuItem,
  IconButton,
  Typography,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
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

const MenuButton = styled(AccountCircle)`
  color: #dcdcdc;
`;

export const Navbar = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [user, setUser] = useState({});

    useEffect(() => {
      async function getUserData() {
        await supabase.auth.getUser().then((value) => {
          if (value.data?.user) {
            setUser(value.data.user.id);
          }
        });
      }
      getUserData();
    }, []);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  async function signOutUser() {
    try {
      await supabase.auth.signOut();
      navigate("/");
    } catch (error: any) {
      alert(error.message);
    }
  }

  async function deleteFavourites() {
    try {
      const { data, error } = await supabase
        .from("favourites")
        .delete()
        .neq("episode_title", "")

      if (error) throw error;
      window.location.reload();
    } catch (error: any) {
      alert(error.message);
    }
  }


    async function deleteHistory() {
      try {
        const { data, error } = await supabase
          .from("history")
          .delete()
          .neq("episode_title", "");

        if (error) throw error;
        window.location.reload();
      } catch (error: any) {
        alert(error.message);
      }
    }
  const handleFavourites = () => {
    navigate(`/Favourites/${user}`);
    FavouriteDisplay();
  };
  return (
    <>
      <Container>
        <Logo variant="h4">Podcast Now</Logo>
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <MenuButton />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleFavourites}>My Favourites</MenuItem>
            <MenuItem onClick={deleteFavourites}>Clear All Favourites</MenuItem>
            <MenuItem onClick={deleteHistory}>Clear Watch History</MenuItem>
            <MenuItem onClick={() => signOutUser()}>Sign Out</MenuItem>
          </Menu>
        </div>
      </Container>
    </>
  );
};
