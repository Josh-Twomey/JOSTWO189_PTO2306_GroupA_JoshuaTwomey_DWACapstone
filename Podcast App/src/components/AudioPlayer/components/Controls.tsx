import { useEffect, useRef, useCallback } from "react";
import IconButton from "@mui/material/IconButton";
import styled from "@emotion/styled";
import {
  Forward10,
  Replay10,
  SkipPrevious,
  SkipNext,
  PlayArrow,
  Pause,
} from "@mui/icons-material";

const Icon = styled(IconButton)`
  color: #dcdcdc;
`;

type Controls = {
  audioRef: React.MutableRefObject<HTMLAudioElement | null>;
  progressBarRef: React.MutableRefObject<HTMLProgressElement | null>;
  duration: number;
  timeProgress: number;
  setTimeProgress: React.Dispatch<React.SetStateAction<number>>;
  handleNext: () => void;
  handlePrev: () => void;
  updateDBTable: () => void;
  history: number;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
};

const Controls = ({ audioRef, progressBarRef, duration, setTimeProgress, updateDBTable, handleNext, isPlaying, setIsPlaying, history, handlePrev } : Controls) => {
  

  useEffect(() => {
    if (audioRef.current) {
      if (history === 42) history = 0
      audioRef.current.currentTime += history;
    }
  }, [history,audioRef]);

  const togglePlayPause = () => {
    if (isPlaying) {
      updateDBTable()
    }
    setIsPlaying((prev) => !prev);
  };

  const playAnimationRef = useRef<number>();

const repeat = useCallback(() => {
  if (audioRef.current && progressBarRef.current) {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      "--range-progress",
      `${(progressBarRef.current.value / duration) * 100}%`
    );
  }
  playAnimationRef.current = requestAnimationFrame(repeat);
}, [audioRef, duration, progressBarRef, setTimeProgress]);

useEffect(() => {
  if (isPlaying && audioRef.current) {
    audioRef.current.play();
  } else if (!isPlaying && audioRef.current) {
    audioRef.current.pause();
  }
  playAnimationRef.current = requestAnimationFrame(repeat);
}, [isPlaying, audioRef, repeat]);

const skipForward = () => {
  if (audioRef.current) {
    audioRef.current.currentTime += 10;
  }
};

const skipBackward = () => {
  if (audioRef.current) {
    audioRef.current.currentTime -= 10;
  }
};
  return (
    <div>
      <Icon onClick={handlePrev}>
        <SkipPrevious />
      </Icon>
      <Icon onClick={skipBackward}>
        <Replay10 />
      </Icon>
      <Icon onClick={togglePlayPause}>
        {isPlaying ? <Pause /> : <PlayArrow />}
      </Icon>
      <Icon onClick={skipForward}>
        <Forward10 />
      </Icon>
      <Icon onClick={handleNext}>
        <SkipNext />
      </Icon>
    </div>
  );
};

export default Controls;
