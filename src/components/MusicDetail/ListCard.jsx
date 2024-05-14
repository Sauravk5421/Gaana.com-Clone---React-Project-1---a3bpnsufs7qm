import { Box } from "@mui/material";
import SongData from "../Home/SongData";
function ListCard({song}) {
  console.log(song);
  // console.log(song.artist[0].name);
  // console.log(song.thumbnail);
  return (
    <>
      <Box className=" grid grid-flow-col justify-stretch">
        <Box className="flex">
          <Box>
            <img className="player-img" src={song.thumbnail} />
          </Box>
          <Box>
            <p className="m-0">
              <span className="bg-[#FF0000] text-xs p-1 rounded-full text-bold">
                Premium
              </span>
              {song.title}
            </p>
            <p className="text-xs m-0">{song.title}</p>
          </Box>
        </Box>
        <Box>
          {song.artist.map((art)=>(
            <p>{art.name}</p>
          ))}
        </Box>
        <Box>
          <p>16:10</p>
        </Box>
       
      </Box>
      <hr className="text-white" />
    </>
  );
}

export default ListCard;
