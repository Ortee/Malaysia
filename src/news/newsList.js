import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap';
import NewsPost from './newsPost';
var { Router, Route, Link , browserHistory } = require('react-router');

export default class NewsList extends React.Component {
  constructor(){
    super();
    this.state = { posts: false };
  }

  componentWillMount(){
    $.getJSON(__dirname + 'data/posts.json').done(function(data) {
      this.setState({posts: data.posts});
    }.bind(this));
  }

  render() {
    let rows = [];
    if(this.state.posts)
    {
      this.state.posts.forEach(function(post, index) {
        rows.push(<Link to={`/post/${post.link}`}><NewsPost key={index} eventDate={post.date} eventTitle={post.title} eventContent={post.shortDescription}></NewsPost></Link>);
       });
      return(
        <artice>
          <div id="eventList" class="col-xs-12">
              {rows}
            </div>
        </artice>
      );
    }
    return(<div></div>);
  }
}
