import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import logger from 'redux-logger'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

const store = createStore(rootReducer, applyMiddleware(logger))

export { history, store }
