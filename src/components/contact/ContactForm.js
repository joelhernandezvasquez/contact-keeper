import React, { Component } from 'react';
import {Field,reduxForm} from 'redux-form';

class ContactForm extends Component {
   
   onSubmit = (formValues) =>{
   this.props.onSubmit(formValues);
   
   }
   
    renderInput = (formProps) =>{
      
    return(
        <div className="input-field">
            <input {...formProps.input} type={formProps.type} placeholder = {formProps.placeholder}/>
            {this.renderError(formProps.meta)}
        </div>
    )
   }

   renderRadioButton = (formProps) =>{
       return(
           <div className="input-radio">
        <input {...formProps.input} type = {formProps.type} name={formProps.input.name} value={formProps.value} />
            <label>{formProps.label} </label>
            {console.log(formProps)}
           </div>
       )
   }

   renderError = ({error,touched}) =>{
    if(touched && error)
    {
        return(
            <div className="error-message"> 
             <p>{error}</p>
            </div>
        )
    }
}

    render() {
        return (
           
           <form onSubmit = {this.props.handleSubmit(this.onSubmit)}>
             <Field name="name" type="text" component = {this.renderInput} placeholder="Name" />
             <Field name="email" type="email" component = {this.renderInput} placeholder="Email" />
             <Field name="phone" type="tel" component = {this.renderInput} placeholder="Phone" />
             <p>Contact Type</p>
             <div className="radio-button-container">
                <Field name="personal" type="radio" component = {this.renderRadioButton} label="Personal" value="personal"/>
                <Field name="personal" type="radio" component = {this.renderRadioButton} label = "Professional" value = "professional"/>
             </div>
             
             <button className="submitBtn">Submit</button>
           </form>     
            
        )
    }
}

const validate = (formValues) =>{
   const errors = {};

   if(!formValues.name)
   {
       errors.name = "Name cannot be empty";
   }

   if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email) === false)
   {
       errors.email = "Looks this is not an email";
   }

   if(!formValues.phone)
   {
       errors.phone = "Phone number cannot be empty";
   }

 


   return errors;
}


export default reduxForm({
    form:'contactForm',
    validate
}) (ContactForm)

