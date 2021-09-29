import React from "react";

import { SiInstagram } from "react-icons/si";
import { ImGithub } from "react-icons/im";
import { ImLinkedin2 } from "react-icons/im";
import { SiGmail } from "react-icons/si";

import "./SideBar.css";

const SideBar = () => {
	return (
		<ul className="sidebar">
			<li className="icon">
				<ImGithub />
			</li>
			<li className="icon">
				<ImLinkedin2 />
			</li>
			<li className="icon">
				<SiInstagram />
			</li>
			<li className="icon">
				<SiGmail />
			</li>
		</ul>
	);
};

export default SideBar;
