var React = require('react');
var ReactDOM = require('react-dom');

var backgroundStyle = {
  backgroundImage:"url('./img/background.jpg')",
  width:'100%',
  height:'100%',
  backgroundSize:'cover',
  position:'fixed',
  left:'0px',
  top:'0px',
  WebkitFilter: 'blur(3px)',
  MozFilter: 'blur(3px)',
  OFilter: 'blur(3px)',
  MsFilter: 'blur(3px)',
  filter: 'blur(3px)'
};
  var Background = React.createClass({
    render: function() {
        return(
          <div style={backgroundStyle}></div>
        );
    }
  });
  ReactDOM.render(<Background/>, document.getElementById('background'));
