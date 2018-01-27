import React, { Component } from 'react';
import { BrowserRouter as Router, Route, link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';
import * as actions from '../redux/actions/site'
import * as firebase from 'firebase'
import settings from '../settings/'

//Routes
import Home from './Home'
import About from './About'
//Components

//Firebase configuration
(settings.firebase.apiKey) && firebase.initializeApp(settings.firebase)

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

const mapStateToProps = (state, props) => {
  return {
      store : state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      actions : bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
