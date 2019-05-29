import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import _ from 'lodash';

class App extends Component {
  renderPosts(){
    return _.map(this.props.posts, (post, key) => {
      return (
        <div className="posts">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    );
  });
}

    //where your posts live. _.map is a lodash fn that returns an array of jsx


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

//create connect statement and bind to form.
form = connect(state => ({
  posts: state.posts
}), {})(form);

export default form;
