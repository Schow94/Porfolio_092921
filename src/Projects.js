import React from "react";
import { SiInstagram } from "react-icons/si";
import { ImGithub } from "react-icons/im";
import { ImLinkedin2 } from "react-icons/im";
import { SiGmail } from "react-icons/si";

import SideBar from "./SideBar";
import NavBar from "./NavBar";
import "./Projects.css";

const data = [
	{
		name: "To do List",
		image: "https://schow94.github.io/Portfolio_new/image_reactNative2.png",
		url: "https://schow94.github.io/Weather/",
		description: "React Native Todo List",
		lanuages: ["React Native", "Expo"],
	},
	{
		name: "Weather Widget",
		image: "https://schow94.github.io/Portfolio_new/image_weather.png",
		link: "https://schow94.github.io/Weather/",
		description: "Weather widget built in React with OpenWeather API",
		lanuages: ["React", "Open Weather API", "Geolocation"],
	},

	{
		name: "Calculator",
		image: "https://schow94.github.io/Portfolio_new/image_calculator.png",
		link: "https://schow94.github.io/calculator-react/",
		description: "React Native Todo List",
		lanuages: ["Javascript"],
	},

	{
		name: "Survey",
		image: "https://schow94.github.io/Portfolio_new/image_emaily.png",
		link: "https://warm-thicket-82476.herokuapp.com/",
		description: "React Native Todo List",
		lanuages: ["React Native", "Expo"],
	},

	{
		name: "To do List",
		image: "https://schow94.github.io/Portfolio_new/image_reactNative2.png",
		description: "React Native Todo List",
		lanuages: ["React Native", "Expo"],
	},

	{
		name: "To do List",
		image: "https://schow94.github.io/Portfolio_new/image_reactNative2.png",
		description: "React Native Todo List",
		lanuages: ["React Native", "Expo"],
	},
];

const Projects = () => {
	return (
		<div className="About">
			<NavBar />

			<div className="app-body">
				<SideBar />

				<div className="projects-container">
					{data.map((x, idx) => {
						return (
							<div className="project">
								<a key={idx} className="link" href={x.link} target="_blank">
									<img className="project-image" src={x.image} alt={x.image} />

									<div className="project-hover">
										<h3>{x.name}</h3>
										<p>{x.description}</p>
									</div>
								</a>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Projects;
