import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebook , faInstagram} from '@fortawesome/free-brands-svg-icons'
import Footer from "./Footer";
import BottomSec from './BottomSec';
import Header from './Header.js';
import { Link } from "react-router-dom";



class PhotoDetails extends Component {

    state={
        searchVal: ''
      }
  
            searchValChange= (e) => {
              this.setState({
                searchVal: e.target.value
              })
            }

    render() {
      const {location} = this.props;
      const categoryNumber = location.state.categoryNumber;
      const categoryName = location.state.categoryName;
      const title = location.state.title;
      const imageUrl = location.state.imageUrl;
        return (
            <Fragment>
                <Header/>
            <div className="wedding--breadcrumb">
                    <h3 className="wedding--breadcrumb--link active">
                    <a href="/en/categories?parent_menu=photos">Gallery</a>
                    </h3>
                    <FontAwesomeIcon icon={faAngleRight} />
                    <h2 className="wedding--breadcrumb--link active">
                    <Link to={{
                              pathname: `/categories/${categoryNumber}`,
                              state:{
                                id: categoryNumber,
                                name: categoryName,
                                imageUrl: imageUrl,
                              }}}>
                    {categoryName}
                    </Link>
                  
                    </h2>
                    <FontAwesomeIcon icon={faAngleRight} />
                    <h2 className="wedding--breadcrumb--link">
                    {title}
                    </h2>
            </div>
            <div className="single-photo--photos--container">
                <div className="row">
                <div className="photo--container">
                <div className="bg-img" >
                <img src={imageUrl} alt="Medium"/>
                </div>
                </div>
                </div>
                <div className="photo--description">
                      <h2>{title}</h2>
                      <h5>lines that were in mock api not created</h5>
                      <div className="photo--description--links">
                      <div className="photo--description--links--social">
                      <a target="_blank" href={imageUrl} rel="noreferrer"> <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon> </a>
                      <a target="_blank" href={imageUrl} rel="noreferrer"> <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                      </div>
                      </div>
                      </div>
                </div>
                
                <BottomSec></BottomSec>
                <Footer></Footer>
            </Fragment>
          );
        
    }}


export default PhotoDetails;


