import React, { Component } from 'react';
import Shelf from './Shelf'
import Page from './Page'
import FrontPageHeader from './FrontPageHeader'
class FrontPage extends Component {
    render() {
        return (
            <Page
                headerContent={<FrontPageHeader />}
                bodyContent={[
                    <Shelf title={'Reading'}/>,
                    <Shelf title={'Want to Read'}/>,
                    <Shelf title={'Want to Read'}/>]}
            />
        )
    }
}

export default FrontPage