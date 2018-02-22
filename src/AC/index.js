import {CHANGE_STATE_BOARDS} from '../constants'

export function changeBoardsState(isOpen) {
	console.log(isOpen);
    return {
        type: CHANGE_STATE_BOARDS,
        payload: isOpen
    }
}