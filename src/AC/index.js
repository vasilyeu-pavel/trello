import {CHANGE_STATE_BOARDS, GET_BOARDS, DELETE_BOARD, ADD_BOARD} from '../constants'

export function changeBoardsState(isOpen) {
    return {
        type: CHANGE_STATE_BOARDS,
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