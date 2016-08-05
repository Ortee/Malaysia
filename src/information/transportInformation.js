import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap';
import config from '../config.json';


import { Router, Link, Route, IndexRoute, hashHistory } from 'react-router';

export default class TransportInformation extends React.Component {
  constructor(){
    super();
    this.state = { data: false };
  }

  componentDidMount() {
    $.getJSON(__dirname + config.dataFolder + '/travel.json').done(function(data) {
      this.setState({data: data.travel});
    }.bind(this));
  }

  render() {
    if(this.state.data)
    {
      let row = [];
      this.state.data.forEach(function(travel, index) {
        row.push(<TableItem key={index} date={travel.date} startLocation={travel.startLocation} stopLocation={travel.stopLocation}
          startTime={travel.startTime} stopTime={travel.stopTime} status={travel.status} link={travel.link} />)
      });
      return(
        <div class="col-xs-10 col-xs-offset-1">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>DATA</th>
                  <th>START</th>
                  <th>STOP</th>
                  <th>WYLOT</th>
                  <th>LADOWANIE</th>
                  <th>STATUS</th>
                  <th>LINK</th>
                </tr>
              </thead>
              <tbody>
                {row}
              </tbody>
            </table>
          </div>
        </div>
      );
    } else {
      return(<div></div>);
    }
  }
};

export class TableItem extends React.Component {
  constructor(){
    super();
  }

  render() {
    var icon;
    if(this.props.status === 'NO') {
      icon = <div><i class="fa fa-spinner fa-pulse fa-lg fa-fw"></i><span class="sr-only">Loading...</span></div>
    } else if(this.props.status === 'YES') {
      icon = <i class="fa fa-plane fa-lg" aria-hidden="true"></i>
    } else {
      icon = <i class="fa fa-check fa-lg" aria-hidden="true"></i>
    }
    return(
      <tr>
        <td>{this.props.date}</td>
        <td>{this.props.startLocation}</td>
        <td>{this.props.stopLocation}</td>
        <td>{this.props.startTime}</td>
        <td>{this.props.stopTime}</td>
        <td>{icon}</td>
        <td><a href={this.props.link}>ZOBACZ</a></td>
      </tr>
    );
  }
};
