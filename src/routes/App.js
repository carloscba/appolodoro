import React, { Component } from 'react'
import { BrowserRouter as Router, Route, link } from 'react-router-dom'
//Redux
import { connect } from 'react-redux'
import getDispatchs from '../store/dispatchs'
//Styles
import style from '../lib/bootstrap.css'
//Routes
import Home from './Home'

class App extends Component{
    
    constructor(){
        super();
    }

    render(){
        return(
            <Router>
                <div>
                    <div className='container-fluid'>
                        <Route exact path='/:path' component={ Home }/>
                    </div>
                </div>
            </Router>
        )
    }

}

const mapStateToProps = state => {
    return {
        store : state
    }
}

const mapDispatchToProps = dispatch => {
    return getDispatchs(dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);