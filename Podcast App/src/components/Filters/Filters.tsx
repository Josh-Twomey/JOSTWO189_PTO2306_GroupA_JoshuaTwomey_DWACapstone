import { useStore } from "zustand";
import { store } from "../../Model";
import { Presentation } from "./Filters.presentation";




export const Filters = () => {
  const filter = useStore(store, (state) => state.filter);
  const toggleFilter = useStore(store, (state) => state.toggleFilter);
  const updateSearch = useStore(store, (state) => state.updateSearch);

  return (
    <Presentation
      filter={filter}
      onSubmit={({ search }) => {
        updateSearch(search || "");
      }}
      toggleFilter={toggleFilter}
    />
  );
};
