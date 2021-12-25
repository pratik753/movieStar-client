import React, { useEffect, useState } from "react";
import classes from "./commentsbox.module.css";
import { Button, Typography, TextField } from "@material-ui/core/";
import { createMessage } from "../../action/movie";
import { useParams } from "react-router-dom";
import { getIpAddress } from "../../api";

const CommentsBox = ({ messageChange, setMessageChange }) => {
  let params = useParams();
  let tagMessage;
  if (params.movieId === undefined) {
    tagMessage = "home";
  } else {
    // console.log("hiiihh23323");
    tagMessage = params.movieId;
  }
  const [tagText, setTagText] = useState(tagMessage);

  const [message, setMessage] = useState({
    name: "",
    message: "",
    tag: "home",
    email: "",
    ipAddress: "",
  });
  const nameHandler = (e) => {
    setMessage({
      ...message,
      name: e.target.value,
      tag: tagText,
    });
  };
  const messageHandler = (e) => {
    setMessage({
      ...message,
      message: e.target.value,
      tag: tagText,
    });
  };
  // const tagHandler = (e) => {
  //   setMessage({
  //     ...message,
  //     tag: e.target.value,
  //     tag: tagText,
  //   });
  // };
  const emailHandler = (e) => {
    setMessage({
      ...message,
      email: e.target.value,
      tag: tagText,
    });
  };
  const clearHandler = () => {
    setMessage({
      name: "",
      message: "",
      tag: "home",
      email: "",
    });
  };
  const submitHandler = (e) => {
    setMessageChange(!messageChange);
    e.preventDefault();
    setTagText(params.movieId);
    // if (params.movieId === undefined) {
    //   tagMessage = "home";
    // } else {
    //   // console.log("hiiihh23323");
    //   tagMessage = params.movieId;
    // }
    setMessage({
      ...message,
      tag: tagText,
    });
    createMessage(message);
    console.log(message);
    console.log(tagMessage);
  };
  useEffect(() => {
    const asyncCall = async () => {
      const ipAddress = await getIpAddress();
      console.log(ipAddress);
      setMessage({
        ...message,
        ipAddress: ipAddress,
      });
    };
    asyncCall();

    console.log("ipAddress");
  }, []);
  return (
    <div className={classes.commentDiv}>
      <Typography variant="h5">Leave a Comments</Typography>
      <br />
      <TextField
        className={classes.inp}
        name="message"
        variant="outlined"
        placeholder="Messge"
        // label="Message"
        fullWidth
        multiline
        rows={4}
        value={message.message}
        onChange={messageHandler}
      />
      {/* <textarea /> */}
      <br />
      {/* <label>Name</label> */}
      <input value={message.name} placeholder="Name" onChange={nameHandler} />
      <br />
      {/* <label>Email</label> */}
      <input
        value={message.email}
        placeholder="Email"
        onChange={emailHandler}
      />
      <br />
      <Button
        className={classes.buttonSubmit}
        variant="contained"
        color="primary"
        size="large"
        type="submit"
        fullWidth
        onClick={submitHandler}
      >
        Post Comment
      </Button>
    </div>
  );
};

export default CommentsBox;
