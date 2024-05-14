import React from "react";
import { useState } from "react";
import { Box, Modal, Switch, Typography } from "@mui/material";
import logoImg from "../../assets/Gaana_logo.png";
import "../Login/Login.css";

const LoginModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <Modal
      open={isOpen}
      //   onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box className="text-white w-full max-w-3xl  sm:w-auto rounded-2xl opacity-100 scale-100 ">
        <button
          className="z-20 absolute right-7 top-2 font-bold text-2xl"
          onClick={onClose}
        >
          X
        </button>
        <Box className="md:h-[500px] md:w-[800px]">
          <Box className="w-1/2 float-right  ">
            <p className="mt-4 px-8 absolute text-center font-bold text-l">
              Over 30 million songs to suit every mood & occasion
            </p>
            <img
              className="md:h-[500px]"
              src="https://a10.gaanacdn.com/gn_img/images/login_bg_v1_1621430866.jpg"
              alt="loginLogo"
            />
          </Box>
          <Box className="login-back2 md:h-[500px]">
            <Box className="">
              <img src={logoImg} className="login-logo" alt="logo" />
            </Box>
            <Box className="pt-3 pb-3 text-center">
              <h4 className="w-full">Listen to Gaana Non-Stop</h4>
              <p className="w-full">Quick Sign In Options</p>
              <button className="p-2 bg-white text-black rounded-full w-full">
                {" "}
                Continue with Google{" "}
              </button>
              <p className="w-full p-1">----- Or Sign in With -----</p>
              <button className="p-2 text-white login-phone rounded-full w-full">
                Continue with Phone/Email ID
              </button>
              <p className="w-full">
                by proceeding. you agree to our <span>Privacy Policy</span> and{" "}
                <span>Terms of Services</span>
              </p>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default LoginModal;
