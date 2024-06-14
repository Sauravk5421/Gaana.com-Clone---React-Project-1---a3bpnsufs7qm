import { useTheme } from "../Context/Context";
import { useState } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LoginModal from "../Login/LoginModal";
import { useSelector } from "react-redux";
import { deleteUser, userSelector } from "../../redux/users/userSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

function NavbarLeftComponent() {
  const [openModal, setOpenModal] = useState(false);
  const [loginpage, setLoginPage] = useState(false);
  const [isUpdatePassword, setIsUpdatePassword] = useState(false);
  const userData = useSelector(userSelector);
  const user = userData ? userData.data : null;


  const handleModal = () => {
    setOpenModal((prev) => !prev);
  };

  const handleLogout = () => {
    dispatch(deleteUser());
  };

  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <>
      <div
        class="offcanvas offcanvas-start themeToogle"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h3 class="flex offcanvas-title pt-3" id="offcanvasNavbarLabel">
            {user ? (
              <div className="flex flex-col px-4">
                <div className="flex items-center gap-3 hover:opacity-60">
                  <span className="hover:opacity-60 cursor-auto flex ">
                    <span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
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
                    <div className="text-sm ml-2 ">
                      Profile
                    </div>
                  </span>
                </div>
              </div>
            ) : (
              <span
                className="hover:opacity-60 cursor-pointer hidden min-[800px]:block"
                onClick={() => !user && handleModal()}
              >
                <div
                  onClick={() => {
                    setLoginPage(false);
                  }}
                  className=" cursor-pointe text-xs ml-2 font-light"
                >
                  <AccountCircleOutlinedIcon /> Log In / Sign Up
                </div>
              </span>
            )}
            {/* <AccountCircleOutlinedIcon />
            <p className="r text-sm text-center ml-3 ">Login/Sign Up</p> */}
          </h3>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end">
            <li class="nav-item">
              <Link to={"/"} class="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link">Radio</Link>
            </li>
            <li class="nav-item">
              <Link to="/my-music" class="nav-link">
                My Music
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" href="#">
                Language
                <p>(Set Music language)</p>
              </Link>
            </li>

            <li class="nav-item flex justify-between">
              <Link class="nav-link " href="#">
                Night Mode
              </Link>
              <label class="switch">
                <input onChange={toggleTheme} type="checkbox" />
                <span class="slider round"></span>
              </label>
            </li>

            <hr className="w-[100%]" />

            <li class="nav-item">
              <Box>
                <h4 className="font-bold"> Go Premium</h4>
              </Box>
            </li>

            <li class="nav-item">
              <Link to="/subscription" class="nav-link">
                {user ? (<div> Get Gaana Plus </div>) : (
                  <span
                    className="hover:opacity-60 cursor-pointer flex hidden min-[800px]:block"
                    onClick={() => !user && handleModal()}
                  >
                    <div
                      onClick={() => {
                        setLoginPage(false);
                      }}
                      className=" cursor-pointe text-xs ml-2 font-light"
                    >
                      Get Gaana Plus
                    </div>
                  </span>
                )}
              </Link>
            </li>

            <li class="nav-item">
              <Link to="/subscription" class="nav-link">
                {user ? (<div><span className="bg-[#AA0000] text-white rounded-md p-1 text-xs font-bold">
                        Welcome Offer
                      </span>{" "}
                      1 Month Trail @ Just ₹1 </div>) : (
                  <span
                    className="hover:opacity-60 cursor-pointer flex hidden min-[800px]:block"
                    onClick={() => !user && handleModal()}
                  >
                    <div
                      onClick={() => {
                        setLoginPage(false);
                      }}
                      className=" cursor-pointe text-xs ml-2 font-light"
                    >
                      <span className="bg-[#AA0000] text-white rounded-md p-1 text-xs font-bold">
                        Welcome Offer
                      </span>{" "}
                      1 Month Trail @ Just ₹1
                    </div>
                  </span>
                )}
              </Link>
            </li>

            <hr />

            <li class="nav-item">
              <h4 className="font-bold"> Quick Access</h4>
            </li>

            <li class="nav-item">
              <Link class="nav-link" href="#trending">
                Trending Songs
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" href="#">
                New Songs
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" href="#">
                Old Songs
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" href="#">
                Albums
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" href="#">
                Artist
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" href="#">
                Lyrics
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" href="#">
                Music Labels
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" href="#">
                Generes
              </Link>
            </li>
          </ul>
          {openModal && (
          <LoginModal
            open={openModal}
            handleModal={handleModal}
            isUpdatePassword={isUpdatePassword}
            setIsUpdatePassword={setIsUpdatePassword}
            loginpage={loginpage}
            setLoginPage={setLoginPage}
          />
        )}
        </div>
       
      </div>
    </>
  );
}

export default NavbarLeftComponent;
