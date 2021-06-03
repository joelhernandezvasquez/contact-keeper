
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

 

  export const createContact = (formValues) =>{
   
    return async (dispatch,getState) =>{
      const {userId} = getState().auth;
     const response = await contact.post('/contacts',{...formValues,userId});
     console.log(response);
     dispatch({type:'CREATE_CONTACT', payload:response.data});

    

  }
  }

  

