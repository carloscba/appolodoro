import React, {Component} from 'react'
import './HeaderUI.css';
import HeaderUI from './HeaderUI'
import PropTypes from 'prop-types';

class Header extends Component{
  
    render() {
      return (<HeaderUI/>)
    }
  }
  
  Header.propTypes = {
  };
  
  Header.defaultProps = {
  };
  
  export default Header;