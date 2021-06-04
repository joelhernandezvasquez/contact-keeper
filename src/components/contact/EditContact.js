import _ from 'lodash';
import React,{useEffect} from 'react';
import ContactForm from './ContactForm';
import {connect} from 'react-redux';
import {fetchContact,editContact} from '../../actions/index';
import "../../sass/main.scss";


const EditContact = (props) => {
    
   
    useEffect(() => {
      props.fetchContact(props.match.params.id);
    },[])

    const onSubmit = (formValues) =>{
      props.editContact(props.match.params.id,formValues)
    }
    
    return (
        <div className="contact-form-container">
           <h1 className="form-title">Edit Contact</h1> 
           <ContactForm initialValues = {_.pick(props.contact,'name','email','phone')} onSubmit = {onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state,ownProps)  =>
{
    return{
        contact: state.contacts[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps,{editContact,fetchContact})(EditContact);
