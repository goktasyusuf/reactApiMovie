import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import "../css/SerieDetail.css";
import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import PaginationForActors from "./pagination/PaginationForActors";
import Pricing from "./Pricing";
import About from "./About";
import Footer from './Footer';

const SerieDetail = () => {
	let { serieId } = useParams();

	const [seri, setSerie] = useState({});
	const [actors, setActors] = useState([]);

	const [show, setShow] = useState(false);
	const handleShow = () => setShow(true);
	const closeShow = () => setShow(false);

	console.log(actors);


	const [actorPerPage] = useState(6);
  	const [currentPage, setCurrentPage] = useState(1);
  	const lastIndexOfPage = actorPerPage * currentPage;
  	const firstIndexOfPage = lastIndexOfPage - actorPerPage;
  	const currentActors = actors?.cast?.slice(firstIndexOfPage, lastIndexOfPage);
  	const totalPages = Math.ceil(actors?.cast?.length / actorPerPage);



	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				`https://api.themoviedb.org/3/tv/${serieId}?api_key=${process.env.REACT_APP_FILM_API_KEY}&language=en-US`
			);
			const data = await response.json();
			setSerie(data);

			const response2 = await fetch(
				`https://api.themoviedb.org/3/tv/${serieId}/credits?api_key=${process.env.REACT_APP_FILM_API_KEY}&language=en-US`
			);
			const data2 = await response2.json();
			setActors(data2);
		};
		fetchData();
	}, []);

	
	return (
		<>
			<Navbar />
			<div className="container">
				<section>
					<div className="row">
						<div className="col-12">
							<h1 className="details__title mt-5">{seri.name}</h1>
						</div>

						<div className="col-12 col-xl-6">
							<div className="card--details">
								<div className="row">
									<div className="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-5">
										<div className="card__cover">
											<img
												style={{ width: "100%" }}
												src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${seri.poster_path}`}
												alt=""
											/>
										</div>
									</div>

									<div className="col-12 col-sm-8 col-md-8 col-lg-9 col-xl-7">
										<div className="card__content">
											<div className="card__wrap">
												<span className="card__rate">
													<i className="fa-solid fa-star"></i>
													{seri.vote_average}
												</span>

												<ul className="card__list">
													<li>HD</li>
													<li>16+</li>
												</ul>
											</div>

											<ul className="card__meta">
												<li>
													<span>Genre:</span>
													{seri?.genres?.length != 0
														? seri?.genres?.map((x) => x?.name + "   ")
														: "Unknown"}
												</li>
												<li>
													<span>Release year:</span> {seri.first_air_date}
												</li>
												<li>
													<span>Last Episode Runtime :</span>{" "}
													{seri?.last_episode_to_air?.runtime
														? seri?.last_episode_to_air?.runtime
														: seri.episode_run_time}
												</li>
												<li>
													<span>Country:</span>{" "}
													<a href="#">{seri.origin_country}</a>{" "}
												</li>
												<li>
													<span>Total Seasons:</span>{" "}
													<a href="#">{seri?.seasons?.length}</a>{" "}
												</li>
											</ul>

											<div className="card__description card__description--details b-description_readmore_ellipsis">
												{seri.overview
													? seri.overview.substring(0, 150) + "..."
													: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore distinctio, beatae blanditiis eligendi dolor at sed qui tenetur iure laboriosam. sit amet consectetur adipisicing elit. Dolore distinctio, beatae blanditiis eligendi dolor at sed qui tenetur iure laboriosam".substring(
															0,
															150
													  ) + "..."}
											</div>
											<br />
											<div className="text-center">
												<button
													onClick={handleShow}
													type="button"
													className="btn btn-info"
												>
													Read More...
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<Modal show={show} onHide={closeShow}>
							<Modal.Header className="modal-header" closeButton>
								<Modal.Title>{seri.name}</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<div className="row">
									
									<div className="col-lg-6">
										<img
											className="w-100"
											src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${seri.poster_path}`}
											alt=""
										/>
									</div>
									<div className="col-lg-6">
										{seri.overview
											? seri.overview
											: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore distinctio, beatae blanditiis eligendi dolor at sed qui tenetur iure laboriosam. sit amet consectetur adipisicing elit. Dolore distinctio, beatae blanditiis eligendi dolor at sed qui tenetur iure laboriosam"}

										<a
											href={seri.homepage}
											target="_blank"
											className="btn btn-success mt-3"
										>
											Go To Homepage Of Series
										</a>
								</div>
								</div>
							</Modal.Body>
							<Modal.Footer>
								<Button onClick={closeShow} variant="secondary">
									Close
								</Button>
							</Modal.Footer>
						</Modal>

						<div className="col-12 col-xl-6">
							<video
								style={{ width: "100%" }}
								className="mt-3"
								controls
								crossOrigin="true"
								playsInline
								src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
							></video>
						</div>

						<div className="col-12">
							<div className="details__wrap">
								<div className="details__devices">
									<span className="details__devices-title">
										Available on devices:
									</span>
									<br />
									<ul className="details__devices-list">
										<li>
											<i className="fa-brands fa-apple"></i>
											<span>IOS</span>
										</li>
										<li>
											<i className="fa-brands fa-android"></i>
											<span>Android</span>
										</li>
										<li>
											<i className="fa-brands fa-windows"></i>
											<span>Windows</span>
										</li>
										<li>
											<i className="fa-sharp fa-solid fa-tv"></i>
											<span>Smart TV</span>
										</li>
									</ul>
								</div>

								<div className="details__share">
									<span className="details__share-title text-center">
										Share with friends:
									</span>
									<br />

									<ul className="details__share-list">
										<li className="facebook">
											<a href="#">
												<i className="fa-brands fa-facebook"></i>
											</a>
										</li>
										<li className="instagram">
											<a href="#">
												<i className="fa-brands fa-instagram"></i>
											</a>
										</li>
										<li className="twitter">
											<a href="#">
												<i className="fa-brands fa-twitter"></i>
											</a>
										</li>
										<li className="vk">
											<a href="#">
												<i className="fa-brands fa-vk"></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-12 mt-5">
							<h2 className="pricing_title">Seasons</h2>
						</div>
						<div className="col-lg-12">
							<table className="table table-bordered bg-dark text-white">
								<thead>
									<tr>
										<th scope="col">Season</th>
										<th scope="col">Season Air Date</th>
										<th scope="col">Episode Count</th>
									</tr>
								</thead>
								<tbody>
									{seri?.seasons?.map((x, index) => {
										return (
											<tr className="table-primary table-dark" key={index}>
												<th scope="row">Season {x.season_number + 1}</th>
												<td>{x.air_date}</td>
												<td>{x.episode_count}</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
						<div className="col-lg-12 mt-4">
							<h2 className="pricing_title">Leading Actors</h2>
							<div className="row">
							{currentActors?.length != 0 ? (
									currentActors?.map((actor, index) => {
										return (
											<div className="col-lg-2 col-md-3 mb-4" key={index}>
												<div className="card image_card">
													<img
														className="h-100 w-100"
														src={
															actor?.profile_path != null
																? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${actor.profile_path}`
																: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCMq4cGfAmaJAYVpXFPLY57EzVip1FTMK-ETQH1aU24VD-bYx5wJ4srHFP99zAgqXBvfQ&usqp=CAU"
														}
														alt=""
													/>
												</div>
												<h6 className="pricing_title">
													Characater : {actor.character}
												</h6>
												<h6 className="pricing_title">
													Real Name : {actor.original_name}
												</h6>
											</div>
										);
									})
								) : (
									<div className="alert alert-danger" role="alert">
										Actor information not found !
									</div>
								)}
								<PaginationForActors totalPages={totalPages}setCurrentPage={setCurrentPage}/>
								<Pricing/>
								<About />
								
							</div>
						</div>
					</div>
				</section>
			</div>
			<Footer/>
		</>
	);
};
export default SerieDetail;
