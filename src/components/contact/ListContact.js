import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchContacts} from '../../actions/index';


const ListContact = (props) => {
    
    useEffect(() => {
      props.fetchContacts() ;
    },[])
    return (
        <div>
            List all contacts
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        contacts: state.contacts
    }
}
export default connect(mapStateToProps,{fetchContacts}) (ListContact);
