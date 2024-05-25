import { Box } from "@mui/material";
import {
  Pause,
  PlayArrow,
} from "@mui/icons-material";
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

function PlayerPage () {
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
        <Box className="p-4 container-layout mb-[60px] mt-[0px] text-white min-h-[60vh] ">
          <audio src={currSong.audio_url} ref={audioPlayer} />
          <Box className="md:max-xl:flex">
            <Box className="mr-4 w-[250px] mt-[20px] mb-[20px] ">
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
                  className="rounded-lg z-[1] absolute inset-0 box-border p-0 border-none m-auto block w-0 h-0 w-[100%] h-[100%]"
                />
              </Box>
            </Box>

            <Box
              className="truncate block pl-4 mt-[50px] max-md:mb-[20px] "
            >
              <Box className="text-[25px] font-[600] text-[#000000] hidden md:block ">
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
              <Box className="text-[#767676] text-xs mb-4 hidden md:block">
                <p>
                  {isLiked
                    ? "Favourites songs created by you"
                    : "Playlist created by Gaana"}
                </p>
              </Box>
              <Box className="flex ">
                <Box className="inline-flex">
                  <button
                    className="text-sm bg-[#ed1c24] hover:bg-[#cc0016d9] cursor-pointer rounded-3xl p-2 min-[370px]:px-3 text-white "
                   
                  >
                    {isPlaying ? <Pause /> : <PlayArrow />}
                    <Box
                      className=" relative top-[1px] capitalize "
                    >
                    </Box>
                  </button>
                </Box>
                <Box className="text-[#767676] gap-x-5 p-2 hidden md:block">
                  {user && !isLiked && (
                    <FavoriteButton
                      className="bg-[#FF0000]"
                      key={currSong._id}
                      userData={userData}
                      currSong={currSong}
                    />
                  )}
                </Box>
                <box className="heart-icon text-[#767676] p-1">
                    <MoreVertIcon  /></box>
              </Box>
            </Box>
          </Box>

          <Box className="md:w-[90%] mt-[50px]">
            <MusicContainer />
          </Box>
        </Box>
      ) : (
        "Loading..."
      )}
    </>
  );
};

export default PlayerPage;
