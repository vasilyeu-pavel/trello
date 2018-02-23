import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import logger from '../middleware/logger'
import setIdForBoard from '../middleware/setIdForBoard'

const enhancer = applyMiddleware(logger, setIdForBoard)

const store = createStore(reducer, {}, enhancer)

//dev only
window.store = store

export default store