import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./Users";
import Repos from "./Repos"

export default function Home() {
	return (
		<Router>
			<Switch>
				<Route path="/:username/repos/">
					<Repos />
				</Route>
				<Route path="/:username">
					<Users />
				</Route>
			</Switch>
		</Router>
	);
}
