import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import SearchPage from './SearchPage'
import FrontPage from './FrontPage'
import 'normalize.css'
class App extends Component {

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => (
          <FrontPage searchPage={SearchPage}/>
        )}/>
        <Route exact path="/search" render={({history}) => (
          <SearchPage />
        )}/>
      </div>
    );
  }
}

export default App;
