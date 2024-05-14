import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavbarMenu from "./NavbarMenu";
import NavbarLeftComponent from "./NavbarLeftComponent";
import './Navbar.css'
import HomePage from "../Home/HomePage";
import Banner from "../Banners/Banners";
import { Box } from "@mui/material";
import HeaderMenu from "./HeaderMenu";
import { useTheme } from "../Context/Context";

function Navbar(){


    const {theme, toggleTheme} = useTheme();
    
    return(
        <>
          
            <nav className="fixed  
                w-full top-0 left-0 z-40" >
                <div className="z-40" >
                    <NavbarMenu/>
                    <NavbarLeftComponent/>
                    <HeaderMenu/>
                </div>
            </nav>

        </>

    );
}
export default Navbar;