import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Banner.css'
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addSongIndex, addSongs, playSong } from "../../redux/songs/songSlice";


const bannerData = [
    {
        id: 1,
        url: "../assets/Banner/size_l_1707299661.webp",
       
    },
    {
        id: 2,
        url: "./assets/Banner/size_l_1657698619.webp",
    },
    {
        id: 3,
        url: "./assets/Banner/size_l_1711025447.webp",
    },
    {
        id: 4,
        url: "./assets/Banner/size_l_1712258431.webp",
    },
    {
         id: 5,
         url: "./assets/Banner/size_l_1712562921.webp",
    },
    {
        id: 6,
        url: "./assets/Banner/size_l_1714578746.webp",
   },
];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        partialVisibilityGutter: 40,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        partialVisibilityGutter: 30,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        partialVisibilityGutter: 20,
    },
};



function Banner  () {
   

    const [changeNavigate, setChangeNavigate] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getUrl = (id) => {

        let url = "";
        if (id === 1) {
            url = `https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"excited"}`;
        }
        if (id === 2) {
            url = `https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"romantic"}`;
        }
        if (id === 3) {
            url = `https://academics.newtonschool.co/api/v1/music/song?sort={"release":1}`;
        }
        if (id === 4) {
            url = `https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"excited"}`;
        }
        if (id === 5) {
            url = `https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"romantic"}`;
        }
        if (id === 6) {
            url = `https://academics.newtonschool.co/api/v1/music/song?sort={"release":1}`;
        }
        
        return url;
    };

    const getData = async (url) => {
        const response = await axios({
            url: url,
            method: "get",
            headers: {
                projectId: "u0kdju5bps0g",
            },
        });
        dispatch(addSongs(response.data.data));
        dispatch(addSongIndex(0));
    };

    const handleClick = (id) => {
        const url = getUrl(id);
        getData(url);
        dispatch(playSong());
        setChangeNavigate(true);
    };


    return (
        <Box className="px-4 pt-8 sm:mt-40 md:mt-0">
            <Carousel 
                centerMode={true}
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} 
                autoPlay={true}
                infinite={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                transitionDuration={500}
                containerClass="carousel-container [&>img]:object-contain "
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px pr-[15px] ">
                {bannerData.map((data) => (
                    <img
                        key={data.id}
                        src={data.url}
                        className="w-[100%]  md:h-[240px] object-fill sm:h-[160px] rounded-[10px] cursor-pointer "
                        onClick={() => handleClick(data.id)}
                    />
                    ))}
            </Carousel>
        </Box>
    );
};

export default Banner;
