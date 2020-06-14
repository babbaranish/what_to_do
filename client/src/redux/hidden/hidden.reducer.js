import { HIDE_TODO, UPDATE_HIDDEN_TODO } from "./hidden.types";
const initialState = {
	hidden: true,
	updateHidden: true,
};
export default function (state = initialState, action) {
	const { type } = action;
	switch (type) {
		case HIDE_TODO:
			return {
				...state,
				hidden: !state.hidden,
			};
		case UPDATE_HIDDEN_TODO:
			return {
				...state,
				updateHidden: !state.updateHidden,
			};
		default:
			return {
				...state,
			};
	}
}
