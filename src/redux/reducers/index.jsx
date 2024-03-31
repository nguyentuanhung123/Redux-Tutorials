import { combineReducers } from "redux";
import counterReducer from './counter.jsx'


const rootReducer = combineReducers({
    counter: counterReducer
});

export default rootReducer;