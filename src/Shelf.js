import React, { Component } from 'react'
import { Panel, Collapse } from 'react-bootstrap'
import Book from './Book'

class Shelf extends Component {

    //   state = {
    //       open: true
    //   };

    //   toggleOpen = () => {
    //       this.setState({
    //           open: !this.state.open
    //       })
    //       console.log(this.state.open);
    //   }


    render () {
        return (
            <section className="shelf">
                <div className="shelf-title">
                    <h3>{this.props.title}</h3>
                </div>
                <div className="shelf-content">
                    <ol className="books-grid">
                        <Book />
                        < Book / >
                    </ol>
                </div>
            </section>
        )
    }
}

export default Shelf