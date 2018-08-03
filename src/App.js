import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import PropTypes from 'prop-types'
import SearchPage from './SearchPage'
import HomePage from './HomePage'
import 'normalize.css'

class App extends Component {

  state = { books: [] }
  
  // Update @this.state.books when book changed shelf
  updateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => this.getAllBooks())
  }

  // Get all logged books from BooksAPI
  getAllBooks() {
    this.fetchBooks()
  }

  // Fetch books after rendering
  componentDidMount() {
    this.fetchBooks()
  }    
  
  // Fetch all logged books from BooksAPI
  fetchBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => (
          <HomePage
            books={this.state.books}
            updateBookShelf={this.updateBookShelf}
          />
        )}
        />
        <Route exact path="/search" render={({history}) => (
          <SearchPage 
            books={this.state.books}
            updateBookShelf={this.updateBookShelf}
          />
        )}/>
      </div>
    );
  }
}

export default App