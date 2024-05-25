import { Box } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banners/Banners";
import HeaderMenu from "../Navbar/HeaderMenu";
import SongData from "./SongData";
import { useState, useEffect } from "react";
import Footer from "../Footer/Footer";


function HomePage() {
  return (
    <Box>      
      <Box>
        <Banner/>
      </Box>

      <div>
        <Box className="mb-[32px] ">
          <SongData title={"Trending Songs"} />
          <SongData title={"New Songs"}/>
          <SongData title={"Old Songs"} />
          <SongData title={"Romantic Songs"} />
          <SongData title={"Happy Songs"} />
          <SongData title={"Sad Songs"} />
          <SongData title={"Excited Songs"} />
          <SongData title={"Albums"} />
          <SongData title={"Top Playlist"} />
          <SongData title={"Top Artists"} />
        </Box>
      </div>

      <div>
        <Footer/>
      </div>
    </Box>
  );
}
export default HomePage;
