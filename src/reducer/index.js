import { combineReducers } from "redux";
import boardsReducer from "./boards";
import taskReducer from "./task";
import select from "./select";
import comments from "./comments";


export default combineReducers({
    boards: boardsReducer,
    task: taskReducer,
    select: select,
    comments: comments
});
