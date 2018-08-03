import React, { Component } from 'react';

class Page extends Component {
    render() {
        return (
            <div className="page">
                <header className="header">
                    <div className="header-wrapper">
                        <ol className="header-items">
                            {this.props.headerContent}
                        </ol>
                    </div>
                </header>
                <div className="body-content">
                    {this.props.bodyContent}
                </div>  
            </div>
        )
    }
}

export default Page