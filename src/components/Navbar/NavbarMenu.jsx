import React, { useEffect, useState } from "react";
import {
  Box,
  List,
  ListItem,
} from "@mui/material";
import "./Navbar.css";
import {
  LibraryMusic,
  Login,
  Logout,
  Menu,
  Search,
  Upgrade,
} from "@mui/icons-material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginModal from "../Login/LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, userSelector } from "../../redux/users/userSlice";
import {
  isSubscriptionPageSelector,
  setIsSubscriptionPage,
} from "../../redux/subscription/subscriptionSlice";
import { addSongIndex, addSongs, playSong } from "../../redux/songs/songSlice";
import axios from "axios";
import logoImg from "../../assets/Gaana_logo.png";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import DoneIcon from "@mui/icons-material/Done";
import { useTheme } from "../Context/Context";


function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [isUpdatePassword, setIsUpdatePassword] = useState(false);
  const [loginpage, setLoginPage] = useState(false);
  const [isNavigate, setIsNavigate] = useState(false);

  const [searchText, setSearchText] = useState(false);
  const [searchData, setSearchData] = useState("");

  const [openLanguage, setOpenLanguage] = useState(false);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const dispatch = useDispatch();
  const userData = useSelector(userSelector);
  const user = userData ? userData.data : null;
  const isSubscriptionPage = useSelector(isSubscriptionPageSelector);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/subscription") {
      dispatch(setIsSubscriptionPage(true));
    } else if (isSubscriptionPage) {
      dispatch(setIsSubscriptionPage(false));
    }
  }, [location.pathname]);

  const handleModal = () => {
    if (openModal && isUpdatePassword) {
      setIsUpdatePassword(false);
    }
    setOpenModal((prev) => !prev);
  };

  const handleDrawerToggle = () => {
    // console.log(mobileOpen);
    setMobileOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    dispatch(deleteUser());
  };

  const handleOpenLanguage = () => {
    setOpenLanguage(true);
  };

  const handleCloseLanguage = () => {
    setOpenLanguage(false);
  };

  
  const onChangeSearchText = async (event) => {
    let url = `https://academics.newtonschool.co/api/v1/music/song?search={"title":%22${event.target.value}%22}`;
    const projectId = "u0kdju5bps0g";
    // console.log(url);
    console.log(event.target.value)
    try {
        const response = await axios({
            url: url,
            method: "get",
            headers: {
                projectId: projectId,
            },
        });
        console.log(response.status)
        if (response.status === 200) {
            dispatch(addSongs(await response.data.data));
            dispatch(addSongIndex(0));
            dispatch(playSong());
            // event.target.value = "";
            // setIsNavigate(true);
            navigate("/player");
        }
    } catch (error) {
        setSearchText(true);
        // console.log("searchText setting true");
    }
    if (event.target.value === "") {
        // console.log("searchText setting false");
        setSearchText(false);
    }
};


  return (
    <>
      <Box className={isSubscriptionPage ? "hidden" : "flex"}>
        <nav className="navbar navbar-expand flex-col px-3" id="navsection">
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

            <Link to={"/"} className="navbar-brand" href="#">
              <img src={logoImg} className="logoImg" alt="logo" />
            </Link>

            <div className="d-flex search-container hidden md:block" role="search">
              <SearchIcon className="hidden md:block search-icon" />
              <input
                className="hidden md:block search-input rounded-pill w-full"
                type="search"
                placeholder="Search Artists, Songs, Albums"
                aria-label="Search"
                onChange={async (event) => {
                  await onChangeSearchText(event);
                }}
              />

              {/* {console.log("searchText: " + searchText)} */}
              {searchText && (
                <>
                  <List className="md:block absolute bg-[#1b1a1a] text-[#ffffff] mt-[55px]">
                    {/* No Songs found. Give full title. */}
                    <ListItem>No Songs found. Give full title.</ListItem>
                  </List>
                </>
              )}
            </div>



            <div className="welcomeOffer hidden md:block">
              <button
                onClick={() => {
                  user ? navigate("/subscription") : handleModal();
                }}
              >
                Welcome Offer: 1 Month Trial@ ₹1
              </button>
            </div>

            <div className="gannaOffer hidden md:block">
              <button
                onClick={() => {
                  user ? navigate("/subscription") : handleModal();
                }}
              >
                Get Gaana Plus
              </button>
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
                    <button onClick={handleCloseLanguage}>Cancel</button>
                    <button
                      className="bg-[#FF0000] text-white px-8 py-2 rounded-full"
                      onClick={handleCloseLanguage}
                    >
                      Update
                    </button>
                  </div>
                </div>
              )}
            </div>

            <label className="toggle-label theme-icon">
              <input
                onClick={toggleTheme}
                className="toggle-input "
                type="checkbox"
              />
              <LightModeOutlinedIcon className="sun hidden min-[800px]:block" />
              <DarkModeOutlinedIcon className="moon hidden min-[800px]:block" />
              <span className="toggle "></span>
            </label>

            {user ? null : (
              <span
                className="hover:opacity-60 cursor-pointer flex hidden min-[800px]:block"
                onClick={() => !user && handleModal()}
              >
                <div onClick={()=>{setLoginPage(false);}} className="text-xs ml-2 font-light">
                  Log In / Sign Up
                </div>
              </span>
            )}

            <div
              className={` block ${user ? "" : "hidden"} h-full text-white`}
              onClick={() => handleDrawerToggle()}
            >
              <div
                className="relative h-full flex items-center"
                data-headlessui-state=""
              >
                <button
                  className="ml-[1.375rem]"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
                  id=""
                >
                  <span className="w-6 h-6">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M2.90625 20.2508C3.82775 18.6544 5.15328 17.3287 6.74958 16.407C8.34588 15.4853 10.1567 15 12 15C13.8433 15 15.6541 15.4853 17.2504 16.407C18.8467 17.3287 20.1722 18.6544 21.0938 20.2508"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </button>
              </div>
            </div>
            <Box
              className={` border-[#e8eaed] z-30 absolute top-full mt-2 w-64 h-fit bg-[#1c1b1b] -bottom-[152px] right-0 pt-5 rounded-xl stroke-2 -mr-5 shadow-popover transform opacity-100 scale-100 ${
                !user && "lg:hidden"
              } ${mobileOpen ? "block" : "hidden"} `}
            >
              {/* User Profile */}
              {user && (
                <Box className="flex flex-col px-4">
                  <Box className="flex items-center gap-3 hover:opacity-60">
                    <span className="hover:opacity-60 cursor-auto flex ">
                      <span className="text-[#fdfdfd] ">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M2.90625 20.2508C3.82775 18.6544 5.15328 17.3287 6.74958 16.407C8.34588 15.4853 10.1567 15 12 15C13.8433 15 15.6541 15.4853 17.2504 16.407C18.8467 17.3287 20.1722 18.6544 21.0938 20.2508"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </span>
                      </span>
                      <div className=" ml-2 font-light text-[#fdfdfd] ">
                        Profile
                      </div>
                    </span>
                  </Box>
                </Box>
              )}

              {user && (
                <Box
                  className="flex flex-col px-4 mt-8 "
                  onClick={() => {
                    handleDrawerToggle();
                  }}
                >
                  <Box
                    onClick={() => {
                      setIsUpdatePassword(true);
                      handleModal();
                      setLoginPage(true);
                    }}
                    className="flex items-center gap-3 hover:opacity-60"
                  >
                    <div className="hover:opacity-60 cursor-pointer flex ">
                      <Upgrade className="text-[#fdfdfd] text-[24px] " />
                      Update Password
                    </div>
                  </Box>

                  {/* My Music */}
                  <Link to="/my-music">
                    <div
                      className={`items-center gap-3 hover:opacity-60 cursor-pointer m-5 px-4 `}
                      onClick={() => !user && handleModal()}
                    >
                      <div className="font-light text-[#fdfdfd] opacity-80 ">
                        <LibraryMusic className="h-[24px] w-[24px] " />
                        My Music
                      </div>
                    </div>
                  </Link>

                  <Box
                    className="flex items-center gap-3 hover:opacity-60 cursor-pointer mb-5 px-4  "
                    onClick={handleLogout}
                  >
                    <Logout />
                    <span className="font-light opacity-80 text-[#fdfdfd]">
                      Sign Out
                    </span>
                  </Box>
                </Box>
              )}
            </Box>
          </div>
          
          <div className="d-flex search-container md:hidden" role="search">
              <SearchIcon className="md:hidden search-icon" />
              <input
                className="md:hidden search-input rounded-pill"
                type="search"
                placeholder="Search Artists, Songs, Albums"
                aria-label="Search"
                onChange={async (event) => {
                  await onChangeSearchText(event);
                }}
              />              
            </div>

        </nav>
        
      
      {openModal && (
        <LoginModal
          open={openModal}
          handleModal={handleModal}
          isUpdatePassword={isUpdatePassword}
          setIsUpdatePassword={setIsUpdatePassword}
          loginpage = {loginpage}
          setLoginPage = {setLoginPage}
          
        />
      )}
      </Box>
    </>
  );
}

export default Navbar;
