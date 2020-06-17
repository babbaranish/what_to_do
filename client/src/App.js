import React, { useEffect } from "react";
import "./global.styles.scss";
//components
import GettingStarted from "./components/getting-started/Getting-started.component";
import SignUp from "./components/signup/Signup.component";
import Login from "./components/login/Login.component";
//route
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { loadUser } from "./redux/auth/auth.action";
import setAuthToken from "./redux/auth/auth.util";
import Dashboard from "./components/dashboard/Dashboard.component";

const App = ({ loadUser, match }) => {
	useEffect(() => {
		if (localStorage.token) {
			setAuthToken(localStorage.token);
			loadUser();
			return () => <Redirect to='/dashboard' />;
		}
	}, [loadUser]);

	return (
		<Switch>
			<Route
				exact
				path='/'
				render={() => {
					if (localStorage.token) {
						return <Redirect to='/dashboard' />;
					}
					return <GettingStarted />;
				}}
			/>

			<Route
				exact
				path='/signup'
				render={() => {
					if (localStorage.token) {
						return <Redirect to='/dashboard' />;
					}
					return <SignUp />;
				}}
			/>
			<Route
				exact
				path='/login'
				render={() => {
					if (localStorage.token) {
						return <Redirect to='/dashboard' />;
					}
					return <Login />;
				}}
			/>

			<Route path={`/dashboard`} component={Dashboard} />
		</Switch>
	);
};
export default withRouter(connect(null, { loadUser, setAuthToken })(App));
