import { useState } from "react";
import Pagination from "./pagination/Pagination";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
	const [moviePerPage] = useState(6);
	const [currentPage, setCurrentPage] = useState(1);

	const lastIndexOfPage = moviePerPage * currentPage;
	const firstIndexOfPage = lastIndexOfPage - moviePerPage;
	const currentMovies = movies.slice(firstIndexOfPage, lastIndexOfPage);
	const totalPages = Math.ceil(movies.length / moviePerPage);

	let total2 = 0;
	for (let i = 0; i < movies.length; i++) {
		total2 = total2 + movies[i].popularity;
	}

	return (
		<div>
			<div className="row">
				<h2 className="pricing_title">Existing Movies</h2>
				<div className="row">
					{currentMovies.map((movie, index) => {
						return (
							<div className="col-lg-2 col-md-4" key={index}>
								<div className="card" style={{ position: "relative" }}>
									<img
										src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
										alt=""
									/>
									<Link to={`movie/${movie.id}`} className="card-play">
										<i className="fa-solid fa-play"></i>
									</Link>
									<span
										style={{
											position: "absolute",
											bottom: "-20px",
											left: "5px",
										}}
										className="dot"
									>
										%{Math.ceil((movie.popularity * 100) / total2)}
									</span>
								</div>
								<br />
								<h6 className="text-center mt-1">{movie.title}</h6>
								<p className="text-center mt-1">{movie.release_date}</p>
							</div>
						);
					})}
				</div>
				<br />
				<div className="d-flex justify-content-between">
					<div className="hint-text">
						{currentMovies.length}
						<b></b> out of {movies.length} <b></b> series are shown.
					</div>
					<Pagination totalPages={totalPages} setCurrentPage={setCurrentPage} />
				</div>
			</div>
		</div>
	);
};

export default MovieList;
