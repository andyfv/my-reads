import React, { Component } from 'react'
import ProptType from 'prop-types'

class Book extends Component {

    render() {
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+ this.props.book.imageLinks.thumbnail +')' }}></div>
                        <div className="book-shelf-changer">
                            <select
                                onChange={(event) => this.props.updateBookShelf(this.props.book,event.target.value)}
                                value={this.props.book.shelf}
                            >
                                <optgroup label="Move To">
                                    <option value="here">Here</option>
                                </optgroup>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                        <div className="book-shelf-selected"></div>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">{this.props.book.authors.map((author) => author)}</div>
                </div>
            </li>
        )
    }
}

export default Book