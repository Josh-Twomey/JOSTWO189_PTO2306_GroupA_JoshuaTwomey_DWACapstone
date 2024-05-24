import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Time = styled(Typography)`
  font-size: 0.8rem;
  font-weight: 400;
  color: #dcdcdc
`
const Bar = styled.input`
  accent-color: #dcdcdc;
  width: 100%;
  height: 0.8rem;
`;

const ProgressBar = ({ progressBarRef, audioRef, timeProgress, duration }) => {
  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };

  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };

  return (
    <>
      <Wrapper>
        <Time>{formatTime(timeProgress)}</Time>
        <Bar
          type="range"
          ref={progressBarRef}
          defaultValue="0"
          onChange={handleProgressChange}
        />
        <Time>{formatTime(duration)}</Time>
      </Wrapper>
    </>
  );
};

export default ProgressBar;
