import React from "react";
import { Link } from "react-router-dom";

import NavBar from "./NavBar";
import SideBar from "./SideBar";
import "./NoMatch.css";

import { FaCode } from "react-icons/fa";

const Home = () => {
	return (
		<div className="App">
			<NavBar />

			<div className="noMatch-body">
				<SideBar />
				<div className="noMatch-container">
					<h1 className="name-is">Sorry,</h1>
					<h1 className="name">
						This page does not exist
						<span className="code-icon">
							<FaCode />
						</span>
					</h1>

					<Link to="/">
						<button className="touch-btn">Go Home</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
