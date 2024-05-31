import { Filters } from "./components/Filters/Filters"
import { List } from "./components/List/List"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Single } from "./components/ShowDisplay"
import { useStore } from "zustand"
import { store } from "./Model"
import { AudioPlayingTest } from "./components/AudioPlayer/AudioPlayer"
import { AuthPresentation } from "./components/Auth/Auth.Presentation"

export const App = () => {
  const playingAudio = useStore(store, (state) => state.podcast.audio);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthPresentation/>}/>
          <Route path="/podcast/:id" element={<Single />} />
          <Route path="/list" element={<List configuration={<Filters />} />} />
        </Routes>
      </BrowserRouter>
      {playingAudio === "PLAYING" && <AudioPlayingTest />}
    </>
  );
}