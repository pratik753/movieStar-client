import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import classes from "./downloadPage.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Ads from "../pages/Ads";
import clock from "../../assets/clock1.gif";
import { useHistory } from "react-router";
const DownloadPage = (props) => {
  //   const location = useLocation();
  const history = useHistory();
  const [dataa, setDataa] = useState([]);
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds("Now You Can download Movie from the Below Link");
    }
  });
  useEffect(() => {
    const data = props.location;
    console.log(dataa, data.data);
    setDataa(data.data);
  }, []);
  let i = 1;
  const backHandler = () => {
    history.push("/");
  };
  //   const linkss = dataa.array.forEach((element) => {
  //     <button>{element}</button>;
  //   });
  //   const arr = () => {
  //     dataa.forEach((element) => {
  //       <button>{element}</button>;
  //     });
  //   };

  return (
    <>
      <Container fluid className={classes.homecont}>
        <Row>
          <Col xs={12} md={10} className={classes.coldiv}>
            <center>
              <br />
              <h2>
                <strong>
                  Please Select a Specific Download Link to Proceed
                </strong>
              </h2>
              <img
                src={clock}
                className={classes.clockImg}
                alt="Image Not Found"
              />
              <h3 className={classes.timmerText}>{seconds}</h3>
              {seconds.length > 10 && (
                <>
                  {!dataa && (
                    <div>
                      <h3 className={classes.timmerText}>No Link Found</h3>
                      <Button className={classes.dBtn} onClick={backHandler}>
                        Back
                      </Button>
                    </div>
                  )}
                  <div className={classes.btnDiv}>
                    {dataa?.map((element) => {
                      return (
                        <a href={element} target="_blank" rel="noreferrer">
                          <Button className={classes.dBtn}>
                            Download {i++}
                          </Button>
                        </a>
                      );
                    })}
                  </div>
                </>
              )}
            </center>
          </Col>
          <Col xs={6} md={2} className={classes.col2}>
            <Ads />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DownloadPage;
