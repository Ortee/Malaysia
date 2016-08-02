import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap';
import ToggleMenu from '../togglemenu/togglemenu';
require('./post.scss');

export default class Post extends React.Component {
  constructor(props){
    super(props);
  }

  createMarkup() {
    return {__html: this.props.text};
  };

  render() {
      return(
        <div>
          <div dangerouslySetInnerHTML={this.createMarkup()} />
        </div>
      );
  }
}
