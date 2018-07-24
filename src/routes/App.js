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
import Lottie from './Lottie'
//Components
import Header from '../components/App/Header/'
import Footer from '../components/App/Footer/'
//Functions
import { checkProtocol, getLocale } from '../appolodoro/'

//Firebase configuration
(settings.firebase && settings.firebase.apiKey) && firebase.initializeApp(settings.firebase)

class App extends Component {
  
  componentWillMount = () => {
    checkProtocol()
    this.props.actions.setPath(getLocale().path)
    this.props.actions.setLocale(getLocale().locale)
    this.props.actions.setWorking(false)
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path='/' component={ Home }/>
          <Route exact path='/about' component={ About }/>
          <Route exact path='/lottie' component={ Lottie }/>
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
