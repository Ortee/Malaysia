import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap';
import NewsPost from './newsPost';

export default class NewsList extends React.Component {
  constructor(){
    super();
  }
  render() {
    return(
      <artice>
        <div id="eventList" class="col-xs-12 col-sm-12 col-md-12 ">
            <NewsPost eventDate="01-01-2016" eventTitle="Wydarzenie 1" eventContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat pharetra nibh vitae efficitur. Morbi sit amet luctus libero, sit amet molestie tellus. Nunc auctor sit amet enim in egestas. Proin eget consequat risus, nec placerat lacus"></NewsPost>
            <NewsPost eventDate="02-01-2016" eventTitle="Wydarzenie 2" eventContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat pharetra nibh vitae efficitur. Morbi sit amet luctus libero, sit amet molestie tellus."></NewsPost>
            <NewsPost eventDate="03-01-2016" eventTitle="Wydarzenie 3" eventContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat pharetra nibh vitae efficitur. Morbi sit amet luctus libero, sit amet molestie tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat pharetra nibh vitae efficitur. Morbi sit amet luctus libero, sit amet molestie tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat pharetra nibh vitae efficitur. Morbi sit amet luctus libero, sit amet molestie tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat pharetra nibh vitae efficitur. Morbi sit amet luctus libero, sit amet molestie tellus."></NewsPost>
            <NewsPost eventDate="04-01-2016" eventTitle="Wydarzenie 4" eventContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat pharetra nibh vitae efficitur. Morbi sit amet luctus libero, sit amet molestie tellus."></NewsPost>
          </div>
      </artice>
    );
  }
}
