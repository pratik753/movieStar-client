import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import classes from "./serachbox.module.css";
import { useHistory } from "react-router-dom";
import Search from "@material-ui/icons/Search";
const SearchBox = (props) => {
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
    props.setSearchText(text);
    setText("");
    console.log(text);
  };
  return (
    <div>
      <Container fluid>
        <Row>
          <Col className={classes.centercol}>
            <form>
              <input
                className={classes.inputcss}
                placeholder="Search..."
                value={text}
                onChange={searchHandler}
                onSubmit={searchSubmitHandler}
              />
              {/* <button
                className={classes.searchBtn}
                onClick={searchSubmitHandler}
              >
                <Search />
              </button> */}
            </form>
          </Col>
        </Row>
      </Container>

      <center className={classes.centercss}>
        <Row>
          <Col>
            <a
              href="https://telegram.me/joinchat/owLCRqZB9bRlZmJl"
              target="_blank"
              rel="noreferrer nofollow"
            >
              <Button variant="secondary" className={classes.btn1}>
                Join On Telegram
              </Button>
            </a>
          </Col>
          <Col>
            <Button
              variant="secondary"
              className={classes.btn2}
              onClick={filterhandler}
              value="hollywood"
            >
              Hollywood Movies
            </Button>
          </Col>
          <Col>
            <Button
              variant="secondary"
              className={classes.btn3}
              onClick={filterhandler}
              value="bollywood"
            >
              Bollywood Movies
            </Button>
          </Col>
          <Col>
            <Button
              variant="secondary"
              className={classes.btn1}
              onClick={filterhandler}
              value="south"
            >
              South Movies
            </Button>
          </Col>
          <Col>
            <Button
              variant="secondary"
              className={classes.btn2}
              onClick={filterhandler}
              value="dualaudio"
            >
              Dual Audio
            </Button>
          </Col>
          <Col>
            <Button
              variant="secondary"
              className={classes.btn3}
              onClick={filterhandler}
              value="cartoon"
            >
              Cartoon Movies
            </Button>
          </Col>
          <Col>
            <Button
              variant="secondary"
              className={classes.btn1}
              onClick={filterhandler}
              value="480p"
            >
              480P
            </Button>
          </Col>
          <Col>
            <Button
              variant="secondary"
              className={classes.btn2}
              onClick={filterhandler}
              value="720p"
            >
              720P
            </Button>
          </Col>
          <Col>
            <Button
              variant="secondary"
              className={classes.btn3}
              onClick={filterhandler}
              value="1080p"
            >
              1080P
            </Button>
          </Col>

          <Col>
            <Button
              variant="secondary"
              className={classes.btn1}
              onClick={filterhandler}
              value="action"
            >
              Action
            </Button>
          </Col>
          <Col>
            <Button
              variant="secondary"
              className={classes.btn2}
              onClick={filterhandler}
              value="drama"
            >
              Drama
            </Button>
          </Col>
        </Row>
      </center>
    </div>
  );
};

export default SearchBox;
