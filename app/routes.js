import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch, // La première route qui match sera affichée
} from 'react-router-dom';

import Home from './components/Home/Home.js';
import NotFound from './components/NotFound/NotFound.js';
import Album from './components/Album/Album.js';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/street" render={props => <Album albumTitle={'street'} {...props} />} />
      <Route exact path="/portrait" render={props => <Album albumTitle={'portrait'} {...props} />} />
      <Route exact path="/landscape" render={props => <Album albumTitle={'landscape'} {...props} />} />
      <Route exact path="/astro" render={props => <Album albumTitle={'astro'} {...props} />} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);


export default Routes;
