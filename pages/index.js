import React, { Component } from "react";
import Layout from '../components/Layout.js'
import Style from '../templates/pages/index'
import appLocale from 'appolodoro-locale'

class Index extends Component {

    constructor(props){
        super(props)
        this.copy = appLocale('es-ES','index', '../../../locale') 
    }

    showCopy = () => {
        console.log(this.copy)
    }

    render(){
        return (
            <Layout>
                <h1>{ (this.copy) ? this.copy.title : '--'}</h1>
                <button onClick={ this.showCopy }>Show</button>
                <Style />
            </Layout>
        )
    }
}

export default Index