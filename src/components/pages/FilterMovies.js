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
import { getFilterMovies } from "../../action/movie";
import { CircularProgress } from "@material-ui/core";

const FilterMovies = () => {
  let { filterField } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [fMovie, setOnFMovie] = useState([]);
  console.log(filterField);
  const [forReRender, setForRender] = useState(filterField);
  useEffect(() => {
    setForRender(filterField);
  });
  useEffect(() => {
    console.log("hii");
    const data = async () => {
      setIsLoading(true);
      //   setForRender(params.filterField);
      //   console.log(movieId);
      const fmovie = await getFilterMovies(filterField);
      setOnFMovie([]);
      const mdata = [];
      for (const key in fmovie.data) {
        mdata.push({
          _id: fmovie.data[key]?._id,
          title: fmovie.data[key]?.title,
          description: fmovie.data[key]?.description,
          img1: fmovie.data[key]?.img1,
        });
      }
      console.log(mdata);
      setOnFMovie(mdata);
      setIsLoading(false);
    };
    data();
  }, [forReRender]);
  //   console.log(fMovie);
  //   const changeeffct = () => {
  //     console.log(change);
  //     change++;
  //   };
  const fmoviesMap = fMovie.map((data) => (
    <CardMovies
      key={data._id}
      id={data._id}
      title={data.title}
      description={data.description}
      img1={data.img1}
    />
  ));

  return (
    <>
      {/* <button onClick={changeeffct}>change</button> */}
      <Container fluid className={classes.homecont}>
        <Row>
          <Col xs={12} md={10} className={classes.coldiv}>
            {isLoading && <CircularProgress />}
            {fmoviesMap}
            {!(fmoviesMap.length > 0) && <h2>Movie Not Available</h2>}
          </Col>
          <Col xs={6} md={2} className={classes.col2}>
            <Ads />
          </Col>
        </Row>
        <CommentsBox />
      </Container>
    </>
  );
};

export default FilterMovies;
