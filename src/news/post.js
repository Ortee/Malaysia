import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap';
import ParseText from './parseText';
import ToggleMenu from '../togglemenu/togglemenu';
import config from '../config.json';
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
      $.getJSON(__dirname + config.dataFolder + '/posts.json').done(function(data) {
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
              <div class="row">
                <artice>
                  <div class="col-xs-12 postContent">
                    <div class="col-xs-12 postText">
                      <div class="row postLine">
                        <div class="col-xs-4 postDetail">
                        <i class="fa fa-calendar-o" aria-hidden="true"></i> {this.state.post.date}
                        </div>
                        <div class="col-xs-4 postDetail">
                          <i class="fa fa-clock-o" aria-hidden="true"></i> {this.state.post.time}
                        </div>
                        <div class="col-xs-4 postDetail">
                          <i class="fa fa-map-marker" aria-hidden="true"></i> {this.state.post.localization}
                        </div>
                      </div>
                      <div class="row">
                        <ParseText text={this.state.post.longDescription}/>
                      </div>
                    </div>
                  </div>
                </artice>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return(<div></div>);
    }
  }
}
