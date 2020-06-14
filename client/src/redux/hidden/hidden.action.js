import { HIDE_TODO, UPDATE_HIDDEN_TODO } from "./hidden.types";

export const hideTodo = () => (dispatch) => {
	dispatch({ type: HIDE_TODO });
};

export const showHideUpdateTodo = () => (dispatch) => {
	dispatch({ type: UPDATE_HIDDEN_TODO });
};
