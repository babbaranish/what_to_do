import {
	GET_TODOS,
	TODO_CHECKED,
	TODO_CHECKED_FAIL,
	DELETE_TODO,
	DELETE_FAILED,
	CREATE_TODO,
	UPDATE_TODO,
	TEMP_VALUE,
	DELETE_TEMP,
} from "./todos.types";
const initialState = {
	todos: [],
	loading: true,
	error: {},
	msg: [],
	hidden: true,
	temp: [],
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
		case CREATE_TODO:
		case UPDATE_TODO:
			return {
				...state,
				loading: false,
				msg: payload,
			};
		case TEMP_VALUE:
			return {
				...state,
				temp: payload,
			};
		case DELETE_TEMP:
			return {
				...state,
				temp: null,
			};
		default:
			return state;
	}
}
