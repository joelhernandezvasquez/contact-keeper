import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchContacts} from '../../actions/index';


const ListContact = (props) => {
    
    useEffect(() => {
      props.fetchContacts();
    },[])

    const renderAdmin = (userId,contactId) => {
     
        if(props.isSignedIn && userId===props.currentUser)
        {
        return(
        <div className="btn-admin-container">
        <Link to={`/contacts/edit/${contactId}`} className="action-btn btn-edit">Edit</Link>
        <Link to ="/contacts/delete" className="action-btn btn-delete">Delete</Link>
     </div>
      )
    }
}

    const renderContactCard = () =>{ 

        return props.contacts.map(contact =>{
            return(
                <div className="contact-card" key={contact.id}>
                   <div className= "contact-info">
                      <h2 class="contact-card-heading">{contact.name}</h2>
                      <p> <i class="fa fa-envelope" aria-hidden="true"></i>{contact.email}</p>
                      <p> <i class="fa fa-phone" aria-hidden="true"></i>{contact.phone}</p>

                      {renderAdmin(contact.userId,contact.id)}
                      
                   </div>
                   <div className="contact-type contact-type-personal"> 
                    <p>{contact.contactType}</p> 
                   </div>
    
                </div>
    
            )
        }) 
        
    
}

   const renderAddContactBtn = () =>{
      if(props.isSignedIn)
      { 
          return(
              <Link to="/contacts/new" className="add-contact-btn">
                Add Contact
              </Link>
          )
      }
   }
    return (
       
       <div className="container">
            {/* it will change it to an input component */}
          
         
                <div className="input-field">
                <input type ="text" placeholder="Filter Contacts..."/> 
                </div>
              
         {renderAddContactBtn()}

          {renderContactCard()}
        </div>
          
         
    )
}

const mapStateToProps = (state) =>{
    
    return{
        contacts:Object.values(state.contacts),
        isSignedIn: state.auth.isSignedIn,
        currentUser:state.auth.userId
    }
}
export default connect(mapStateToProps,{fetchContacts}) (ListContact);
