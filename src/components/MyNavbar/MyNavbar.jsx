import { Navbar, Nav } from "react-bootstrap";
import "./MyNavbar.css";
import "../FooterPart/FooterPart.css";
const MyNavbar = () => {
  return (
    <>
      <div id="wrapper" className="sidebar__wrap d-flex">
        <div id="navbar" className="w-15">
          <div className="menu-nav">
            <div className="links1-nav">
              <div id="logo">
                <img src="spotify.png" width="150px" height="60px" alt="..." />
              </div>
            </div>
            <div className="links-nav">
              <a href="homepage.html">
                <img
                  src="assets/home.png"
                  width="22px"
                  height="22px"
                  alt="..."
                />
                <a href="homepage.html">
                  <p>Home</p>
                </a>
              </a>
            </div>
            <div className="links-nav">
              <a href="search.html">
                <img
                  src="assets/search.png"
                  width="24px"
                  height="24px"
                  alt="..."
                />
                <a href="search.html">
                  <p>Search</p>
                </a>
              </a>
            </div>
            <div id="yourLibrary" className="links-nav">
              <a href="album.html">
                <img
                  src="assets/library.png"
                  width="22px"
                  height="22px"
                  alt="..."
                />
                <a href="album.html">
                  <p>Your Library</p>
                </a>
              </a>
            </div>
            <div className="links-nav">
              <a href="#">
                <img
                  src="assets/creat-playlist.png"
                  width="25px"
                  height="25px"
                  alt="..."
                />
                <p>Create Playlist</p>
              </a>
            </div>
            <div className="links-nav">
              <a href="artist.html">
                <img
                  src="assets/liked-song.png"
                  width="25px"
                  height="25px"
                  alt="..."
                />
                <a href="artist.html">
                  <p>Liked Songs</p>
                </a>
              </a>
            </div>
          </div>
          <hr />
          <div
            id="scrollbar1"
            className="scrollbar sidebar-bottom scrollbar-black bordered-black square"
          >
            <div className="">
              <div className="links-small-nav">
                <a href="#">
                  <p>Funky Heavy bluesy</p>
                </a>
              </div>
            </div>
            <div className="links-small-nav">
              <a href="#">
                <p>Your Top Songs 2020</p>
              </a>
            </div>
            <div className="links-small-nav">
              <a href="#">
                <p>In love with you</p>
              </a>
            </div>
            <div className="links-small-nav">
              <a href="#">
                <p>It is road stewart</p>
              </a>
            </div>
            <div className="links-small-nav">
              <a href="#">
                <p>FRANCHISE it ft.Young Thug...</p>
              </a>
            </div>
            <div className="links-small-nav">
              <a href="#">
                <p>Your Top Songs 2019</p>
              </a>
            </div>
            <div className="links-small-nav">
              <a href="#">
                <p>Palleggio</p>
              </a>
            </div>
            <div className="links-small-nav">
              <a href="#">
                <p>This is Joe Bonamassa</p>
              </a>
            </div>
            <div className="links-small-nav">
              <a href="#">
                <p>Yacht Rock</p>
              </a>
            </div>
            <div className="links-small-nav">
              <a href="#">
                <p>JAZZ in the background</p>
              </a>
            </div>
            <div className="links-small-nav">
              <a href="#">
                <p>Cafe Chillout</p>
              </a>
            </div>
            <div className="links-small-nav">
              <a href="#">
                <p>Soft Pop Hits</p>
              </a>
            </div>
            <div className="links-small-nav">
              <a href="#">
                <p>Liked Songs</p>
              </a>
            </div>
          </div>
          <div id="installApp-sticky">
            <i className="fas fa-arrow-alt-circle-down"></i>
            <span>Install App</span>
          </div>
        </div>

        {/*  <div id="content" className="w-85 h-100">
          <div className="h-100 overflow-auto">
            <nav
              id="horizontal-nav"
              className="navbar navbar-expand-lg sticky-top"
              onscroll="showMenu()"
            >
              <a href="#" id="lessThan" className="previous round ml-3">
                &#8249;
              </a>
              <a href="#" id="greaterThan" className="next round">
                &#8250;
              </a>
              <div className="dropdown">
                <button
                  className="btn btn-user btn-sm dropdown-toggle justify-content-end mt-2"
                  type="button"
                  id="dropdownMenuButton1"
                  data-toggle="dropdown"
                  style={{ borderRadius: "2rem" }}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="covers/Recently-played/le-bask.jpg"
                    height="30px"
                    alt=""
                    style={{ borderRadius: "2rem" }}
                  />
                  <span id="username1"></span>
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Account
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="start.html">
                      Log out
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default MyNavbar;
