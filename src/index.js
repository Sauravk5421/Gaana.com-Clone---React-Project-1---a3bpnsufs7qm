import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import { store } from "./store.js";
import { StyledEngineProvider } from "@mui/material";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
            <Provider store={store}>
                <App />
            </Provider>
        </StyledEngineProvider>
    
  </React.StrictMode>
);
