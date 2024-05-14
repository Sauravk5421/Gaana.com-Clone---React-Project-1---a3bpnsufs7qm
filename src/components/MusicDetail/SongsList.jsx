import { Box } from "@mui/material";
import React, {useState, useEffect } from "react";
import ListCard from "./ListCard";

function SongList() {

  const [playData, setPlayData] = useState([]);

  // console.log(window.location.pathname);
  let url="";
  if (window.location.pathname === "/trending") {
    url = `https://academics.newtonschool.co/api/v1/music/song?sort={"trending":1}`;
  }
  // if (title === "New Songs") {
  //   url = `https://academics.newtonschool.co/api/v1/music/song?sort={"release":1}`;
  // }
  // if (title === "Old Songs") {
  //   url = `https://academics.newtonschool.co/api/v1/music/song?sort={"release":1}`;
  // }
  // if (title === "Romantic Songs") {
  //   url = `https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"romantic"}&limit=100`;
  // }
  // if (title === "Happy Songs") {
  //   url = `https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"happy"}&limit=100`;
  // }
  // if (title === "Sad Songs") {
  //   url = `https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"sad"}&limit=100`;
  // }
  // if (title === "Excited Songs") {
  //   url = `https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"excited"}&limit=100`;
  // }
  // if (title === "Albums") {
  //   url = `https://academics.newtonschool.co/api/v1/music/album`;
  // }
  // if (title === "Top Playlist") {
  //   url = `https://academics.newtonschool.co/api/v1/music/song?sort={"release":1}`;
  // }
  // if (title === "Top Artists") {
  //   url = `https://academics.newtonschool.co/api/v1/music/artist`;
  // }

  const fetchPlayData = async () => {
    const URL = url;
    const headers = { projectId: "u0kdju5bps0g" };
    const response = await fetch(URL, { headers });
    const data = await response.json();
    console.log(data.data);
    setPlayData(data.data);
  };

  useEffect(() => {
    console.log("hh");
    fetchPlayData();
  }, []);
  
  return (
    <Box className="p-5 w-[80%]">
      <Box className="">
        <Box className="flex justify-around">
            <h4 className="">Track</h4>
            <h4 className="">Artists</h4>
            <h4 className="mr-5"> Duration</h4>
        </Box>
      </Box>
      <hr/>
      {playData.map((song)=>(
        <ListCard song={song}/>
      ))}
    </Box>
  );
}

export default SongList;
