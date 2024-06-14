import {
  Add,
  Favorite,
  FavoriteBorder,
  Pause,
  PlayArrow,
} from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  addSongIndex,
  addSongs,
  currentSongIndexSelector,
  isLikedSongsSelector,
  isPlayingSelector,
  pauseSong,
  playSong,
  songSelector,
} from "../../redux/songs/songSlice";
import axios from "axios";
import "./PlayerPage.css";
import { useLocation } from "react-router-dom";
import { userSelector } from "../../redux/users/userSlice";
import FavoriteButton from "./FavoriteButton";

const MusicContainer = () => {
  const loaction = useLocation();
  const audioPlayer = useRef();
  const isAlbum = loaction?.state?.isAlbum || false;
  const isArtist = loaction?.state?.isArtist || false;
  const isLiked = loaction?.state?.isLiked || false;
  const likedArtits = loaction?.state?.likedArtits || false;
  // console.log("isLiked");
  // console.log(isLiked);
  // console.log(likedArtits);
  const artists = loaction?.state?.artists || null;
  const albumData = loaction?.state?.albumData || null;
  const isLikedSongs = useSelector(isLikedSongsSelector);
  // console.log(`isAlbum: ${isAlbum}`);
  // console.log(`artists: `);
  // console.log(artists);

  const dispatch = useDispatch();
  const songs = useSelector(songSelector);
  const isPlaying = useSelector(isPlayingSelector);
  const currentSongIndex = useSelector(currentSongIndexSelector);
  const currSong = songs[currentSongIndex];
  const userData = useSelector(userSelector);
  const user = userData ? userData.data : null;
  const [duration, setDuration] = useState(0);
  const [pagination, setPagination] = useState(19);
  const [songId, setSongId] = useState(null);

  useEffect(() => {
    if (isPlaying) {
      setInterval(() => {
        const _duration = Math.floor(audioPlayer?.current?.duration);
        setDuration(_duration);
      }, 100);
    }
  }, [isPlaying]);

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

  const handleCurrSongClick = () => {
    if (!isPlaying) {
      dispatch(playSong());
    } else {
      dispatch(pauseSong());
    }
  };

  const handleNewSongClick = (song, index) => {
    dispatch(addSongIndex(index));
    dispatch(playSong());
  };

  const handleShowMore = () => {
    if (pagination + 1 < songs.length) {
      setPagination((prev) => prev + 20);
    }
  };

  return (
    <>
      <Box className="music-container">
        <Box className="md:hidden md:pl-4 text-center">
          <Box className="text-[25px] font-[400]">
            <audio src={currSong.audio_url} ref={audioPlayer} />
            {isArtist
              ? artists.name
              : isAlbum
              ? albumData.title
              : isLiked
              ? currSong.title
              : currSong.title}
            {/* {currSong.title} */}
          </Box>
          <Box className="text-sm mt-1">{songs.length} songs</Box>
          {/* <Box className="text-[#767676] text-xs my-1">
            {isLikedSongs
              ? currSong.artist.map((artistId) => {
                  const artist = albumArtists.find((a) => a._id === artistId);
                  return artist ? artist.name + " | " : "";
                })
              : currSong.artist.map((data) => `${data.name} | `)}
          </Box> */}
          <Box className="text-[#767676] text-sm mb-4 mt-2">
            <p>
              {isLiked
                ? "Favourites songs created by you"
                : "Playlist created by Gaana"}
            </p>
          </Box>
        </Box>
        <Box className="mt-6">
          <Box className="flex justify-around">
            {/* <Grid item xs={3} sm={3} md={3} lg={3} className=""> */}
            <Box className="md:table-cell hidden text-xs ml-2 font-normal pb-5 ">
              Track
            </Box>
            {/* </Grid> */}
            {/* <Grid item xs={3} sm={3} md={3} lg={3}> */}
            <Box className="md:table-cell hidden pl-2.5 text-xs font-normal pb-5 ">
              {isLiked ? "Created At" : "Artists"}
            </Box>
            {/* </Grid> */}
            {/* <Grid item xs={3} sm={3} md={3} lg={3}> */}
            <Box className="md:table-cell md:pl-0.5 hidden text-xs pb-5 ">
              Album
            </Box>
            {/* </Grid> */}
            {/* <Grid item xs={3} sm={3} md={3} lg={3}> */}
            <Box className="md:table-cell md:pl-0.5 hidden text-xs font-normal pb-5 ">
              Duration
            </Box>
            {/* </Grid> */}
          </Box>

          
          <Box
            className=" py-2 md:pr-3 rounded-lg border-transparent border cursor-pointer hover:shadow-dark hover:border-[#3d464d] "
            onClick={() => handleCurrSongClick()}
          >
            <Box className="flex justify-between md:pl-4 mx-1">
              <Grid container className="group ">
                <Grid item xs={3} sm={3} md={3} lg={3}>
                  <Box className="flex justify-between ">
                    <Box className="md:table-cell hidden md:text-title text-[0.625rem] font-normal mr-2 self-center ">
                      {currentSongIndex + 1}
                    </Box>
                    <Box className=" md:ml-2.5">
                      <Box className="h-[40px] w-[40px]  relative  ">
                        <img
                          src={currSong.thumbnail}
                          alt="Song thumbnail"
                          className={`rounded-lg blur-sm transition-all duration-300 `}
                        />
                        <div
                          className={`absolute bg-[#00000039] rounded-lg inset-0 flex items-center justify-center ${
                            isPlaying ? "opacity-100" : "opacity-0"
                          } transition-opacity duration-300 `}
                        >
                          <div className="icon ">
                            <span className="icon1 " />
                            <span className="icon1 " />
                            <span className="icon1 " />
                            <span className="icon1 " />
                          </div>
                        </div>
                        <div
                          className={`absolute bg-[#00000039] rounded-lg inset-0 flex items-center justify-center ${
                            isPlaying ? "opacity-0" : "opacity-100"
                          } transition-opacity duration-300 `}
                        >
                          <PlayArrow className="text-white text-2xl" />
                        </div>
                      </Box>
                    </Box>
                    <Box className="truncate md:pr-[40px] ml-4 my-auto text-xs font-bold text-title ">
                      {currSong.title}
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3}>
                  <Box className="md:flex hidden text-xs pl-0.5 text-[#767676] font-normal items-center text-center h-full truncate w-[90%] ">
                    {isAlbum
                      ? currSong.artist.map((artistId) => {
                          const artist = artists.find(
                            (a) => a._id === artistId
                          );
                          return artist ? artist.name + " | " : "";
                        })
                      : isLiked
                      ? currSong.createdAt
                        ? currSong.createdAt?.substring(0, 10)
                        : "----"
                      : currSong.artist.map(
                          (artistData) => `${artistData.name} | `
                        )}
                  </Box>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3}>
                  <Box className="md:flex md:pl-0.5 hidden text-xs text-[#767676]  items-center font-normal h-full">
                    {currSong.title}
                  </Box>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3}>
                  <Box className="md:flex md:pl-0.5 hidden text-xs text-[#767676] items-center  font-normal h-full">
                    {duration === "NAN" ? "00:00" : formatTime(duration)}
                  </Box>
                </Grid>
                {/* <Grid
                  item
                  xs={3}
                  sm={3}
                  md={3}
                  lg={3}
                  className="md:hidden text-[#767676] py-2 mr-3"
                >
                  <PlayArrow />
                </Grid> */}
              </Grid>
            </Box>
          </Box>

    
            

          {songs?.map(
            (song, index) =>
              currentSongIndex != index && (
                <Box
                  className={` py-2 md:pr-3 rounded-lg border-transparent border hover:shadow-dark hover:border-[#3d464d] ${
                    index > pagination && "hidden"
                  } `}
                  key={index}
                  component={"div"}
                  onClick={() => handleNewSongClick(song, index)}
                >
                  <Box className="mx-1 flex justify-start md:pl-4 group  ">
                    <Grid container className="cursor-pointer md:flex">
                      <Grid item xs={3} sm={3} md={3} lg={3}>
                        <Box className="flex justify-start ">
                          <Box className="md:table-cell hidden md:text-title text-[0.625rem] font-normal mr-2 self-center ">
                            {index + 1}
                          </Box>
                          <Box className=" md:ml-2.5">
                            <Box className="h-[40px] w-[40px]  relative  ">
                              <img
                                src={song?.thumbnail}
                                alt="Song thumbnail"
                                className={`rounded-lg group-hover:blur-sm transition-all duration-300 `}
                              />
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#00000039]">
                                <PlayArrow className="text-white text-2xl" />
                              </div>
                            </Box>
                          </Box>
                          <Box className="truncate md:pr-[40px] ml-4 my-auto text-xs font-bold text-title ">
                            {song?.title}
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={3} sm={3} md={3} lg={3}>
                        <Box className="md:flex hidden text-xs pl-0.5 text-[#767676]  font-normal items-center text-center h-full leading-4 truncate mr-[40px] ">
                          {isAlbum
                            ? song.artist.map((artistId) => {
                                const artist = artists.find(
                                  (a) => a._id === artistId
                                );
                                return artist ? artist.name + " | " : "";
                              })
                            : isLiked
                            ? song.createdAt
                              ? song.createdAt?.substring(0, 10)
                              : "----"
                            : song?.artist &&
                              song?.artist.map(
                                (artistData) => `${artistData.name} | `
                              )}
                        </Box>
                      </Grid>
                      <Grid item xs={3} sm={3} md={3} lg={3}>
                        <Box className="md:flex md:pl-0.5 hidden text-xs text-[#767676] items-center justify-start font-normal h-full">
                          <Box className="flex justify-center items-center min-w-[73px] text-center ">
                            {song.title}
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={3} sm={3} md={3} lg={3}>
                        <Box className="md:flex md:pl-0.5 hidden text-xs text-[#767676]  items-center tracking-widest font-normal leading-4 h-full">
                        {duration === "NAN" ? "00:00" : formatTime(duration)}
                        </Box>
                      </Grid>
                      {/* <Grid
                        item
                        xs={3}
                        sm={3}
                        md={3}
                        lg={3}
                        className="md:hidden text-[#767676] py-2 mr-3"
                      >
                        <PlayArrow />
                      </Grid> */}
                    </Grid>
                  </Box>
                </Box>
              )
          )}
          <Box
            className={`flex justify-center p-3 ${
              pagination + 1 >= songs.length && "hidden"
            } `}
          >
            <button
              className={`bg-[#c7c5c5] min-[370px]:px-3 cursor-pointer rounded-3xl border-[1px] p-2 px-5 hover:bg-[#7f8181] pr-2 pl-3 text-sm font-medium `}
              onClick={() => handleShowMore()}
            >
              Show More
            </button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MusicContainer;
