import { HIDE_TODO } from "./hidden.types";

export const hideTodo = () => (dispatch) => {
	dispatch({ type: HIDE_TODO });
};
