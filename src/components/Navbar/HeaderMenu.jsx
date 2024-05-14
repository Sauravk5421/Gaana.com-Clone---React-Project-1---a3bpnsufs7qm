import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import { useTheme } from "../Context/Context";

const HeaderMenu = () => {

    const {theme, toggleTheme} = useTheme();


    const containerStyle = {
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        "&::WebkitScrollbar": {
            display: "none",
        },
    };

    const albumArray = [
        "All",
        "Trending Songs",
        "New Songs",
        "Old Songs",
        "Moods & Genres",
        "Albums",
        "Top Playlist",
        "Top Artists",
        "Radio",
        "Podcast",
        "My Music",
    ];
    const albumId = {
        "All" : "#all",
        "Trending Songs":"trending",
        "New Songs": "#songs",
        "Old Songs": "#oldsongs",
        "Moods & Genres":"#moodsgenres",
        "Albums":"#albums",
        "Top Playlist":"#playlist",
        "Top Artists":"#artist",
        "Radio": "#radio",
        "Podcast":"#podcast",
        "My Music": "#mymusic",
    };


    return (
        <Box className={`bg-[#FFFFFF] bg-[#0c0f12]-top-[1px] h-[72px] w-[100%] ${theme}`}>
            <Box
                style={containerStyle}
                className="pl-[1rem] flex justify-between py-[.75rem] md:pl-[2rem] lg:pt-[1rem] lg:pb-[1rem] xl:pl-[6rem]  "
            >
                <Box className="flex overflow-y-auto gap-4 md:gap-8 lg:gap-6 xl:gap-8 items-center pr-4 lg:min-h-[40px] min-h-[24px] ">
                    
                    {albumArray.map((item, index) => (
                        <Box
                            className={`text-base font-light hover:underline decoration-orange-500 decoration-2 underline-offset-[8px] first-of-type:ml-0  box-border whitespace-pre ${
                                (item === "All") &&
                                ""
                            }`}
                            key={index}
                        >
                            <a href={albumId[item]} className="txt-style text-[#cccccc] text-sm">
                                {item}
                            </a>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default HeaderMenu;
