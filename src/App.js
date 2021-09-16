import React, { Component } from "react";
import './App.css';
import AllPics from './components/AllPics';
import AllCategories from './components/AllCategories';
import CategoryDetails from './components/CategoryDetails';
import PhotoDetails from './components/PhotoDetails';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import {handleInitialData} from './actions/shared'
import { connect } from 'react-redux'
 

class App extends Component {
  componentDidMount() {
    /* we use the main function or as said action creator with async fetch call here in app js so we can use this 
      inside store without calling it each time inside component did mount we did that only in Main component app.js
      - Any calls for data be called inside compDidMount */
    this.props.handleInitialData()
  }
 render() {
  return (
    <Router>
    <div className="App">
      <Switch>
       <Route exact path="/" component={AllPics} />
       <Route exact path={`/categories`}  component={AllCategories} />
       <Route exact path={`/categories/:category_id`}  component={CategoryDetails} />
       <Route exact path={`/categories/:category_id/:photo_id`}  component={PhotoDetails} />
       </Switch>
       
    </div>
    </Router>
);
}
}
// we use connect so we can pass data through mapStateToProps and if we want pass function as props 
export default connect(null,{handleInitialData})(App);
