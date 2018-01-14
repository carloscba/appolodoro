import React, { Component } from "react";
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { fromJS } from 'immutable'

class Home extends Component {
    
    constructor(props){
        super(props)
    }

    render(){
        
        return (
            <div>
                <h1>Appolodoro</h1>
                <p>{ this.props.store.get('site').get('title') }</p>
                <button onClick={ () => { this.props.dispatch({
                    type : "SITE_NEW_TITLE",
                    payload : {
                        title : "Nuevo Titulo"
                    }
                })}}>New Title</button>
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

export default connect(mapStateToProps)(Home)
//export default Index