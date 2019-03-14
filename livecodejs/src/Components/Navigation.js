import React from 'react';
import { Link, withRouter } from "react-router-dom"
import logo from "./logo.svg"
import { connect } from "unistore/react";
import { actions } from "../Store";

const Navigation = props => {
    return (
        <header>
            <img className="logo-head" src={logo}/>
            <nav id="topnav">
                <ul>
                <li className = "listnav"><Link to ="/">Home</Link></li>
                <li className = "listnav"><Link to ="/signin">SignIn</Link></li>
                <li className = "listnav"><Link to ="/profile">Profile</Link></li>
                <li className = "listnav"><Link to ="/" onClick={() => props.postSignOut()}>Signout</Link></li>
                <li className = "listnav"><Link to ="/romance">Romance</Link></li>
                <li className = "listnav"><Link to ="/action">Action</Link></li>
                <li className = "listnav"><Link to ="/fiction">Fiction</Link></li>
                <li className = "listnav"><Link to ="/comedy">Comedy</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default connect("islogin,username,password",actions)(withRouter(Navigation));