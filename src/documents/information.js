import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap';
import ToggleMenu from '../togglemenu/togglemenu';
require('./information.scss');
export default class Information extends React.Component {
  constructor(){
    super();
    console.log('INFORMATION LOADED');
  }
  render() {
    return(
      <div class="container">
        <ToggleMenu></ToggleMenu>
        <div class="row">
          <div class="col-xs-12 col-md-8 col-md-offset-2 pageBackground">
            <div class="col-xs-10 col-xs-offset-1 pageLogo">
              INFORMACJE
            </div>
            <article>
              <div class="main"></div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}
