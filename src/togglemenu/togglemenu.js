import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap';
var { Router, Route, Link , browserHistory } = require('react-router');
require('./togglemenu.scss');

export default class ToggleMenu extends React.Component {
  constructor(){
    super();
  }
  render() {
    return(
        <div class="row">
          <div class="col-xs-8 col-sm-8 col-md-8 col-md-offset-2 toggleMenu">
            <div class="col-xs-2 col-sm-2 col-md-2 toggleMenuButton">
              <Link to={'/'}><i class="fa fa-arrow-left fa-lg" aria-hidden="true"></i></Link>
            </div>
            <div class="col-xs-2 col-sm-2 col-md-2 toggleMenuButton">
              <Link to={'/'}><i class="fa fa-plane fa-lg" aria-hidden="true"></i></Link>
            </div>
            <div class="col-xs-2 col-sm-2 col-md-2 toggleMenuButton">
              <Link to={'/calendar'}><i class="fa fa-calendar fa-lg" aria-hidden="true"></i></Link>
            </div>
            <div class="col-xs-2 col-sm-2 col-md-2 toggleMenuButton">
              <Link to={'/galery'}><i class="fa fa-camera fa-lg" aria-hidden="true"></i></Link>
            </div>
            <div class="col-xs-2 col-sm-2 col-md-2 toggleMenuButton">
              <Link to={'/documents'}><i class="fa fa-info fa-lg" aria-hidden="true"></i></Link>
            </div>
          </div>
        </div>
    );
  }
}
