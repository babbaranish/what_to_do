import {
	GET_TODOS,
	TODO_CHECKED,
	TODO_CHECKED_FAIL,
	DELETE_TODO,
	DELETE_FAILED,
} from "./todos.types";
const initialState = {
	todos: [],
	loading: true,
	error: {},
	msg: [],
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_TODOS:
			return {
				...state,
				todos: payload,
				loading: false,
			};

		case TODO_CHECKED_FAIL:
		case DELETE_FAILED:
			return {
				...state,
				loading: false,
				error: payload,
			};
		case TODO_CHECKED:
		case DELETE_TODO:
			return {
				...state,
				loading: false,
				msg: payload,
			};
		default:
			return state;
	}
}
