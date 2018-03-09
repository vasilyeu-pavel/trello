import { ADD_COMMENT, DELETE_COMMENT, CHANGE_IMPORTANT_VALUE, CHANGE_TEXT_COMMENT } from "../constants";
import { normalizedComments } from "../fixtures";
import produce from "immer";

export default (state = normalizedComments, action) => {
    const { type, payload, randomId, date } = action;
    return produce(state, draft => {
        switch (type) {
            case ADD_COMMENT:
                draft.push({
                    id: randomId,
                    text: payload.commentText,
                    date: date
                });
                break;

            case DELETE_COMMENT:
                return state.filter(comment => comment.id !== payload.idComment);
                break;

            case CHANGE_IMPORTANT_VALUE:
                draft.forEach( function(element) {
                   if (element.id === payload.idComment)
                    element.important = payload.importantValue
                })
                break;

            case CHANGE_TEXT_COMMENT:
                draft.forEach( function(element) {
                   if (element.id === payload.idComment)
                    element.text = payload.text
                })
                break;    
        }
    });

    return state;
};
