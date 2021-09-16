import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Footer from "./Footer";
import BottomSec from './BottomSec';
import Header from './Header.js';
import SearchComp from '../components/SearchComp'

class CategoryDetails extends Component {
    
    render() { // here it show that when u click on category u got some props through Link usage but we will need that data to show all pics
      const {location} = this.props;
      const id = location.state.id;
      const name = location.state.name;
      const mainWord = location.state.mainWord;
        return (
            <Fragment>
                <Header/>
            <div className="wedding--breadcrumb">
                    <h3 className="wedding--breadcrumb--link active">
                    <a href="/">{(mainWord) ? (mainWord) : ('Any') }</a>
                    </h3>
                    <FontAwesomeIcon icon={faAngleRight} />
                    <h2 className="wedding--breadcrumb--link ">
                    {name}
                    </h2>
            </div>
                <SearchComp id={id} />
                 {/* when we choose certain category we should pass it's id to search comp then to pagintion comp to it's whole data */}
                <BottomSec></BottomSec>
                <Footer></Footer>
            </Fragment>
          );
        
    }}


export default CategoryDetails;

