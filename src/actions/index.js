
import contact from '../apis/contact';

export const signIn = (userId,userName) =>{
  return{
      type:'SIGN_IN',
      payload:{userId,userName}
  }
}
export const signOut = () =>{
    return{
        type:'SIGN_OUT'
       
    }
  }

  export const fetchContacts = () =>{
    return async (dispatch) =>{
      const response = await contact.get(`/contacts`);
      dispatch({type:'FETCH_CONTACTS',payload:response.data})
    }
  }

  export const fetchContact = (id) =>{
    return async (dispatch) =>{
      const response = await contact.get(`/contacts/${id}`);
      dispatch({type:'FETCH_CONTACT',payload:response.data});
    }
  }

  export const createContact = (formValues) =>{
    return async (dispatch,getState) =>{
      const {userId} = getState().auth;
      const response = await contact.post('/contacts/',{...formValues,userId});
      dispatch({type:'CREATE_CONTACT',payload:response.data});
    }
  }

  export const editContact = (id,formValues) =>{
    return async (dispatch) =>{
      const response = await contact.patch(`contacts/${id}`,formValues);
      dispatch({type:'EDIT_CONTACT',payload:response.data});
    }
  }

  export const deleteContact = (id) =>{
    return async (dispatch) =>{
      const response = await contact.delete(`contacts/${id}`) ;
      dispatch({type:'DELETE_CONTACT',payload:response.data});
    }
  }

