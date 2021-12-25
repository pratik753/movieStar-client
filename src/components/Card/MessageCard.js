import React from "react";
import moment from "moment";
import classes from "./messageCard.module.css";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import DeleteIcon from "@material-ui/icons/Delete";
import { deleteMessage } from "../../action/movie";

const MessageCard = (props) => {
  console.log(props.ipAddress);
  console.log("props.ipAddress");
  const deleteCommentHandler = () => {
    console.log(props.id);
    props.setMessageChange((data) => !data);
    deleteMessage(props.id);
  };
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="body1">
          Name: {props.name}
          {/* ddhddddddddddddddddddddddddddddddddgggggggggggggggggggggggggvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv */}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Message: {props.message}
          {/* ddhddddddddddddddddddddddddddddddddgggggggggggggggggggggggggvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv */}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Email:{props.email}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {moment(props.createdAt).fromNow()}
        </Typography>
        <span>
          {props.ipAddress && <DeleteIcon onClick={deleteCommentHandler} />}
        </span>
      </CardContent>
    </Card>
    // <div className={classes.mcard}>
    //   <h4>Name: {props.name}ddhdddddddddddddddddddddddddddddddd</h4>
    //   <p>Message: {props.message}</p>
    //   <strong>
    //     <p>Email:{props.email}</p>
    //   </strong>
    //   <p>{moment(props.createdAt).fromNow()}</p>
    // </div>
  );
};

export default MessageCard;
