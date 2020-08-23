import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';

import Header from './Components/Header';
import Home from './Components/Home';
import Volunteer from './Components/Volunteer';
import Locate from './Components/Locate';
import NotFound from './Components/NotFound';
import Footer from './Components/Footer';
import Adopt from './Components/Adopt';
import Visit from './Components/Visit';
import Service from './Components/Service';

function App() {
  return (
  <BrowserRouter>
    <Switch>

      <Route exact path = '/'>
        <Home />
      </Route>

      <Route exact path="/volunteer">
        <Volunteer />
      </Route>

      <Route path="/locate">
          <Locate />
      </Route>

      <Route path="/adopt">
          <Adopt />
      </Route>

      <Route path="/visit">
          <Visit />
      </Route>

      <Route path="/service">
        <Service />
      </Route>

      <Route path="*">
        <NotFound />
      </Route>

    </Switch>
  </BrowserRouter>
  );
}

export default App;
