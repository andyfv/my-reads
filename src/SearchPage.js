import React, { Component } from 'react'
import Page from './Page';
import SearchPageHeader from './SearchPageHeader'

class SearchPage extends Component {
    render() {
        return (
            <Page 
                headerContent={<SearchPageHeader/>}
                // body={}
            />
        )
    }
}

export default SearchPage