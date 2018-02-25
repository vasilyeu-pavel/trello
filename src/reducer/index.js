import {combineReducers} from 'redux'
import boardsReducer from './boards'
import taskReducer from './task'

export default combineReducers({
	boards: boardsReducer,
	task: taskReducer,
})