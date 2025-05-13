import { Link } from "react-router-dom";
import starWars from "../assets/img/Star-Wars-Logo.jpg";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><img src={starWars} 
					className="img-fluid w-25"/></span>
				</Link>
				<div className="ml-auto">
						<button className="btn btn-primary">Favorites</button>
				</div>
			</div>
		</nav>
	);
};