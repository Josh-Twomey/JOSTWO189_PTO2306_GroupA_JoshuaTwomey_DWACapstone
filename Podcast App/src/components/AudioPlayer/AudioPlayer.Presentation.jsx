import { useRef, useState } from "react";
import Controls from "./components/Controls";
import ProgressBar from "./components/SlideBar";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Volume } from "./components/Volume";



const Card = styled.div`
  background-color: #373737;
  position: absolute;
  display: grid;
  align-items: center;
  gap: 0.5rem;
  grid-template-columns: 1.5fr 1fr 2fr 1fr;
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
  color: #dcdcdc
`;

const Image = styled.img`
  height: 70%;
  padding: 0.25rem;
  border-radius: 50%;
`;

export const AudioPlayer = ({image, title, file}) => {

  const [currentTrack, setCurrentTrack] = useState(file);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef();
  const progressBarRef = useRef();


  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  // const handleNext = () => {
  //   if (trackIndex >= tracks.length - 1) {
  //     setTrackIndex(0);
  //     setCurrentTrack(tracks[0]);
  //   } else {
  //     setTrackIndex((prev) => prev + 1);
  //     setCurrentTrack(tracks[trackIndex + 1]);
  //   }
  // };

  return (
    <>
      <Card>
        <Wrapper>
        <Image src={image} />
        <Title>{title}</Title>
        </Wrapper>
       
          <Controls
            {...{
              audioRef,
              progressBarRef,
              duration,
              setTimeProgress,
              setCurrentTrack,
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
        />
      </Card>
    </>
  );
};
