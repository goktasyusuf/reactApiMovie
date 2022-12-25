import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="pt-3" style={{ backgroundColor: "rgb(3,37,65)" }}>
			<div className="container">
				<div className="d-flex justify-content-between">
					<div className="left">
						<Link
							to={"/"}
							className="text-decoration-none i-block ml-3rem white navbar_hover"
						>
							Home
						</Link>
						<a
							href=""
							className="text-decoration-none i-block ml-3rem white navbar_hover"
						>
							Films
						</a>
						<a
							href=""
							className="text-decoration-none i-block ml-3rem white navbar_hover"
						>
							Series
						</a>
						<a
							href=""
							className="text-decoration-none i-block ml-3rem white navbar_hover"
						>
							About
						</a>
					</div>
					<div className="right d-flex">
						<ul className="d-flex ul-none" style={{ alignItems: "center" }}>
							<li className="ml-3rem">
								<a href="" className="t-none white navbar_hover">
									<i className="fa-solid fa-plus white"></i>
								</a>
							</li>
							<li className="ml-3rem">
								<div className="white">
									<a className="t-none white navbar_hover" href="">
										TR
									</a>
								</div>
							</li>
							<li className="ml-3rem">
								<a href="" className="t-none white navbar_hover">
									<i className="fa-solid fa-bell white"></i>
								</a>
							</li>

							<li className="ml-3rem">
								<a href="" className="t-none white navbar_hover">
									<i className="fa-solid fa-magnifying-glass white"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Navbar;
