import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./root-reducer";
import logger from "redux-logger";
const initialState = {};
const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
	middlewares.push(logger);
}

export const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middlewares)),
);

export const persistor = persistStore(store);

export default { store, persistStore };
