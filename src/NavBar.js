import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./Navbar.css";

const NavBar = () => {
	return (
		<div className="nav-container">
			<Link to="/">
				<img
					className="s-icon"
					src="https://react.semantic-ui.com/logo.png"
					alt="s-icon"
				/>
			</Link>

			<ul className="nav-list">
				<li>
					<Link className="route-link" to="/">
						<span className="nav-num">01. </span> About
					</Link>
				</li>
				<li>
					<Link className="route-link" to="/projects">
						<span className="nav-num">02. </span> Projects
					</Link>
				</li>
				<li>
					<Link className="route-link" to="/work">
						<span className="nav-num">03. </span> Work
					</Link>
				</li>
				<li>
					<Link className="route-link" to="/contact">
						<span className="nav-num">04. </span> Contact
					</Link>
				</li>
				<li>
					<button className="resume-btn">Resume</button>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
