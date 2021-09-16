import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook , faInstagram} from '@fortawesome/free-brands-svg-icons'


class Footer extends Component {
    render() {
        return (
            <Fragment>
                <div className="footer--background">
                <div className="text--left">
                <h1 className="company--logo">Weds360</h1>
                <div className="social--media--links">
                <span>
                <a target="_blank" href="https://www.facebook.com/Weds360/" rel="noreferrer">
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                </a>
                </span>

                <span>
                <a target="_blank" href="https://www.instagram.com/weds360/" rel="noreferrer"> 
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </a>
                </span>
                </div>
                </div>
                <div className="text--center">
                © Copyright 
                <a target="_blank" href="/">
                <strong> Plus360</strong>. </a>
                All Rights Reserved
                </div>
                <div className="text--right">
                <ul>
                <li>
                <a href="/">Terms &amp; Conditions</a>
                </li>
                <li>
                <a href="/">Privacy Policy</a>
                </li>
                </ul>
                </div>
                </div>
            </Fragment>
          );
        
    }}


export default Footer;
