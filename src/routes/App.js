import React, { Component } from 'react';
import { BrowserRouter as Router, Route, link } from 'react-router-dom'

import Home from './Home'
import About from './About'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ Home }/>
          <Route exact path='/about' component={ About }/>
        </div>
      </Router>
    );
  }
}

export default App;
