import React, { Component } from "react";
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

class Home extends Component {
    
    constructor(props){
        super(props)
    }

    render(){
        
        return (
            <div>
                <h1>Appolodoro</h1>
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
        store :state
    }
}

export default connect(mapStateToProps)(Home)
//export default Index