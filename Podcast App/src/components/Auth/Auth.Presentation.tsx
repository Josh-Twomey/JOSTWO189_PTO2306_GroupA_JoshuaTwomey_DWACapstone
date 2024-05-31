import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

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

const supabase = createClient(
  "https://hzzrysdlytckseaafymp.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6enJ5c2RseXRja3NlYWFmeW1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcxNDYzODcsImV4cCI6MjAzMjcyMjM4N30.VQfbvCoS0eZVnh9O5P23d9LmjH2uTcCleIlce3z349o"
);

export const AuthPresentation = () => {
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange(async (event) => {
    if (event == "SIGNED_IN") {
      navigate("/list");
    } else {
      navigate("/");
    }
  });

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
