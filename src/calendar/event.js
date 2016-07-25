import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap';

export class Event extends React.Component {
  constructor(){
    super();
  }
  render() {
    if(this.props.sideRight === false){
      return(
        <div>
          <div class="row">
            <div class="col-md-4 col-md-offset-4">
              <div class="dotLeft"> {this.props.eventDate} </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-5 lineContent">
              {this.props.eventText}
            </div>
            <Line sideRight={false}></Line>
          </div>
        </div>
      );
    } else {
      return(
        <div>
          <div class="row">
            <div class="col-md-4 col-md-offset-4">
              <div class="dotRight"> {this.props.eventDate} </div>
            </div>
          </div>
          <div class="row">
            <Line sideRight={true}></Line>
            <div class="col-md-5 lineContent">
              {this.props.eventText}
            </div>
          </div>
        </div>
      );
    }
  }
};

export class Line extends React.Component {
  constructor(){
    super();
  }
  render() {
    if(this.props.sideRight === false){
      return(
          <div class="col-md-2 line">
            <article class="bg-line bg-line--h"></article>
          </div>
      );
    } else {
      return(
          <div class="col-md-2 col-md-offset-5 line">
            <article class="bg-line bg-line--h"></article>
          </div>
      );
    }
  }
};
