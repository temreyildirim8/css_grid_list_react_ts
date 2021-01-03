// tslint:disable: jsx-no-lambda

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' component={Dashboard} exact={true} />
        <Route path='/default' render={() => <Redirect to='/' />} />
      </Switch>
    </div>
  );
}

export default App;
