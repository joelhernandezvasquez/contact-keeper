import React, { Component } from 'react';
import "../sass/main.scss";
import {connect} from 'react-redux';
import {signIn,signOut} from '../actions/index';

class GoogleAuth extends Component {

    componentDidMount(){
        window.gapi.load("client:auth2",()=>{
            window.gapi.client.init({
                clientId:'1067778745459-vgkdkbaj70lvnqn09455d6p54m0qv87s.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
              this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })
    }

    // this method is used to update the user auth state
    onAuthChange = (isSignedIn) =>{
      isSignedIn? this.props.signIn(this.auth.currentUser.get().getId(),this.auth.currentUser.get().getBasicProfile().Ve): this.props.signOut()
    }

    onSignIn = () =>{
      
        this.auth.signIn();
    }

    onSignOut = () =>{
       
        this.auth.signOut();
        
     }

    renderAuthButton()
    {  
        if(this.props.isSignedIn === null)
        {
            return null;
        }

        
        else 
        if(this.props.isSignedIn)
        {
          
           return(
               
               <button className="auth-btn" onClick = {this.onSignOut}>
                  <i className="fa fa-google" aria-hidden="true"></i>
                   Sign Out
               </button>
           )
        }
         else
        {
        return (
           
         
            <button className="auth-btn" onClick = {this.onSignIn}>
            <i className="fa fa-google" aria-hidden="true"></i>
             Sign in with Google
        </button>
        
        )
        }  
      
    }

    renderUserName = () =>{
      if(this.props.isSignedIn)
      {
          return(
              <p> Hello {this.props.userName}</p>
          )
      }
    }
    
    render() {
        
        return (
            <div className="user-info-container">
                  {this.renderUserName()}
                {this.renderAuthButton()} 
              
            </div>
        )
    }
}

const mapStateToProps = (state) =>
{

    return{
        isSignedIn:state.auth.isSignedIn,
        userName:state.auth.userName
    }
}

export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);
