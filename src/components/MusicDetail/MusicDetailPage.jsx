import { Box } from "@mui/material";
import React, { useEffect } from "react";

import CurrentSong from "./CurrentSong";
import SongList from "./SongsList";
import Navbar from "../Navbar/Navbar";
import Player from "../Player/Player";

const MusicDetailPage = () => {

    return (
        <>
             <Box className="mt-[100px] text-white min-h-[60vh] bg-[#222428] w-[100%]">
                <Navbar/>
                <CurrentSong/>
                <SongList/>
                <Player/>
                </Box>
        </>
    );
};

export default MusicDetailPage;
