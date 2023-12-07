import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark mt-2">
			<Link to="/">
				<span className="navbar-brand ms-5 h1">Contact List</span>
			</Link>
		</nav>
	);
};
