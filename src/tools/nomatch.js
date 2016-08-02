import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap';
import ToggleMenu from '../togglemenu/togglemenu';

export default class Nomatch extends React.Component {
  constructor(){
    super();
  }
  render() {
    return(
      <div class="container">
      <ToggleMenu></ToggleMenu>
        <div class="row">
          <div class="col-xs-12 col-md-8 col-md-offset-2 pageBackground">
            <div class="col-xs-10 col-xs-offset-1 pageLogo">
              ZŁY LINK
            </div>
          </div>
        </div>
      </div>
    );
  }
}
