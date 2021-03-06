import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
	const [currentPage, setCurrentPage] = useState(null);

	const pathname = window.location.pathname;

	useEffect(() => {
		if (pathname === "/") {
			setCurrentPage("/");
		}
		if (pathname === "/about") {
			setCurrentPage("/about");
		}
		if (pathname === "/favourites") {
			setCurrentPage("/favourites");
		}
		if (pathname.startsWith("/recipes")) {
			setCurrentPage("/recipes");
		}
	}, [pathname]);

	return (
		<div className="Navbar__menu">
			<Link
				to="/about"
				className={`Navbar__menu-item ${
					currentPage === "/about" ? "current" : null
				}`}
			>
				About
			</Link>
			<Link
				to="/"
				className={`Navbar__menu-item ${
					currentPage === "/" ? "current" : null
				}`}
			>
				Search
			</Link>
			<Link
				to="/recipes"
				className={`Navbar__menu-item ${
					currentPage === "/recipes" ? "current" : null
				}`}
			>
				Recipes
			</Link>
			<Link
				to="/favourites"
				className={`Navbar__menu-item ${
					currentPage === "/favourites" ? "current" : null
				}`}
			>
				Favourites
			</Link>
		</div>
	);
};

export default Navbar;
