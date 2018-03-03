import { CHANGE_STATE_TASK_MENU, ADD_TASK_TITLE, ADD_COMMENT, HANDLE_DROP } from '../constants'
import { normalizedTask } from '../fixtures'
import produce from 'immer' 

const stateTask = {
	isOpen: true,
	task: normalizedTask,
}

export default (state = stateTask, action) => {
    const { type, payload, randomId , date } = action

    return produce(state, draft => {

        switch (type) {         
                
            case CHANGE_STATE_TASK_MENU:
                return {
                isOpen: !draft.isOpen,
                task: state.task
             }
             break;

            case ADD_TASK_TITLE:
                 draft.task.push({
                    id: randomId, 
                    title: payload.name, 
                    comments: [],
                })
                 break;

            case ADD_COMMENT:
                draft.task.forEach( function(element) {
                    if (element.id === payload.idTask) {
                        element.comments.push(randomId)
                    }
                })
                break;

            case HANDLE_DROP: {
                
                const { idComment, taskId, newTaskId } = action.payload
                draft.task.forEach( function(element) {
                    if (element.id === newTaskId) element.comments.push(idComment)
                });

                const objNew = arrayToObject(draft.task)
                const removeComment = objNew[taskId].comments.findIndex(id => id !== idComment)
                const oldTask = objNew[taskId].comments.splice(removeComment, 1)

                }   
        }   
    })

    return state
}

const arrayToObject = (array) =>
   array.reduce((obj, item) => {
     obj[item.id] = item
     return obj
   }, {})