import { useState, useEffect } from "react";
import { VolumeUp, VolumeOff, VolumeDown } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import styled from "@emotion/styled";

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

type Volume = {
  audioRef: React.MutableRefObject<HTMLAudioElement | null>;
}; 

const Icon = styled(IconButton)`
color: #dcdcdc;
font-size: 1rem;
`
const VolumeBar = styled.input`
  accent-color: #dcdcdc;
  height: 7px;
`;

export const Volume = ({audioRef}: Volume) => {
  const [volume, setVolume] = useState(60);
  const [muteVolume, setMuteVolume] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = muteVolume;
    }
  }, [volume, audioRef, muteVolume]);

  return (
    <Wrapper>
      <Icon onClick={() => setMuteVolume((prev) => !prev)}>
        {muteVolume || volume < 5 ? (
          <VolumeOff />
        ) : volume < 40 ? (
          <VolumeDown />
        ) : (
          <VolumeUp />
        )}
      </Icon>
      <VolumeBar
        type="range"
        min={0}
        max={100}
        value={volume}
        onChange={(e) => setVolume(parseInt(e.target.value))}
      />
    </Wrapper>
  );
};
