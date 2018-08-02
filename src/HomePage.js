import React, { Component } from 'react'
import Page from './Page'
import HomePageHeader from './HomePageHeader'
import Shelf from './Shelf'

class HomePage extends Component {

    shelves = [
        ['currentlyReading', 'Currently Reading'],
        ['wantToRead','Want to Read'],
        ['read', 'Read']
    ]


    componentDidMount() {
        console.log(this.props.books);
    } 
    

    render() {
        return (
            <Page 
            headerContent={<HomePageHeader />}
            bodyContent={this.shelves.map(([key, value]) => (
                <Shelf
                    title={value}
                    books={this.props.books.filter((book) => book.shelf === key)}
                    updateBookShelf={this.props.updateBookShelf}
                />
            ))}
            />
        )
    }
}

export default HomePage