import React, { Component } from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';
import * as actions from '../redux/actions/site'
import AppolodoroMediaRecorder from 'appolodoro-mediarecorder'

class Home extends Component {

    constructor(props) {
        super(props)
    }

    handleOnError = (error) => {
        console.log(error)
        this.setState({
            error: error
        })
    }

    handleUnavailable = (error) => {
        this.setState({
            show: true,
            error: error
        })
    }

    handleTakePhoto = (imageData) => { }

    render() {

        return (
            <div>
                <AppolodoroMediaRecorder
                    onError={this.handleOnError}
                    onTakePhoto={this.handleTakePhoto}
                    unavailable={this.handleUnavailable}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        store: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)