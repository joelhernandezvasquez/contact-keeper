import React, { Component } from 'react';
import Modal from '../../Modal';
import history from '../../history';
import{Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchContact,deleteContact} from '..//../actions/index';

 class DeleteContact extends Component {
    
   componentDidMount(){
      this.props.fetchContact(this.props.match.params.id);
     
   }
   
    renderActions = () =>{
        return(
            <>
            <button className="btn btn-delete" onClick = {() =>this.props.deleteContact(this.props.match.params.id)}>Delete</button>
            <Link to='/' className="btn btn-edit">Cancel</Link>
            </>
        )
    }

    closeModal = () =>{
       history.push('/');
    }

    renderContact = () =>{
        
      
        if(!this.props.contact)
          return "Are you sure you want to delete the contact?"
         else
        return `Are you sure you want to delete the contact:${this.props.contact.name}`
    }

    render() {
        return (
            
            <Modal
             onDissmiss = {this.closeModal}
             title = {"Delete Contact"}
             content ={this.renderContact()}
             actions = {this.renderActions()}
            />
            
        )
    }
}
const mapStateToProps = (state,ownProps) => {
    return{
        contact:state.contacts[ownProps.match.params.id]
    }
}
export default connect(mapStateToProps,{fetchContact,deleteContact}) (DeleteContact);
