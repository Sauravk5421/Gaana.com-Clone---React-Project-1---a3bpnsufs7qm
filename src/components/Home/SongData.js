import { Box } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";
import { useState } from "react";
import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

function SongData({ title }) {
  const [musicData, setMusicData] = useState([]);
  const [albumData, setAlbumData] = useState([]);

  let url = "";

  if (title === "Trending Songs") {
    url = `https://academics.newtonschool.co/api/v1/music/song?sort={"trending":1}`;
  }
  if (title === "New Songs") {
    url = `https://academics.newtonschool.co/api/v1/music/song?sort={"release":1}`;
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
    url = `https://academics.newtonschool.co/api/v1/music/album`;
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
    console.log(data.data);
    setMusicData(data.data);
  };

  useEffect(() => {
    console.log("hh");
    fetchMusicData();
  }, []);

  if (!musicData) {
    return <h1>Loading..</h1>;
  }

  return (
    <>
      <Box className="px-4 md:px-8 xl:px-24 sm:mt-8 mt-4 text-black">
        <Box className="font-medium mb-4 flex justify-between items-center text-[#0c0f12] ">
          <Box className="cursor-pointer text-[24px] font-[500] ">{title}</Box>
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
                component="div"
                onClick={() => handleClick(title, index)}
                className="cursor-pointer "
              >
                <img
                  src={song.thumbnail || song.image}
                  className={`w-[100%] md:h-[192.7px] object-fill sm:h-[180px] rounded-[10px] cursor-pointer ${
                    title === "Artists" && "rounded-[50%] w-[90%] "
                  } `}
                />

                <Box
                  className={`absolute top-0 left-0 md:h-[192.7px] sm:h-[180px] w-[100%] bg-[#00000099] flex flex-col items-center justify-center opacity-0 transition-[opacity] duration-[0.40s] hover:opacity-100 [&>*]:translate-y-[20px] [&>*]:transition-transform [&>*]:duration-[0.50s] [&>*]:hover:translate-y-0 backdrop-blur-[1.5px] pb-[20px] ${
                    title === "Artists" && "rounded-[50%] w-[85%] "
                  } `}
                >
                  <Box className="truncate font-normal text-[#0c0f12] text-base text-center w-[150px] pb-[5px] ">
                    {song.title || song.name}
                  </Box>
                  <PlayArrow className="text-[#ed1c24] bg-white rounded-full p-2 h-[40px] w-[40px] " />
                </Box>

                <Box className=" truncate font-normal text-[#0c0f12] text-base text-left pt-2 ">
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
