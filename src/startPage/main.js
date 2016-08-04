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
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12">
            <Logo></Logo>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-8 col-sm-8 col-md-8 col-xs-offset-2 col-sm-offset-2 col-md-offset-2">
            <Menu></Menu>
          </div>
        </div>
      </div>
    );
  }
}
