import _ from 'lodash';

export const contactReducer = (state={},action) =>
{
    switch(action.type)
    {
        case 'CREATE_CONTACT': {
            console.log("inside de reducer");
            return {...state,[action.payload.id]:action.payload}
        }
        

         case 'FETCH_CONTACTS':{
        
            return {...state,..._.mapKeys(action.payload,'id')}
         }
           


         default:
             return state;
    }
}

export default contactReducer;
