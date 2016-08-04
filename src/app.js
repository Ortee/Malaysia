import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Startpage from './startPage/main';
import Calendar from './calendar/calendar';
import Galery from './galery/galery';
import Information from './information/information';
import Background from './background';
import News from './news/news';
import Post from './news/post';
import Nomatch from './tools/nomatch';
require('./base.scss');

const content = document.getElementById('content');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Startpage}></Route>
    <Route path="news" name="news" component={News}></Route>
    <Route name="post" path="/post/:postName" component={Post}/>
    <Route path="calendar" name="calendar" component={Calendar}></Route>
    <Route path="galery" name="galery" component={Galery}></Route>
    <Route path="information" name="information" component={Information}></Route>
    <Route path="*" component={Nomatch}/>
  </Router>,
content);
