import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/auth.reducer";
import todosReducer from "./todos/todos.reducer";
import hiddenReducer from "./hidden/hidden.reducer";
const persistConfig = {
	key: "root",
	storage,
	whitelist: ["auth", "todos"],
};

const rootReducer = combineReducers({
	auth: authReducer,
	todos: todosReducer,
	hidden: hiddenReducer,
});

export default persistReducer(persistConfig, rootReducer);
