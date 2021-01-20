import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../views/Home';
import Projects from '../../views/Projects';
import Contact from '../../views/Contact';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/projets'>
        <Projects />
      </Route>
      <Route exact path='/contact'>
        <Contact />
      </Route>
    </Switch>
  );
};

export default Main;
