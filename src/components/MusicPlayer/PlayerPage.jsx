import { Box } from "@mui/material";
import { Pause, PlayArrow } from "@mui/icons-material";
import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userSelector } from "../../redux/users/userSlice";
import MusicContainer from "./MusicContainer";
import FavoriteButton from "./FavoriteButton";
import {
  currentSongIndexSelector,
  isLikedSongsSelector,
  songSelector,
  isPlayingSelector,
  pauseSong,
  playSong,
} from "../../redux/songs/songSlice";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function PlayerPage() {
  const navigate = useNavigate();
  const songs = useSelector(songSelector);
  const isPlaying = useSelector(isPlayingSelector);
  const currentSongIndex = useSelector(currentSongIndexSelector);
  const currSong = songs[currentSongIndex];

  const loaction = useLocation();
  const dispatch = useDispatch();
  const audioPlayer = useRef();
  const isAlbum = loaction?.state?.isAlbum || false;
  const isArtist = loaction?.state?.isArtist || false;
  const artists = loaction?.state?.artists || null;
  const albumData = loaction?.state?.albumData || null;
  const isLiked = loaction?.state?.isLiked || false;
  const isLikedSongs = useSelector(isLikedSongsSelector);

  const userData = useSelector(userSelector);
  const user = userData ? userData.data : null;

  useEffect(() => {
    if (!localStorage.getItem("songs")) {
      navigate("/");
    }
  }, []);

  const handleCurrSongClick = () => {
    if (!isPlaying) {
      dispatch(playSong());
    } else {
      dispatch(pauseSong());
    }
  };

  return (
    <>
      {songs.length > 0 ? (
        <Box className="p-4 container-layout mb-[50px] mt-[0px] min-h-[60vh] player-container">
          <audio src={currSong.audio_url} ref={audioPlayer} />
          {/* md:max-xl:flex */}
          <Box className="md:max-xl:flex">
            <Box className="mr-4 w-[250px] mt-[30px] mb-[20px]">
              <Box className="box-border relative w-[250px] pt-[100%] hidden md:block">
                <img
                  src={
                    isArtist
                      ? artists.image
                      : isAlbum
                      ? albumData.image
                      : isLikedSongs
                      ? currSong.thumbnail
                      : currSong.thumbnail
                  }
                  alt="img"
                  className="rounded-lg z-[1] absolute inset-0 box-border p-0 border-none m-auto block"
                />
              </Box>
            </Box>

            <Box className="mr-4 w-[250px] mt-[30px] mb-[20px] md:hidden m-auto">
              <Box className="box-border block relative w-[250px] pt-[100%] ">
                <img
                  src={
                    isArtist
                      ? artists.image
                      : isAlbum
                      ? albumData.image
                      : isLikedSongs
                      ? currSong.thumbnail
                      : currSong.thumbnail
                  }
                  alt="img"
                  className="rounded-lg z-[1] absolute inset-0 box-border p-0 border-none m-auto block"
                />
              </Box>
            </Box>

            <Box className="truncate block pl-4 mt-[50px] max-md:mb-[20px] ">
              <Box className="text-[25px] font-[600] hidden md:block ">
                {isArtist
                  ? artists.name
                  : isAlbum
                  ? albumData.title
                  : isLiked
                  ? currSong.title
                  : currSong.title}
              </Box>
              <Box className="text-xs text-[#767676] mt-4 hidden md:block">
                {songs.length} songs
              </Box>
              {/* <Box className="text-[#767676] text-xs my-3 hidden md:block">
                {isLikedSongs
                    ? currSong.artist.map((artistId) => {
                        const artist = albumArtists.find(
                          (a) => a._id === artistId
                        );
                        return artist ? artist.name + " | " : "";
                      })
                    : currSong.artist.map((data) => `${data.name} | `)}
              </Box> */}
              <Box className="text-[#767676] text-xs mt-2 mb-4 hidden md:block">
                <p>
                  {isLiked
                    ? "Favourites songs created by you"
                    : "Playlist created by Gaana"}
                </p>
              </Box>
              <Box className="flex justify-center">
                <Box className="inline-flex ">
                  <button
                    className="text-sm bg-[#ed1c24] cursor-pointer rounded-3xl py-2 min-[370px]:px-3 text-white sm:w-[200px]"
                    onClick={() => handleCurrSongClick()}
                  >
                    {isPlaying ? <Pause /> : <PlayArrow />}
                    <Box
                      component="span"
                      className=" relative top-[1px]"
                    >
                      {isPlaying ? "Pause" : "Play"} Songs
                    </Box>
                  </button>
                </Box>
                <Box className="gap-x-5 p-2 hidden md:block">
                  {user && !isLiked && (
                    <FavoriteButton
                      className="bg-[#FF0000]"
                      key={currSong._id}
                      userData={userData}
                      currSong={currSong}
                    />
                  )}
                </Box>
                <Box className="heart-icon p-1 hidden md:block">
                  <MoreVertIcon />
                </Box>
              </Box>
            </Box>
          </Box>

          <Box className="md:w-[80%] mt-[30px]">
            <MusicContainer />
          </Box>
        </Box>
      ) : (
        "Loading..."
      )}
    </>
  );
}

export default PlayerPage;
