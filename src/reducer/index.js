import {combineReducers} from 'redux'
import boardsReducer from './boards'
import taskReducer from './task'
import select from './select'

export default combineReducers({
	boards: boardsReducer,
	task: taskReducer,
	select: select,
})