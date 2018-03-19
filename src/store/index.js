import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducer";
import logger from "../middleware/logger";

import setIdForBoard from "../middleware/setIdForBoard";

const enhancer = applyMiddleware(logger, thunk, setIdForBoard);

const store = createStore(reducer, {}, enhancer);

export default store;
