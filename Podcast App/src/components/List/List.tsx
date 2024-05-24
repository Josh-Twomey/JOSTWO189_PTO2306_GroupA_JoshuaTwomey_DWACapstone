import { useStore } from "zustand";
import { store } from "../../Model";
import { Presentation } from "./List.presentation";
import { useNavigate } from "react-router-dom";


export const List = ( props : { configuration: JSX.Element }) => {
  const { configuration } = props
  const phase = useStore(store, (state) => state.phase);
  const podcasts = useStore(store, (state) => state.list);
  const filter = useStore(store, (state) => state.filter);
  const toggleFilter = useStore(store, (state) => state.toggleFilter);
  const navigate = useNavigate()

  return (
    <Presentation
      podcasts={podcasts}
      phase={phase}
      filter={filter}
      configuration={configuration}
      toggleFilter={toggleFilter}
      onSelect={value => navigate(`/podcast/${value}`)}
    />
  );
};
