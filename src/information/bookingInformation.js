import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap';
import config from '../config.json';

export default class BookingInformation extends React.Component {
  constructor(){
    super();
    this.state = { data: false };
  }

  componentDidMount() {
    $.getJSON(__dirname + config.dataFolder + '/booking.json').done(function(data) {
      this.setState({data: data.booking});
    }.bind(this));
  }

  render() {
    if(this.state.data)
    {
      let rows = [];
      this.state.data.forEach(function(book, index) {
        rows.push(<Localizaiton key={index} city={book.city} localization={book.localization} days={book.days} mark={book.mark}
        imageLink={config.dataFolder + '/galery/' + book.imageLink}/>);
      });
      return(
        <div class="row">
          {rows}
        </div>
      );
    } else {
      return(<div></div>);
    }
  }
};

export class Localizaiton extends React.Component {
  constructor(){
    super();
  }

  render() {
    return(
      <div class="col-xs-12 bookingContent">
        {this.props.city}
        <hr/>
        <div class="row">
          <div class="col-xs-6 bookingImgContent">
          <img class="bookingImg" src={this.props.imageLink} width="250" height="250"/>
          </div>
          <div class="col-xs-6 bookingText">
            <div class="row bookingTextRow">
              LOKALIZACJA: {this.props.localization}
            </div>
            <div class="row bookingTextRow">
              ILOŚĆ DNI: {this.props.days}
            </div>
            <div class="row bookingTextRow">
              OCENA(1-10): {this.props.mark}
            </div>
          </div>
        </div>
      </div>
    );
  }
};
