import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Typography } from "@mui/material";
import '../MusicDetail/MusicDetailPage.css'

function CurrentSong() {
  return (
    <Box className="p-5">
      <Box className="flex text-white w-[100%] gap-x-4">
        <Box>
          <img className="main-img" src="./assets/images/test_image.png" />
        </Box>
        <Box className="p-2 flex flex-col justify-end content-end">
          <Box>
            <h6>Details of The Song</h6>
            <h3>Song Name</h3>
            <Box className="flex">
            <p>Aditya Music</p>
            <p>Time</p>
            </Box>
            <p>S. Thaman</p>
          </Box>
          <Box className="flex justify-center content-center gap-x-3">
            <button className="bg-[#FF0000] text-xs px-6  py-1 rounded-full text-bold">Play All</button>
            <FavoriteBorderIcon className="p-1 border-1 rounded-full"/>
            <MoreVertIcon className="p-1 border-1 rounded-full"/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CurrentSong;
