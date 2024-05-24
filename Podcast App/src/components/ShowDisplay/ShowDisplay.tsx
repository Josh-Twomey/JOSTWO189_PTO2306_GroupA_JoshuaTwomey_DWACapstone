import { useStore } from "zustand";
import { getShow } from "../../Model";
import { useNavigate, useParams } from "react-router-dom";
import { ShowDisplay } from "./ShowDisplay.Presentation";



export const Single = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  if (!id) throw new Error("ID expected")
  const show = getShow(id);
  const podcast = useStore(show, (state) => state.show);
  const phase = useStore(show, (state) => state.phase);
  return (
    <ShowDisplay
      phase={phase}
      title={podcast.title}
      description={podcast.description}
      seasons={podcast.seasons}
      image={podcast.image}
      onClose={() => navigate("/")}
    />
  );
};
