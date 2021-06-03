
import {combineReducers} from 'redux';
import authReducer from './AuthReducer';
import {reducer as formReducer} from 'redux-form';
import contactReducer from './ContactReducer';


const allReducers = combineReducers({
    auth:authReducer,
    form:formReducer,
    contacts: contactReducer
   
})

export default allReducers;