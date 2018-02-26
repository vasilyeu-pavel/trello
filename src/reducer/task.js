import { CHANGE_STATE_TASK_MENU, ADD_TASK_TITLE, GET_TASK_LIST } from '../constants'
import { normalizedTask } from '../fixtures'

const stateTask = {
	isOpen: true,
	task: normalizedTask
}

export default (state = stateTask, action) => {
    const { type, payload, randomId , date } = action

    switch (type) {
        case ADD_TASK_TITLE: 
        return {
        	task: state.task.concat({ id: randomId, title: payload.name }),
        	isOpen: state.isOpen,
        }

        case CHANGE_STATE_TASK_MENU: return {
        	task: state.task,
        	isOpen: !state.isOpen
        }

    }

    return state
}