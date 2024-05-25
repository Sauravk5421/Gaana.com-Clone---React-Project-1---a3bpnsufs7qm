import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userAuth = createAsyncThunk(
    "userAuth",
    async (userDetails, operation) => {
        let url = "";
        if (operation === "signup") {
            url = `https://academics.newtonschool.co/api/v1/user/signup`;
        }
        if (operation === "login") {
            url = `https://academics.newtonschool.co/api/v1/user/login`;
        }
        axios.post(url, userDetails, {
            headers: {
                "Content-Type": "application/json",
                "projectId": 'u0kdju5bps0g',
            },
        }).then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error;
            });
    }
);
