import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

const FavoriteButton = ({ userData, currSong }) => {
    const [isLiked, setIsLiked] = useState(false);

    const handleLikedCliked = async () => {            
        const token = userData.token;
        // console.log("token: " + token);
        // console.log("currSong._id: " + currSong._id);
        const response = await axios({
            url: "https://academics.newtonschool.co/api/v1/music/favorites/like",
            method: "patch",
            headers: {
                projectId: "u0kdju5bps0g",
                Authorization: `Bearer ${token}`,
            },
            data: {
                songId: currSong._id,
            },
        });

        if (response.status === 200) {
            setIsLiked((prev) => !prev);
        }
    };

    useEffect(() => {
        async function getFav() {
            const token = userData.token;
            const response = await axios({
                url: "https://academics.newtonschool.co/api/v1/music/favorites/like",
                method: "get",
                headers: {
                    projectId: "u0kdju5bps0g",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response?.data?.data?.songs) {
                response?.data?.data?.songs.map((song) => {
                    if (song._id === currSong._id) {
                        setIsLiked(true);
                    }
                });
            }
        }
        getFav();
    }, []);
    return (
        <>
            <Box className="">
                <button
                    className="border-[#e8e8e8] rounded-full border-[1px] text-[#1b1b1b] h-10 w-10 text-sm "
                    onClick={handleLikedCliked}
                >
                    {/* {console.log("isLiked: " + isLiked)} */}
                    {isLiked ? (
                        <Favorite className="text-[24px] text-[#ed1c24] " />
                    ) : (
                        <FavoriteBorder className="text-[24px] text-[#1b1b1b] " />
                    )}
                </button>
            </Box>
        </>
    );
};

export default FavoriteButton;
