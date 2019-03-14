import React, { Component } from 'react';
import PropTypes from "prop-types";
class Search extends Component{
    render(){
        return(
            <section className="topsection">
                <h4>{this.props.title}</h4>
                <input
                    type="text"
                    name="search"
                    id="search"
                    value={this.props.keyword}
                    placeholder={this.props.placeholder}
                    onChange={this.props.doSearch}
                    />
            </section>
        )
    }
}

Search.propTypes = {
    title: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired 
};


export default Search;