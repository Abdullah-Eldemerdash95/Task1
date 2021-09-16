import { getCategories } from "./categories";
import { getPics } from "./pics";

// the cause of we made categories and pics actions and reducers that maybe in different data ways we got each one separated

export  function handleInitialData () {
  return function(dispatch) {
    return fetch('http://localhost:3000/people')
    .then(res=> res.json())
      .then((data) => {
        dispatch(getCategories(data))
        dispatch(getPics(data))
    });
  ;
}}