import React, { Component } from 'react';
import axios from "axios";
import createStore from "unistore";
import {withRouter} from "react-router-dom";
import { Provider, connect } from 'unistore/preact'
const apiKey="7f484ed4b9c942d9b917851f4bea7545";
const baseUrl = "https://api-todofancy.herokuapp.com/api/movies";

const DataPribadi = {
    api_key: "",
    email: "",
    password: "",
    full_name:"",
    username:"",
    listFilm:[],
    listRomance:[],
    listAction:[],
    listFiction:[],
    listComedy:[],
    islogin : false    
};
//Initial State
export const store = createStore(DataPribadi)
//Initial Action
export const actions    = store => ({
    setField: (state, event) => {
        return { [event.target.name]: event.target.value};
    },
    postLogOut: state => {
        return {islogin : false};
    },
    postLogIn: async state => {
        const data = { username : state.username , password : state.password};
        await axios
            .post("https://api-todofancy.herokuapp.com/api/auth", data)
            .then(response => {
                console.log ("postLogin resp", response.data);
                // if (response.data.hasOwnProperty("api_key")) {
                    store.setState({
                        islogin: true,
                        username:response.data.api_key,
                        avatar: response.data.user_data.full_name,
                        email: response.data.user_data.email
                    })
                console.log(store)
                // }
            })
            .catch (error => {console.log(error);})
    },

    getUrlFilms: async state =>{
    await axios
        .get(baseUrl)
        .then(function(response){
            store.setState({listFilm : response.data.movies});
            console.log(response.data.movies);
        })
        .catch(function(error){
            console.log(error);
        })
    }

})

