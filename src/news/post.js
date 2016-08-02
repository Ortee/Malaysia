import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap';
import ParseText from './parseText';
import ToggleMenu from '../togglemenu/togglemenu';
require('./post.scss');
export default class Post extends React.Component {
  constructor(props){
    super(props);
    console.log('POST LOADED');
    this.state = { post: false };
  }


    componentWillMount(){
      let link = this.props.params.postName;
      let postObj;
      $.getJSON(__dirname + 'posts.json').done(function(data) {
        data.posts.forEach(function(postData, index) {
          if(postData.link === link){
            postObj = postData;
          }
         });
        this.setState({post: postObj});
      }.bind(this));
    }


  render() {
    if(this.state.post)
    {
      return(
        <div class="container">
        <ToggleMenu></ToggleMenu>
          <div class="row">
            <div class="col-xs-12 col-md-8 col-md-offset-2 pageBackground">
              <div class="col-xs-10 col-xs-offset-1 pageLogo">
                {this.state.post.title}
              </div>
              <artice>
                <div class="col-xs-12 postContent">
                  <div class="col-xs-12 postText">
                  <ParseText text={this.state.post.longDescription}/>
                  </div>
                </div>
              </artice>
            </div>
          </div>
        </div>
      );
    } else {
      return(<div></div>);
    }
  }
}
