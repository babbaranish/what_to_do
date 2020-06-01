import React, { useEffect } from "react";
import "./global.styles.scss";
//components
import GettingStarted from "./components/getting-started/Getting-started.component";
import SignUp from "./components/signup/Signup.component";
import Login from "./components/login/Login.component";
//route
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
//Redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { loadUser } from "./redux/auth/auth.action";
import setAuthToken from "./redux/auth/auth.util";

const App = () => {
	useEffect(() => {
		if (localStorage.token) {
			setAuthToken(localStorage.token);
			store.dispatch(loadUser());
			return <Redirect to='/' />;
		}
	}, []);

	return (
		<Provider store={store}>
			<BrowserRouter>
				<PersistGate persistor={persistor}>
					<Switch>
						<Route exact path='/' component={GettingStarted} />
						<Route
							path='/signup'
							render={() => {
								if (localStorage.token) {
									return <Redirect to='/' />;
								}
								return <SignUp />;
							}}
						/>
						<Route
							path='/login'
							render={() => {
								if (localStorage.token) {
									return <Redirect to='/' />;
								}
								return <Login />;
							}}
						/>
					</Switch>
				</PersistGate>
			</BrowserRouter>
		</Provider>
	);
};
export default App;
