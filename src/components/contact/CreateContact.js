import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createContact} from'../../actions/index';
import ContactForm from './ContactForm';
import "../../sass/main.scss";

class CreateContact extends Component {
    
    onSubmit = (formValues) =>{
     this.props.createContact(formValues);
    }
    render() {
        return (
            <div className="contact-form-container">
               <h1 className="form-title">Create Contact</h1> 
                
                <ContactForm onSubmit = {this.onSubmit} />
               
            </div>
        )
    }
}


export default connect(null,{createContact})(CreateContact);
