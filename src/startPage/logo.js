var React = require('react');
require('./startPage.scss');

export default class Logo extends React.Component {
  constructor(){
    super();
  }
  render() {
    return(
      <div class="logo">MALEZJA</div>
    );
  }
}
