import { useStore } from "zustand";
import { store, getShow, closeDisplay, setLoadingChannel } from "../../Model";
import { useNavigate, useParams } from "react-router-dom";
import { ShowDisplay } from "./ShowDisplay.Presentation";
import { useEffect } from "react";



export const Single = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  if (!id) throw new Error("ID expected")
  useEffect(() => {
    async function fetchData(id : string) {
      setLoadingChannel()
      
        getShow(id);
      
    }
    fetchData(id);
  }, [id]);
  
  const podcast = useStore(store, (state) => state.show);
  const phase = useStore(store, (state) => state.phase);
  const page = useStore(store, (state) => state.page)
 
  return (
    <ShowDisplay
      phase={phase}
      page={page}
      description={podcast.description}
      seasons={podcast.seasons}
      podcast={podcast}
      onClose={() => {
        navigate("/list")
        closeDisplay()
      }}
    />
  );
};
