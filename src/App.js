import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import _ from 'lodash';
import { getPosts } from './Actions/PostActions';

class App extends Component {
  componentWillMount() { //get data.
    this.props.getPosts();
  }

//this takes in a field so we'll pass in one specific field.
//backtick allows us to do string interpolation and skip concatenation.
//the ... flattens out the object into antoher one. you can combine two objects together. makes another object with its keys and add another key onto it.

  renderField(field){
    return (
      <input type="text"
      placeholder={`Enter a ${field.label}...`} {...field.input}
    />
    )
  }

  onSubmit(values){ //title and body. this will have all our values.

  }

  renderPosts(){
    return _.map(this.props.posts, (post, key) => {
      const { handleSubmit } = this.props;
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
