import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap';
import Event from './event';

export default class EventList extends React.Component {
  constructor(){
    super();
  }
  render() {
    return(
      <artice>
        <div id="eventList" class="col-xs-12 col-sm-12 col-md-12 ">
            <Event eventDate="01-01-2016" eventTitle="Wydarzenie 1" eventContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat pharetra nibh vitae efficitur. Morbi sit amet luctus libero, sit amet molestie tellus. Nunc auctor sit amet enim in egestas. Proin eget consequat risus, nec placerat lacus"></Event>
            <Event eventDate="02-01-2016" eventTitle="Wydarzenie 2" eventContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat pharetra nibh vitae efficitur. Morbi sit amet luctus libero, sit amet molestie tellus."></Event>
            <Event eventDate="03-01-2016" eventTitle="Wydarzenie 3" eventContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat pharetra nibh vitae efficitur. Morbi sit amet luctus libero, sit amet molestie tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat pharetra nibh vitae efficitur. Morbi sit amet luctus libero, sit amet molestie tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat pharetra nibh vitae efficitur. Morbi sit amet luctus libero, sit amet molestie tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat pharetra nibh vitae efficitur. Morbi sit amet luctus libero, sit amet molestie tellus."></Event>
            <Event eventDate="04-01-2016" eventTitle="Wydarzenie 4" eventContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat pharetra nibh vitae efficitur. Morbi sit amet luctus libero, sit amet molestie tellus."></Event>
          </div>
      </artice>
    );
  }
}
