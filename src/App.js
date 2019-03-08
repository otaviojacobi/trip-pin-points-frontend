import React, { Component } from 'react';
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';

import TripPinPoints from './components/TripPinPoints';
import NotFound from './components/NotFound';
import tripPinPointsApp from './reducers';

import Login from "./components/Login";
import {auth} from "./actions"

let store = createStore(tripPinPointsApp, applyMiddleware(thunk));

class RootContainerComponent extends Component {

  componentDidMount() {
    this.props.loadUser();
  }

  PrivateRoute = ({component: ChildComponent, ...rest}) => {
    return <Route {...rest} render={props => {
      if (this.props.auth.isLoading) {
        return <em>Loading...</em>;
      } else if (!this.props.auth.isAuthenticated) {
        return <Redirect to="/login" />;
      } else {
        return <ChildComponent {...props} />
      }
    }} />
  }

  render() {
    let {PrivateRoute} = this;

    return (
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path='/' component={TripPinPoints} />
          <Route exact path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadUser: () => {
      return dispatch(auth.loadUser());
    }
  }
}

let RootContainer = connect(mapStateToProps, mapDispatchToProps)(RootContainerComponent);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}