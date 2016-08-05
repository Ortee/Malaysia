import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap';
import Logo from './logo';
import Menu from './menu';

export default class Main extends React.Component {
  constructor(){
    super();
  }
  render() {
    return(
      <div class="container mainContrainer">
        <div class="frontPageContent">
          <div class="row">
            <div class="col-xs-12 logoContainer">
              <Logo></Logo>
            </div>
          </div>
          <div class="row logoContainer">
            <div class="col-xs-8 col-xs-offset-2 col-sm-offset-2 menuContainer">
              <Menu></Menu>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
