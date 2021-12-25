import {
  Container,
  TextField,
  Grid,
  Button,
  TextareaAutosize,
} from "@material-ui/core";

import React, { useState } from "react";
import FileBase64 from "react-file-base64";
// import { TextareaAutosize } from "@material-ui/core";
import { createMovie } from "../../action/movie";
import classes from "./addmovies.module.css";
const AddMovies = () => {
  const [movieName, setMovieName] = useState({
    name: "",
    title: "",
    creator: "",
    description: "",
    imbd: "",
    release: "",
    language: "",
    resolution: "",
    tags: "",
    size: "",
    quickstory: "",
    movielink: "",
    quality: "",
    trailer: "",
    img1: "",
    // img2: "",
    // img3: "",
  });
  // useEffect(() => {
  //   createStockItem(movieName);
  // });
  const titleHandler = (e) => {
    setMovieName({
      ...movieName,
      title: e.target.value,
    });
  };
  const creatorHandler = (e) => {
    setMovieName({
      ...movieName,
      creator: e.target.value,
    });
  };
  const descriptionHandler = (e) => {
    setMovieName({
      ...movieName,
      description: e.target.value,
    });
  };
  const imbdHandler = (e) => {
    setMovieName({
      ...movieName,
      imbd: e.target.value,
    });
  };
  const img1Handler = (e) => {
    setMovieName({
      ...movieName,
      img1: e.target.value,
    });
  };
  const img2Handler = (e) => {
    setMovieName({
      ...movieName,
      img2: e.target.value,
    });
  };
  const img3Handler = (e) => {
    setMovieName({
      ...movieName,
      img3: e.target.value,
    });
  };
  const releaseHandler = (e) => {
    setMovieName({
      ...movieName,
      release: e.target.value,
    });
  };
  const languageHandler = (e) => {
    setMovieName({
      ...movieName,
      language: e.target.value,
    });
  };
  const resolutionHandler = (e) => {
    setMovieName({
      ...movieName,
      resolution: e.target.value,
    });
  };
  const sizeHandler = (e) => {
    setMovieName({
      ...movieName,
      size: e.target.value,
    });
  };
  const quickstoryHandler = (e) => {
    setMovieName({
      ...movieName,
      quickstory: e.target.value,
    });
  };
  const movielinkHandler = (e) => {
    setMovieName({
      ...movieName,
      movielink: e.target.value.split(","),
    });
  };
  const qualityHandler = (e) => {
    setMovieName({
      ...movieName,
      quality: e.target.value,
    });
  };
  const tagsHandler = (e) => {
    setMovieName({
      ...movieName,
      tags: e.target.value.split(","),
    });
  };
  const trailerHandler = (e) => {
    setMovieName({
      ...movieName,
      trailer: e.target.value,
    });
  };
  const nameHandler = (e) => {
    setMovieName({
      ...movieName,
      name: e.target.value,
    });
  };

  const clearData = () => {
    setMovieName({
      name: "",
      title: "",
      creator: "",
      description: "",
      imbd: "",
      release: "",
      language: "",
      resolution: "",
      size: "",
      tags: "",
      quickstory: "",
      movielink: "",
      quality: "",
      trailer: "",
      img1: "",
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // createStockItem(movieName);
    createMovie(movieName);
    console.log(movieName);
    // clearData();
  };
  return (
    <>
      <>
        <Container className={classes.cont}>
          <h2 className={classes.head}>Add Movies</h2>

          <hr />
          <form onSubmit={submitHandler}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Name"
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  value={movieName.name}
                  onChange={nameHandler}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="title"
                  name="title"
                  variant="outlined"
                  required
                  fullWidth
                  value={movieName.title}
                  onChange={titleHandler}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Creator"
                  name="creator"
                  variant="outlined"
                  required
                  fullWidth
                  value={movieName.creator}
                  onChange={creatorHandler}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Description"
                  name="description"
                  variant="outlined"
                  required
                  fullWidth
                  value={movieName.description}
                  onChange={descriptionHandler}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="imbd"
                  name="imbd"
                  variant="outlined"
                  required
                  fullWidth
                  value={movieName.imbd}
                  onChange={imbdHandler}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="release"
                  name="release"
                  variant="outlined"
                  required
                  fullWidth
                  value={movieName.release}
                  onChange={releaseHandler}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Language"
                  name="language"
                  variant="outlined"
                  required
                  fullWidth
                  value={movieName.language}
                  onChange={languageHandler}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Tags"
                  name="tags"
                  variant="outlined"
                  required
                  fullWidth
                  value={movieName.tags}
                  onChange={tagsHandler}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Resolution"
                  name="resolution"
                  variant="outlined"
                  required
                  fullWidth
                  value={movieName.resolution}
                  onChange={resolutionHandler}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Size"
                  name="size"
                  variant="outlined"
                  required
                  fullWidth
                  value={movieName.size}
                  onChange={sizeHandler}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Quick Story"
                  name="quickstory"
                  variant="outlined"
                  required
                  fullWidth
                  value={movieName.quickstory}
                  onChange={quickstoryHandler}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="movielink"
                  name="movielink"
                  variant="outlined"
                  required
                  fullWidth
                  value={movieName.movielink}
                  onChange={movielinkHandler}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Quality"
                  name="quality"
                  variant="outlined"
                  required
                  fullWidth
                  value={movieName.quality}
                  onChange={qualityHandler}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3}>
                Title Image
                <FileBase64
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) =>
                    setMovieName({ ...movieName, img1: base64 })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                Image 1
                {/* <FileBase64
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) =>
                    setMovieName({ ...movieName, img2: base64 })
                  }
                /> */}
              </Grid>
              <Grid item xs={12} sm={3}>
                Image 2
                {/* <FileBase64
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) =>
                    setMovieName({ ...movieName, img3: base64 })
                  }
                /> */}
              </Grid>
              <Grid item xs={12} sm={3}>
                Image 3
                {/* <FileBase64
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) =>
                    setMovieName({ ...movieName, img3: base64 })
                  }
                /> */}
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={9}>
                <TextareaAutosize
                  className="trailer"
                  type="textarea"
                  placeholder="Trailer"
                  style={{ width: 700 }}
                  minRows={5}
                  // fullWidth
                  value={movieName.trailer}
                  onChange={trailerHandler}
                />
              </Grid>
            </Grid>
            {/* <br /> */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3}>
                <Button
                  type="submit"
                  halfWidth
                  variant="contained"
                  color="primary"
                >
                  Add
                </Button>
              </Grid>
            </Grid>
          </form>
          <br />

          <br />
          <br />

          {/* <Grid container spacing={2}>
          <Grid item xs={6} sm={3}>
            <Button type="submit" variant="contained" color="primary">
              Remove
            </Button>
          </Grid>
        </Grid> */}

          <br />
        </Container>
      </>
    </>
  );
};

export default AddMovies;
