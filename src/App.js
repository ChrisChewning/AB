import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import _ from 'lodash';
import { getPosts } from './Actions/PostActions';

class App extends Component {
  componentWillMount() { //get data.
    this.props.getPosts();
  }
  renderPosts(){
    return _.map(this.props.posts, (post, key) => {
      return (
        <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    );
  });
}

    //where your posts live. _.map is a lodash fn that returns an array of jsx.
    //this.props.posts is where your posts live.

  render(){
  return (
    <div>
      <h1>hi</h1>
      {this.renderPosts()}
    </div>
  );
}
}

//create form and bind it to our App.
let form = reduxForm({
  form: 'NewPost'
})(App);

//Action Creator. Allows us to call these fns.
//Create connect statement and bind to form.
form = connect(state => ({
  posts: state.posts
}), { getPosts })(form); //action creator, allows us to call the fn from props.

export default form;
