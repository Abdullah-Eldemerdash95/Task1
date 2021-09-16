import { GET_PICS  }  from '../actions/pics'

export default function pics (state = {}, action) {
    switch(action.type) {
      case GET_PICS : 
        return {
          ...state,
          ...action.pics
        }
         default : 
        return state 
    }}

    