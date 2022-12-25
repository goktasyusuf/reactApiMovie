import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
  const [series, setSeries] = useState([]);
  const [movies, setMovies] = useState([]);
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/list/8232810?api_key=${process.env.REACT_APP_FILM_API_KEY}&language=en-US`
      );
      const data = await response.json();
      setSeries(data.items);

      //---------------------------------------------------------------------------------------

      const response2 = await fetch(
        `https://api.themoviedb.org/3/list/8232844?api_key=${process.env.REACT_APP_FILM_API_KEY}&language=en-US`
      );
      const data2 = await response2.json();
      setMovies(data2.items);

      //------------------------------------------------------------------------------------

      const response3 = await fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_FILM_API_KEY}`
      );
      const data3 = await response3.json();
      setTrends(data3.results);
    };
    fetchData();
  }, []);

  return (
    <MovieContext.Provider value={{ series, movies , trends }}>
      {props.children}
    </MovieContext.Provider>
  );
};
export default MovieContextProvider;
