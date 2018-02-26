import {CHANGE_STATE_BOARDS, GET_BOARDS, DELETE_BOARD, ADD_BOARD, ADD_TASK_BOARD,
	CHANGE_STATE_TASK_MENU, ADD_TASK_TITLE, GET_TASK_LIST
} from '../constants'

export function changeBoardsState() {
    return {
        type: CHANGE_STATE_BOARDS,
    }
}

export function changeTaskMenuState() {
    return {
        type: CHANGE_STATE_TASK_MENU,
    }
}


export function getBoards () {
	return {
		type: GET_BOARDS,
	}
}

export function deleteBoard (id) {
	return {
		type: DELETE_BOARD,
		payload: { id },
	}
}

export function addBoard ( name ) {
	return {
		type: ADD_BOARD,
		payload: { name },
		generateId: true,
	}
}

export function addTaskTitle ( name, idBoards ) {
    return {
        type: ADD_TASK_TITLE,
		payload: { name, idBoards },
		generateId: true,
    }
}

export function getTaskList () {
	return {
		type: GET_TASK_LIST,
	}
}
