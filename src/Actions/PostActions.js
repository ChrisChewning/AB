import { database } from '../Firebase';
export const FETCH_POSTS = 'fetch_posts'; //destructures. you're exporting the fn

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

//Lifecycle.......
//1. our action is getPosts.
//2. action sends to middleware redux-thunk.

//whenever we call getPosts() we are saying that any time our db is updated, we will call the fn getPosts. The function will dispatch a type and payload. You then export the type.

//redux-thunk is needed b.c you need to export a function, as oppsed to an object of type and payload.

export function savePost(){

}

export function deletePost(id){

}
