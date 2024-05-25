import React from "react";
import { useState } from "react";
import validator from "validator";
import { Box, Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createUser, userSelector } from "../../redux/users/userSlice";
import Swal from "sweetalert2";
import axios from "axios";
import logoImg from "../../assets/Gaana_logo.png";
import "../Login/Login.css";

const LoginModal = ({
  open,
  handleModal,
  isUpdatePassword,
  setIsUpdatePassword,
  loginpage,
  setLoginPage,
  onClose,
}) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCurrent, setPasswordCurrent] = useState("");

  const [isError, setIsError] = useState({
    username: "",
    email: "",
    password: "",
    passwordCurrent: "",
  });

  const dispatch = useDispatch();
  const userData = useSelector(userSelector);
  const token = userData?.token;

  const emailOnchange = (inputEmail) => {
    if (validator.isEmail(inputEmail)) {
      setIsError((prev) => ({
        ...prev,
        email: "",
      }));
    } else {
      setIsError((prev) => ({
        ...prev,
        email: "Enter Valid Email",
      }));
    }
    setEmail(inputEmail);
  };

  const userAuth = async (userDetails, operation) => {
    const projectId = "u0kdju5bps0g";
    let url = "";

    if (operation === "signup") {
      url = `https://academics.newtonschool.co/api/v1/user/signup`;
    }
    if (operation === "login") {
      url = `https://academics.newtonschool.co/api/v1/user/login`;
    }
    if (operation === "updatePassword") {
      url = `https://academics.newtonschool.co/api/v1/user/updateMyPassword`;
    }

    const headersObj = {
      projectId: projectId,
    };
    if (isUpdatePassword) {
      headersObj["Authorization"] = `Bearer ${token}`;
    }

    const response = await axios({
      url: url,
      method: isUpdatePassword ? "PATCH" : "post",
      headers: {
        ...headersObj,
        "Content-Type": "application/json",
      },
      data: {
        ...userDetails,
      },
    });

    return response;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
      appType: "music",
    };
    let operation = "login";
    if (isSignUp) {
      data["name"] = username;
      operation = "signup";
      // signUpUser(data);
    }
    if (isUpdatePassword) {
      data["name"] = username;
      data["password"] = password;
      data["passwordCurrent"] = passwordCurrent;
      operation = "updatePassword";
    }

    const response = await userAuth(data, operation).catch((error) => {
      return { status: error.response.status, response: error.response };
    });

    if (isUpdatePassword) {
      setIsUpdatePassword(false);
    }
    handleModal();
    if (response.status === 200 || response.status === 201) {
      if (isSignUp) {
        Swal.fire("Sign-up successful", "Now you can login.", "success");
      } else if (isUpdatePassword) {
        Swal.fire("Successful", "Password has been updated", "success");
      } else {
        dispatch(createUser(response.data));
        Swal.fire("Success", "Login successful", "success");
      }
    } else {
      Swal.fire(
        `Error status code: ${response.status}`,
        response?.response?.data?.message || "Error",
        "error"
      );
    }
  };

  function HandleClickLoginPage() {
    setLoginPage(true);
  }


  const validateStates = () => {
    if (isUpdatePassword && passwordCurrent === "") {
      return false;
    }
    if (
      isSignUp &&
      username != "" &&
      validator.isEmail(email) &&
      password != ""
    ) {
      return true;
    } else if (!isSignUp && validator.isEmail(email) && password != "") {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleModal}
        style={{
          background: "#CAC3C3",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box className="text-white scale-90 bg-[#ffffff]">
          <Box className="">
            <Box className="float-right bg-[#FF0000]">
              <Box>
                <button
                  onClick={handleModal}
                  className="z-20 absolute right-2 font-bold text-2xl"
                >
                  X
                </button>
              </Box>
              <Box className=" hidden md:block float-right ">
                <p className=" mt-4 px-8 absolute text-center font-bold text-l">
                  Over 30 million songs to suit every mood & occasion
                </p>
                <img
                  className="h-[500px]"
                  src="https://a10.gaanacdn.com/gn_img/images/login_bg_v1_1621430866.jpg"
                  alt="loginLogo"
                />
              </Box>
            </Box>

            <Box className="md:w-[full] w-[400px] login-back2 h-[500px]">
              <Box className="">
                <img src={logoImg} className="login-logo" alt="logo" />
              </Box>
              <Box>
                <h5 className="mt-4 mb-4 ">Listen to Gaana Non-Stop</h5>
              </Box>
              {loginpage ? (
                <Box className="text-center">
                  <Box
                    className={
                      isSignUp || isUpdatePassword ? "block" : "hidden"
                    }
                  >
                    <input
                      type="name"
                      className="p-2 w-full rounded-md bg-black border-[1px] border-black focus-visible:outline-none "
                      placeholder="Enter Name"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <Box
                      className={`text-[#f2a222] text-sm mt-1 ${
                        isError.username === "" ? "hidden" : "block"
                      } `}
                    >
                      {isError.username}
                    </Box>
                  </Box>
                  <Box className="mt-2">
                    <input
                      type="email"
                      className="p-2 w-full rounded-md bg-black border-[1px] border-black focus-visible:outline-none "
                      placeholder="Enter Email-ID"
                      value={email}
                      onChange={
                        (e) => emailOnchange(e.target.value)
                        // setEmail(e.target.value)
                      }
                    />
                    <Box
                      className={`text-[#f2a222] text-sm mt-1 ${
                        isError.email === "" ? "hidden" : "block"
                      } `}
                    >
                      {isError.email}
                    </Box>
                  </Box>
                  {isUpdatePassword && (
                    <Box className="mt-2">
                      <input
                        type="password"
                        className="p-2 w-full rounded-md bg-black border-[1px] border-black focus-visible:outline-none mobile-input_loginInput__ZJULr"
                        placeholder={`Enter Old Password `}
                        value={passwordCurrent}
                        onChange={(e) => setPasswordCurrent(e.target.value)}
                      />
                      <Box
                        className={`text-[#f2a222] text-sm mt-1 ${
                          isError.passwordCurrent === "" ? "hidden" : "block"
                        } `}
                      >
                        {isError.passwordCurrent}
                      </Box>
                    </Box>
                  )}
                  <Box className="mt-2 text-center">
                    <input
                      type="password"
                      className="p-2 w-full rounded-md bg-black border-[1px] border-black focus-visible:outline-none mobile-input_loginInput__ZJULr"
                      placeholder={`${
                        isUpdatePassword
                          ? "Enter New Password"
                          : "Enter Password"
                      } `}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Box
                      className={`text-[#f2a222] text-sm mt-1 ${
                        isError.password === "" ? "hidden" : "block"
                      } `}
                    >
                      {isError.password}
                    </Box>
                  </Box>
                  <Box className="mt-2">
                    <button
                      type="submit"
                      className={`mt-2 min-w-[114px] py-2 px-4 text-sm font-[500] text-white  border-[#ed1c24] border-[1px] rounded-full ${
                        validateStates()
                          ? "bg-[#ed1c24]"
                          : "bg-[#FF0000] cursor-not-allowed"
                      } `}
                      onClick={(e) => handleSubmit(e)}
                      disabled={!validateStates()}
                    >
                      {isSignUp
                        ? "Sign Up"
                        : isUpdatePassword
                        ? "Update Password"
                        : "Login"}
                    </button>
                  </Box>
                  <Box>
                    {!isUpdatePassword && (
                      <>
                        <p className="p-2 text-[#808080] text-xs text-center">
                          ----- Other Login Options -----
                        </p>
                        <button className="w-full py-2 px-10 bg-white text-black rounded-full mb-2">
                          {" "}
                          Continue with Google{" "}
                        </button>
                        <button
                          className="w-full py-2 px-10 bg-[#FF0000] text-white rounded-full mt-2 mb-2"
                          onClick={() => setIsSignUp((prev) => !prev)}
                        >
                          {isSignUp ? "Login" : "Sign Up"}
                        </button>
                      </>
                    )}
                  </Box>
                </Box>
              ) : (
                <Box>
                  <p className="text-[#808080] text-xs text-center">
                    Quick Sign In Options
                  </p>
                  <button className="w-full p-2 bg-white text-black rounded-full mt-2 mb-2">
                    {" "}
                    Continue with Google{" "}
                  </button>
                  <p className=" text-xs text-center p-1">
                    ----- Or Sign in With -----
                  </p>
                  <button
                    onClick={HandleClickLoginPage}
                    className="w-full p-2 px-4 text-white login-phone rounded-full "
                  >
                    Continue with Phone/Email ID
                  </button>
                  <p className="p-4 text-[#808080] text-xs font-light">
                    by proceeding. you agree to our{" "}
                    <span className="text-[#FF0000]">Privacy Policy</span> and{" "}
                    <span className="text-[#FF0000]">Terms of Services</span>
                  </p>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default LoginModal;
