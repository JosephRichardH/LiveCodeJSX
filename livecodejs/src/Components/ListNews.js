import React, { Component } from 'react';
import PropTypes from "prop-types";

const style = {
    maxWidth : "200px"
}

const ListNews = props => {
    return(
        <section className = "content">
        <h3>{props.title}</h3>

        <img style = {style} src = {props.img} alt = "img_teaser" className="img_teaser" />
        <div className ="right">{props.content}</div>
        </section>
    );
};

ListNews.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    img: PropTypes.string
};

export default ListNews;