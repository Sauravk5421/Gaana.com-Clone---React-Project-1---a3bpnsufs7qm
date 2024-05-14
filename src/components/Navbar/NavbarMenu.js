import { useState } from "react";
import logoImg from "../../assets/Gaana_logo.png";
import LoginModal from "../Login/LoginModal";
// import Modal from '../Login/LoginModal';
import SearchIcon from "@mui/icons-material/Search";
import DoneIcon from "@mui/icons-material/Done";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useTheme } from "../Context/Context";

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';


function NavbarMenu() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);
  const navigate = useNavigate();
  const {theme, toggleTheme} = useTheme();
  

  const handleClose = () => {
    setOpenLogin(false);
  };

  const handleOpen = () => {
    setOpenLogin(true);
  };

  const handleOpenLanguage = () => {
    setOpenLanguage(true);
  };

  const handleCloseLanguage = () => {
    setOpenLanguage(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand px-3" id="navsection">
        <div className="container-fluid">
          <button
            className="toggler text-sm"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-xs"></span>
          </button>

          <a className="navbar-brand" href="#">
            <img src={logoImg} className="logoImg" alt="logo" />
          </a>

          <div className="d-flex search-container" role="search">
            <SearchIcon className="search-icon" />
            <input
              className="search-input rounded-pill"
              type="search"
              placeholder="Search Artists, Songs, Albums"
              aria-label="Search"
            />
          </div>

          <div className="welcomeOffer">
            <button onClick={()=>navigate('/subscription')}>Welcome Offer: 1 Month Trial@ ₹1</button>
          </div>

          <div className="gannaOffer">
            <button onClick={()=>navigate('/subscription')}>Get Gaana Plus</button>
          </div>

          <div class="dropdown">
            <button onClick={handleOpenLanguage} class="lg mr dropbtn">
              <svg width="30" height="22" viewBox="0 0 20 16">
                <g fill="none" fill-rule="evenodd">
                  <g transform="translate(-1108 -117) translate(1089 58) translate(19 15) translate(0 43) translate(.5 1.5)">
                    <rect
                      class="svg_box"
                      width="11"
                      height="11"
                      x="7.591"
                      y="3.5"
                      fill="#FFF"
                      stroke="#8E8E93"
                      rx="5.5"
                    ></rect>
                    <rect
                      class="svg_box"
                      width="11"
                      height="11"
                      x=".5"
                      y=".5"
                      fill="#FFF"
                      stroke="#8E8E93"
                      rx="5.5"
                    ></rect>
                    <text fill="#8E8E93" font-size="7" font-weight="500">
                      <tspan x="3.5" y="9">
                        A
                      </tspan>
                    </text>
                    <text fill="#8E8E93" font-size="5" font-weight="500">
                      <tspan x="12" y="11.5">
                        अ
                      </tspan>
                    </text>
                  </g>
                </g>
              </svg>
            </button>
            {openLanguage && (
              <div id="myDropdown" class="languages">
                <h6 className="">Music Language</h6>
                <div className="scrollBtn">
                  <div class="lan-content">
                    <small>हिन्दी HINDI</small>
                    <DoneIcon />
                  </div>
                  <hr />
                  <div class="lan-content">
                    <small>ENGLISH</small>
                    <DoneIcon />
                  </div>
                  <hr />
                  <div class="lan-content">
                    <small>ਪੰਜਾਬੀ PUNJABI</small>
                    <DoneIcon />
                  </div>
                  <hr />
                  <div class="lan-content">
                    <small>తెలుగు TELUGU</small>
                    <DoneIcon />
                  </div>
                  <hr />
                  <div class="lan-content">
                    <small>தமிழ் TAMIL</small>
                    <DoneIcon />
                  </div>
                  <hr />
                  <div class="lan-content">
                    <small>भोजपुरी BHOJPURI</small>
                    <DoneIcon />
                  </div>
                  <hr />
                  <div class="lan-content">
                    <small>বাংলা BENGALI</small>
                    <DoneIcon />
                  </div>
                  <hr />
                  <div class="lan-content">
                    <small>മലയാളം MALAYALAM</small>
                    <DoneIcon />
                  </div>
                  <hr />
                  <div class="lan-content">
                    <small>ಕನ್ನಡ KANNADA</small>
                    <DoneIcon />
                  </div>
                  <hr />
                  <div class="lan-content">
                    <small>मराठी MARATHI</small>
                    <DoneIcon />
                  </div>
                  <hr />
                  <div class="lan-content">
                    <small>ગુજરાતી GUJARATI</small>
                    <DoneIcon />
                  </div>
                  <hr />
                  <div class="lan-content">
                    <small>हरयाणवी HARYANVI</small>
                    <DoneIcon />
                  </div>
                  <hr />
                  <div class="lan-content">
                    <small>اردو URDU</small>
                    <DoneIcon />
                  </div>
                  <hr />
                  <div class="lan-content">
                    <small>অসমীয়া ASSAMESE</small>
                    <DoneIcon />
                  </div>
                  <hr />
                  <div>
                    <small>राजस्थानी RAJASTHANI</small>
                    <DoneIcon />
                  </div>
                  <hr />
                  <div class="lan-content">
                    <small>ଓଡ଼ିଆ ODIA</small>
                    <DoneIcon />
                  </div>
                  <hr />
                </div>
                <div className="flex justify-evenly mb-2">
                  <button onClick={handleCloseLanguage}>
                    Cancel
                  </button>
                  <button className="bg-[#FF0000] text-white px-8 py-2 rounded-full" onClick={handleCloseLanguage} >
                    Update
                  </button>
                </div>
              </div>
            )}
          </div>

          <label className="toggle-label text-xs">
            <input onClick={toggleTheme}  className="toggle-input text-xs" type="checkbox"/>
            <LightModeOutlinedIcon className="sun"/>
            <DarkModeOutlinedIcon className="moon"/>
            <span className="toggle"></span>
          </label>

          <button className="text-xs log-in" onClick={handleOpen}>
            Log In / Sign Up
          </button>
          <LoginModal isOpen={openLogin} onClose={handleClose}>
            <>
              {/* <button className='z-20' onClick={handleClose}>nkueofbc</button> */}
            </>
          </LoginModal>
        </div>
      </nav>
    </>
  );
}

export default NavbarMenu;
