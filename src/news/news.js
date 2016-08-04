import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap';
import ToggleMenu from '../togglemenu/togglemenu';
import NewsList from './newsList';
require('./news.scss');

export default class News extends React.Component {
  constructor(){
    super();
    console.log('NEWS LOADED');
  }
  render() {
    return(
      <div class="container">
      <ToggleMenu></ToggleMenu>
        <div class="row contentRow">
          <div class="col-xs-12 col-md-8 col-md-offset-2 pageBackground">
            <div class="col-xs-10 col-xs-offset-1 pageLogo">
              AKTUALNOSCI
            </div>
            <NewsList></NewsList>
          </div>
        </div>
      </div>
    );
  }
}
