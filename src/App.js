import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Home from "./Home";
import Projects from "./Projects";
// import About from "./About";
import Contact from "./Contact";
import BadRoute from "./BadRoute";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>

				{/* <Route path="/about">
					<About />
				</Route> */}

				<Route path="/projects">
					<Projects />
				</Route>

				<Route path="/contact">
					<Contact />
				</Route>

				<Route path="*">
					<BadRoute />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
