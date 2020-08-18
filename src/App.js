import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';

import Header from './Components/Header';
import Home from './Components/Home';
import Volunteer from './Components/Volunteer';
import Locate from './Components/Locate';
import NotFound from './Components/NotFound';
import Footer from './Components/Footer';

function App() {
  return (
  <BrowserRouter>
    <Switch>

      <Route exact path = '/'>
        <Home />
      </Route>

      <Route path="/volunteer">
        <Volunteer />
      </Route>

      <Route path="/locate">
          <Locate />
      </Route>

      <Route path="*">
        <NotFound />
      </Route>

    </Switch>
  </BrowserRouter>
  );
}

export default App;
