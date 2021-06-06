

export const fetchContactFilteredReducer = (state=[],action) =>
{
    switch(action.type)
    {
        case 'FETCH_CONTACT_FILTERED':return{
          ...state,
          contacts:action.payload
        }

        case 'CLEAR_FILTERED_CONTACT':return{
          ...state,
          contacts:[]
        }
         
        default:
            return state;
    }
}

export default fetchContactFilteredReducer; 