import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap';
import ToggleMenu from '../togglemenu/togglemenu';
import TransportInformation from './transportInformation.js'
import BookingInformation from './bookingInformation.js'
require('./information.scss');

export default class Information extends React.Component {
  constructor(){
    super();
    this.state = {  firstButtonClicked: true,
                    secondButtonClicked: false,
                    content : <TransportInformation/>
                };
  }

  clickButton(button){
    if(button === 1){
      this.setState({firstButtonClicked : true, secondButtonClicked: false, content: <TransportInformation/>});
    } else {
      this.setState({firstButtonClicked : false, secondButtonClicked: true, content: <BookingInformation/>});
    }
  }

  render() {
    let firstButtonClasses = 'col-xs-6 infoMenuButton';
    let  secondButtonClasses = 'col-xs-6 infoMenuButton';
    if(this.state.firstButtonClicked) {
      firstButtonClasses += ' clicked';
    }

    if(this.state.secondButtonClicked) {
      secondButtonClasses += ' clicked';
    }

    return(
      <div class="container">
        <ToggleMenu></ToggleMenu>
        <div class="row contentRow">
          <div class="col-xs-12 col-md-8 col-md-offset-2 pageBackground">
            <div class="col-xs-10 col-xs-offset-1 pageLogo">
              INFORMACJE
            </div>
            <div class="row">
              <div class="col-xs-16">
              <div onClick={this.clickButton.bind(this, 1)} class={firstButtonClasses}>TRANSPORT</div>
              <div onClick={this.clickButton.bind(this, 2)} class={secondButtonClasses}>ZAKWATEROWANIE</div>
              </div>
            </div>
            <div class="row transportContent contentRow">
              <article>
                {this.state.content}
              </article>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
