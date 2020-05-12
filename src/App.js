import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import NowPlayingPage from "./pages/NowPlayingPage";
import PopularPage from "./pages/PopularPage";
import TopRatedPage from "./pages/TopRatedPage";
import UpcomingPage from "./pages/UpcomingPage";
import AboutPage from "./pages/AboutPage";
import FullscreenBackground from "./components/FullscreenBackground";
import Header from "./components/Header";
import PageMain from "./components/common/PageMain";
import MoviesNav from "./components/MoviesPage/MoviesNav";
import LikePage from "./pages/LikePage";
import WatchlistPage from "./pages/WatchlistPage";
// eslint-disable-next-line
import CustomScrollbars from "./components/CustomScrollbars";
import Zoom from "./components/Zoom";

function App() {
  return (
    <>
      {/* <CustomScrollbars> */}
      <Header />
      <FullscreenBackground />
      <Zoom />
      <PageMain>
        <Switch>
          <Route path={["/", "/films"]} exact component={HomePage} />
          <Route path="/movies">
            <MoviesNav />
            <Route path="/movies/now_playing" component={NowPlayingPage} />
            <Route path="/movies/popular" component={PopularPage} />
            <Route path="/movies/top_rated" component={TopRatedPage} />
            <Route path="/movies/upcoming" component={UpcomingPage} />
          </Route>
          <Route path="/my_movies">
            <MoviesNav />
            <Route path="/my_movies/like" component={LikePage} />
            <Route path="/my_movies/watchlist" component={WatchlistPage} />
          </Route>
          <Route path="/movie/:movieId" component={MovieDetailPage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </PageMain>
      {/* </CustomScrollbars> */}
    </>
  );
}

export default App;
