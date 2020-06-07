import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/auth.reducer";
import todosReducer from "./todos/todos.reducer";

const persistConfig = {
	key: "root",
	storage,
	whitelist: [""],
};

const rootReducer = combineReducers({ auth: authReducer, todos: todosReducer });

export default persistReducer(persistConfig, rootReducer);
