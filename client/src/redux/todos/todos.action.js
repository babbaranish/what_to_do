import {
	GET_TODOS,
	POST_ERROR,
	TODO_CHECKED,
	TODO_UNCHECKED,
	TODO_CHECKED_FAIL,
} from "./todos.types";
import axios from "axios";
export const getTodos = () => async (dispatch) => {
	try {
		const res = await axios.get("/api/todos");
		dispatch({
			type: GET_TODOS,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: {
				msg: err.response.statusText,
				status: err.response.status,
			},
		});
	}
};

export const changeTodo = ({ isCompleted }) => async (dispatch) => {
	try {
		const config = {
			headers: {
				"Content-Type": "application/json",
				"x-auth-token": localStorage.token,
			},
		};
		const body = JSON.stringify({ isCompleted });

		const res = await axios.patch("/api/todos/id", body, config);
		console.log(res);
		dispatch({
			type: TODO_CHECKED,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: TODO_CHECKED_FAIL,
			payload: {
				msg: err.response.statusText,
				status: err.response.status,
			},
		});
	}
};
