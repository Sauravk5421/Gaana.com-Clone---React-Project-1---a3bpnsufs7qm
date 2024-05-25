import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../redux/users/userSlice";
import EmptyLikedSongs from "./EmptyLikedSongs";
import {
  addSongIndex,
  addSongs,
  playSong,
  setLikedSongs,
} from "../../redux/songs/songSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const MyMusic = () => {
  const userData = useSelector(userSelector);
  const [isEmptySongs, setIsEmptySongs] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [likedArtits, setLikedArtits] = useState([]);
  const [mylikedSong, setmylikedSong] = useState([]);
  const [changeNavigate, setChangeNavigate] = useState(false);


  const fetchData = async () => {
    const projectId = "u0kdju5bps0g";
    let url = "https://academics.newtonschool.co/api/v1/music/favorites/like";
    const token = userData.token;
    const response = await axios({
      url: url,
      method: "get",
      headers: {
        projectId: projectId,
        Authorization: `Bearer ${token}`,
      },
    });

    if (response?.data?.data?.songs?.length === 0) {
      setIsEmptySongs(true);
    } else if (response?.data?.data?.songs?.length > 0) {
      const songs = response.data.data.songs;
      setmylikedSong(response?.data?.data?.songs);
    }
  };

  function handleClick() {
    dispatch(addSongs(mylikedSong));
    dispatch(addSongIndex(0));
    dispatch(setLikedSongs());
    dispatch(playSong());
    // setChangeNavigate(true);
    navigate("/player", {
      state: {
        isLiked: true,
      },
    });
  }

  useEffect(() => {
    fetchData();
    if (changeNavigate) {
      navigate("/player", {
        state: {
          isLiked: true,
          likedArtits: likedArtits,
        },
      });
    }
  }, [changeNavigate]);
  return (
    <>
      <Box className="h-full min-h-[450px] pt-[30px]">
        {isEmptySongs ? (
          <>
            <EmptyLikedSongs />
          </>
        ) : (
          <>
            <Box className=" px-4">
              <Box className="text-title text-4xl my-10 font-bold text-[#1b1b1b] ">
                Favourite Songs
              </Box>
              <Box className="flex flex-wrap gap-x-5 gap-y-8">
                {mylikedSong?.map((song, index) => (
                  <Box
                    key={song._id}
                    onClick={() => handleClick()}
                    className="cursor-pointer"
                  >
                    <img
                      src={song.thumbnail || song.image}
                      className={`w-[200px] object-fill rounded-[10px] cursor-pointer `}
                    />
                    <Box className="truncate font-normal text-[#0c0f12] text-base text-left pt-2 w-[200px]">
                      {song.title || song.name}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
            </>
        )}
      </Box>
    </>
  );
};

export default MyMusic;