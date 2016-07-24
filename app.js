import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Startpage from './src/startPage/main';
import Calendar from './src/calendar/calendar';
import Galery from './src/galery/galery';
import Documents from './src/documents/documents';
import Background from './src/background';

require('./src/base.scss');

const content = document.getElementById('content');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Startpage}>
    </Route>
    <Route path="calendar" name="calendar" component={Calendar}></Route>
    <Route path="galery" name="galery" component={Galery}></Route>
    <Route path="documents" name="documents" component={Documents}></Route>
  </Router>,
content);
