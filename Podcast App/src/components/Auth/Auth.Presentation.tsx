import { supabase } from "./Auth.connection";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { useEffect } from "react";

const Wrapper = styled.div`
  height:90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Base = styled.div`
  width: 60%;
  border: 2px solid black;
`;



export const AuthPresentation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event) => {
      if (event == "SIGNED_IN") {
        navigate("/list");
      } else {
        navigate("/");
      }
    });
  })

  return (
    <Wrapper>
      <Base>
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={[]}
        />
      </Base>
    </Wrapper>
  );
};
