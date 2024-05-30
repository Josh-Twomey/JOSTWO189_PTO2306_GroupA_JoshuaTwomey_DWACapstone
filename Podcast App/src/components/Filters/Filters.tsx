import { useStore } from "zustand";
import { store } from "../../Model";
import { Presentation } from "./Filters.presentation";




export const Filters = () => {
  const filter = useStore(store, (state) => state.filter);
  const toggleFilter = useStore(store, (state) => state.toggleFilter);
  const updateSearch = useStore(store, (state) => state.updateSearch);
  const updateSort = useStore(store, (state) => state.updateSort);
  const sort = useStore(store, (state) => state.sort);
  return (
    <Presentation
      filter={filter}
      sort={sort}
      onSubmit={({ search, sort }) => {
        updateSearch(search || "");
        updateSort(parseInt(sort));
      }}
      toggleFilter={toggleFilter}
    />
  );
};
