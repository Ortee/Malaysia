import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap';
import ToggleMenu from '../togglemenu/togglemenu';
import Gallery from 'react-photo-gallery';
require('./galery.scss');

export default class Galery extends React.Component {
  constructor(){
    super();
    this.state = { galery: false };
  }

  componentWillMount(){
    $.getJSON(__dirname + 'data/galery.json').done(function(data) {
      this.setState({galery: data.galery});
    }.bind(this));
  }

  render() {
    let PHOTO_SET = [];
    if(this.state.galery)
    {
      this.state.galery.forEach(function(photo, index) {
        PHOTO_SET.push({  src: photo.src, width: 200, height: 200, aspectRatio: 1.3,
          lightboxImage:{ src: photo.src, caption: photo.date +' '+ photo.caption}});
       });
      return(
        <div class="container">
          <ToggleMenu></ToggleMenu>
          <div class="row">
            <div class="col-xs-12 col-md-8 col-md-offset-2 pageBackground">
              <div class="col-xs-10 col-xs-offset-1 pageLogo">
                GALERIA
              </div>
              <article galeryContent>
                <Gallery photos={PHOTO_SET} />
              </article>
            </div>
          </div>
        </div>
      );
    }
    return(
      <div class="container">
        <ToggleMenu></ToggleMenu>
      <div class="row">
        <div class="col-xs-12 col-md-8 col-md-offset-2 pageBackground">
          <div class="col-xs-10 col-xs-offset-1 pageLogo">
            GALERIA
          </div>
          <article loadingGaleryContent>

          </article>
        </div>
      </div>
    </div>
    );
  }
}
