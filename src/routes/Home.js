import React, { Component } from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';
import * as actions from '../redux/actions/site'

class Home extends Component {
    
    constructor(props){
        super(props)
    }

    render(){
        
        return (
            <div>
                <h1>Appolodoro</h1>
                <p>{ this.props.store.title }</p>
                <button onClick={ () => { this.props.actions.setLocale('en_EN')}}>Change Language ({ this.props.store.locale })</button>
            </div>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)