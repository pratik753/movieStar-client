import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import classes from "./home.module.css";
import CardMovies from "../Card/CardMovies";
import Ads from "./Ads";
import CommentsBox from "../navbar/CommentsBox";
import MovieShow from "./MovieShow";
import { useParams } from "react-router";
import { getMovieDetail } from "../../action/movie";
import { CircularProgress } from "@material-ui/core";
import Message from "../navbar/Message";
import SideSearch from "../navbar/SideSearch";
const MoviePage = () => {
  const [messageChange, setMessageChange] = useState(false);

  let params = useParams();
  const [oneMovie, setOneMovie] = useState();
  useEffect(() => {
    const data = async () => {
      console.log(params.movieId);
      const moviedetail = await getMovieDetail(params.movieId);
      console.log(moviedetail);
      setOneMovie(moviedetail);
    };
    data();
  }, []);
  // const liner = () => {
  //   return (
  //     // <Box sx={{ width: "100%" }}>
  //     <LinearProgress />
  //     // </Box>
  //   );
  // };
  return (
    <>
      <Container fluid className={classes.homecont}>
        <Row>
          <Col xs={12} md={9}>
            <div className={`${classes.coldiv}`}>
              {oneMovie ? (
                <MovieShow
                  id={oneMovie._id}
                  creator={oneMovie.creator}
                  description={oneMovie.description}
                  imbd={oneMovie.imbd}
                  img1={oneMovie.img1}
                  language={oneMovie.language}
                  movielink={oneMovie.movielink}
                  quality={oneMovie.quality}
                  quickstory={oneMovie.quickstory}
                  release={oneMovie.release}
                  resolution={oneMovie.resolution}
                  size={oneMovie.size}
                  title={oneMovie.title}
                  trailer={oneMovie.trailer}
                />
              ) : (
                <>
                  {/* <LinearProgress /> */}
                  <CircularProgress />
                </>
              )}
            </div>
          </Col>
          <Col className={classes.coldiv}>
            {/* <Ads /> */}
            <SideSearch />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={7} className={`${classes.coldiv}`}>
            <CommentsBox
              setMessageChange={setMessageChange}
              messageChange={messageChange}
            />
          </Col>
          <Col className={`${classes.coldiv} ${classes.messageDiv}`}>
            <Message messageChange={messageChange} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MoviePage;
