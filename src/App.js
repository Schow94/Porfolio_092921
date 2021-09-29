import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>

				<Route path="/about">
					<About />
				</Route>

				<Route path="/projects">
					<Projects />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
