import React, { Component } from 'react';
import { Panel, Collapse } from 'react-bootstrap'

class FrontPage extends Component {


    render() {
        return (
            <div className="page">
                <header className="home-header">
                    <div className="home-header-wrapper">
                        <ol className="header-items">
                            <li id="left-area">

                            </li>
                            <li id="central-area">
                                <p id="title">MyReads</p>
                            </li>
                            <li id="right-area">
                                <button id="search-btn">
                                    <svg id="search-icon"></svg>
                                </button>
                            </li>
                        </ol>
                    </div>
                </header>
                <div className="home-content">

                </div>
            </div>
        )
    }
}

export default FrontPage