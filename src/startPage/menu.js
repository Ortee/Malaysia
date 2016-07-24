var React = require('react');
var { Router, Route, Link , browserHistory } = require('react-router');

var menuStyle = {
    color:'white',
    position:'absolute',
    marginTop:'40%',
    fontSize:'2.3em',
    width: '100%',
    fontFamily: "'Lato', sans-serif",
    fontWeight: '900',
    textAlgin: 'center',
};
var menuButtonStyle = {
  borderBottom:'3px solid white',
  textDecoration: 'none',
  color:'white',
  letterSpacing: '0.3mm',
  textAlgin: 'center',
}
export default class Menu extends React.Component {
  constructor(){
    super();
  }

  render() {
    return(
      <div style={menuStyle}>
        <div class="col-md-3 menuButton" style={menuButtonStyle}>
          <Link to={'/news'}><i class="fa fa-plane fa-lg" aria-hidden="true"></i> Aktualności</Link>
        </div>
        <div class="col-md-3 menuButton" style={menuButtonStyle}>
          <Link to={'/calendar'}><i class="fa fa-calendar fa-lg" aria-hidden="true"></i> Terminarz</Link>
        </div>
        <div class="col-md-3 menuButton" style={menuButtonStyle}>
          <Link to={'/galery'}><i class="fa fa-camera fa-lg" aria-hidden="true"></i> &nbsp;Zdjęcia&nbsp;&nbsp;</Link>
        </div>
        <div class="col-md-3 menuButton" style={menuButtonStyle}>
          <Link to={'/documents'}><i class="fa fa-info fa-lg" aria-hidden="true"></i> Dokumenty</Link>
        </div>
      </div>
    );
  }
}
