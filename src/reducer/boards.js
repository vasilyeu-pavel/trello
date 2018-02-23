import {CHANGE_STATE_BOARDS, GET_BOARDS, DELETE_BOARD, ADD_BOARD} from '../constants'
import {boards} from '../fixtures'

const stateBoards = {
	isOpen: false,
	boards: boards,
}

export default (state = stateBoards, action) => {
    const { type, payload, randomId } = action
    console.log(action);

    switch (type) {
        case CHANGE_STATE_BOARDS: return {...state, isOpen: !state.isOpen}

        case GET_BOARDS: return {...state}

        case DELETE_BOARD:
	        return {
	        	boards: state.boards.filter(board => board.id !== payload.id),
	        }

	    case ADD_BOARD: return {
	    	boards: state.boards.concat({id: randomId, title: payload.name, task: []}),
	    	isOpen: state.isOpen,
	    }
    }

    return state
}