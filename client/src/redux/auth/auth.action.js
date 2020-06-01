import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
} from "./auth.types";
import axios from "axios";
import setAuthToken from "./auth.util";

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
export const register = ({ name, email, password }) => async (dispach) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	const body = JSON.stringify({ name, email, password });

	try {
		const res = await axios.post(
			"http://localhost:5000/api/register",
			body,
			config,
		);
		dispach({
			type: REGISTER_SUCCESS,
			payload: res.data,
		});
		console.log(res.data);
	} catch (err) {
		alert(err);
		dispach({
			type: REGISTER_FAIL,
		});
	}
};
