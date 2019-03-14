import React, { Component } from 'react';
import '../assets/css/main-news.css';
// import './assets/js/bootstrap.min.js';
import '../assets/css/bootstrap.min.css';
import foto from "../assets/ico/ico-gallery@2x.png"
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../Store";


import facebook from "../assets/ico/ico-facebook@2x.png";
import twitter from "../assets/ico/ico-twitter@2x.png";
import instagram from "../assets/ico/ico-instagram@2x.png";

import axios from "axios";
import Search from '../Components/Search';
const apiKey="7f484ed4b9c942d9b917851f4bea7545";
const baseUrl = "https://api-todofancy.herokuapp.com/api/movies";


class Fiction extends Component {

    constructor (props){
        super(props);
        this.state = {
            username: "",
            isLogin: false,
        }
        // this.top5 = this.top5.bind(this);
    }

    componentDidMount = () => { 
    // console.log(urlHeadLine)
    // const self = this;
    this.props.getUrlFilms()
    // axios
    //     .get(urlHeadLine)
    //     .then(function(response){
    //         self.setState({listNews : response.data.articles});
    //         console.log(response.data);
    //     })
    //     .catch(function(error){
    //         console.log(error);
    //     })
    // axios        
    //     .get(urlHeadLine1)
    //     .then(function(response){
    //         self.setState({listNews1 : response.data.articles});
    //         console.log(response.data);
    //     })
    //     .catch(function(error){
    //         console.log(error);
    //     });
    }
    
    get potonganFiction(){
        // const {listNews, username, isLogin}= this.state
        const data_potongan = this.props.listFilms.filter(astaga =>
            astaga['Category'] == "fiction"
        )
        const films= data_potongan
    
        const tabel=films.map((film, urut) =>
        <div class = "row row-gallery beritadisplay">
            <div class="col-md-12">
                <div class="row ">
                    <div class="col-md-2 displaygambar">
                        <img class="img-fluid img-gallery" src={films.Poster}/>
                    </div>
                    <div class="col-md-10 beritadisplay">
                        <table>
                            <tr class="displayjudul">
                                <td class="fontjudul">
                                    {film.Title}
                                </td>
                            </tr>
                            <tr class="displaytahun">
                                <td class="fonttahun">
                                    {film.Year}
                                </td>
                            </tr>
                            <tr class="displaydescription">
                                <td class="fontdescription"> 
                                    {film.Synopsis}
                                </td> 
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        );
        return tabel
    }





    // searchNews = async keyword => {
    //     console.log("searchNews",keyword);
    //     const self = this;
    //     if (keyword.length > 3){
    //         try{
    //             const response = await axios.get(
    //                 baseUrl + "/everything?q="+keyword+"&apikey=" + apiKey
    //             );
    //             console.log(response);
    //             self.setState({listNews1:response.data.articles})}
                
    //             catch(error){
    //                 console.log(error);
    //         }
    //     };
    // }; 

    Sports = inputan => {
        this.props.searchNews('sports')
    }
    DonaldTrump = inputan => {
        this.props.searchNews('Donald Trump')
        console.log(this.props.searchNews('Donald Trump'))
    }
    Jokowi = inputan => {
        this.props.searchNews('Jokowi')
    }
    Prabowo = inputan => {
        this.props.searchNews('Prabowo')
    }
    Pemilu = inputan => {
        this.props.searchNews('pemilu')
    }
    China = inputan => {
        this.props.searchNews('China')
    }

    render() {
        if (!this.props.islogin){
            // console.log(this.props.islogin)
            return <Redirect to = {{pathname:'/signin'}} />;
        } else {
            return(
                <body>
                <img class="img-fluid icon-gallery" src="assets/ico/ico-gallery@2x.png"/>
                <span class="gallery">NEWS</span>
                <hr/>
                <div class="container">
                    {this.potonganFiction}
                </div>
            </body>
            )};
  }
}
export default connect("islogin,username,password,listFilm,listRomance,listAction,listFiction,listComedy",actions) (withRouter(Fiction))