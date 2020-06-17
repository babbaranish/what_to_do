import {
	GET_TODOS,
	POST_ERROR,
	TODO_CHECKED,
	TODO_CHECKED_FAIL,
	DELETE_TODO,
	CREATE_TODO,
	UPDATE_TODO,
	TEMP_VALUE,
	DELETE_TEMP,
} from "./todos.types";
import axios from "axios";

export const getTodos = (res) => ({
	type: GET_TODOS,
	payload: res,
});

export const getTodosAsync = () => async (dispatch) => {
	try {
		const res = await axios.get("/api/todos");
		dispatch(getTodos(res.data));
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: {
				msg: err.response,
			},
		});
	}
};

export const checkTodo = (res) => ({
	type: TODO_CHECKED,
	payload: res,
});
export const changeTodo = ({ isCompleted, id, isActive }) => async (
	dispatch,
) => {
	try {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const body = JSON.stringify({ isCompleted, isActive });

		const res = await axios.patch(`/api/todos/${id}`, body, config);
		dispatch(checkTodo(res.data));
		const res1 = await axios.get("/api/todos");
		dispatch(getTodos(res1.data));
	} catch (err) {
		dispatch({
			type: TODO_CHECKED_FAIL,
			payload: {
				msg: err.response,
			},
		});
	}
};

export const deleteTodo = () => ({
	type: DELETE_TODO,
});

export const deleteTodoAsync = ({ id }) => async (dispatch) => {
	console.log(id);
	await axios.delete(`/api/todos/${id}`);
	dispatch(deleteTodo());
	try {
		const res = await axios.get("/api/todos");
		dispatch(getTodos(res.data));
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: {
				msg: err.response,
			},
		});
	}
};

export const createTodo = (res) => ({
	type: CREATE_TODO,
	payload: res,
});

export const createTodoAsync = ({ todo, deleteWhen }) => async (dispatch) => {
	try {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const body = JSON.stringify({ todo, deleteWhen });

		const res = await axios.post(`/api/todos`, body, config);

		dispatch(createTodo(res.data));
		const res1 = await axios.get("/api/todos");
		dispatch(getTodos(res1.data));
	} catch (err) {
		dispatch({
			type: TODO_CHECKED_FAIL,
			payload: {
				msg: err.response,
			},
		});
	}
};

export const updateTodo = (res) => ({
	type: UPDATE_TODO,
	payload: res,
});

export const updateTodoAsync = ({ todo, deleteWhen, id }) => async (
	dispatch,
) => {
	try {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const body = JSON.stringify({ todo, deleteWhen });

		const res = await axios.put(`/api/todos/${id}`, body, config);

		dispatch(updateTodo(res.data));
		const res1 = await axios.get("/api/todos");
		dispatch(getTodos(res1.data));
	} catch (err) {
		dispatch({
			type: TODO_CHECKED_FAIL,
			payload: {
				msg: err.response,
			},
		});
	}
};

export const addTemp = (res) => ({
	type: TEMP_VALUE,
	payload: res,
});

export const asyncAddTemp = ({ title, id, deleteAt }) => (dispatch) => {
	const res = { title, id, deleteAt };
	dispatch(addTemp(res));
};

export const deleteTemp = () => ({
	type: DELETE_TEMP,
});
export const asyncDeleteTemp = () => (dispatch) => {
	dispatch(deleteTemp());
};
