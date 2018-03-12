import { CHANGE_STATE_TASK_MENU, ADD_TASK_TITLE, ADD_COMMENT, HANDLE_DROP, DELETE_COMMENT } from "../constants";
import { normalizedTask } from "../fixtures";
import produce from "immer";

const stateTask = {
    isOpen: false,
    task: normalizedTask
};

export default (state = stateTask, action) => {
    const { type, payload, randomId } = action;

    return produce(state, draft => {
        switch (type) {
            case CHANGE_STATE_TASK_MENU:
                return {
                    isOpen: !draft.isOpen,
                    task: state.task
                };
                break;

            case ADD_TASK_TITLE:
                draft.task.push({
                    id: randomId,
                    title: payload.name,
                    comments: []
                });
                break;

            case ADD_COMMENT:
                draft.task.forEach(function (element) {
                    if (element.id === payload.idTask) {
                        element.comments.push(randomId);
                    }
                });
                break;

            case HANDLE_DROP:
                const { idComment, taskId, newTaskId } = action.payload;
                const objNew = arrayToObject(draft.task);

                objNew[newTaskId].comments.push(idComment);

                const removeComment = objNew[taskId].comments.findIndex(id => id === idComment);
                objNew[taskId].comments.splice(removeComment, 1);
                break;

            case DELETE_COMMENT:
                const { idTask } = payload;
                const newObj = arrayToObject(draft.task);
                const deleteComment = newObj[idTask].comments.findIndex(id => id === payload.idComment);
                newObj[idTask].comments.splice(deleteComment, 1);
        }
    });

    return state;
};

const arrayToObject = (array) =>
    array.reduce((obj, item) => {
        obj[item.id] = item;
        return obj;
    }, {});
