import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import userReducer from './reducer'
export default createStore(userReducer,applyMiddleware(thunk))



