import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import TripPinPoints from './components/TripPinPoints';
import NotFound from './components/NotFound';
import tripPinPointsApp from './reducers';


let store = createStore(tripPinPointsApp);

class App extends Component {
  render() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={TripPinPoints} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
  }
}

export default App;
