import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../Home/Home.js';
import Help from '../Help/Help.js';
import HistoryPage from '../History/HistoryPage.js'

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path = '/' component = {Home} />
        <Route exact path = '/history' component = {HistoryPage} />
        <Route exact path = '/help' component = {Help} />
      </Switch>
    </main>
  )
}

export default Main;