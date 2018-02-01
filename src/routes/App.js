import React, { Component } from 'react';
import { BrowserRouter as Router, Route, link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';
import * as actions from '../redux/actions/site'

//Routes
import Home from './Home'
import About from './About'
//Components
import Header from '../components/App/Header/'
import Footer from '../components/App/Footer/'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path='/' component={ Home }/>
          <Route exact path='/about' component={ About }/>
          <Footer/>
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
