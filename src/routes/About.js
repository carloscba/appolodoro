import React, { Component } from "react";
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import styles from '../templates/routes/About.css'

class About extends Component {
    
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <h1 style={ styles.title }>About</h1>
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