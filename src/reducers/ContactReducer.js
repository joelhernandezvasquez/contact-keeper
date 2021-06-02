

export const contactReducer = (state={},action) =>
{
    switch(action.type)
    {
      case 'CREATE_CONTACT':
          return {...state,[action.payload.id]:action.payload}

          default:
              return state;
    }
}

export default contactReducer;