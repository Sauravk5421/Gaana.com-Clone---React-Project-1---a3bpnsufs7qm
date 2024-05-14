import { useTheme } from "../Context/Context";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';



function NavbarLeftComponent() {


  const {theme, toggleTheme} = useTheme();
  
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
            <AccountCircleOutlinedIcon />
            <p className="text-sm text-center ml-3 ">Login/Sign Up</p>
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
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Radio
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                My Music
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                Language
                <p>(Set Music language)</p>
              </a>
            </li>

            <li class="nav-item flex justify-between">
              <a class="nav-link " href="#">
                Night Mode
              </a>
              <label class="switch">
                <input onChange={toggleTheme} type="checkbox" />
                <span class="slider round"></span>
              </label>
            </li>

            <hr className="w-[100%]"/>

            <li class="nav-item">
              <a class="nav-link" href="#">
               <h4 className="font-bold"> Go Premium</h4>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                Get Gaana Plus
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                <span className="bg-[#AA0000] text-white rounded-md p-1 text-xs font-bold">Welcome Offer</span> 1 Month Trail @ Just ₹1
              </a>
            </li>

            <hr />

            <li class="nav-item">
              <a class="nav-link" href="#">
                <h4 className="font-bold"> Quick Access</h4>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                Trending Songs
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                New Songs
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                Old Songs
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                Albums
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                Artist
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                Lyrics
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                Music Labels
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                Generes
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavbarLeftComponent;
