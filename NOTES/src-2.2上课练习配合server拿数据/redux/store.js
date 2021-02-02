import {createStore,applyMiddleware} from 'redux'
import userReducer from './reducer'
import thunk from 'redux-thunk'

export default createStore(userReducer,applyMiddleware(thunk))