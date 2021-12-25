import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import classes from "./movieshow.module.css";
import CardMovies from "../Card/CardMovies";
import Ads from "./Ads";
import CommentsBox from "../navbar/CommentsBox";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core/";
import { Button } from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";

const MovieShow = (props) => {
  const [data, setData] = useState({
    name: "pratik",
    class: "3rd",
  });
  return (
    <>
      <Container fluid className={classes.contmovie}>
        <Row>
          <Col className={classes.col2}>
            <Typography variant="h4">{props.title}</Typography>
            <label className={classes.uploadby}>
              {props.creator}
              {/* by MovieStar Admin */}
            </label>
            <center className={classes.cendiv}>
              <Typography
                variant="h6"
                component="p"
                className={classes.details1}
              >
                {props.description}
                {/* Download [18+] The Voyeurs (2021) English [Subtitles Added]
                available to download in 720p quality. 720p in 950MB in MKV
                Format. This Hollywood movie is based on Drama, Mystery,
                Thriller. The main stars of the movie are Sydney Sweeney,
                Justice SmithBen Hardy. */}
              </Typography>
              <Typography variant="h6" className={classes.details}>
                MovieStar ⭐💫 is one of the Best Websites/Platform For
                Hollywood, Bollywood Movies and Series. BookMark Movie⭐.in for
                amazing stuff and don’t forget to subscribe. You just need to
                click on the download button given below to download.
              </Typography>
              <Typography
                variant="body2"
                className={classes.imdb}
                component="p"
              >
                {props.imdb}
                {/* [imdb]https://www.imdb.com/title/tt11235772/[/imdb] */}
              </Typography>
              <Typography variant="h4">
                {props.title}
                {/* Download [18+] The Voyeurs English [Subtitles Added] HDRip Print
                Download 480p | 720p | 1080p – AllMoviesHub.in */}
              </Typography>
              <Typography
                variant="body"
                color="textSecondary"
                component="p"
                className={classes.movieinfo}
              >
                Movie Information
              </Typography>
              <p className={classes.moviename}>
                Name: {props.title.substring(0, 10)}
                <br />
                Release Year: {props.release}
                <br />
                Language: {props.language} [Subtitles Added]
                <br />
                Resolution: {props.resolution}P
                <br />
                Size: {props.size}
              </p>
              <h2 className={classes.qstory}>Quick Story Line</h2>
              <p className={classes.lines}>
                {props.quickstory}
                {/* Pippa and Thomas move into their dream apartment, they notice
                that their windows look directly into the apartment opposite,
                this will set in motion a chain of events that will lead to
                disaster. */}
              </p>
              <h3>Screenshots 👀</h3>
              <p className={classes.imgp}>
                <img
                  loading="lazy"
                  className="aligncenter"
                  src={props.img1}
                  alt="Download [18+] The Voyeurs Movie dual audio scene 1"
                  width="1080p"
                  height="590p"
                />

                {/* <img
                  loading="lazy"
                  className="aligncenter"
                  src={props.img1}
                  alt="Download [18+] The Voyeurs Movie English Hindi audio scene 2"
                  width="1080p"
                  height="590p"
                /> */}

                <img
                  loading="lazy"
                  className="aligncenter"
                  src={props.img1}
                  alt="Download [18+] The Voyeurs Movie Hindi Dubbed audio scene 3"
                  width="1080p"
                  height="590p"
                />
              </p>
              <h2 className={classes.bottomtitle}>
                {props.title}
                {/* [18+] The Voyeurs English [Subtitles Added] HDRip Download Links */}
              </h2>
              <h2>🎞🥂🍫</h2>
              <Button variant="secondary" className={classes.btn2}>
                Online
              </Button>
              {/* /movie/:movieId/download */}
              <Link
                to={{
                  pathname: `/movie/${props.id}/download`,
                  data: props.movielink, // your data array of objects
                }}
              >
                <Button variant="secondary" className={classes.btn2}>
                  480P
                </Button>
              </Link>
              <Button variant="secondary" className={classes.btn2}>
                720P
              </Button>
              <h4>Trailer</h4>
              <div>
                <div dangerouslySetInnerHTML={{ __html: props.trailer }}></div>
                {/* {ReactHtmlParser(props.trailer)} */}
                {/* <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/_fiCdELSwwI"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe> */}
              </div>
              <h2>Wrapping Up 💙</h2>
              <p className={classes.lines}>
                Thanks for visiting MovieStar for HD Hollywood Movies &TV
                Series. Kindly comment down for requesting any movie or series
                we love to upload it for you. Enjoy!
              </p>
              <p>
                Categories 1080p, 2021 Movies, 480p, 720p, Adventure, Comedy,
                Drama, Dual Audio, Family, Fantasy, Godflix, Hindi, Hindi
                Dubbed, Hollywood, Horror, HubFlix, Latest, Mystery, Romance,
                Thriller
              </p>
            </center>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MovieShow;
