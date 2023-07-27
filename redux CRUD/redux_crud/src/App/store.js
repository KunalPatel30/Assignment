import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const applythunk = [thunk];

const store = createStore(rootReducer,applyMiddleware(...applythunk))

export default store;