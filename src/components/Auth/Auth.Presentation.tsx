import { supabase } from "./Auth.connection";
import { Auth } from "@supabase/auth-ui-react";
import { Paper, CssBaseline } from "@mui/material";
import { Global, css } from "@emotion/react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { useEffect } from "react";

const global = css`
  body {
    background-color: #eee;
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Base = styled(Paper)`
  width: 60%;
  padding: 5rem;
  border-radius: 20px;
`;



export const AuthPresentation = () => {
  const navigate = useNavigate();

  
  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event) => {
      if (event === "SIGNED_IN") {
        navigate("/list");
      } 
    });
  },[])

  return (
    <Wrapper>
      <CssBaseline />
      <Global styles={global} />
      <Base>
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: "grey",
                  brandAccent: "black",
                },
              },
            },
          }}
          providers={[]}
        />
      </Base>
    </Wrapper>
  );
};
