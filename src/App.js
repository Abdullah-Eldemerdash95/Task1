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

function mapStateToProps (store) {
  return {
    list: Object.values(store.categories)
  }
}


export default connect(mapStateToProps,{handleInitialData})(App);
