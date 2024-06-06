import { useStore } from "zustand";
import { store } from "../../Model";
import { closeDisplay } from "../../Model";
import { useNavigate } from "react-router-dom";
import { FavouriteList } from "./FavouriteList.Presentation";
import { useEffect, useState } from "react";
import { supabase } from "../Auth";

export const SingleFav = (props: { configuration: JSX.Element }) => {
  const { configuration } = props;
  const [favs, setFavs] = useState<any>([]);
  const navigate = useNavigate();
  useEffect(() => {
    getFavourites();
  }, []);

  async function getFavourites() {
    try {
      const { data, error } = await supabase.from("favourites").select("*");
      if (error) throw error;
      if (data !== null) {
        setFavs(data);
      }
    } catch (error: any) {
      alert(error.message);
    }
  }
  const filter = useStore(store, (state) => state.filter);
  const sort = useStore(store, (state) => state.sort);
  const toggleFilter = useStore(store, (state) => state.toggleFilter);
  const phase = useStore(store, (state) => state.phase);
  const page = useStore(store, (state) => state.page);

  return (
    <FavouriteList
      getFavourites={getFavourites}
      filter={filter}
      page={page}
      sort={sort}
      configuration={configuration}
      toggleFilter={toggleFilter}
      phase={phase}
      favs={favs}
      onClose={() => {
        navigate("/list");
        closeDisplay();
      }}
    />
  );
};
