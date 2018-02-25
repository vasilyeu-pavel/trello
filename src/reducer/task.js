import { CHANGE_STATE_ADD_TASK_MENU, ADD_TASK } from '../constants'
import {boards} from '../fixtures'

const stateTask = {
	isOpen: false,
}

export default (state = stateTask, action) => {
    const { type, payload, randomId , date } = action

    switch (type) {
        case CHANGE_STATE_ADD_TASK_MENU: return {...state, isOpen: !state.isOpen}

       // case ADD_TASK: //надо сделать!
    }

    return state
}