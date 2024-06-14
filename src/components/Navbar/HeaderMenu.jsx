import { Box } from "@mui/material";
import React from "react";
import "./Navbar.css";
import { useTheme } from "../Context/Context";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../redux/users/userSlice";
import LoginModal from "../Login/LoginModal";

import {
  isSubscriptionPageSelector,
  setIsSubscriptionPage,
} from "../../redux/subscription/subscriptionSlice";
import {
  addAlbumArtists,
  addSongIndex,
  addSongs,
  albumArtistsSelector,
  deleteAlbumArtists,
  deleteSongs,
  playSong,
  updateSongs,
} from "../../redux/songs/songSlice";

function HeaderMenu() {
  const { theme, toggleTheme } = useTheme();
  const userData = useSelector(userSelector);
  const user = userData ? userData.data : null;

  const containerStyle = {
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    "&::WebkitScrollbar": {
      display: "none",
    },
  };

  const albumArray = [
    "Trending Songs",
    "New Songs",
    "Romantic Songs",
    "Happy Songs",
    "Sad Songs",
    "Excited Songs",
    "Albums",
  ];

  //   const albumId = {
  //     "Trending Songs": "#trending",
  //     "New Songs": "#songs",
  //     "Romantic Songs": "#romanticsongs",
  //     "Happy Songs": "#happysongs",
  //     "Sad Songs":"sadsongs",
  //     "Excited Songs":"excitedsongs",
  //     "Albums": "#albums",
  //   };

  const [musicData, setMusicData] = useState([]);
  const [songIndex, setSongIndex] = useState(0);
  const [changeNavigate, setChangeNavigate] = useState(false);
  const isSubscriptionPage = useSelector(isSubscriptionPageSelector);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);
  const [loginpage, setLoginPage] = useState(false);

  const handleModal = () => {
    setOpenModal((prev) => !prev);
  };

  const handleLogout = () => {
    dispatch(deleteUser());
  };

  const fetchMusicData = async (url) => {
    const URL = url;
    const headers = { projectId: "u0kdju5bps0g" };
    const response = await fetch(URL, { headers });
    const data = await response.json();
    setMusicData(data.data);
  };

  useEffect(() => {
    if (changeNavigate) {
      navigate("/player", {
        state: {
          isArtist: true,
          artists: musicData[songIndex],
        },
      });
    }
  }, [changeNavigate]);

  const handleClick = async (title, index) => {
    let isAlbum = false;
    let url = "";
    index = 0;
    console.log(title, "title");
    if (title === "Trending Songs") {
      url = `https://academics.newtonschool.co/api/v1/music/song?sort={"trending":1}&limit=100`;
    }
    if (title === "New Songs") {
      url = `https://academics.newtonschool.co/api/v1/music/song?sort={"release":1}&limit=100`;
    }
    if (title === "Old Songs") {
      url = `https://academics.newtonschool.co/api/v1/music/song?sort={"release":1}`;
    }
    if (title === "Romantic Songs") {
      url = `https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"romantic"}&limit=100`;
    }
    if (title === "Happy Songs") {
      url = `https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"happy"}&limit=100`;
    }
    if (title === "Sad Songs") {
      url = `https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"sad"}&limit=100`;
    }
    if (title === "Excited Songs") {
      url = `https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"excited"}&limit=100`;
    }
    if (title === "Albums") {
      url = `https://academics.newtonschool.co/api/v1/music/song?sort={"trending":1}&limit=100`;
    }
    if (title === "Top Artists") {
      url = `https://academics.newtonschool.co/api/v1/music/artist`;
    }

    // console.log(url)
    fetchMusicData(url);
    if (isAlbum) {
      const artists = musicData[index].artists;
      dispatch(addAlbumArtists(artists));
      dispatch(addSongs(musicData[index].songs));
      dispatch(addSongIndex(0));
      dispatch(playSong());
      navigate("/player", {
        state: {
          isAlbum,
          artists: [...artists],
          albumData: musicData[index],
        },
      });
    } else {
      if (title === "Top Artists") {
        dispatch(deleteSongs());
        musicData[index].songs.map(async (id, index) => {
          const headers = { projectId: "u0kdju5bps0g" };
          const response = await fetch(
            `https://academics.newtonschool.co/api/v1/music/song/${id}`,
            { headers }
          );
          const data = await response.json();
          // console.log(data.data,"ddddd");
          setMusicData(data.data);
          // console.log(await response.data.data);
          dispatch(updateSongs(data.data));
        });
        dispatch(deleteAlbumArtists());
        dispatch(addSongIndex(0));
        setSongIndex(index);
        setChangeNavigate(true);
      } else {
        // console.log(`data: `);
        // console.log(data);
        console.log(isAlbum, "album 3");
        dispatch(deleteAlbumArtists());
        dispatch(addSongs(musicData));
        dispatch(addSongIndex(index));
        dispatch(playSong());
        navigate("/player");
      }
    }
  };

  return (
    <Box className={isSubscriptionPage ? "hidden" : "flex"}>
      <Box className={`bg-[#ffffff] h-[70px] w-[100%] themeToogle`}>
        <Box
          style={containerStyle}
          className="pl-[1rem] flex justify-between py-[.75rem] md:pl-[2rem] lg:pt-[1rem] lg:pb-[1rem] xl:pl-[6rem]  "
        >
          <Box className="pb-3 flex overflow-y-auto gap-4 md:gap-8 lg:gap-6 xl:gap-8 items-center pr-4 lg:min-h-[40px] min-h-[24px] ">
            <Box
              className="text-xs cursor-pointer font-light hover:underline decoration-orange-500 decoration-2 underline-offset-[8px] first-of-type:ml-0  box-border whitespace-pre"
              onClick={() => navigate("/")}
            >
              All
            </Box>
            {albumArray.map((title, index) => (
              <Box
                className={`cursor-pointer text-base font-light hover:underline decoration-orange-500 decoration-2 underline-offset-[8px] first-of-type:ml-0  box-border whitespace-pre ${
                  title === "All" ? "underline" : ""
                }`}
                key={index}
              >
                {
                  <Box
                    onClick={() => handleClick(title, index)}
                    className="txt-style text-[#cccccc] text-xs"
                  >
                    {title}
                  </Box>
                }
              </Box>
            ))}
            <Box
              className="text-xs cursor-pointer font-light hover:underline decoration-orange-500 decoration-2 underline-offset-[8px] first-of-type:ml-0  box-border whitespace-pre"
              onClick={() => {
                user && navigate("/my-music");
                {
                  !user && handleModal();
                }
              }}
            >
              My Music
            </Box>

            {openModal && (
              <LoginModal
                open={openModal}
                handleModal={handleModal}
                loginpage={loginpage}
                setLoginPage={setLoginPage}
              />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HeaderMenu;
