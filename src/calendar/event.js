import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap';


export default class Event extends React.Component {
  constructor(){
    super();
  }
  render() {
    return(
      <div class="row">
        <div class="col-xs-2 col-sm-2 col-md-2 eventDate">
          {this.props.eventDate}
        </div>
        <div class="col-xs-10 col-sm-10 col-md-10 eventConent">
          <p class="eventTitle">{this.props.eventTitle}</p>
          <p class="eventText">{this.props.eventContent}</p>
          <p class="readMore">czytaj dalej...</p>
        </div>
      </div>
    );
  }
}
