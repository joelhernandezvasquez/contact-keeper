import React from 'react';
import "../sass/main.scss";
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="header">
            <h1 className="logo-brand">
                    <i className="fa fa-address-card-o" aria-hidden="true"></i> 
                    Contact Keeper
            </h1>

            <GoogleAuth/>
        </div>
    )
}

export default Header;
