import { database } from '../Firebase';
export const FETCH_POSTS = 'fetch_posts';

export function getPosts(){
  return dispatch => { //redux-thunk
  database.on('value', data => { //database.on is a listener. //gives us a snapshot of our data.
    dispatch({
    type: FETCH_POSTS,
    payload: data.val()
      })
    })
  }
}

//Lifecycle...
//1. our action is getPosts.
//2. action sends to middleware. redux-thunk allows us to dispatch fns as opposed to object of type and payload. Now we can dispatch a function.

//we will
//whenever we call getPosts() we are saying that any time our db is updated, we will call the fn getPosts. The function will dispatch a type and payload.

export function savePost(){

}

export function deletePost(id){

}
