import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import FullscreenBackground from "./components/FullscreenBackground";
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import AboutPage from "./pages/AboutPage";
import NowPlayingPage from "./pages/NowPlayingPage";
import PopularPage from "./pages/PopularPage";
import TopRatedPage from "./pages/TopRatedPage";
import UpcomingPage from "./pages/UpcomingPage";

function App() {
  return (
    <>
      <Header />
      <FullscreenBackground />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies/now_playing" component={NowPlayingPage} />
        <Route path="/movies/popular" component={PopularPage} />
        <Route path="/movies/top_rated" component={TopRatedPage} />
        <Route path="/movies/upcoming" component={UpcomingPage} />
        <Route path="/movie/:movieId" component={MovieDetailPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </>
  );
}

export default App;
