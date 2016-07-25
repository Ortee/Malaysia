import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap';
import classNames from 'classnames';

export class Event extends React.Component {
  constructor(){
    super();
    this.state = { isHovered: false };
  }

  hoverIn() {
    this.setState({ isHovered: true });
  }

  hoverOut() {
    this.setState({ isHovered: false });
  }
  render() {
    let { isHovered } = this.state;
    let textClasses = 'col-md-5 lineContent';
    let dotClasses = ' ';
    let lineClasses = ' ';
    if(!this.props.sideRight) {
      dotClasses += ' dotLeft';
    } else {
      dotClasses += ' dotRight';
    }
    if(this.props.last) {
      textClasses = 'col-md-4 col-md-offset-4 lineContent';
    }
    if(isHovered) {
      lineClasses += ' lineHover';
      textClasses += ' textHover';
      dotClasses += ' dotHover';
    }
    
    if(this.props.sideRight === false){
      return(
        <div onMouseOver={this.hoverIn.bind(this)} onMouseOut={this.hoverOut.bind(this)}>
          <div class="row">
            <div class="col-md-4 col-md-offset-4">
              <div class={dotClasses}> {this.props.eventDate} </div>
            </div>
          </div>
          <div class="row">
            <div class={textClasses} style={this.hoverStyles}>
              {this.props.eventText}
            </div>
            <Line lineClasses={lineClasses} sideRight={this.props.sideRight} last={this.props.last}></Line>
          </div>
        </div>
      );
    } else {
      return(
        <div onMouseOver={this.hoverIn.bind(this)} onMouseOut={this.hoverOut.bind(this)}>
          <div class="row">
            <div class="col-md-4 col-md-offset-4">
              <div class={dotClasses}> {this.props.eventDate} </div>
            </div>
          </div>
          <div class="row">
            <Line lineClasses={lineClasses} sideRight={this.props.sideRight} last={this.props.last}></Line>
            <div class={textClasses} style={this.hoverStyles}>
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
    let lineClasses = 'col-md-2 line' + this.props.lineClasses;
    if(this.props.sideRight === true){ lineClasses += ' col-md-offset-5'; };
    if(this.props.last === true) {
      var lineStyle = {visibility: 'hidden'}
    } else {
      var lineStyle = {visibility: 'visible'}
    }
    return(
      <div class={lineClasses}>
        <article class="bg-line bg-line--h" style={lineStyle}></article>
      </div>
    );
  }
};
