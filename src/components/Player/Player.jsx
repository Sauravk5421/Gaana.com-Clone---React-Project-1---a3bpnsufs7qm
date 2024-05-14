import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "../Player/Player.css";

const playlist = [
  { src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
  { src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
  { src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
];

const Player = () => {
  const [currentTrack, setTrackIndex] = useState(0);

  const handleClickNext = () => {
    console.log("click next");
    setTrackIndex((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    );
  };

  const handleEnd = () => {
    console.log("end");
    setTrackIndex((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    );
  };
  return (
    <Box className=" bg-[#222428] flex justify-between self-center items--center text-white w-[100%] fixed bottom-0 items-center p-3">
      <Box className="flex content-center items-center gap-x-3">
        <Box>
          <img
            className="player-img"
            src="./assets/images/test_image.png"
            alt="song-img"
          />
        </Box>
        <Box>
          <p className="m-0">
            <span className="bg-[#FF0000] text-xs p-1 rounded-full text-bold">
              Premium
            </span>
            Jiya Laage Na
          </p>
          <p className="text-xs m-0">Jiya Laage Na Songs</p>
        </Box>
        <Box className="flex gap-x-3 ml-5">
          <FavoriteBorderIcon className="heart-icon" />
          <MoreVertIcon className="heart-icon" />
        </Box>
      </Box>

      <Box className="flex flex-row items-center">
        <Box className="border-1 text-white rounded-full px-16 h-[5%]">/</Box>
        <Box>
          <AudioPlayer
            volume="0.5"
            src={playlist[currentTrack].src}
            showSkipControls
            onClickNext={handleClickNext}
            onEnded={handleEnd}
            onError={() => {
              console.log("play error");
            }}
          />
        </Box>
      </Box>

      <Box>
        <select className="border-1 px-3 p-1 bg-[#222428] rounded-full mr-4">
          <option>Audio:High</option>
          <option>Audio:Medium</option>
          <option>Audio:Low</option>
        </select>
        <KeyboardArrowUpIcon />
      </Box>
    </Box>
  );
};

export default Player;
