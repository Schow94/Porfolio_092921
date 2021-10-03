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
		name: "Weather Widget",
		image: "https://schow94.github.io/Portfolio_new/image_weather.png",
		link: "https://schow94.github.io/Weather/",
		description: "Weather widget built in React with OpenWeather API",
		lanuages: ["React", "Open Weather API", "Geolocation"],
	},
	{
		name: "Climate News",
		image: "./climateNews.png",
		link: "https://devpost.com/software/climate-news",
		description: "2nd Place winner in OSU's Beaverhacks Fall 2021 Hackathon",
		lanuages: ["React", "Coinbase API", "PostgreSQL", "Node", "Express"],
	},
	{
		name: "Nordstrom Clone",
		image: "https://schow94.github.io/Portfolio_new/image_shoppingCart.png",
		link: "https://schow94.github.io/Redux-ShoppingCart/",
		description: "Nordstrom Clone",
		lanuages: ["React", "Material UI"],
	},
	{
		name: "Trivia",
		image: "./trivia.png",
		link: "https://github.com/Schow94/rn_trivia",
		description: "Trivia Game built with React Native",
		lanuages: ["React Native", "Expo"],
	},
	{
		name: "Classroom Management",
		link: "https://schow94.github.io/Magnitude-ReactAssignment/",
		image: "https://schow94.github.io/Portfolio_new/image_magnitude.png",
		description: "Classroom Management Tool built for job application",
		lanuages: ["React ", "Material UI"],
	},
	{
		name: "Emaily",
		image: "https://schow94.github.io/Portfolio_new/image_emaily.png",
		link: "https://warm-thicket-82476.herokuapp.com/",
		description: "Web App for bulk creating/sending email surveys",
		lanuages: [
			"React",
			"Redux",
			"Express",
			"Mongo",
			"Passport.js",
			"OAuth",
			"SendGrid API",
			"Stripe API",
		],
	},
	{
		name: "Travel Booking App",
		image: "./travel.png",
		link: "https://github.com/Schow94/flutter_travel_booking",
		description: "Flutter UI concept for a travel app - similar to Airbnb",
		lanuages: ["Flutter"],
	},
	{
		name: "Expense.io",
		image: "https://schow94.github.io/Portfolio_new/Expensio_Piechart.png",
		link: "https://expensio-65fed.web.app/",
		description:
			"One stop shop for tracking expenses and gaining insight into spending habits and trends.",
		lanuages: ["React", "PostgreSQL", "Node", "Express", "JWT"],
	},
	{
		name: "WiFree",
		link: "https://schow94.github.io/WifiApp-Hooks/",
		image: "https://schow94.github.io/Portfolio_new/image_wifree.png",
		description: "Find coffee shops & cafes with free wifi",
		lanuages: ["React", "Yelp API", "Geolocation", "Google Maps API"],
	},
	{
		name: "Pin Trading UI",
		image: "./pin.png",
		link: "https://github.com/Schow94/flutter_pin_trading",
		description: "Flutter UI concept for a pin trading app",
		lanuages: ["Flutter"],
	},
	{
		name: "Tic Tac Toe",
		image: "https://schow94.github.io/Portfolio_new/image_tic-tac-toe.png",
		link: "https://schow94.github.io/Tic-Tac-Toe/",
		description: "Browser Tic Tac Toe built with vanilla JS, HTML, & CSS",
		lanuages: ["Javascript", "HTML", "CSS"],
	},
	{
		name: "Matching Game",
		image: "https://schow94.github.io/Portfolio_new/image_memory-game.png",
		link: "https://schow94.github.io/Memory-Game/",
		description: "Matching game built with vanilla JS, HTML, & CSS",
		lanuages: ["Javascript", "HTML", "CSS"],
	},
	{
		name: "Code Blog",
		image: "https://schow94.github.io/Portfolio_new/image_blog.png",
		link: "https://code-blogz.herokuapp.com/",
		description: "Blogging Web App",
		lanuages: ["Express", "Mongo", "Bootstrap", "Passport.js"],
	},
	{
		name: "CryptoCurrent",
		image: "https://schow94.github.io/Portfolio_new/BTC_historic_rates.png",
		link: "https://cryptocurrent-ff828.web.app/",
		description: "React Native Todo List",
		lanuages: ["React", "Coinbase API", "PostgreSQL", "Node", "Express"],
	},
	{
		name: "Flash Card",
		image: "./flashcard.png",
		link: "https://github.com/Schow94/rn_flashcards",
		description:
			"React native application to study SAT words in flashcard format",
		lanuages: ["React Native", "Expo"],
	},
	{
		name: "Calculator",
		image: "https://schow94.github.io/Portfolio_new/image_calculator.png",
		link: "https://schow94.github.io/calculator-react/",
		description: "Calculator",
		lanuages: ["Javascript"],
	},
	{
		name: "Inventory",
		image: "./inventory.png",
		link: "https://inventory-3fd5c.web.app/",
		description: "Basic CRUD app to improve Flask & Redux skills",
		lanuages: [
			"React",
			"Flask",
			"SQLAlchemy",
			"PostgreSQL",
			"Redux",
			"Reactstrap",
		],
	},
	{
		name: "Tinder Clone",
		image: "./Tinder.png",
		link: "",
		description: "Tinder Clone built with React Native",
		lanuages: ["React Native", "Expo"],
	},
	{
		name: "To do List",
		image: "https://schow94.github.io/Portfolio_new/image_reactNative2.png",
		link: "",
		description: "React Native Todo List",
		lanuages: ["React Native", "Expo"],
	},
];

const Projects = () => {
	return (
		<div className="Project">
			<NavBar />

			<div className="project-body">
				<SideBar />

				{/* <div>
					<div className="toolset-container">
						<h1>What I do</h1>
						<div className="toolset">
							<img className="tool-icon" src="./react.png" alt="react-img" />
							<img className="tool-icon" src="./node.png" alt="node-img" />
							<img
								className="tool-icon"
								src="./express.png"
								alt="express-img"
							/>
							<img className="tool-icon" src="./redux.jpeg" alt="redux-img" />
							<img
								className="tool-icon"
								src="./Postgres.png"
								alt="postgres-img"
							/>
							<img
								className="tool-icon flask"
								src="./flask.png"
								alt="flask-img"
							/>
							<img
								className="tool-icon"
								src="./react-native.png"
								alt="rn-img"
							/>
							<img
								className="tool-icon"
								src="./flutter.png"
								alt="flutter-img"
							/>
							<img className="tool-icon" src="./mongo.png" alt="mongo-img" />
						</div>
					</div> */}

				<div className="projects-container">
					{data.map((x, idx) => {
						return (
							<div className="project" key={idx}>
								<a className="link" href={x.link} target="_blank">
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
		// </div>
	);
};

export default Projects;
