import React, { Component } from "react";
import PropTypes from 'prop-types';
import Layout from './Layout.js'
import Style from '../templates/pages/index'
import AppolodoroMediaRecorder from 'appolodoro-mediarecorder'

class Index extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            copy : this.props.copy['es_ES']
        }
    }
    
    showCopy = () => {
        this.setState({
            copy : this.props.copy['en_US']
        })
    }

    handleOnTakePhoto = (blob) => {
        this.image.src = URL.createObjectURL(blob);
    }

    setRefImage = (element) => {
        this.image = element
    }

    render(){
        
        return (
            <Layout>
                <h1>{ this.state.copy.title }</h1>
                <p>Lorem ipsum</p>
                <button onClick={ this.showCopy }>En</button>
                <div>
                    <AppolodoroMediaRecorder onTakePhoto = { this.handleOnTakePhoto } />
                    <img ref={ this.setRefImage } />
                </div>
                <Style />
            </Layout>
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

Index.propTypes = {
    copy: PropTypes.object
};

Index.defaultProps = {
    copy: copy
}

export default Index