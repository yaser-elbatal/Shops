import { combineReducers } from "redux";
import general from "./generalReducer";
import auth from "./AuthReducer";


export default combineReducers({
    general,
    auth
});
