import React from "react";

import NavBar from "./NavBar";
import SideBar from "./SideBar";
import "./Home.css";

const Home = () => {
	return (
		<div className="App">
			<NavBar />

			<div className="app-body">
				<SideBar />
				<div className="bio-container">
					<h1 className="name-is">My name is...</h1>
					<h1 className="name">Stephen Chow</h1>
					<h1 className="build-things">I build things with code</h1>
					<p className="bio">
						I'm a software engineer based in San Francisco, CA. I often work on
						the frontend with React but I'm capable of contributing in the
						backend as well. I also have an interest in mobile and hybrid mobile
						technologies.
					</p>
					<button className="touch-btn">Get In Touch</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
