import { combineReducers } from "redux";
import userReducer from "../Features/userReducer";

const rootReducer = combineReducers({
    user:userReducer
});

export default rootReducer;