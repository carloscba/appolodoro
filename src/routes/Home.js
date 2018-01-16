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
                <button onClick={ () => { this.props.dispatch({
                    type : "SITE_NEW_TITLE",
                    payload : {
                        title : "Nuevo Titulo"
                    }
                })}}>New Title</button>
                <button onClick={ () => { this.props.actions.setLocale('en_EN')}}>Change Language ({ this.props.store.locale })</button>
            </div>
        )
    }
}

const copy = {
    en_US : {
        title : 'Title'
    },
    es_ES:{
        title : 'Titulo'
    }
}

Home.propTypes = {
    copy: PropTypes.object
};

Home.defaultProps = {
    copy: copy
}

const mapStateToProps = (state, props) => {
    return {
        store : fromJS(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions : bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
//export default Index