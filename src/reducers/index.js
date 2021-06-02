
import {combineReducers} from 'redux';
import authReducer from './AuthReducer';
import contactReducer from './ContactReducer';

const allReducers = combineReducers({
    auth:authReducer,
    contacts:contactReducer
})

export default allReducers;