import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap';

export default class EventList extends React.Component {
  constructor(){
    super();
  }
  render() {
    return(
      <artice>
        <div id="eventList" class="col-xs-12 col-sm-12 col-md-12 ">
          <div class="row">
            <div class="col-md-4 col-md-offset-4 pion">
              <div class="dot1"> 12 sie 2016 </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-2 col-md-offset-5 kreska">
            <article class="bg-line bg-line--h"></article>
            </div>
            <div class="col-md-5 kreskaContent">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere imperdiet erat in pharetra.
            </div>
          </div>

          <div class="row">
            <div class="col-md-4 col-md-offset-4 pion">
              <div class="dot2"> 13 sie 2016 </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-5 kreskaContent">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere imperdiet erat in pharetra.
            </div>
            <div class="col-md-2 kreska">
              <article class="bg-line bg-line--h"></article>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4 col-md-offset-4 pion">
              <div class="dot1"> 14 sie 2016 </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-2 col-md-offset-5 kreska">
            <article class="bg-line bg-line--h"></article>
            </div>
            <div class="col-md-5 kreskaContent">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere imperdiet erat in pharetra.
            </div>
          </div>

          <div class="row">
            <div class="col-md-4 col-md-offset-4 pion">
              <div class="dot2"> 15 sie 2016 </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-5 kreskaContent">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere imperdiet erat in pharetra.
            </div>
            <div class="col-md-2 kreska">
              <article class="bg-line bg-line--h"></article>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4 col-md-offset-4 pion">
              <div class="dot1"> 16 sie 2016 </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-2 col-md-offset-5 kreska">
            <article class="bg-line bg-line--h"></article>
            </div>
            <div class="col-md-5 kreskaContent">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere imperdiet erat in pharetra.
            </div>
          </div>

        </div>
      </artice>
    );
  }
}
