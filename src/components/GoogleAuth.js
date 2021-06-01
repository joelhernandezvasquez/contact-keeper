import React, { Component } from 'react';
import "../sass/main.scss";

class GoogleAuth extends Component {
    render() {
        return (
            <div>
               <button className="auth-btn"> 
                    <i className="fa fa-google" aria-hidden="true"></i>
                    Sign in with Google
               </button>
            </div>
        )
    }
}

export default GoogleAuth;
