import { Filters } from "./components/Filters/Filters"
import { List } from "./components/List/List"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Single } from "./components/ShowDisplay"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/podcast/:id" element={<Single />} />
        <Route path="/" element={<List configuration={<Filters />} />} />
      </Routes>
    </BrowserRouter>
  );
}