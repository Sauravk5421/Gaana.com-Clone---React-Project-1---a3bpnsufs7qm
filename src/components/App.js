import HomePage from "./Home/HomePage";
import MusicDetailPage from "./MusicDetail/MusicDetailPage";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Subscription from "./Subscription/Subscription";
import Player from "./Player/Player";
import Banner from "./Banners/Banners";
import { ThemeProvider } from "./Context/Context";

function App() {
  return (

    
   <ThemeProvider>
     <Router>
    
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/player' element = {<Player/>}></Route>
        <Route path='/my-music' element = {<MusicDetailPage/>}></Route>
        <Route path='/subscription' element = {<Subscription/>}></Route>
        <Route path='/trending' element = {<MusicDetailPage/>}></Route>
      </Routes>
    </Router>
   </ThemeProvider>
    
  );
}

export default App;
