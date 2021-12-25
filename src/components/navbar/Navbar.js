import React, { useEffect, useState } from "react";
import classes from "./navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

import Dehaze from "@material-ui/icons/Dehaze";
import Close from "@material-ui/icons/Close";
import { useHistory } from "react-router-dom";
// import DehazeIcon from "@mui/icons-material/Dehaze";
// import CloseIcon from "@mui/icons-material/Close";
const Navbar = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  const history = useHistory();
  // if (classes.nav_links_mobile) {
  //   console.log(classes.nav_links_mobile);
  // }
  // console.log(classes.nav_links_mobile);
  // useEffect(() => {
  //   console.log(isMobile);
  // }, [isMobile]);
  // console.log(isMobile);

  const homeHandler = () => {
    history.push(`/`);
    props.setSearchText("");
  };
  const webserieshandler = () => {
    history.push(`/filterMovie/webseries`);
  };
  const bollywoodhandler = () => {
    history.push(`/filterMovie/bollywood`);
  };
  const hollywoodhandler = () => {
    history.push(`/filterMovie/hollywood`);
  };
  const southhandler = () => {
    history.push(`/filterMovie/south`);
  };
  const songhandler = () => {
    history.push(`/song`);
  };
  const adminhandler = () => {
    history.push(`/admin`);
  };
  return (
    <>
      <nav className={classes.navbar}>
        {/* <h3 className={classes.logo}> MovieStar </h3> */}
        <img src={logo} className={classes.logoimg} />
        <ul
          className={
            isMobile ? `${classes.nav_links_mobile}` : `${classes.nav_links}`
          }
          onClick={() => setIsMobile(false)}
        >
          <span className={classes.home} onClick={homeHandler}>
            <li>Home</li>
          </span>
          <span className={classes.about} onClick={webserieshandler}>
            <li>Web Series</li>
          </span>
          <span
            to="/moviepage"
            className={classes.skills}
            onClick={bollywoodhandler}
          >
            <li>Bollywood</li>
          </span>
          <span onClick={hollywoodhandler} className={classes.contact}>
            <li>Hollywood</li>
          </span>
          <span onClick={southhandler} className={classes.contact}>
            <li>South</li>
          </span>
          <span onClick={songhandler} className={classes.contact}>
            <li>Song</li>
          </span>
          <span onClick={adminhandler} className={classes.contact}>
            <li>Admin</li>
          </span>
        </ul>
        <button
          className={classes.mobile_menu_icon}
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? <Close /> : <Dehaze />}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
