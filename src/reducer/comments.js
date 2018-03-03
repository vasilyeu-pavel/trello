import { ADD_COMMENT } from '../constants'
import { normalizedComments, HANDLE_DROP } from '../fixtures'
import produce from 'immer' 

export default (state = normalizedComments, action) => {
    const { type, payload, randomId , date } = action
    return produce(state, draft => {

        switch (type) {
            case ADD_COMMENT:
                draft.push({
                    id: randomId,
                    text: payload.commentText,
                    date: date
                })
                break;
        }

    })

    return state
}