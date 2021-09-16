import { getCategories } from "./categories";
import { getPics } from "./pics";

// the cause of we made categories and pics actions and reducers that maybe in different data ways we got each one separated

export  function handleInitialData () {
  return function(dispatch) {
    return fetch('http://localhost:3000/people')// here we fetch fake APi Url but first we run json-server apiData.js
    .then(res=> res.json())
      .then((data) => { // after we get our data we start to dispatch action creators so it go to reducers
        dispatch(getCategories(data))
        dispatch(getPics(data))
    });
  ;
}}