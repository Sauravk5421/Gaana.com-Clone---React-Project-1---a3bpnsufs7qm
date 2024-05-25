import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
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
import { useTheme } from "../Context/Context";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1000, min: 900 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 3,
  },
};

function SongData({ title, isAlbum = false}) {

  const {theme, toggleTheme} = useTheme();

  const [musicData, setMusicData] = useState([]);
  const [songIndex, setSongIndex] = useState(0);
  const [changeNavigate, setChangeNavigate] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let url = "";

  if (title === "Trending Songs" ) {
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
  if (title === "Top Playlist") {
    url = `https://academics.newtonschool.co/api/v1/music/song?sort={"release":1}`;
  }
  if (title === "Top Artists") {
    url = `https://academics.newtonschool.co/api/v1/music/artist`;
  }


  const fetchMusicData = async () => {
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




useEffect(() => {
    fetchMusicData();
}, []);


const handleClick = async (title, index) => {
  console.log(musicData);
  if (isAlbum) {
      const artists = musicData[index].artists;
      dispatch(addAlbumArtists(artists));
      // console.log(artist);
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
        console.log(isAlbum,"album artist")
          // console.log(`data: `);
          // console.log(data[index]);
          dispatch(deleteSongs());
          musicData[index].songs.map(async (id, index) => {
              const headers = { projectId: "u0kdju5bps0g" };
              const response = await fetch(`https://academics.newtonschool.co/api/v1/music/song/${id}`, { headers });
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
          console.log(isAlbum,"album 3")
          dispatch(deleteAlbumArtists());
          dispatch(addSongs(musicData));
          dispatch(addSongIndex(index));
          dispatch(playSong());
          navigate("/player");
      }
  }
};

    const headerId = {
        // "New Releases": "all",
        "Romantic Songs": "album",
        "Top Charts": "new",
        "Sad Songs": "artist",
    };

useEffect(() => {
  (async () => {
    const headers = { projectId: "u0kdju5bps0g" };
      const response = await fetch(url, { headers });
      const data = await response.json();
              // console.log(data.data);
      // return (await data).data.data;
      setMusicData(data.data);
  })();
}, []);


if (!musicData) {
  return <h1>Loading..</h1>;
}

return (
    <>
      <Box className="px-4 md:px-8 xl:px-24 sm:mt-8 mt-4">
        <Box className="font-medium mb-4 flex justify-between items-center text-[#0c0f12] ">
          <Box className="cursor-pointer text-[24px] font-[500] song-data">{title}</Box>
        </Box>
        <Box>
          <Carousel
            // centerMode={true}
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="carousel-container [&>img]:object-contain "
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px pr-[15px] "
          >
            {musicData?.map((song, index) => (
              <Box
                key={song._id}
                onClick={() => handleClick(title, index)}
                className="cursor-pointer"
              >
                <img
                  src={song.thumbnail || song.image}
                  className={`w-[100%] md:h-[70%] object-fill sm:h-[180px] rounded-[10px] cursor-pointer ${
                    title === "Artists" && "rounded-[50%] w-[90%] "
                  } `}
                />

                <Box className=" truncate font-normal text-[#0c0f12] text-base text-left pt-2  song-data">
                  {song.title || song.name}
                </Box>
              </Box>
            ))}
          </Carousel>
        </Box>
      </Box>
    </>
  );
}

export default SongData;
