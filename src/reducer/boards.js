import { CHANGE_STATE_BOARDS, DELETE_BOARD, ADD_BOARD,
    ADD_TASK_TITLE, SET_SELECT_BOARD
} from "../constants";

import { normalizedBoards } from "../fixtures";
import produce from "immer";

const stateBoards = {
    isOpen: false,
    boards: normalizedBoards
};

export default (state = stateBoards, action) => {
    const { type, payload, randomId, date } = action;
    return produce(state, draft => {
    	switch (type) {
    		case CHANGE_STATE_BOARDS:
    			return {
    		 	isOpen: !draft.isOpen,
    		 	boards: state.boards
    		 };

    		case DELETE_BOARD:
    			return {
    				boards: state.boards.filter(board => board.id !== payload.id),
    				isOpen: draft.isOpen
    			};

    		case ADD_BOARD:
			  	 draft.boards.push({
			  		id: randomId,
			  		title: payload,
			  		date: date,
			  		task: []
			  	});

            case ADD_TASK_TITLE:
                draft.boards.forEach(function (element) {
                    if (element.id === payload.idBoards) {
                        element.task.push(randomId);
                    }
                });
    	}
    });
    return state;
};


