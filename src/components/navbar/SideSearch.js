import React, { useState } from "react";
import classes from "./serachbox.module.css";
import { useHistory } from "react-router-dom";
import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.png";

const SideSearch = () => {
  const history = useHistory();
  const [text, setText] = useState("");
  const filterhandler = (e) => {
    console.log(e.target.value);
    history.push(`/filterMovie/${e.target.value}`);
  };
  const searchHandler = (e) => {
    setText(e.target.value);
  };
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    //   props.setSearchText(text);
    setText("");
    console.log(text);
  };
  return (
    <>
      <form>
        {/* <SearchBox /> */}
        <img src={pic1} height={200} width={200} className={classes.imgpic} />
        <img src={pic2} height={200} width={200} className={classes.imgpic} />
        <img src={pic1} height={200} width={200} className={classes.imgpic} />
        {/* <input
          //   className={classes.inputcss}
          placeholder="Search..."
          value={text}
          onChange={searchHandler}
        /> */}
        {/* <button
                className={classes.searchBtn}
                onClick={searchSubmitHandler}
              >
                <Search />
              </button> */}
      </form>
    </>
  );
};

export default SideSearch;
