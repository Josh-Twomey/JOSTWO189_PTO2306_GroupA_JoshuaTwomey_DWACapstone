import { useState, useEffect, useRef, useCallback } from "react";
import IconButton from "@mui/material/IconButton";
import styled from "@emotion/styled";
import {
  Forward10,
  Replay10,
  SkipPrevious,
  SkipNext,
  PlayArrow,
Pause } from "@mui/icons-material";

const Icon = styled(IconButton)`
  color:#dcdcdc
`


const Controls = ({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      "--range-progress",
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  const skipForward = () => {
    audioRef.current.currentTime += 10;
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 10;
  };

  return (
    <div>
      <Icon>
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
      <Icon >
        <SkipNext />
      </Icon>

    </div>
  );
};

export default Controls;
