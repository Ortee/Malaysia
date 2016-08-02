import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap';
import ToggleMenu from '../togglemenu/togglemenu';
import EventList from './eventList';
require('./calendar.scss');

export default class Calendar extends React.Component {
  constructor(){
    super();
    console.log('CALENDAR LOADED');
  }
  render() {
    return(
      <div class="container">
      <ToggleMenu></ToggleMenu>
        <div class="row">
          <div class="col-xs-12 col-md-8 col-md-offset-2 pageBackground">
            <div class="col-xs-10 col-xs-offset-1 pageLogo">
              TERMINARZ
            </div>
            <EventList></EventList>
          </div>
        </div>
      </div>
    );
  }
}
