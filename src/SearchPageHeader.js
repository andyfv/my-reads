import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class SearchPageHeader extends Component {

    render () {
        return (
            <React.Fragment>
                <li id="left-area">
                    <Link to="/">
                        <button id="home-btn">
                            <svg id="back-icon"></svg>
                            <span>Home</span>
                        </button>
                    </Link>
                </li>
                <li id="search-central-area">
                    <div id="search-box">
                        <svg id="search-icon-2"></svg>
                        <input id="search-page-input" 
                            type="text" 
                            placeholder="Search Books"
                            value={this.props.query}
                            onChange={(event) => this.props.updateQuery(event.target.value)}/>
                    </div>
                </li>
            </React.Fragment>
        )
    }
}

export default SearchPageHeader