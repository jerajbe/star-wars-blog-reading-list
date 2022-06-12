import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
			<Link to="/" onClick={(e) => {
				actions.removeSingleItem()
			}}>
				<img className="imagen" src="https://w7.pngwing.com/pngs/109/654/png-transparent-logo-star-wars-silhouette-star-wars-logo-text-logo-silhouette.png"></img>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
					{store.favorites.map((name, index) => {
						return (
							<li><a className="dropdown-item" href="#">{name}</a></li>
						)
					})}
					</ul>
				</div>
			</div>
			</div>
		</nav>
	);
};
