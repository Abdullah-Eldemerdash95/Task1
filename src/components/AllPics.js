import React, { Component, Fragment } from "react";
import Footer from "./Footer";
import BottomSec from '../components/BottomSec';
import Header from '../components/Header.js';
import SearchCompMain from '../components/SearchCompMain'
import { Link } from "react-router-dom";

class AllPics extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
            <div className="wedding--breadcrumb">
                    <h3 className="wedding--breadcrumb--link active">
                    <Link to={'/'}>Gallery</Link>
                    </h3>
            </div>
                <SearchCompMain/>
                <BottomSec></BottomSec>
                <Footer></Footer>
            </Fragment>
          );
        
    }}


export default AllPics;

