import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./Users";

export default function Home() {
	return (
		<Router>
			<Switch>
				<Route path="/:username">
					<Users />
				</Route>
			</Switch>
		</Router>
	);
}
