import React,{useEffect,useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchContacts,fetchContactFiltered,clearContactFiltered} from '../../actions/index';


const ListContact = (props) => {
    const [searchTerm,setSearchTerm] = useState("");

    useEffect(() => {
        props.fetchContacts();
    }, [])
    
    useEffect(() => {
      if(searchTerm)
      {
        props.fetchContactFiltered(searchTerm);
        return;
      }
       
        
        if (searchTerm ===""){
            props.clearContactFiltered();
        }
    
    },[searchTerm])

    const renderAdmin = (userId,contactId) => {
     
        if(props.isSignedIn && userId===props.currentUser)
        {
        return(
        <div className="btn-admin-container">
        <Link to={`/contacts/edit/${contactId}`} className="action-btn btn-edit">Edit</Link>
        <Link to ={`/contacts/delete/${contactId}`} className="action-btn btn-delete">Delete</Link>
     </div>
      )
    }
}

 
    const renderContactCard = (contacts) =>{ 
      
        return contacts.map(contact =>{
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
            <div className="input-field">
                <input type ="text" value={searchTerm} onChange={(e) =>setSearchTerm(e.target.value)} placeholder="Filter Contacts..."/> 
           </div>
         
           {renderAddContactBtn()}
           {props.contactsFiltered && props.contactsFiltered.length > 0? renderContactCard(props.contactsFiltered): renderContactCard(props.contacts) }
        </div>
          
         
    )
}


const mapStateToProps = (state) =>{
    
    return{
        contacts:Object.values(state.contacts),
        contactsFiltered: state.contactFiltered.contacts,
        isSignedIn: state.auth.isSignedIn,
        currentUser:state.auth.userId
    }
}
export default connect(mapStateToProps,{fetchContacts,fetchContactFiltered,clearContactFiltered}) (ListContact);
