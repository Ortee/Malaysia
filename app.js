import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Startpage from './src/startPage/main';
import Calendar from './src/calendar/calendar';
import Galery from './src/galery/galery';
import Information from './src/information/information';
import Background from './src/background';
import News from './src/news/news';
import Post from './src/news/post';
import Nomatch from './src/tools/nomatch';
require('./src/base.scss');

const content = document.getElementById('content');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Startpage}>
    </Route>
    <Route path="news" name="news" component={News}></Route>
    <Route name="post" path="/post/:postName" component={Post}/>
    <Route path="calendar" name="calendar" component={Calendar}></Route>
    <Route path="galery" name="galery" component={Galery}></Route>
    <Route path="information" name="information" component={Information}></Route>
    <Route path="*" component={Nomatch}/>
  </Router>,
content);
