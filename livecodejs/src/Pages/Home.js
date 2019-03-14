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

import gambarRomance from "../assets/img/livecode/pasangan.jpg"
import gambarAction from "../assets/img/livecode/jomblo.jpg"
import gambarFiction from "../assets/img/livecode/jurrasic.jpg"
import gambarComedy from "../assets/img/livecode/kartu.jpg"

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

    
    Romance() {
        let path = '/romance';
        this.props.history.push(path);
      }
    Action() {
        let path = '/fiction';
        this.props.history.push(path);
      }
    Fiction() {
        let path = '/action';
        this.props.history.push(path);
      }
    Comedy() {
        let path = '/comedy';
        this.props.history.push(path);
      }

    render() {
        if (!this.props.islogin){
            // console.log(this.props.islogin)
            return <Redirect to = {{pathname:'/signin'}} />;
        } else {
            return(
                <body>
                <img className="img-fluid icon-gallery" src={foto} />
                <span className="gallery">Categories</span>
                <hr/>
                <div className="container">
                    <div className="row row-gallery">
                        <div className="col-md-3">
                            <img className="img-fluid img-gallery" src={gambarRomance}/>
                            <div className= "buttonitems">
                            <button className="btn btn-primary" onClick= {() => this.Romance()} >See Movies</button>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <img className="img-fluid img-gallery" src={gambarAction}/>
                            <div className= "buttonitems">
                                <button className="btn btn-primary" onClick= {() => this.Action()}>See Movies</button>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <img className="img-fluid img-gallery" src={gambarFiction}/>
                            <div className= "buttonitems">
                                <button className="btn btn-primary" onClick= {() => this.Fiction()}>See Movies</button>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <img className="img-fluid img-gallery" src={gambarComedy}/>
                            <div className= "buttonitems">
                            <button className="btn btn-primary" onClick= {() => this.Comedy()}>See Movies</button>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
            )}
  }
}
export default connect("islogin,username,password,listFilm,listRomance,listAction,listFiction,listComedy",actions) (withRouter(ListNews))