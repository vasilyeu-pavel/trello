import { CHANGE_STATE_TASK_MENU, ADD_TASK_TITLE, GET_TASK_LIST } from '../constants'
import { normalizedTask } from '../fixtures'
import produce from 'immer' 

const stateTask = {
	isOpen: true,
	task: normalizedTask,
    comments: [],
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

            case ADD_TASK_TITLE:
                 draft.task.push({
                    id: randomId, 
                    title: payload.name, 
                    comments: [],
                })

        }
    })

    return state
}