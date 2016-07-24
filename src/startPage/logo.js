var React = require('react');

var logoStyle = {
    color:'white',
    position:'absolute',
    opacity:'0.8',
    marginTop:'10%',
    fontSize:'8em',
    width: '100%',
    fontFamily: "'Lato', sans-serif",
    fontWeight: '900',
    textAlgin: 'center',
};
export default class Logo extends React.Component {
  constructor(){
    super();
  }
  render() {
    return(
      <div style={logoStyle}>MALEZJA</div>
    );
  }
}
