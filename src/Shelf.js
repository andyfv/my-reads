import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {

    render () {
        return (
            <section className="shelf">
                <div className="shelf-title">
                    <h3>{this.props.title}</h3>
                </div>
                <div className="shelf-content">
                    <ol className="books-grid">
                        {this.props.books.map((book) => (
                            <Book 
                            key={book.id}
                            book={book}
                            updateBookShelf={this.props.updateBookShelf}
                            />
                        ))}
                    </ol>
                </div>
            </section>
        )
    }
}

export default Shelf