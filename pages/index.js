import React, { Component } from "react";
import Layout from '../components/Layout.js'
import Style from '../templates/pages/index'


class Index extends Component {
    
    constructor(){
        super()
    }

    render(){
        return (
            <Layout>
                <h1>Appolodoro</h1>
                <Style />
            </Layout>
        )
    }
}

export default Index