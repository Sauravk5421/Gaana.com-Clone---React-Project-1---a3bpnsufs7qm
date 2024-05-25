import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import {
  LibraryMusic,
  Login,
  Logout,
  Menu,
  Payment,
  Search,
  Upgrade,
} from "@mui/icons-material";
import "../Subscription/Subscription.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, userSelector } from "../../redux/users/userSlice";
import LoginModal from "../Login/LoginModal";
import { currentPlanSelector } from "../../redux/subscription/subscriptionSlice";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Footer from "../Footer/Footer";

function Subscription() {
  const [openModal, setOpenModal] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginpage, setLoginPage] = useState(false);
  const dispatch = useDispatch();


  const userData = useSelector(userSelector);
  const [paymentDetails, setPaymentDetails] = useState({
    validity: "Yearly",
    amount: 299,
  });
  const [isProceedPayment, setIsProceedPayment] = useState(false);
  const currentPlan = useSelector(currentPlanSelector);
  const user = userData ? userData.data : null;
  const navigate = useNavigate();

  const handleModal = () => {
    setOpenModal((prev) => !prev);
  };

  const handleDrawerToggle = () => {
    // console.log(mobileOpen);
    setMobileOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    dispatch(deleteUser());
  };

  const handleSubscribe = () => {
    setIsProceedPayment(true);
  };

  const handleSubscriptionPlan = (validity, amount) => {
    setPaymentDetails({
      validity,
      amount,
    });
  };

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  return (
    <Box className="bg-[#1b1b1b]">
      <Box className="flex justify-around text-[#FF0000] py-4 ">
        <Link to={'/'} ><img className="subsImage" src="./assets/logo/Gaana_logo.png" /></Link>
        {/* <button>Log In / Sign Up</button> */}
        {user ? null : (
          <span
            className="hover:opacity-60 cursor-pointer flex hidden min-[800px]:block"
            onClick={() => !user && handleModal()}
          >
            <div
              onClick={() => {
                setLoginPage(false);
              }}
              className="text-xs ml-2 font-light"
            >
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
              <span className="w-6 h-6 text-white">
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
          className={` border-[#e8eaed] absolute z-30 top-[30%] mt-2 w-64 h-fit bg-[#1c1b1b] right-0 pt-5 rounded-xl stroke-2 -mr-5 shadow-popover transform opacity-100 scale-100 ${
            !user && "lg:hidden"
          } ${mobileOpen ? "block" : "hidden"} `}
        >
          {user && (
            <Box
              className="flex flex-col px-4"
              onClick={() => {
                handleDrawerToggle();
              }}
            >
              <Box
                className="flex items-center gap-3 hover:opacity-60 cursor-pointer mb-5 px-4  "
                onClick={handleLogout}
              >
                <Logout />
                <span className="font-light opacity-80 text-[#fdfdfd]">
                  Log Out
                </span>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
      <Box className="px-[20%]">
        <Box className="text-white text-center p-5">
          <h4>
            Get <span className="text-[#FF0000]">Gaana Plus</span> to listen
            ad-free, offline, high quality music & much more!
          </h4>
        </Box>

        <Box className="text-white flex justify-center content-center gap-x-6 text-center text-xs ">
          <Box>
            <img className="icon-img" src="./assets/icons/icon1.svg" />
            <p className="pt-2">Ads-Free Music</p>
          </Box>
          <Box>
            <img className="icon-img" src="./assets/icons/icon2.svg" />
            <p className="pt-2">Listen Offline</p>
          </Box>
          <Box>
            <img className="icon-img" src="./assets/icons/icon3.svg" />
            <p className="pt-2">HD Quality</p>
          </Box>

          <Box>
            <img className="icon-img" src="./assets/icons/icon4.svg" />
            <p className="pt-2">Android Auto App</p>
          </Box>
          <Box>
            <img className="icon-img" src="./assets/icons/icon5.svg" />
            <p className="pt-2">Unlimited Skips</p>
          </Box>
        </Box>

        <Box className="text-white mt-4">
          <Box className="px-[7.5px] items-center">
            <Box
              className={`mr-[24px]`}
              onClick={() => handleSubscriptionPlan("Yearly", 399)}
            >
              <Box
                className={` rounded-md plans-cards ${
                  paymentDetails.amount === 399
                    ? "selected-cards"
                    : "not-selected-cards"
                } `}
              >
                <Box className="p-3 mb-3 flex justify-between rounded-md">
                  <h5>1 Month Gaana Plus</h5>
                  <h5>₹ 99</h5>
                  <CheckCircleIcon />
                </Box>
              </Box>
            </Box>

            <Box
              className={`mr-[24px]`}
              onClick={() => handleSubscriptionPlan("3 Months", 129)}
            >
              <Box
                className={`rounded-md plans-cards ${
                  paymentDetails.amount === 129
                    ? "selected-cards"
                    : "not-selected-cards"
                } `}
              >
                <Box className="p-3 mb-3 flex justify-between rounded-md">
                  <h5>1 Year Gaana Plus</h5>
                  <h5>₹ 299</h5>
                  <CheckCircleIcon />
                </Box>
              </Box>
            </Box>

            <Box
              className={`mr-[24px]`}
              onClick={() => handleSubscriptionPlan("Monthly", 49)}
            >
              <Box
                className={`rounded-md plans-cards ${
                  paymentDetails.amount === 49
                    ? "selected-cards"
                    : "not-selected-cards"
                } `}
              >
                <Box className="mb-3 p-3 flex justify-between rounded-md">
                  <h5>
                    1 Month Gaana Plus Trial <span className="text-xs bg-[#028A0F] p-1 rounded-full">Best Value</span>
                  </h5>
                  <h5>₹ 1</h5>
                  <CheckCircleIcon />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="flex flex-col py-4 text-white">
          <button onClick={handleSubscribe} className=" m-auto rounded-full py-2 bg-[#FF0000]  px-8">
            {user ? "Subscribe" : "Login to Subscribe"}
          </button>
          <p className="m-auto py-2">
            Cancel anytime! Check FAQ'S for more info.
          </p>
        </Box>
      </Box>
      <Box className="mx-[15%] text-white shadow-xl rounded-lg">
        <Box className="">
          <Box className="flex flex-col pb-2">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              FAQ
            </h2>
          </Box>
          <Box className="mx-auto grid px-1 Boxide-y Boxide-neutral-200">
            <Box className="py-2">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <h4> What is Gaana Plus?</h4>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  Gaana Plus is the Premium version of Gaana which allows you to
                  enjoy the premium benefits like Streaming Ads Free Music,
                  Unlimited Downloads, Exclusive content, and much more!
                </p>
              </details>
            </Box>
            <hr />
            <Box className="py-2">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <h4> Refund Policy</h4>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  We would like to inform you that subscription
                  purchases/renewals are not refundable. Once you cancel the
                  renewal, you can still enjoy your subscription benefits for
                  the rest of your billing cycle. Please refer to the terms:
                  https://gaana.com/terms_and_conditions.html For every renewal,
                  we send an intimation over email or number so that you can
                  cancel the renewal before the deduction happens.
                </p>
              </details>
            </Box>
            <hr />
            <Box className="py-2">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <h4> Cancel Subscription</h4>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  You can switch off auto-renewal anytime while you are on an
                  active subscription. Simply log in to the Gaana app, go to
                  settings, select Profile, then navigate to the subscription
                  page and toggle off auto-renewal. Alternatively, you can visit
                  http://www.gaana.com/myzone on the Gaana website. Please note
                  that steps may vary slightly based on updates to the Gaana app
                  and website.
                </p>
              </details>
            </Box>
          </Box>
        </Box>
      </Box>
      {openModal && (
        <LoginModal
          open={openModal}
          handleModal={handleModal}
          loginpage={loginpage}
          setLoginPage={setLoginPage}
        />
      )}
      {isProceedPayment&& 
      <Payment/>}
      <Footer/>
    </Box>
  );
}

export default Subscription;
