import React, { Component } from 'react';
import { Link, BrowserRouter as Redirect } from 'react-router-dom'
//Redux
import { connect } from 'react-redux'
import getDispatchs from '../store/dispatchs'
//Scaffold
import Locale from '../scaffold/Locale';
import config from '../config/app'
import AppolodoroFb from 'appolodoro-fb'

const app = config.get(window.env)
const shareFb = new AppolodoroFb(app.facebook.id)

class Home extends Component{

    constructor(){
        super();
    }

    shareFb = () => {
        shareFb.share('https://www.google.com.ar', null, 'mobile');
    }

    render(){
        const copy = new Locale().get('Home', this.props.store.locale);

        const layoutStart = (
            <div className='user-data'>
                <img src={ this.props.store.user.photoURL } className='user-data__photo' />
                <span className='user-data__name'>{ this.props.store.user.displayName }</span>
                <a className='user-data__button' onClick={ this.start } >Continuar</a>
                
                <button onClick={ 
                        function(){
                            console.log(this.props)
                            this.props.handlerIsAuthenticate(false);
                        }.bind(this)
                }>Logout</button>                
            </div>
        );

        return(
            <div className='row home'>
                <ul>
                    <li>Locale: { this.props.store.locale} <button onClick={ 
                        function(){
                            let newLocale = (this.props.store.locale === 'es') ? 'en' : 'es'
                            this.props.handlerLocale(newLocale);
                        }.bind(this)
                    }>Change locale</button></li>
                    <li>
                        <button onClick={this.shareFb} >Share on FB</button>
                    </li>
                </ul>
                <div className='col-xs-12 col-md-12 col-lg-12 col-xl-12'>
                    { copy.title }
                    { ( this.props.store.isAuthenticated ) 
                    ? layoutStart 
                    : <Link to='authenticate'>Authenticate</Link> }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        store : state
    }
}

const mapDispatchToProps = dispatch => {
    return getDispatchs(dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);