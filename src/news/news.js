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
        <div class="row">
          <div class="col-xs-8 col-sm-8 col-md-8 col-md-offset-2 pageBackground">
            <div class="col-md-10 col-md-offset-1 pageLogo">
              AKTUALNOSCI
            </div>
            <NewsList></NewsList>
          </div>
        </div>
      </div>
    );
  }
}
