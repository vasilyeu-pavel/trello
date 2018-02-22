import {CHANGE_STATE_BOARDS} from '../constants'

const stateBoards = {
	isOpen: false
}

export default (state = stateBoards, action) => {
    const {type, payload} = action

    switch (type) {
        case CHANGE_STATE_BOARDS: return {isOpen: !state.isOpen}
    }

    return state
}