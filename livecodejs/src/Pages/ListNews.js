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
const baseUrl = "https://newsapi.org/v2";
const urlHeadLine = baseUrl + "/top-headlines?country=id&apikey=" + apiKey;
const urlHeadLine1 = baseUrl + "/everything?q=Trade War&apikey=" + apiKey;

const ITEM_PER_PAGE = 5
const SHOW_ITEM_PAGE = 5

class ListNews extends Component {

    constructor (props){
        super(props);
        this.state = {
            listNews:[],
            listNews1:[],
            username: "",
            isLogin: false,
        }
        // this.top5 = this.top5.bind(this);
    }

    componentDidMount = () => { 
    // console.log(urlHeadLine)
    // const self = this;
    this.props.getUrlNews()
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
    
    get top5(){
        // const {listNews, username, isLogin}= this.state
        const data_potongan = this.props.listNews.slice(0,ITEM_PER_PAGE)
        const stories= data_potongan
    
        const tabel=stories.map((story, urut) =>
        <div>
        <tr style={{width :'100%'}}>
            <td class="nomorurutberita" >{'#' + (urut+1)} < a href={story.url}>{story.title}</a></td>
        </tr>
        <tr style={{width :'100%'}}>
            <td class="beritadisplay">
            <br/>
            {story.description}
            </td>
        </tr>
        </div>
        );
        return tabel
    }

    get bigtop5(){
        // const {listNews1, username, isLogin}= this.state
        const data_potongan = this.props.listNews1.slice(0,SHOW_ITEM_PAGE)
        const stories= data_potongan
    
        const tabel=stories.map((story, urut) =>
        <div>
            
            <tr>
                <td className="displaygambar"><img src={story.urlToImage}/></td>
            </tr>
            <tr>
                <td class="displayjudul">{story.title}</td>
            </tr>
            <tr>
                <td class="displayberita">{story.content}</td>
            </tr>
        </div>
        );
        return tabel;
    }


    handleInputChange = inputan => {
        console.log("event", inputan.target.value);
        let value = inputan.target.value

        this.setState(
            {
                search:value
            },
            () => {
                this.props.searchNews(value);
            }
        );
    };

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
        <img class="img-fluid icon-gallery" src={foto}/>
        <span class="gallery">NEWS</span>
        <hr/>
        <div class="container">
            <div class = "row jaraksearch">
                {/* <form action="">
                    <input type="name" class = "inputformnama" placeholder="Search something ...    "/>
                </form> */}
                <Search
                    title = "Cari"
                    placeholder="Ketik Kata Pencarian :D"
                    doSearch={this.handleInputChange}
                    keyword={this.state.search}
                    />
            </div>
        </div>
        <header>
            <a href="#" className = "listnav" onClick={() => this.Sports()}>Sports</a> 
            <a href="#" className = "listnav" onClick={() => this.DonaldTrump()}>Donald Trump</a> 
            <a href="#" className = "listnav" onClick={() => this.Jokowi()}>Jokowi</a> 
            <a href="#" className = "listnav" onClick={() => this.Prabowo()}>Prabowo</a> 
            <a href="#" className = "listnav" onClick={() => this.Pemilu()}>Pemilu</a> 
            <a href="#" className = "listnav" onClick={() => this.China()}>China</a> 
        </header>

        <div class = "container contentcontent">
        <div class = "row">
            <div class="col-md-4">
                <table style={{width :'100%'}}>
                <tr>
                    <td class="beritadisplay">Judul</td>
                </tr>
                {this.top5}
                </table>
            </div>
            <div class="col-md-8">
                <div class="row">
                    <table style={{width :'100%'}}>
                    {this.bigtop5}
                    {/* TampilanSearch */}
                    </table>
                </div>
                
            </div>        
        </div>
        </div>
        <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-6 marginfoot">
                    <img class="logo-foot" src="assets/logo/logo-alterra-academy-plain@2x.png"/><br/>
                    <span class="copyright">©Copyright Alterra Group 2019</span>
                </div>
                <div class="col-md-6 rowfoot">
                        <span id="follow">Follow Us On</span><br/>
                    <ul class="ulul">
                        <li class="medsos">
                            <img class="imgfoot" src={facebook}/><span class="medword">Facebook</span>
                        </li>
                        <li class="medsos">
                            <img class="imgfoot" src={twitter}/><span class="medword">Twitter</span><br/>
                        </li>
                        <li class="medsos">
                            <img class="imgfoot" src={instagram}/><span class="medword">Instagram</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
        </footer>
    </body>
            )};
  }
}
export default connect("islogin,username,password,listNews,listNews1",actions) (withRouter(ListNews))