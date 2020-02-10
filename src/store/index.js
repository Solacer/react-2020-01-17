import {createStore, applyMiddleware} from 'redux'
import {reducer} from './reducers'
import {logging} from './middlewares/logging'
import {review} from './middlewares/review'

const enhancer = applyMiddleware(logging, review)

export const store = createStore(reducer, enhancer)

// ONLY FOR DEV
window.store = store
