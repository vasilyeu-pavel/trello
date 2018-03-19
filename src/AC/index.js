import { CHANGE_STATE_BOARDS, GET_BOARDS, DELETE_BOARD, ADD_BOARD,
    CHANGE_STATE_TASK_MENU, ADD_TASK_TITLE, SET_SELECT_BOARD, ADD_COMMENT,
	 HANDLE_DROP, DELETE_COMMENT, CHANGE_IMPORTANT_VALUE, CHANGE_TEXT_COMMENT, TEST_WEBSOCKET
} from "../constants";

export function changeBoardsState () {
    return {
        type: CHANGE_STATE_BOARDS
    };
}

export function changeTaskMenuState () {
    return {
        type: CHANGE_STATE_TASK_MENU
    };
}


export function getBoards () {
    return {
        type: GET_BOARDS
    };
}

export function deleteBoard (data) {
    return {
        type: DELETE_BOARD,
        payload: data.payload 
    };
}

export function addBoard (data) {
    return {
        type: ADD_BOARD,
        payload: data.payload,
        generateId: true
    }
}

export function addTaskTitle (name, idBoards) {
    return {
        type: ADD_TASK_TITLE,
        payload: { name, idBoards },
        generateId: true
    };
}

export function getTaskList () {
    return {
        type: GET_TASK_LIST
    };
}

export function setSelectBoard (selected) {
    return {
        type: SET_SELECT_BOARD,
        payload: { selected }
    };
}

export function sendComment (commentText, idTask) {
    return {
        type: ADD_COMMENT,
        payload: { commentText, idTask },
        generateId: true

    };
}

export function handleDrop (idComment, taskId, newTaskId) {
    return dispatch => {
        dispatch({
            type: HANDLE_DROP,
            payload: { idComment, taskId, newTaskId } });
    };
}

export function deleteComment (idComment, idTask) {
    return dispatch => {
        dispatch({
            type: DELETE_COMMENT,
            payload: { idComment, idTask } });
    };
}

export function sendChangeImportant (importantValue, idComment) {
    return {
        type: CHANGE_IMPORTANT_VALUE,
        payload: { importantValue, idComment }
    };
}

export function sendChangeTextComment (text, idComment) {
    return {
        type: CHANGE_TEXT_COMMENT,
        payload: { text, idComment }
    };
}
