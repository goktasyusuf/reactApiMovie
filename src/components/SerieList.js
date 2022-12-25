import { useState } from "react";
import PaginationForSeries from "./pagination/PaginationForSeries";
import '../css/SerieList.css';
import { Link } from "react-router-dom";

const SerieList = ({ series}) => {
  const [moviePerPage] = useState(6);


  const [currentPageForSeries, setCurrentPageForSeries] = useState(1);
  const lastIndexOfPage2 = moviePerPage * currentPageForSeries;
  const firstIndexOfPage2 = lastIndexOfPage2 - moviePerPage;
  const currentSeries2 = series.slice(firstIndexOfPage2, lastIndexOfPage2);
  const totalPages2 = Math.ceil(series.length / moviePerPage);

  let total = 0;
  for (let i = 0; i < series.length; i++) {
    total = total + series[i].popularity;
  }



  return (
    <div>
      <div className="row">
        <h2 className="pricing_title">Existing Series</h2>
        {currentSeries2.map((serie, index) => {
          return (
            <div className="col-lg-2 col-md-4" key={index}>
              <div className="card" style={{ position: "relative" }}>
                <img
                  src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${serie.poster_path}`}
                  alt=""
                />
                <Link to={`serie/${serie.id}`} className="card-play"><i className="fa-solid fa-play"></i></Link>

                <span
                  style={{ position: "absolute", bottom: "-20px", left: "5px" }}
                  className="dot"
                >
                  %{Math.ceil((serie.popularity * 100) / total)}
                </span>
              </div>
              <br />
              <h6 className="text-center mt-1">{serie.name}</h6>
              <p className="text-center mt-1">{serie.first_air_date}</p>
            </div>
          );
        })}
      </div>
      <br />
      <div className="d-flex justify-content-between">
        <div className="hint-text">
        {currentSeries2.length}
          <b></b> out of  {series.length}   <b></b> series are shown.
        </div>
        <PaginationForSeries
          totalPages={totalPages2}
          setCurrentPage={setCurrentPageForSeries}
        />
      </div>

      
    </div>
  );
};

export default SerieList;
