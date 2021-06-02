import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createContact} from '../../actions/index';

class CreateContact extends Component {
    
    createContact = () =>{
     this.props.createContact({
         name:'Miguel Martinez',
         email:'miguelmartinez@gmail.com',
         phone:'645-567-4443',
         contactType:'personal'
     })
    }
    render() {
        return (
            <div>
                Create Contact
                <button onClick={this.createContact}>Create</button>
            </div>
        )
    }
}



export default connect(null,{createContact})(CreateContact);
