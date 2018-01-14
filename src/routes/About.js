import React, { Component } from "react";
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

class About extends Component {
    
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props.store)
        return (
            <div>
                <h1>About</h1>
                <button onClick = { () => {this.props.dispatch({
                    type: 'test',
                    payload : {}
                })} }>Test Reducer</button>
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

About.propTypes = {
    copy: PropTypes.object
};

About.defaultProps = {
    copy: copy
}

const mapStateToProps = (state, props) => {
    return {
        store :state
    }
}

export default connect(mapStateToProps)(About)