import React, { Component } from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';
import * as actions from '../redux/actions/site'
import lottie from 'lottie-web';
import planeAnimation from '../animations/Plane.json';
import '../templates/routes/Lottie.css'

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
        this.animation = lottie.loadAnimation({
            container: this.refs.lottieDiv,
            animationData: planeAnimation,
            renderer: 'svg',
            loop: true,
            autoplay: false,
        })

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