import React, {Component} from 'react'
import './FooterUI.css';
import FooterUI from './FooterUI'
import PropTypes from 'prop-types';

class Footer extends Component{
  
    render() {
      return (<FooterUI/>)
    }
  }
  
  Footer.propTypes = {
  };
  
  Footer.defaultProps = {
  };
  
  export default Footer;