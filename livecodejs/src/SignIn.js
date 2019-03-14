import React, { Component } from 'react';
import axios from "axios";
import { withRouter } from "react-router-dom"
import { connect } from "unistore/react";
import { actions } from "./Store";

class SignIn extends Component {
    
    afterLogIn = () => {
        this.props.postLogIn().then(() => {
            this.props.history.replace("/profile")
        })
    }
    
    render () {
        console.log (this.props);
        return(
            <section className = "content signin">
            <form onSubmit={inputan => inputan.preventDefault()}>
            <h4>SignIn</h4>
            <div>
                <input
                type = "text"
                name = "username"
                placeholder = "Username"
                onChange = {inputnama => this.props.setField(inputnama)}/>
            </div>
            <div>
                <input
                type = "password"
                name = "password"
                placeholder = "Password"
                onChange = {inputpassword => this.props.setField(inputpassword)}/>
            </div>
            <button onClick={() => this.afterLogIn()}>SignIn</button>
            <button type="reset">Reset</button>
            </form>
            </section>
        );
    }
}


// export default withRouter(SignIn);

// --> dipanggi di komponen yang mau dipakai
export default connect("islogin,username,password",actions)(withRouter(SignIn)); 
