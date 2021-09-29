import React from "react";
import { SiInstagram } from "react-icons/si";
import { ImGithub } from "react-icons/im";
import { ImLinkedin2 } from "react-icons/im";
import { SiGmail } from "react-icons/si";

import SideBar from "./SideBar";
import NavBar from "./NavBar";
import "./About.css";

const About = () => {
	return (
		<div className="About">
			<NavBar />

			<div className="app-body">
				<SideBar />

				<div className="bio-container">
					<h1 className="name-is">About...</h1>
					<h1 className="name">ME</h1>
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

export default About;
