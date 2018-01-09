import React, { Component } from "react";
import Layout from './Layout.js'
import Style from '../templates/pages/about'


class About extends Component {
    
    constructor(){
        super()
    }

    render(){
        return (
            <Layout>
                <h1>About Appolodoro</h1>
                <Style />
            </Layout>
        )
    }
}

export default About