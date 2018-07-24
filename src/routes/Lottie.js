import React, { Component } from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';
import * as actions from '../redux/actions/site'

class Lottie extends Component {

    
    constructor(props) {
        let animation;
        super(props)
    }

    render() {

        return (
            <div>
                <h1>Appolodoro</h1>
                <div ref="lottieDiv" id="lottieDiv"></div>
                <button onClick={ ()=> { 
                    this.animation.play()
                }}>Play</button>
                <button onClick={ ()=> { 
                    this.animation.pause()
                }}>Pause</button>                
            </div>
        )
    }

    componentDidMount = () => {
        this.animation = window.bodymovin.loadAnimation({
            //container: this.refs.lottieDiv,
            container: this.refs.lottieDiv, //document.getElementById('lottieDiv'),
            path: './animations/Plane.json', // Required
            renderer: 'svg', // svg/canvas/html Required
            loop: true, // Optional
            autoplay: false, // Optional
        })
        
        this.animation.addEventListener('onComplete', function(event){
            console.log('onComplete', event);
        });

        this.animation.addEventListener('loopComplete', function(event){
            console.log('loopComplete', event);
        });       
        
        this.animation.addEventListener('enterFrame', function(event){
            console.log('enterFrame', event);
        });               
        
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

export default connect(mapStateToProps, mapDispatchToProps)(Lottie)