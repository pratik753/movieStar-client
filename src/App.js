import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import SignUp from "./components/pages/SignUp";
import Signin from "./components/pages/Signin";
import MoviePage from "./components/pages/MoviePage";
import SearchBox from "./components/navbar/SearchBox";
import Footerbar from "./components/navbar/Footerbar";
import AdminPage from "./components/Admin/AdminPage";
import FilterMovies from "./components/pages/FilterMovies";
import DownloadPage from "./components/DownloadPage/DownloadPage";
import { useEffect, useState } from "react";
import SongHome from "./components/Song/SongHome";
import axios from "axios";
const App = (props) => {
  // const [searchUse, setSearchUse] = useState(false);
  const [searchText, setSearchText] = useState("");
  return (
    <BrowserRouter>
      <></>
      <Navbar setSearchText={setSearchText} />
      <SearchBox setSearchText={setSearchText} searchText={searchText} />
      <Switch>
        <Route path="/" exact>
          <Home searchText={searchText} />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/moviepage" exact>
          <MoviePage />
        </Route>
        <Route path="/movie/:movieId" exact>
          <MoviePage />
        </Route>
        <Route component={DownloadPage} path="/movie/:movieId/download" exact />
        {/* <Route path="/movie/:movieId/download" exact>
          <DownloadPage />
        </Route> */}
        <Route path="/filterMovie/:filterField" exact>
          <FilterMovies />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/admin" exact>
          <AdminPage />
          {/* <Signin /> */}
        </Route>
        <SongHome />
      </Switch>

      <Footerbar />
    </BrowserRouter>
  );
};

export default App;
