import { useStore } from "zustand";
import { store } from "../../Model";
import { AudioPlayer } from "./AudioPlayer.Presentation"

export const AudioPlayingTest = () => {
  const podcast = useStore(store, (state) => state.podcast.channel)
  const episode = useStore(store, (state) => state.podcast.episode);
  const season = useStore(store, (state) => state.podcast.season);
  return (
    <AudioPlayer
      podcast={podcast}
      episode={episode}
      season={season}
    />
  );
};
