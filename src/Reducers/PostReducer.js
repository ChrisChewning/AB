import {FETCH_POSTS} from '../Actions/PostActions';


export default function (state ={}, action) {
  switch (action.type) {
    case FETCH_POSTS:
    return action.payload; //all the posts we have. any time we get a post we'll dispatch an action to update our props to say 'heres all our new posts.'
    default:
      return state;
  }
}
