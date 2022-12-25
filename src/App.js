import "./App.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import SerieList from "./components/SerieList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MovieContext } from "./contexts/MovieContext";
import React, { useContext, useState } from "react";
import Pricing from "./components/Pricing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Trends from "./components/Trends";
import About from "./components/About";
import Footer from "./components/Footer";
import MovieDetail from "./components/MovieDetail";
import MovieList from "./components/MovieList";
import SerieDetail from "./components/SerieDetail";

function App() {
  const { series, movies, trends } = useContext(MovieContext);
  const [search, setSearch] = useState("");

  const searchMovie = (e) => {
    setSearch(e.target.value);
  };

  let filteredSeries = series.filter((serie) => {
    return serie.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  let filteredMovies = movies.filter((movie) => {
    return movie?.title?.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  const slicedTrends = trends.slice(0, 12);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <Navbar />
                <div className="container">
                  <Carousel searchMovie={searchMovie} />
                  <br />
                  <br />
                  <SerieList series={filteredSeries} />
                  <MovieList movies = {filteredMovies}/>
                  <br />
                  <br />
                  <Trends trends={slicedTrends} />
                  <br />
                  <Pricing />
                  <br />
                  <br />
                  <About />
                </div>
                <Footer />
              </React.Fragment>
            }
          ></Route>
          <Route path="serie/:serieId" element={<SerieDetail />} />
          <Route path="movie/:movieId" element={<MovieDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
