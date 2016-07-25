import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap';
import { EventLeft, EventRight, Event } from './event';
export default class EventList extends React.Component {
  constructor(){
    super();
  }
  render() {
    return(
      <artice>
        <div id="eventList" class="col-xs-12 col-sm-12 col-md-12 ">
          <Event line={true} sideRight={true} eventDate="12 sie 2016" eventText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere imperdiet erat in pharetra."></Event>
          <Event line={true} sideRight={false} eventDate="13 sie 2016" eventText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere imperdiet erat in pharetra."></Event>
          <Event line={true} sideRight={true} eventDate="14 sie 2016" eventText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere imperdiet erat in pharetra."></Event>
          <Event line={true} sideRight={false} eventDate="15 sie 2016" eventText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere imperdiet erat in pharetra."></Event>
          <Event line={true} sideRight={true} eventDate="16 sie 2016" eventText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere imperdiet erat in pharetra."></Event>
          <Event line={false} sideRight={false} eventDate="17 sie 2016" eventText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere imperdiet erat in pharetra."></Event>
        </div>
      </artice>
    );
  }
}
