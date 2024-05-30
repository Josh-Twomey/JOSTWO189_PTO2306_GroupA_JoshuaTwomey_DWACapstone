import { useRef, useState } from "react";
import Controls from "./components/Controls";
import ProgressBar from "./components/SlideBar";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Volume } from "./components/Volume";
import IconButton from "@mui/material/IconButton";
import { Close } from "@mui/icons-material";
import { stopAudio } from "../../Model";


const Icon = styled(IconButton)`
  color: #dcdcdc;
`;

type Episodes = {
  title: string;
  description: string;
  episode: number;
  file: string;
};

type Seasons = {
  season: number;
  title: string;
  image: string;
  episodes: Episodes[];
};

type Show = {
  id: string;
  title: string;
  description: string;
  seasons: Seasons[];
  image: string;
  genres: string[];
  updated: string;
};

type Presentation = {
  podcast: Show;
  episode: number;
  season: number;
};

const Card = styled.div`
  background-color: #373737;
  position: sticky;
  display: grid;
  align-items: center;
  gap: 0.5rem;
  grid-template-columns: 1.5fr 1fr 2fr 1fr 0.15fr;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 6rem;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 6rem;
  display: flex;
  align-items: center;
`;

const Title = styled(Typography)`
  padding: 1rem;
  font-weight: 600;
  color: #dcdcdc;
`;

const Image = styled.img`
  height: 70%;
  padding: 0.25rem;
  border-radius: 50%;
`;

export const AudioPlayer = ({
  podcast,
  episode,
  season,
}: Presentation) => {
  
  const [episodeIndex, setEpisodeIndex] = useState(episode)
  const [seasonIndex, setSeasonIndex] = useState(season);
  const currentTrack= podcast.seasons[seasonIndex].episodes[episodeIndex].file;
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLProgressElement | null>(null);

  const onLoadedMetadata = () => {
    if (audioRef.current && progressBarRef.current) {
      const seconds = audioRef.current.duration;
      setDuration(seconds);
      progressBarRef.current.max = seconds;
    }
  };

  const handleNext = () => {
    if(podcast.seasons[seasonIndex].episodes.length -1 > episodeIndex){
      setEpisodeIndex((prev) => prev + 1)
      if (audioRef.current) audioRef.current.currentTime = 0;
    } else {
      setSeasonIndex((prev) => prev + 1)
      setEpisodeIndex(0)
      if(audioRef.current) audioRef.current.currentTime = 0
    }
  };

    const handleEndUpdate = () => {
      if (audioRef.current) 
      if (audioRef.current.currentTime > duration - 0.1) {
        handleNext();
      }
    };

  const handlePrev = () => {
    if (episodeIndex !== 0) {
      setEpisodeIndex((prev) => prev - 1);
      if (audioRef.current) audioRef.current.currentTime = 0;
    } else {
      setSeasonIndex((prev) => prev - 1);
      setEpisodeIndex(podcast.seasons[seasonIndex].episodes.length - 1);
      if (audioRef.current) audioRef.current.currentTime = 0;
    }
  };

  const handleClick = () => {
    stopAudio(episodeIndex,seasonIndex,podcast)
  }
  
  return (
    <>
      <Card>
        <Wrapper>
          <Image src={podcast.image} />
          <Title>
            {podcast.seasons[seasonIndex].episodes[episodeIndex].title}
          </Title>
        </Wrapper>

        <Controls
          {...{
            audioRef,
            progressBarRef,
            duration,
            setTimeProgress,
            handleNext,
            handlePrev,
          }}
        />

        <ProgressBar
          {...{ progressBarRef, audioRef, timeProgress, duration }}
        />

        <Volume {...{ audioRef }} />
        <audio
          src={currentTrack}
          ref={audioRef}
          onLoadedMetadata={onLoadedMetadata}
          onTimeUpdate={handleEndUpdate}
        />
        <Icon onClick={handleClick}>
          <Close />
        </Icon>
      </Card>
    </>
  );
};
