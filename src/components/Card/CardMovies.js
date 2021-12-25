import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useHistory } from "react-router-dom";

import classes from "./card.module.css";

const CardMovies = (props) => {
  const history = useHistory();
  const movieId = (id) => {
    console.log(id);
    history.push(`/movie/${id}`);
  };
  return (
    <span className={classes.card_main}>
      <Card className={classes.card} onClick={() => movieId(props.id)}>
        <img
          src={props.img1}
          className="attachment-full size-full wp-post-image"
          alt=""
          loading="lazy"
          itemprop="image"
          //   srcset="https://hdmoviehubs.site/wp-content/uploads/2021/10/The-Voyeurs-English-download-480p-720p.jpg 350w, https://hdmoviehubs.site/wp-content/uploads/2021/10/The-Voyeurs-English-download-480p-720p-200x300.jpg 200w"
          sizes="(max-width: 350px) 100vw, 350px"
          width="275"
          height="280"
        />

        <div className={classes.overlay}>
          <Typography variant="body1">
            {props.title}
            {/* The Voyeurs (2021) English [Subtitles Added] HDRip Download | 720p
          [950MB] October 10, 2021 */}
          </Typography>
        </div>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description.substring(0, 94)}...
            {/* Pippa and Thomas move into their dream apartment, they notice that
          their windows look directly into the apartment opposite, this will set
        in motion a chain of events that will lead to disaster. */}
          </Typography>
        </CardContent>
      </Card>
    </span>
  );
};

export default CardMovies;
