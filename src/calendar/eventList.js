import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap';
import { EventLeft, EventRight, Event } from './event';

export default class EventList extends React.Component {
  constructor(){
    super();
    this.state = { data: false };
  }

  componentDidMount() {
    $.getJSON(__dirname + 'events.json').done(function(data) {
      this.setState({data: data.events});
    }.bind(this));
  }

  render() {
    let rows = [];
    let isLast = false;
    let dataLength = this.state.data;
    if(this.state.data)
    {
      this.state.data.forEach(function(event, index) {
        if(index === dataLength.length-1)
        {
          isLast = true;
        }
        if(index % 2 === 0)
        {
          rows.push(<Event key={index} last={isLast} sideRight={true} eventDate={event.date} eventText={event.description}></Event>);
        } else {
          rows.push(<Event key={index} last={isLast} sideRight={false} eventDate={event.date} eventText={event.description}></Event>);
        }
       });

      return(
        <artice>
          <div id="eventList" class="col-xs-12 ">
            {rows}
          </div>
        </artice>
      );
    }
    return(<div></div>);
  }
}
