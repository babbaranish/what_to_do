import { HIDE_TODO } from "./hidden.types";
const initialState = {
	hidden: true,
};
export default function (state = initialState, action) {
	const { type } = action;
	switch (type) {
		case HIDE_TODO:
			return {
				...state,
				hidden: !state.hidden,
			};
		default:
			return {
				...state,
			};
	}
}
