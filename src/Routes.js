import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Projects from './views/Projects';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/projets'>
        <Projects />
      </Route>
    </Switch>
  );
};

export default Main;
