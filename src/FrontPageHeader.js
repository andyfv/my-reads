import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class FrontPageHeader extends Component {
    render() {
        return (
            <React.Fragment>
                <li id="left-area">
                    <p id="title">MyReads</p>
                </li>
                <li id="central-area"></li>
                <li id="right-area">
                <Link to="/search">
                    <button id="search-btn">
                        <svg id="search-icon"></svg>    
                    </button>
                </Link>
                </li>
            </React.Fragment>
        )
    }
}

export default FrontPageHeader