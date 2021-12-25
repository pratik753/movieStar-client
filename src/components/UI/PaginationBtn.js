import React from "react";
import { Button } from "react-bootstrap";
import classes from "./paginationBtn.module.css";
import { Typography } from "@material-ui/core/";
const PaginationBtn = (props) => {
  console.log(props.page);
  console.log(props.Tcount);
  console.log(props.pageNo);
  // props.setPage(3);
  const nextHandler = () => {
    props.setPage((page) => page + 1);
  };
  const preHandler = () => {
    props.setPage((page) => page - 1);
  };
  const middleBtn = (e) => {
    props.setPage(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <center>
        <Typography variant="h5">Page No: {props.page}</Typography>
        <Button
          className={classes.pagBtn}
          onClick={preHandler}
          disabled={props.page <= 1}
        >
          Previous
        </Button>
        {props.pageNo >= 0 &&
          [...Array(props.pageNo)].map((_, idx) => (
            <Button
              className={classes.pagBtn}
              // key={startValue + idx + 1}
              // disabled={page === startValue + idx + 1}
              // onClick={() => changePage(startValue + idx + 1)}
              value={idx + 1}
              onClick={middleBtn}
            >
              {idx + 1}
            </Button>
          ))}
        {/* <Button className={classes.pagBtn}>1</Button>
      <Button className={classes.pagBtn}>2</Button>
    <Button className={classes.pagBtn}>3</Button> */}
        <Button
          className={classes.pagBtn}
          onClick={nextHandler}
          disabled={props.page >= props.pageNo}
        >
          Next
        </Button>
      </center>
    </>
  );
};

export default PaginationBtn;
