import { ADD_COMMENT, DELETE_COMMENT } from "../constants";
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
        }
    });

    return state;
};
