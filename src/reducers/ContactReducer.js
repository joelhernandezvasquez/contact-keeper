import _, { mapKeys } from 'lodash';

export const contactReducer = (state={},action) =>
{
    switch(action.type)
    {
        case 'CREATE_CONTACT': {
           
            return {...state,[action.payload.id]:action.payload}
        }
        
         case 'FETCH_CONTACTS':{
         
            return {...state,..._.mapKeys(action.payload,'id')}
         }

    
         case 'FETCH_CONTACT':{
        
            return {...state,[action.payload.id]:action.payload}
         }


         case 'EDIT_CONTACT':{
             return {...state,[action.payload.id]:action.payload}
         }
         case 'DELETE_CONTACT':{
             return _.omit(state,action.payload)
         }
           


         default:
             return state;
    }
}

export default contactReducer;
