import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap';
import NewsPost from './newsPost';

export default class NewsList extends React.Component {
  constructor(){
    super();
    this.state = { posts: false };
  }

  componentDidMount(){
    $.getJSON(__dirname + 'posts.json').done(function(data) {
      this.setState({posts: data.posts});
    }.bind(this));
  }

  render() {
    let rows = [];
    if(this.state.posts)
    {
      this.state.posts.forEach(function(post, index) {
        rows.push(<NewsPost key={index} eventDate={post.date} eventTitle={post.title} eventContent={post.shortDescription}></NewsPost>);
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
