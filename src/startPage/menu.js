var React = require('react');
var { Router, Route, Link , browserHistory } = require('react-router');

export default class Menu extends React.Component {
  constructor(){
    super();
  }

  render() {
    return(
      <div class="menu">
        <div class="col-md-3 menuButton">
          <Link to={'/news'}><i class="fa fa-plane fa-lg" aria-hidden="true"></i> Aktualności</Link>
        </div>
        <div class="col-md-3 menuButton">
          <Link to={'/calendar'}><i class="fa fa-calendar fa-lg" aria-hidden="true"></i> Terminarz</Link>
        </div>
        <div class="col-md-3 menuButton">
          <Link to={'/galery'}><i class="fa fa-camera fa-lg" aria-hidden="true"></i> &nbsp;Zdjęcia&nbsp;&nbsp;</Link>
        </div>
        <div class="col-md-3 menuButton">
          <Link to={'/information'}><i class="fa fa-info fa-lg" aria-hidden="true"></i> Informacje</Link>
        </div>
      </div>
    );
  }
}
