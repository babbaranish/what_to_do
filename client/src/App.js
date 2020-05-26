import React from "react";
import "./global.styles.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import GettingStarted from "./components/getting-started/Getting-started.component";
export default function App() {
	return (
		<Switch>
			<GettingStarted />
		</Switch>
	);
}
