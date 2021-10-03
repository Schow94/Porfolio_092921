import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { SiInstagram } from "react-icons/si";
import { ImGithub } from "react-icons/im";
import { ImLinkedin2 } from "react-icons/im";
import { SiGmail } from "react-icons/si";

import "./SideBar.css";

const SideBar = () => {
	return (
		<ul className="sidebar">
			<li className="icon">
				<a href="https://github.com/Schow94">
					<ImGithub />
				</a>
			</li>
			<li className="icon">
				<a
					href="https://www.linkedin.com/in/stephen-chow-938b3b11b/"
					target="blank">
					<ImLinkedin2 />
				</a>
			</li>
			<li className="icon">
				<a href="https://www.instagram.com/thech0w/">
					<SiInstagram />
				</a>
			</li>
			<li className="icon">
				<Link to="contact">
					<SiGmail />
				</Link>
			</li>
		</ul>
	);
};

export default SideBar;
