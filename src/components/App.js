import { useEffect, useState } from "react";
import HomePage from "./Home/HomePage";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route, Link, HashRouter } from 'react-router-dom';
import Subscription from "./Subscription/Subscription";
import { ThemeProvider } from "./Context/Context";
import PlayerPage from "../components/MusicPlayer/PlayerPage";
import { useDispatch, useSelector } from "react-redux";
import {jwtDecode} from "jwt-decode";
import { isSubscriptionPageSelector } from "../redux/subscription/subscriptionSlice";
import {
    addAlbumArtists,
    addSongIndex,
    addSongs,
    setLikedSongs,
    songSelector,
} from "../redux/songs/songSlice";
import MyMusic from "./MyMusic/MyMusic";
// import { jwtDecode } from "jwt-decode";
import { createUser } from "../redux/users/userSlice";
import { Box,Typography, createTheme } from "@mui/material";
import PlayMusic from "./PlayMusic/PlayMusic";

function App() {
  const songs = useSelector(songSelector);
  const dispatch = useDispatch();
  console.log(localStorage.getItem("user"),"usedata")

  const isSubscriptionPage = useSelector(isSubscriptionPageSelector);

  useEffect(() => {
  
    if (localStorage.getItem("user")) {
      const userData = JSON.parse(localStorage.getItem("user"));
     
      const decodedToken = jwtDecode(userData.token);
      const expirationTime = decodedToken.exp;

      const currentTimestamp = Math.floor(Date.now() / 1000); // Convert to seconds

      if (expirationTime < currentTimestamp) {
          console.log("Token has expired");
          localStorage.removeItem("user");
      } else {
          dispatch(createUser(userData));
          // dispatch(createUser(JSON.parse(localStorage.getItem("user"))));
      }
  }


}, []);



  return (
   
    
   <ThemeProvider>
     <Router>
     
     <Navbar />
     {!isSubscriptionPage && <Box></Box>}
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/player' element = {<PlayerPage/>}></Route>
        <Route path="/my-music" element={<MyMusic/>} />
        <Route path='/subscription' element = {<Subscription/>}></Route>
      </Routes>
      
      {songs?.length > 0 && <PlayMusic />}
                   
                    {/* <Footer /> */}
    </Router>
   </ThemeProvider>
    
  );
}

export default App;
