import React, { Component } from "react";
import PropTypes from 'prop-types';
import Layout from '../components/Layout.js'
import Style from '../templates/pages/index'

class Index extends Component {
    constructor(props){
        super(props)
        this.copy = this.props.copy['es_ES']
    }

    showCopy = () => {
        this.copy = this.props.copy['en_US']
    }

    render(){
        
        return (
            <Layout>
                <h1>{ this.copy.title }</h1>
                <button onClick={ this.showCopy }>Show</button>
            </Layout>
        )
    }
}

const copy = {
    en_US : {
        title : <h1>Title</h1>
    },
    es_ES:{
        title : <h1>Titulo</h1>
    }
}

Index.propTypes = {
    copy: PropTypes.object
};

Index.defaultProps = {
    copy: copy
}

export default Index