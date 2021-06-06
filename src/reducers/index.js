
import {combineReducers} from 'redux';
import authReducer from './AuthReducer';
import {reducer as formReducer} from 'redux-form';
import contactReducer from './ContactReducer';
import fetchContactFilteredReducer  from './FetchFilterContactReducer';


const allReducers = combineReducers({
    auth:authReducer,
    form:formReducer,
    contacts: contactReducer,
    contactFiltered:fetchContactFilteredReducer
  
   
})

export default allReducers;