import React, { Component } from 'react'
import Page from './Page'
import SearchPageHeader from './SearchPageHeader'
import Shelf from './Shelf'
import escapeRegExp from 'escape-string-regexp'
import * as BooksAPI from './utils/BooksAPI'

class SearchPage extends Component {

    state = {
        query: ''
    }
    
    searchFilter(book) {
        let searchFilter = [book.title, book.subtitle]
        book.authors.forEach((author) => searchFilter.push(author))
        if(book.categories){
            book.categories.forEach((category) => searchFilter.push(category)) 
        }
        console.log(searchFilter.join('|'));
        
        return searchFilter.join('|')
    }

    updateQuery = (query) => {
       this.setState({query: query}) 
    }

    componentDidMount() {
        //console.log(this.props.books);
    } 

    render() {
        let showingBooks 
        if(this.state.query) {
            const match = new RegExp(escapeRegExp(this.state.query), 'i')
            showingBooks = this.props.books.filter((book) => 
                match.test('/^(' + this.searchFilter(book) +')$/'))
        } else {
            showingBooks = this.props.books;
        }
        return (
            <Page 
                headerContent={
                    <SearchPageHeader
                        updateQuery={this.updateQuery}
                        query={this.state.query}
                    />}
                bodyContent={
                    <Shelf title="Results"
                        books={showingBooks}
                        updateBookShelf={this.props.updateBookShelf}
                    />}
            />
        )
    }
}

export default SearchPage