import React, { Component } from 'react'
import Page from './Page'
import SearchPageHeader from './SearchPageHeader'
import Shelf from './Shelf'
import * as BooksAPI from './utils/BooksAPI'

class SearchPage extends Component {

    state = {
        query: '',
        showingBooks: []
    }

    // Used to update query based on input
    updateQuery = (query) => {
       this.setState({query: query})
       this.getSearchedBooks(query)
    }

    // Used to combine books and update showingBooks when props have changed 
    componentWillReceiveProps(nextProps) {
        this.combineBooks(this.state.showingBooks, nextProps.books)
    }

    // Fetch books based on @query and combined them with the logged 
    // books from the home page
    getSearchedBooks(query) {
        if(query) {
            BooksAPI.search(query).then((books) => {
                if(books.hasOwnProperty('error')){
                    this.setState({showingBooks: []})
                } else {
                    this.combineBooks(books, this.props.books)
                    this.setState({showingBooks: books})
                }
            })
        } else {
            this.setState({showingBooks: []}) 
        }
    } 

    // Combine combine fetched books and propsBooks
    combineBooks(fetchedBooks, propsBooks) {
        fetchedBooks.forEach((book, index) => {
            let currentBook = propsBooks.find((b) => b.id === book.id);
            book.shelf = currentBook ? currentBook.shelf : 'none';
            fetchedBooks[index] = book;
        })
        this.setState({showingBooks: fetchedBooks})
    }

    render() { 
        return (
            <Page 
                headerContent={
                    <SearchPageHeader
                        updateQuery={this.updateQuery}
                        query={this.state.query}
                    />}
                bodyContent={
                    <Shelf title="Results"
                        books={this.state.showingBooks}
                        updateBookShelf={this.props.updateBookShelf}
                    />}
            />
        )
    }
}

export default SearchPage