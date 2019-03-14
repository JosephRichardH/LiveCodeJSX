import React, { Component } from 'react';
import MainRoute from "./Routes/MainRoute"
import { withRouter } from "react-router-dom";
import Navigation from "./Components/Navigation"

class AppAjax extends Component {
    postSignOut = () => {
        localStorage.setItem("islogin", false);
        localStorage.clear();
        this.props.history.push("/");
    };
    render () {
        return (
            <div className = "App">
            <Navigation postsignOut={this.postSignOut}/>
            <MainRoute />
            </div>
        );
    }
}

export default withRouter (AppAjax);
