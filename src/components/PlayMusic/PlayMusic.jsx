import {
  FastForward,
  FastRewind,
  Pause,
  PlayArrow,
  SkipNext,
  SkipPrevious,
  VolumeDown,
  VolumeMute,
  VolumeOff,
  VolumeUp,
} from "@mui/icons-material";
import { Box, Slider } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../redux/users/userSlice";
import { useLocation, useNavigate } from "react-router-dom";
import {
  albumArtistsSelector,
  currentSongIndexSelector,
  decrementSongIndex,
  incrementSongIndex,
  isLikedSongsSelector,
  isPlayingSelector,
  pauseSong,
  playSong,
  songSelector,
} from "../../redux/songs/songSlice";
import { isSubscriptionPageSelector } from "../../redux/subscription/subscriptionSlice";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import FavoriteButton from "../MusicPlayer/FavoriteButton";

function PlayMusic () {
  const songs = useSelector(songSelector);
  const currSongInd = useSelector(currentSongIndexSelector);
  const isLikedSongs = useSelector(isLikedSongsSelector);
  const albumArtists = useSelector(albumArtistsSelector);
  const isSubscriptionPage = useSelector(isSubscriptionPageSelector);
  const dispatch = useDispatch();

  const currSong = songs[currSongInd];
  const audioPlayer = useRef();
  // const [isPlaying, setIsPlaying] = useState(true);
  const isPlaying = useSelector(isPlayingSelector);
  const loaction = useLocation();
  const isLiked = loaction?.state?.isLiked || false;

  const [volume, setVolume] = useState(30);
  const [mute, setMute] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [maxIndex, setMaxIndex] = useState(true);
  const [volumeHover, setVolumeHover] = useState(false);
  const userData = useSelector(userSelector);
  const user = userData ? userData.data : null;
  // console.log(user,"user")

//   useEffect(() => {
//     isPlaying = false;
//   }, []);

  useEffect(() => {
    if (audioPlayer) {
      audioPlayer.current.volume = volume / 100;
    }

    if (isPlaying) {
      audioPlayer.current.play();
      setInterval(() => {
        const _duration = Math.floor(audioPlayer?.current?.duration);
        const _elapsed = Math.floor(audioPlayer?.current?.currentTime);

        setDuration(_duration);
        setElapsed(_elapsed);

        if (_duration === _elapsed) {
          skipNextSong();
        }
      }, 100);
    }
  }, [volume, isPlaying]);

  
  useEffect(() => {
    if (songs.length > 0) {
      if (songs.length - 1 > currSongInd) {
        setMaxIndex(true);
      } else {
        setMaxIndex(false);
      }
    }
  }, [songs, currSongInd]);

  function formatTime(time) {
    if (time && !isNaN(time)) {
      const minutes =
        Math.floor(time / 60) < 10
          ? `0${Math.floor(time / 60)}`
          : Math.floor(time / 60);
      const seconds =
        Math.floor(time % 60) < 10
          ? `0${Math.floor(time % 60)}`
          : Math.floor(time % 60);

      return `${minutes}:${seconds}`;
    }
    return "00:00";
  }

  const toggleForward = () => {
    audioPlayer.current.currentTime += 3;
  };

  const toggleBackward = () => {
    audioPlayer.current.currentTime -= 3;
  };

  const togglePlay = () => {
    if (!isPlaying) {
      audioPlayer.current.play();
      dispatch(playSong());
    } else {
      audioPlayer.current.pause();
      dispatch(pauseSong());
    }
  };

  const skipNextSong = () => {
    dispatch(incrementSongIndex());
    audioPlayer.current.play();
    dispatch(playSong());
  };

  const skipPrevSong = () => {
    dispatch(decrementSongIndex());
    audioPlayer.current.play();
    dispatch(playSong());
  };

  function preventHorizontalKeyboardNavigation(event) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
    }
  }

  function VolumeBtns() {
    return mute || volume === 0 ? (
      <VolumeOff
        onClick={() => setMute(!mute)}
        onMouseOver={() => {
          setVolumeHover(true);
        }}
        onMouseOut={() => {
          setVolumeHover(false);
        }}
      />
    ) : volume <= 20 ? (
      <VolumeMute
        onClick={() => setMute(!mute)}
        onMouseOver={() => {
          setVolumeHover(true);
        }}
        onMouseOut={() => {
          setVolumeHover(false);
        }}
      />
    ) : volume <= 75 ? (
      <VolumeDown
        onClick={() => setMute(!mute)}
        onMouseOver={() => {
          setVolumeHover(true);
        }}
        onMouseOut={() => {
          setVolumeHover(false);
        }}
      />
    ) : (
      <VolumeUp
        onClick={() => setMute(!mute)}
        onMouseOver={() => {
          setVolumeHover(true);
        }}
        onMouseOut={() => {
          setVolumeHover(false);
        }}
      />
    );
  }

  const handleSliderChange = (value) => {
    setElapsed(value);
    audioPlayer.current.currentTime = value;
  };

  return (
    <>
      <Box className={isSubscriptionPage ? "hidden" : "block"}>
        <audio src={currSong.audio_url} ref={audioPlayer} muted={mute} />
        <Box className="text-white fixed bottom-0 w-full items-center h-20 left-0 right-0 rounded border-none z-50">
          <Box className="bg-[#21252d] flex h-full items-center ">
            <Box className="flex-grow-[2] sm:flex-grow flex sm:flex-1 lg:max-w-[50%] sm:max-w-[80%] max-w-[65%] ">
              <Box className="ml-4 min-w-[3rem] ">
                <Box className="relative block">
                  <Box
                    className="box-border inline-block overflow-hidden bg-none opacity-100 relative max-w-[100%] "
                  >
                    <Box
                      className="box-border block bg-none opacity-100 max-w-[100%] "
                    >
                      <img
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2745%27%20height=%2745%27/%3e"
                        alt="song img"
                        className="block max-w-[100%] bg-none opacity-100 m-0 p-0 border-0 "
                      />
                    </Box>
                    <img
                      src={currSong.thumbnail}
                      alt="song img"
                      className="absolute bg-white inset-0 box-border p-0 border-none m-auto block w-0 h-0 max-w-[100%] min-w-[100%] min-h-[100%] max-h-[100%] "
                    />
                  </Box>
                </Box>
              </Box>
              <Box className="ml-1.5 truncate sm:max-w-[10rem] lg:max-w-[15rem] ">
                <Box className="font-normal text-sm leading-6 truncate text-[#f7f5f5] ">
                  {currSong.title}
                </Box>
                <Box className="text-[#767676] text-xs font-normal leading-5 truncate">
                 {isLikedSongs
                    ? currSong.createdAt
                      ? currSong.createdAt?.substring(0, 10)
                      : "----"
                    : albumArtists?.length > 0
                    ? currSong.artist.map((artistId) => {
                        const artist = albumArtists.find(
                          (a) => a._id === artistId
                        );
                        return artist ? artist.name + " | " : "";
                      })
                    : currSong.artist.map((data) => `${data.name} | `)} 
                </Box>
              </Box>
            </Box>
            {/* Like Button */}
            <Box className="flex justify-start content-center gap-x-3 text-xs font-light mx-3">
              {/* <FavoriteBorderIcon className="hidden md:block text-white font-light" /> */}
              <Box className="text-[#767676] gap-x-3 p-1 hidden md:block">
                  {user && !isLiked && (
                    <FavoriteButton
                      className="bg-[#FF0000]"
                      key={currSong._id}
                      userData={userData}
                      currSong={currSong}
                    />
                  )}
                </Box>
              <Box>
                <MoreVertIcon className="mt-2 hidden md:block text-white" />
              </Box>
            </Box>
            <Box className="hidden md:block min-w-[80px] ml-2 text-xs text-[#9da0a3] border-1 rounded-full p-1">
                {formatTime(elapsed)} /{formatTime(duration)}
              </Box>
            {/* Play */}
            <Box className="flex-grow text-center flex items-center justify-center sm:flex-1">
              <Box className="flex items-center md:mx-9 mx-4 ">
                {currSongInd > 0 ? (
                  <SkipPrevious
                    className="ml-2 text-[#9da0a3] hidden cursor-pointer sm:block "
                    onClick={skipPrevSong}
                  />
                ) : (
                  <SkipPrevious className="ml-2 text-[#424445] cursor-not-allowed hidden sm:block " />
                )}
                <FastRewind
                  className="mr-2 text-[#9da0a3] hidden cursor-pointer sm:block"
                  onClick={toggleBackward}
                />
                {/* play button */}
                <button className="w-10 h-10" onClick={togglePlay}>
                  {isPlaying ? (
                    <Pause className="text-white bg-[#ed1c24] hover:bg-[#cc0016] rounded-full p-2 h-[40px] w-[40px] " />
                  ) : (
                    <PlayArrow className="text-white bg-[#ed1c24] hover:bg-[#cc0016] rounded-full p-2 h-[40px] w-[40px] " />
                  )}
                </button>
                <FastForward
                  className="ml-2 text-[#9da0a3] hidden cursor-pointer sm:block"
                  onClick={toggleForward}
                />
                {/* songs.length - 1 > currSongInd */}
                {maxIndex ? (
                  <SkipNext
                    className="ml-2 text-[#9da0a3] hidden cursor-pointer sm:block "
                    onClick={skipNextSong}
                  />
                ) : (
                  <SkipNext className="ml-2 text-[#424445] hidden sm:block cursor-not-allowed " />
                )}
              </Box>
              <Box className="hidden sm:block"></Box>
            </Box>
            <Box className="flex-grow text-right mr-4 flex justify-end sm:flex-1 h-full">
             
              <Box className="flex mr-14 group">
                <Box className="relative flex my-auto text-[#e50019] ">
                  <VolumeBtns />
                </Box>
              </Box>
            </Box>
            <Box>
                <select className="hidden md:block border-1 px-2 p-1 bg-[#222428] rounded-full mr-4 text-sm">
                    <option>Audio:High</option>
                    <option>Audio:Medium</option>
                    <option>Audio:Low</option>
                </select>
                {/* <KeyboardArrowUpIcon /> */}
            </Box>
          </Box>

          <Box className="absolute top-0 w-full">
            <Box className="h-8 absolute -bottom-4 w-full cursor-pointer ">
              {/* timer slider */}
              <Slider
                value={elapsed}
                max={duration}
                onChange={(e, v) => {
                  handleSliderChange(v);
                }}
                className="m-0 p-0 text-[#ed1c23a4] bg-[#ffffff9f] [&>.MuiSlider-thumb]:hidden [&>.MuiSlider-thumb]:hover:block "
                size="small"
              />
            </Box>
          </Box>


          {/* {console.log(`volumeHover: ${volumeHover}`)} */}
          <Box
            // sx={{ height: 100 }}
            className="absolute bottom-11 right-[20%]"
            onMouseOver={() => {
              // console.log("volume up");
              setVolumeHover(true);
            }}
            onMouseOut={() => {
              // console.log("volume up");
              setVolumeHover(false);
            }}
          >
            {volumeHover && (
              <Slider
                sx={{
                  '& input[type="range"]': {
                    WebkitAppearance: "slider-vertical",
                  },
                  "& .MuiSlider-thumb": {
                    width: "13px",
                    height: "13px",
                  },
                  height: 100,
                }}
                orientation="vertical"
                // defaultValue={30}
                // aria-label="Temperature"
                min={0}
                max={100}
                value={volume}
                onChange={(e, v) => setVolume(v)}
                className="text-[#e50019] "
                onKeyDown={preventHorizontalKeyboardNavigation}
              />
            )}
          </Box>

        </Box>
      </Box>
    </>
  );
};

export default PlayMusic;
