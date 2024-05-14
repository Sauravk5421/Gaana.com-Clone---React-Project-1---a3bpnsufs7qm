import { Box } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banners/Banners";
import HeaderMenu from "../Navbar/HeaderMenu";
import SongData from "./SongData";
import { useState } from "react";
import { useEffect } from "react";
import Subscription from "../Subscription/Subscription";
import Footer from "../Footer/Footer";
import Player from "../Player/Player";
import MusicDetailPage from "../MusicDetail/MusicDetailPage";

function HomePage() {
  return (
    <Box>
      <Box>
        <Navbar className="z-40 " />
      </Box>
      <Box className="">
        <Banner/>
      </Box>

      <div>
        <Box className="mb-[32px] ">
          <SongData title={"Trending Songs"} />
          <SongData title={"New Songs"} isAlbum={true} />
          <SongData title={"Old Songs"} />
          <SongData title={"Romantic Songs"} />
          <SongData title={"Happy Songs"} />
          <SongData title={"Sad Songs"} />
          <SongData title={"Excited Songs"} />
          <SongData title={"Albums"} />
          <SongData title={"Top Playlist"} />
          <SongData title={"Top Artists"} />
          <SongData title={"Radio"} />
          <SongData title={"Podcast"} />
          <SongData title={"My Music"} />
        </Box>
      </div>

      
      <div>
        <Footer />
      </div>
      <div>
        <Player />
      </div> 
    </Box>
  );
}
export default HomePage;
