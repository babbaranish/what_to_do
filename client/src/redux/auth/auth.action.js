import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
} from "./auth.types";
import axios from "axios";
import setAuthToken from "./auth.util";
const logout = () => ({
	type: LOGOUT,
});

export const logoutAsync = () => (dispatch) => {
	dispatch(logout());
};

export const loadUser = () => async (dispach) => {
	if (localStorage.token) {
		setAuthToken(localStorage.token);
		try {
			const res = await axios.get("/api/login");
			dispach({
				type: USER_LOADED,
				payload: res.data,
			});
		} catch (err) {
			dispach({
				type: AUTH_ERROR,
			});
		}
	}
};

export const register = ({ name, email, password, mobile }) => async (
	dispatch,
) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	const body = JSON.stringify({ name, email, password, mobile });

	try {
		const res = await axios.post(
			"http://localhost:5000/api/register",
			body,
			config,
		);
		dispatch({
			type: REGISTER_SUCCESS,
			payload: res.data,
		});
		console.log(res.data);
	} catch (err) {
		alert(err);
		dispatch({
			type: REGISTER_FAIL,
		});
	}
};

export const login = ({ email, password }) => async (dispatch) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	const body = JSON.stringify({ email, password });

	try {
		const res = await axios.post(
			"http://localhost:5000/api/login",
			body,
			config,
		);

		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data,
		});
		dispatch(loadUser());
	} catch (err) {
		alert(err);
		dispatch({
			type: LOGIN_FAIL,
		});
	}
};
