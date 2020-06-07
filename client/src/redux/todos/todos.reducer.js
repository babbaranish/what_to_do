import {
	GET_TODOS,
	POST_ERROR,
	TODO_CHECKED,
	TODO_UNCHECKED,
	TODO_CHECKED_FAIL,
} from "./todos.types";
const initialState = {
	todos: [],
	loading: true,
	error: {},
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
			return {
				...state,
				loading: false,
				error: payload,
			};
		case TODO_CHECKED:
			return {
				...state,
				loading: false,
				todos: payload,
			};
		default:
			return state;
	}
}
