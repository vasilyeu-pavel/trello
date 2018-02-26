import {CHANGE_STATE_BOARDS, GET_BOARDS, DELETE_BOARD, ADD_BOARD,
 ADD_TASK_TITLE, GET_TASK_LIST } from '../constants'
import { normalizedBoards } from '../fixtures'

const stateBoards = {
	isOpen: false,
	boards: normalizedBoards,
}

export default (state = stateBoards, action) => {
    const { type, payload, randomId, date} = action

    switch (type) {
        case CHANGE_STATE_BOARDS: return {...state, isOpen: !state.isOpen}

        case GET_BOARDS: return {...state}

        case DELETE_BOARD:
	        return {
	        	boards: state.boards.filter(board => board.id !== payload.id),
	        }

	    case ADD_BOARD: return {
	    	boards: state.boards.concat({id: randomId, title: payload.name, date:  date, task: []}),
	    	isOpen: state.isOpen,
	    }

	    case ADD_TASK_TITLE: 	    	
	    	boards: state.boards.forEach( (board) => {
				if ( board.id === payload.idBoards ) {
					board.task.push(randomId)
				}
	    	})
	    	
	    }

    return state
}