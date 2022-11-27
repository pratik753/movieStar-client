import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import classes from "./home.module.css";
import CardMovies from "../Card/CardMovies";
import Ads from "./Ads";
import CommentsBox from "../navbar/CommentsBox";
import { getMovies } from "../../action/movie";
import { CircularProgress } from "@material-ui/core";
import PaginationBtn from "../UI/PaginationBtn";
import { FloatingButton, Item } from "react-floating-button";
import downloadIcon from "../../assets/logo.png";
import { getSearchMovie } from "../../api";
import SideSearch from "../navbar/SideSearch";
import Message from "../navbar/Message";

const Home = (props) => {
  // const [search, setSearch] = useState(false);

  const [messageChange, setMessageChange] = useState(false);
  const [page, setPage] = useState(1);
  const [pageNo, setPageNo] = useState();
  const [Tcount, setTcount] = useState(1);
  const [limit, setLimit] = useState(4);
  const [moviesAll, setMoviesAll] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const findMovieId = (id) => {
    console.log(id);
  };
  useEffect(() => {
    const data = async () => {
      setIsLoading(true);
      let d;
      let resData;
      console.log(props.searchText);
      if (props.searchText.length > 0) {
        console.log("hiiiiiiiiii");
        d = await getSearchMovie(props.searchText);
        resData = d?.data.data;
        console.log(d?.data.data);
      } else {
        d = await getMovies(+page, +limit);
        resData = d?.data;
        console.log(d?.data);
      }
      const mdata = [];
      for (const key in resData) {
        mdata.push({
          _id: resData[key]._id,
          title: resData[key].title,
          description: resData[key].description,
          img1: resData[key].img1,
        });
      }
      setMoviesAll(mdata);
      setIsLoading(false);

      console.log(mdata);
      // console.log(d.pageNo);
      console.log("current " + page);
      // setTcount(d.count);
      setPageNo(Math.ceil(+d.count / +limit));
    };
    data();
    console.log(moviesAll);
  }, [page, props.searchText]);

  const moviesMap = moviesAll.map((data) => (
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
      <Container fluid className={classes.homecont}>
        <Row>
          <Col xs={12} md={9}>
            <div className={`${classes.coldiv}`}>
              {isLoading && <CircularProgress />}
              {moviesMap}
              {moviesAll.length === 0 && <h1>No Movie</h1>}
            </div>
            <div>
              {!(props.searchText.length > 0) && (
                <div className={classes.pagDiv}>
                  <PaginationBtn
                    setPage={setPage}
                    page={page}
                    Tcount={Tcount}
                    pageNo={pageNo}
                  />
                </div>
              )}
            </div>
          </Col>

          <Col className={classes.coldiv}>
            {/* <Ads /> */}
            <center>
              <SideSearch />
            </center>
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
            <Message
              messageChange={messageChange}
              setMessageChange={setMessageChange}
            />
          </Col>
        </Row>
      </Container>
      {/* {props.setSearchText("")} */}
    </>
  );
};

export default Home;
